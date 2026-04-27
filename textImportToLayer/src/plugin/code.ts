figma.showUI(__html__, { width: 400, height: 620, title: 'textImportToLayer' })

type SourceOption =
  | { id: string; kind: 'property'; key: string; preview: string; sourceText: string }
  | { id: string; kind: 'text'; nodeId: string; preview: string; sourceText: string }

type CollectionInfo = {
  id: string
  name: string
  modes: { modeId: string; name: string }[]
}

type UiToPlugin =
  | { type: 'get-context' }
  | { type: 'translate-for-name'; text: string }
  | {
      type: 'apply'
      sourceId: string
      targetMode: 'label' | 'value'
      variableNameInput: string
      collectionChoice: 'existing' | 'new'
      collectionId?: string
      newCollectionName?: string
    }

async function translateWithMyMemory(text: string): Promise<string> {
  const q = text.trim()
  if (!q) return ''

  const url =
    'https://api.mymemory.translated.net/get' +
    `?q=${encodeURIComponent(q)}&langpair=ko|en`

  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('MyMemory 번역 요청 실패. 네트워크/도메인 허용을 확인해주세요.')
  }

  const data: any = await res.json()
  const status = data?.responseStatus
  const ok = status === 200 || status === '200'
  const translated = String(data?.responseData?.translatedText ?? '').trim()

  if (!ok) {
    const detail = String(data?.responseDetails ?? data?.quotaFinished ?? '').trim()
    throw new Error(
      detail ? `MyMemory: ${detail}` : 'MyMemory 번역에 실패했습니다. 할당량 초과일 수 있습니다.',
    )
  }
  if (!translated) throw new Error('MyMemory가 빈 번역을 반환했습니다.')
  return translated
}

function toCamelCaseVariableName(text: string): string {
  const cleaned = text
    .trim()
    .toLowerCase()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()

  const parts = cleaned.split(/\s+/).filter(Boolean)
  if (parts.length === 0) return 'variable'
  const [first, ...rest] = parts
  return first + rest.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('')
}

function normalizeVariableName(name: string): string {
  const t = name.trim()
  if (!t) return 'variable'
  return toCamelCaseVariableName(t)
}

/** 레이어 이름 기준 (대소문자 무시): cell-header, cell-Body 등 → cell-body 로 통일해 매칭 */
const CELL_LAYER_NAMES = new Set(['cell-header', 'cell-body'])

function isCellNamedLayer(node: BaseNode): boolean {
  return CELL_LAYER_NAMES.has(node.name.trim().toLowerCase())
}

/** 텍스트 노드가 cell-header / cell-body 조상 안에 있는지 */
function textNodeIsInsideCellLayer(text: TextNode): boolean {
  let p: BaseNode | null = text.parent
  while (p && p.type !== 'PAGE' && p.type !== 'DOCUMENT') {
    if (isCellNamedLayer(p)) return true
    p = p.parent
  }
  return false
}

/**
 * 선택 범위 안에서 이름이 cell-header | cell-body 인 컨테이너 하위의 TEXT만 수집
 */
function findTextNodesInCellLayers(root: SceneNode): TextNode[] {
  if (root.type === 'TEXT') {
    return textNodeIsInsideCellLayer(root) ? [root] : []
  }

  if (!('findAll' in root)) return []

  const frame = root as FrameNode
  const containers: SceneNode[] = []

  if (isCellNamedLayer(root)) {
    containers.push(root)
  }

  const matched = frame.findAll((n): n is SceneNode => n !== root && isCellNamedLayer(n))
  containers.push(...matched)

  const out: TextNode[] = []
  const seen = new Set<string>()

  for (const c of containers) {
    if (!('findAll' in c)) continue
    const texts = (c as FrameNode).findAll((n): n is TextNode => n.type === 'TEXT')
    for (const t of texts) {
      if (seen.has(t.id)) continue
      seen.add(t.id)
      out.push(t)
    }
  }

  return out
}

