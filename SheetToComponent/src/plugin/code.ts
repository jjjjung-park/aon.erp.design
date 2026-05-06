figma.showUI(__html__, { width: 420, height: 620, title: 'SheetToComponent' })

// ── Types ──────────────────────────────────────────────────────────────────────

type SheetRow = {
  tabTitle: string
  rowNumber: number // 2부터 시작 (헤더 제외)
  name: string
  type: string
  label: string
  value: string
  description: string
}

type SelectionInfo = {
  nodeId: string
  name: string
  kind: 'INSTANCE' | 'COMPONENT' | 'CONTAINER' | 'UNSUPPORTED'
  textProperties: { name: string }[]
}

type UiToPluginMessage =
  | { type: 'get-selection' }
  | { type: 'get-settings' }
  | { type: 'clear-recent-urls' }
  | { type: 'list-tabs'; url: string; apiKey: string }
  | { type: 'load-tab-rows'; url: string; apiKey: string; tabTitle: string }
  | { type: 'search'; url: string; apiKey: string; keyword: string; tabTitle?: string }
  | {
      type: 'connect-and-generate'
      url: string
      apiKey: string
      keywordRows: SheetRow[]
      tabScope?: string
      /** 복제 인스턴스 나열: 아래로 | 오른쪽으로 (미지정 시 아래) */
      generateLayout?: 'below' | 'right'
    }
  | { type: 'close' }

type PluginToUiMessage =
  | { type: 'selection'; selection: SelectionInfo | null }
  | { type: 'settings'; apiKey: string; recentUrls: string[] }
  | { type: 'tabs'; tabs: { sheetId: number; title: string }[] }
  | { type: 'tab-rows'; tabTitle: string; rows: SheetRow[] }
  | { type: 'search-results'; keyword: string; rows: SheetRow[] }
  | { type: 'done'; created: number }
  | { type: 'error'; message: string }

// ── Settings (clientStorage) ────────────────────────────────────────────────────

type Settings = {
  apiKey: string
  recentUrls: string[]
}

const STORAGE_KEYS = {
  apiKey: 'SheetToComponent.apiKey',
  recentUrls: 'SheetToComponent.recentUrls',
} as const

async function readSettings(): Promise<Settings> {
  const apiKey = (await figma.clientStorage.getAsync(STORAGE_KEYS.apiKey)) as string | undefined
  const recentUrls = (await figma.clientStorage.getAsync(STORAGE_KEYS.recentUrls)) as string[] | undefined
  return {
    apiKey: typeof apiKey === 'string' ? apiKey : '',
    recentUrls: Array.isArray(recentUrls) ? recentUrls.filter((u) => typeof u === 'string') : [],
  }
}

async function writeSettings(patch: Partial<Settings>): Promise<void> {
  const current = await readSettings()
  const next: Settings = {
    apiKey: patch.apiKey ?? current.apiKey,
    recentUrls: patch.recentUrls ?? current.recentUrls,
  }
  await figma.clientStorage.setAsync(STORAGE_KEYS.apiKey, next.apiKey)
  await figma.clientStorage.setAsync(STORAGE_KEYS.recentUrls, next.recentUrls)
}

function addRecentUrl(recentUrls: string[], url: string): string[] {
  const u = url.trim()
  if (!u) return recentUrls
  const deduped = [u, ...recentUrls.filter((x) => x !== u)]
  return deduped.slice(0, 10)
}

// ── Google Sheets helpers ──────────────────────────────────────────────────────

function parseSpreadsheetId(url: string): string | null {
  const match = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/)
  return match?.[1] ?? null
}

type SheetTab = { sheetId: number; title: string }

async function fetchSheetTabs(spreadsheetId: string, apiKey: string): Promise<SheetTab[]> {
  const url =
    `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(spreadsheetId)}` +
    `?fields=sheets(properties(sheetId,title,index))&key=${encodeURIComponent(apiKey)}`

  const res = await fetch(url)
  if (!res.ok) throw new Error('탭 목록을 가져오지 못했습니다. API Key/권한/도메인 허용을 확인해주세요.')
  const data: any = await res.json()
  const sheets: any[] = Array.isArray(data?.sheets) ? data.sheets : []
  return sheets
    .map((s) => s?.properties)
    .filter(Boolean)
    .map((p) => ({ sheetId: Number(p.sheetId), title: String(p.title) }))
}

