figma.showUI(__html__, { width: 350, height: 520, title: 'varToComponent' })

// ── Types ──────────────────────────────────────────────────────────────────────

interface ModeInfo { modeId: string; name: string }

interface CollectionData {
  id: string
  name: string
  variableCount: number
  modes: ModeInfo[]
}

interface PropertyInfo {
  name: string        // 프로퍼티 키 (원본 그대로)
  instanceName: string
}

interface ComponentData {
  name: string
  properties: PropertyInfo[]
}

interface Mapping {
  propertyName: string
  modeId: string
}

// ── Helpers ────────────────────────────────────────────────────────────────────

function extractTextProps(
  targets: (InstanceNode | ComponentNode)[],
): PropertyInfo[] {
  const result: PropertyInfo[] = []
  const seen = new Set<string>()

  for (const t of targets) {
    const props =
      t.type === 'INSTANCE'
        ? t.componentProperties
        : t.componentPropertyDefinitions
    if (!props) continue

    for (const name of Object.keys(props)) {
      if (props[name].type !== 'TEXT') continue
      const key = `${t.name}::${name}`
      if (!seen.has(key)) {
        seen.add(key)
        result.push({ name, instanceName: t.name })
      }
    }
  }
  return result
}

function formatValue(value: VariableValue | undefined): string {
  if (value === undefined || value === null) return ''
  if (typeof value === 'string') return value
  if (typeof value === 'number') return String(value)
  if (typeof value === 'boolean') return String(value)
  if (typeof value === 'object' && 'r' in value) {
    const c = value as RGBA
    const hex = (n: number) => Math.round(n * 255).toString(16).padStart(2, '0')
    return `#${hex(c.r)}${hex(c.g)}${hex(c.b)}`.toUpperCase()
  }
  return JSON.stringify(value)
}

// propKey: "Name#nodeId" 형식 또는 단순 이름
// 인스턴스의 componentProperties에서 일치하는 실제 키 반환
function resolveKey(
  componentProperties: ComponentProperties,
  propName: string,
): string | undefined {
  return Object.keys(componentProperties).find(
    k => k === propName || k.startsWith(`${propName}#`),
  )
}

// ── Init Data ─────────────────────────────────────────────────────────────────

async function sendInitData() {
  try {
    const selection = figma.currentPage.selection[0]
    let compData: ComponentData | null = null

    if (selection) {
      // 선택한 레이어 자체 + 직속 자식 인스턴스에서만 프로퍼티 탐색
      const targets: (InstanceNode | ComponentNode)[] = []

      if (selection.type === 'INSTANCE' || selection.type === 'COMPONENT') {
        targets.push(selection)
      } else if ('children' in selection) {
        for (const child of (selection as ChildrenMixin).children) {
          if (child.type === 'INSTANCE' || child.type === 'COMPONENT') {
            targets.push(child)
          }
        }
      }

      compData = {
        name: selection.name,
        properties: extractTextProps(targets),
      }
    }

    const localCollections = await figma.variables.getLocalVariableCollectionsAsync()
    const colData: CollectionData[] = localCollections.map(c => ({
      id: c.id,
      name: c.name,
      variableCount: c.variableIds.length,
      modes: c.modes.map(m => ({ modeId: m.modeId, name: m.name })),
    }))

    figma.ui.postMessage({ type: 'init-data', component: compData, collections: colData })
  } catch (err) {
    console.error('데이터 전송 중 에러:', err)
  }
}

figma.on('selectionchange', sendInitData)
setTimeout(sendInitData, 100)

// ── Generate ──────────────────────────────────────────────────────────────────

figma.ui.onmessage = async (msg: {
  type: string
  data?: { collectionId: string; mappings: Mapping[] }
}) => {
  if (msg.type !== 'generate' || !msg.data) return

  const { collectionId, mappings } = msg.data
  const selection = figma.currentPage.selection[0]

  if (!selection) { figma.notify('대상을 선택해주세요.'); return }

  const collection = await figma.variables.getVariableCollectionByIdAsync(collectionId)
  if (!collection) { figma.notify('콜렉션을 찾을 수 없습니다.'); return }

  const variableIds = collection.variableIds
  const generatedNodes: SceneNode[] = []
  let currentY = selection.y + selection.height + 20

  for (const varId of variableIds) {
    const variable = await figma.variables.getVariableByIdAsync(varId)
    if (!variable) continue

    const clone = selection.clone()
    clone.x = selection.x
    clone.y = currentY
    currentY += clone.height + 16
    figma.currentPage.appendChild(clone)
    generatedNodes.push(clone)

    // 선택한 레이어가 인스턴스인 경우: clone에 직접 매핑
    if (clone.type === 'INSTANCE') {
      const inst = clone as InstanceNode
      applyMappings(inst, mappings, variable)
    }

    // 선택한 레이어가 프레임/그룹인 경우: 직속 자식 인스턴스에 매핑
    else if ('children' in clone) {
      for (const child of (clone as ChildrenMixin).children) {
        if (child.type === 'INSTANCE') {
          applyMappings(child, mappings, variable)
        }
      }
    }
  }

  figma.currentPage.selection = generatedNodes
  figma.viewport.scrollAndZoomIntoView(generatedNodes)
  figma.notify(`✅ ${generatedNodes.length}개 생성 완료!`)
}

// 하나의 인스턴스에 매핑 정보대로 변수 값을 프로퍼티에 적용
function applyMappings(
  inst: InstanceNode,
  mappings: Mapping[],
  variable: Variable,
) {
  if (!inst.componentProperties) return

  const updates: Record<string, string> = {}

  for (const mapping of mappings) {
    const key = resolveKey(inst.componentProperties, mapping.propertyName)
    if (!key) continue

    // 선택한 모드의 변수 값을 문자열로 변환해 프로퍼티에 적용
    const modeValue = variable.valuesByMode[mapping.modeId]
    updates[key] = formatValue(modeValue)
  }

  if (Object.keys(updates).length > 0) {
    try {
      inst.setProperties(updates)
    } catch (e) {
      console.error('프로퍼티 설정 에러:', e)
    }
  }
}