function extractInstanceTextProps(inst: InstanceNode): { key: string; value: string }[] {
  const props = inst.componentProperties
  if (!props) return []
  const out: { key: string; value: string }[] = []
  for (const key of Object.keys(props)) {
    const p = props[key]
    if (p.type === 'TEXT') {
      out.push({ key, value: String(p.value) })
    }
  }
  return out
}

async function loadFontsForTextNode(node: TextNode): Promise<void> {
  if (node.fontName === figma.mixed) {
    const segments = node.getStyledTextSegments(['fontName'])
    const seen = new Set<string>()
    for (const seg of segments) {
      const fn = seg.fontName
      const k = `${fn.family}::${fn.style}`
      if (seen.has(k)) continue
      seen.add(k)
      await figma.loadFontAsync(fn)
    }
    return
  }
  await figma.loadFontAsync(node.fontName)
}

function buildSourceOptions(node: SceneNode): SourceOption[] {
  if (node.type === 'INSTANCE') {
    const props = extractInstanceTextProps(node)
    if (props.length > 0) {
      return props.map((p) => ({
        id: `prop:${p.key}`,
        kind: 'property',
        key: p.key,
        sourceText: p.value,
        preview: p.value.length > 80 ? `${p.value.slice(0, 80)}…` : p.value,
      }))
    }
  }
  const texts = findTextNodesInCellLayers(node)
  return texts.map((t) => ({
    id: `text:${t.id}`,
    kind: 'text',
    nodeId: t.id,
    sourceText: t.characters,
    preview: t.characters.length > 80 ? `${t.characters.slice(0, 80)}…` : t.characters,
  }))
}

async function getSourceText(node: SceneNode, opt: SourceOption): Promise<string> {
  if (opt.kind === 'property') {
    if (node.type !== 'INSTANCE') throw new Error('텍스트 프로퍼티는 인스턴스에서만 사용할 수 있습니다.')
    const p = node.componentProperties[opt.key]
    if (!p || p.type !== 'TEXT') throw new Error('텍스트 프로퍼티를 찾을 수 없습니다.')
    return String(p.value)
  }
  const tn = (await figma.getNodeByIdAsync(opt.nodeId)) as TextNode | null
  if (!tn || tn.type !== 'TEXT') throw new Error('텍스트 노드를 찾을 수 없습니다.')
  await loadFontsForTextNode(tn)
  return tn.characters
}

async function resolveLabelValueModes(
  col: VariableCollection,
): Promise<{ labelId: string; valueId: string }> {
  let labelId = col.modes.find((m) => m.name.toLowerCase() === 'label')?.modeId
  let valueId = col.modes.find((m) => m.name.toLowerCase() === 'value')?.modeId

  if (labelId && valueId) return { labelId, valueId }

  if (col.modes.length >= 2) {
    const a = col.modes[0].modeId
    const b = col.modes[1].modeId
    return {
      labelId: labelId ?? a,
      valueId: valueId ?? (labelId === a ? b : a),
    }
  }

  if (col.modes.length === 1) {
    const only = col.modes[0].modeId
    if (!labelId) labelId = only
    if (!valueId) valueId = col.addMode('value')
    return { labelId, valueId }
  }

  throw new Error('변수 콜렉션 모드를 확인할 수 없습니다.')
}

async function uniqueVariableNameInCollection(
  collection: VariableCollection,
  baseRaw: string,
): Promise<string> {
  const base = normalizeVariableName(baseRaw)
  const used = new Set<string>()

  for (const vid of collection.variableIds) {
    const v = await figma.variables.getVariableByIdAsync(vid)
    if (!v || v.resolvedType !== 'STRING') continue
    used.add(v.name)
  }

  let candidate = base
  let i = 2
  while (used.has(candidate)) {
    candidate = `${base}${i}`
    i += 1
  }
  return candidate
}

async function getCollectionsPayload(): Promise<CollectionInfo[]> {
  const cols = await figma.variables.getLocalVariableCollectionsAsync()
  return cols
    .filter((c) => !c.remote)
    .map((c) => ({
      id: c.id,
      name: c.name,
      modes: c.modes.map((m) => ({ modeId: m.modeId, name: m.name })),
    }))
}