function parseRowsFromValues(values: string[][], tabTitle: string): Omit<SheetRow, 'tabTitle' | 'rowNumber'>[] {
  if (!values.length) return []
  const headers = values[0].map((v) => String(v ?? '').trim().toLowerCase())
  const nameIndex = headers.indexOf('name')
  const typeIndex = headers.indexOf('type')
  const labelIndex = headers.indexOf('label')
  const valueIndex = headers.indexOf('value')
  const descIndex = headers.indexOf('description')

  if (nameIndex < 0 || typeIndex < 0 || labelIndex < 0 || valueIndex < 0) {
    throw new Error('첫 번째 행에서 name, type, label, value 헤더를 찾지 못했습니다.')
  }

  return values
    .slice(1)
    .map((row) => ({
      name: String(row[nameIndex] ?? '').trim(),
      type: String(row[typeIndex] ?? '').trim(),
      label: String(row[labelIndex] ?? '').trim(),
      value: String(row[valueIndex] ?? '').trim(),
      description: descIndex >= 0 ? String(row[descIndex] ?? '').trim() : '',
    }))
    .filter((r) => r.name.length > 0 || r.label.length > 0)
}

async function fetchSheetRowsByTabTitle(
  spreadsheetId: string,
  apiKey: string,
  tabTitle: string,
): Promise<SheetRow[]> {
  // description까지 포함하도록 A:E (최소)로 읽기
  const range = `${tabTitle}!A:E`
  const url =
    `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(spreadsheetId)}` +
    `/values/${encodeURIComponent(range)}` +
    `?valueRenderOption=UNFORMATTED_VALUE&key=${encodeURIComponent(apiKey)}`

  const res = await fetch(url)
  if (!res.ok) throw new Error('시트 데이터를 가져오지 못했습니다. URL/탭 이름/권한을 확인해주세요.')
  const data: any = await res.json()
  const values: unknown[][] = Array.isArray(data?.values) ? data.values : []
  const str = values.map((r) => r.map((v) => String(v ?? '')))
  const parsed = parseRowsFromValues(str, tabTitle)
  return parsed.map((r, idx) => ({
    tabTitle,
    rowNumber: idx + 2,
    ...r,
  }))
}

function rowMatchesKeyword(row: SheetRow, keyword: string): boolean {
  const k = keyword.trim().toLowerCase()
  if (!k) return false
  const hay = [
    row.name,
    row.type,
    row.label,
    row.value,
    row.description,
    row.tabTitle,
  ]
    .join(' ')
    .toLowerCase()
  return hay.includes(k)
}

// ── Selection helpers ──────────────────────────────────────────────────────────

function extractTextPropNames(targets: (InstanceNode | ComponentNode)[]): { name: string }[] {
  const out: { name: string }[] = []
  const seen = new Set<string>()

  for (const t of targets) {
    const props = t.type === 'INSTANCE' ? t.componentProperties : t.componentPropertyDefinitions
    if (!props) continue
    for (const propName of Object.keys(props)) {
      const def: any = (props as any)[propName]
      if (!def || def.type !== 'TEXT') continue
      const key = propName
      if (seen.has(key)) continue
      seen.add(key)
      out.push({ name: propName.split('#')[0] })
    }
  }
  return out
}

function getSelectionInfo(): SelectionInfo | null {
  const selection = figma.currentPage.selection[0]
  if (!selection) return null

  const targets: (InstanceNode | ComponentNode)[] = []

  if (selection.type === 'INSTANCE' || selection.type === 'COMPONENT') {
    targets.push(selection)
  } else if ('children' in selection) {
    for (const child of (selection as ChildrenMixin).children) {
      if (child.type === 'INSTANCE' || child.type === 'COMPONENT') targets.push(child)
    }
  }

  const kind: SelectionInfo['kind'] =
    selection.type === 'INSTANCE'
      ? 'INSTANCE'
      : selection.type === 'COMPONENT'
        ? 'COMPONENT'
        : 'children' in selection
          ? 'CONTAINER'
          : 'UNSUPPORTED'

  return {
    nodeId: selection.id,
    name: selection.name,
    kind,
    textProperties: extractTextPropNames(targets),
  }
}