function postContext() {
  const sel = figma.currentPage.selection
  if (sel.length !== 1) {
    figma.ui.postMessage({
      type: 'context',
      ok: false,
      message: '레이어를 하나만 선택해주세요.',
      selectionName: '',
      options: [] as SourceOption[],
      collections: [] as CollectionInfo[],
    })
    return
  }

  const node = sel[0]
  const options = buildSourceOptions(node)
  if (options.length === 0) {
    figma.ui.postMessage({
      type: 'context',
      ok: false,
      message:
        'STRING 텍스트 프로퍼티가 없고, cell-header / cell-body 안의 텍스트 레이어도 없습니다.',
      selectionName: node.name,
      options: [] as SourceOption[],
      collections: [] as CollectionInfo[],
    })
    return
  }

  void getCollectionsPayload().then((collections) => {
    figma.ui.postMessage({
      type: 'context',
      ok: true,
      message: '',
      selectionName: node.name,
      options,
      collections,
    })
  })
}

figma.on('selectionchange', postContext)

figma.ui.onmessage = async (msg: UiToPlugin) => {
  try {
    if (msg.type === 'get-context') {
      postContext()
      return
    }

    if (msg.type === 'translate-for-name') {
      const translated = await translateWithMyMemory(msg.text)
      const camel = normalizeVariableName(translated || msg.text)
      figma.ui.postMessage({ type: 'translated-name', camel, rawTranslated: translated })
      return
    }

    if (msg.type === 'apply') {
      const sel = figma.currentPage.selection
      if (sel.length !== 1) throw new Error('레이어를 하나만 선택해주세요.')
      const node = sel[0]

      const opt = buildSourceOptions(node).find((o) => o.id === msg.sourceId)
      if (!opt) throw new Error('소스 선택이 유효하지 않습니다. 선택을 다시 확인해주세요.')

      const sourceText = await getSourceText(node, opt)

      let collection: VariableCollection
      if (msg.collectionChoice === 'new') {
        const n = (msg.newCollectionName ?? '').trim()
        if (!n) throw new Error('새 콜렉션 이름을 입력해주세요.')
        collection = figma.variables.createVariableCollection(n)
        collection.renameMode(collection.defaultModeId, 'label')
        collection.addMode('value')
      } else {
        const id = msg.collectionId
        if (!id) throw new Error('콜렉션을 선택해주세요.')
        const cols = await figma.variables.getLocalVariableCollectionsAsync()
        const found = cols.find((c) => c.id === id)
        if (!found) throw new Error('콜렉션을 찾을 수 없습니다.')
        collection = found
      }

      const { labelId, valueId } = await resolveLabelValueModes(collection)

      const labelValue = msg.targetMode === 'label' ? sourceText : ''
      const valueValue = msg.targetMode === 'value' ? sourceText : ''

      const nameSeed =
        normalizeVariableName(msg.variableNameInput) || normalizeVariableName(sourceText)
      const finalName = await uniqueVariableNameInCollection(collection, nameSeed)

      const variable = figma.variables.createVariable(finalName, collection, 'STRING')
      variable.setValueForMode(labelId, labelValue)
      variable.setValueForMode(valueId, valueValue)

      let bound = false
      if (opt.kind === 'property' && node.type === 'INSTANCE') {
        const alias = figma.variables.createVariableAlias(variable)
        node.setProperties({ [opt.key]: alias })
        bound = true
        figma.notify(`변수 "${finalName}" 생성 및 연결 완료`)
      } else if (opt.kind === 'text') {
        figma.notify(
          `변수 "${finalName}" 을(를) 만들었습니다. 일반 텍스트 레이어는 API로 문자열 변수를 자동 연결할 수 없습니다.`,
          { timeout: 6_000 },
        )
      }

      figma.ui.postMessage({ type: 'apply-done', variableName: finalName, bound })

      postContext()
      return
    }
  } catch (e) {
    const message = e instanceof Error ? e.message : '알 수 없는 오류입니다.'
    figma.ui.postMessage({ type: 'error', message })
    figma.notify(message, { error: true })
  }
}

postContext()