// propKey: "Name#nodeId" 형식 또는 단순 이름 → 실제 키 찾아서 setProperties에 사용
function resolveKey(componentProperties: ComponentProperties, propName: string): string | undefined {
  return Object.keys(componentProperties).find((k) => k === propName || k.startsWith(`${propName}#`))
}

function normalizePropKeyBase(s: string): string {
  return String(s ?? '').split('#')[0].trim().toLowerCase()
}

function resolveKeyByBaseName(
  componentProperties: ComponentProperties,
  baseName: 'label' | 'value' | 'description',
): string | undefined {
  const want = baseName.toLowerCase()
  return Object.keys(componentProperties).find((k) => normalizePropKeyBase(k) === want)
}

function hasAnyMatchingSheetPropsInInstance(inst: InstanceNode): boolean {
  if (!inst.componentProperties) return false
  return (
    !!resolveKeyByBaseName(inst.componentProperties, 'label') ||
    !!resolveKeyByBaseName(inst.componentProperties, 'value') ||
    !!resolveKeyByBaseName(inst.componentProperties, 'description')
  )
}

function selectionHasAnyMatchingSheetProps(selection: SceneNode): boolean {
  if (selection.type === 'INSTANCE') return hasAnyMatchingSheetPropsInInstance(selection)
  if ('children' in selection) {
    for (const child of (selection as ChildrenMixin).children) {
      if (child.type === 'INSTANCE' && hasAnyMatchingSheetPropsInInstance(child)) return true
    }
  }
  return false
}

function applyRowToInstance(
  inst: InstanceNode,
  row: SheetRow,
) {
  if (!inst.componentProperties) return
  const updates: Record<string, string> = {}

  const labelKey = resolveKeyByBaseName(inst.componentProperties, 'label')
  const valueKey = resolveKeyByBaseName(inst.componentProperties, 'value')
  const descKey = resolveKeyByBaseName(inst.componentProperties, 'description')

  if (labelKey) updates[labelKey] = row.label
  if (valueKey) updates[valueKey] = row.value
  if (descKey) updates[descKey] = row.description

  if (Object.keys(updates).length > 0) inst.setProperties(updates)
}

function applyRowToSelectionClone(
  clone: SceneNode,
  row: SheetRow,
) {
  if (clone.type === 'INSTANCE') {
    applyRowToInstance(clone, row)
    return
  }
  if ('children' in clone) {
    for (const child of (clone as ChildrenMixin).children) {
      if (child.type === 'INSTANCE') applyRowToInstance(child, row)
    }
  }
}

function sendSelection() {
  const info = getSelectionInfo()
  const out: PluginToUiMessage = { type: 'selection', selection: info }
  figma.ui.postMessage(out)
}

figma.on('selectionchange', sendSelection)
setTimeout(sendSelection, 100)

// ── Message handler ────────────────────────────────────────────────────────────

figma.ui.onmessage = async (msg: UiToPluginMessage) => {
  try {
    if (msg.type === 'close') {
      figma.closePlugin()
      return
    }

    if (msg.type === 'get-selection') {
      sendSelection()
      return
    }

    if (msg.type === 'get-settings') {
      const settings = await readSettings()
      figma.ui.postMessage({ type: 'settings', ...settings } satisfies PluginToUiMessage)
      return
    }

    if (msg.type === 'clear-recent-urls') {
      await writeSettings({ recentUrls: [] })
      figma.ui.postMessage({ type: 'settings', ...(await readSettings()) } satisfies PluginToUiMessage)
      return
    }

    if (msg.type === 'list-tabs') {
      const spreadsheetId = parseSpreadsheetId(msg.url)
      if (!spreadsheetId) throw new Error('유효한 구글 시트 URL을 입력해주세요.')
      if (!msg.apiKey.trim()) throw new Error('Google API Key를 입력해주세요.')

      const prev = await readSettings()
      await writeSettings({
        apiKey: msg.apiKey,
        recentUrls: addRecentUrl(prev.recentUrls, msg.url),
      })

      const tabs = await fetchSheetTabs(spreadsheetId, msg.apiKey)
      figma.ui.postMessage({ type: 'tabs', tabs } satisfies PluginToUiMessage)
      return
    }

    if (msg.type === 'load-tab-rows') {
      const spreadsheetId = parseSpreadsheetId(msg.url)
      if (!spreadsheetId) throw new Error('유효한 구글 시트 URL을 입력해주세요.')
      if (!msg.apiKey.trim()) throw new Error('Google API Key를 입력해주세요.')
      if (!msg.tabTitle.trim()) throw new Error('탭을 선택해주세요.')

      const prev = await readSettings()
      await writeSettings({
        apiKey: msg.apiKey,
        recentUrls: addRecentUrl(prev.recentUrls, msg.url),
      })

      const rows = await fetchSheetRowsByTabTitle(spreadsheetId, msg.apiKey, msg.tabTitle.trim())
      figma.ui.postMessage({ type: 'tab-rows', tabTitle: msg.tabTitle.trim(), rows } satisfies PluginToUiMessage)
      return
    }

    if (msg.type === 'search') {
      const spreadsheetId = parseSpreadsheetId(msg.url)
      if (!spreadsheetId) throw new Error('유효한 구글 시트 URL을 입력해주세요.')
      if (!msg.apiKey.trim()) throw new Error('Google API Key를 입력해주세요.')
      const keyword = msg.keyword.trim()
      if (!keyword) throw new Error('검색 키워드를 입력해주세요.')

      const prev = await readSettings()
      await writeSettings({
        apiKey: msg.apiKey,
        recentUrls: addRecentUrl(prev.recentUrls, msg.url),
      })

      let tabs: SheetTab[] = []
      if (msg.tabTitle && msg.tabTitle.trim()) {
        tabs = [{ sheetId: -1, title: msg.tabTitle.trim() }]
      } else {
        tabs = await fetchSheetTabs(spreadsheetId, msg.apiKey)
      }

      const rows: SheetRow[] = []
      for (const t of tabs) {
        const tabRows = await fetchSheetRowsByTabTitle(spreadsheetId, msg.apiKey, t.title)
        for (const r of tabRows) {
          if (rowMatchesKeyword(r, keyword)) rows.push(r)
        }
      }

      figma.ui.postMessage({ type: 'search-results', keyword, rows } satisfies PluginToUiMessage)
      return
    }

    if (msg.type === 'connect-and-generate') {
      const selection = figma.currentPage.selection[0]
      if (!selection) throw new Error('인스턴스(또는 레이어)를 선택해주세요.')
      if (!Array.isArray(msg.keywordRows) || msg.keywordRows.length === 0) {
        throw new Error('연결할 키워드를 선택해주세요.')
      }
      if (!selectionHasAnyMatchingSheetProps(selection)) {
        throw new Error('일치하는 프로퍼티가 없습니다')
      }

      const prev = await readSettings()
      await writeSettings({
        apiKey: msg.apiKey,
        recentUrls: addRecentUrl(prev.recentUrls, msg.url),
      })

      const layout = msg.generateLayout === 'right' ? 'right' : 'below'
      const gap = 20
      const spacing = 16
      const generated: SceneNode[] = []

      if (layout === 'right') {
        let currentX = selection.x + selection.width + gap
        for (const row of msg.keywordRows) {
          const clone = selection.clone()
          clone.x = currentX
          clone.y = selection.y
          currentX += clone.width + spacing
          figma.currentPage.appendChild(clone)
          applyRowToSelectionClone(clone, row)
          generated.push(clone)
        }
      } else {
        let currentY = selection.y + selection.height + gap
        for (const row of msg.keywordRows) {
          const clone = selection.clone()
          clone.x = selection.x
          clone.y = currentY
          currentY += clone.height + spacing
          figma.currentPage.appendChild(clone)
          applyRowToSelectionClone(clone, row)
          generated.push(clone)
        }
      }

      figma.currentPage.selection = generated
      figma.viewport.scrollAndZoomIntoView(generated)
      figma.notify(`✅ ${generated.length}개 생성 및 연결 완료!`)
      figma.ui.postMessage({ type: 'done', created: generated.length } satisfies PluginToUiMessage)
      return
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : '알 수 없는 에러가 발생했습니다.'
    figma.notify(message, { error: true })
    figma.ui.postMessage({ type: 'error', message } satisfies PluginToUiMessage)
  }
}

