figma.showUI(__html__, { width: 400, height: 600, title: 'Auto History' })

// ── Types ──────────────────────────────────────────────────────────────────

type ChangeType = 'flow' | 'data' | 'ui'

type HistoryFrame = {
  nodeId: string
  name: string
  link: string
}

type HistoryEntry = {
  version: number
  date: string
  author: string
  changeType: ChangeType
  prevContent: string
  nextContent: string
  frames: HistoryFrame[]
}

type Settings = {
  authorName: string
  historyLayerName: string
  currentVersion: number
}

type SelectionPreview = {
  count: number
  frames: Array<{ nodeId: string; name: string }>
}

type UiToPluginMessage =
  | { type: 'get-settings' }
  | { type: 'save-settings'; authorName: string; historyLayerName: string }
  | { type: 'get-selection-preview' }
  | {
      type: 'register'
      prevContent: string
      nextContent: string
      changeType: ChangeType
      authorName: string
    }
  | { type: 'get-history' }
  | { type: 'reset-history' }
  | { type: 'navigate-to-frame'; nodeId: string }
  | { type: 'navigate-to-version'; nodeIds: string[] }
  | { type: 'close' }

type PluginToUiMessage =
  | { type: 'settings'; authorName: string; historyLayerName: string; currentVersion: number }
  | { type: 'selection-preview'; preview: SelectionPreview }
  | { type: 'register-done'; newVersion: number; count: number }
  | { type: 'history'; entries: HistoryEntry[] }
  | { type: 'settings-saved' }
  | { type: 'error'; message: string }

// ── Storage ────────────────────────────────────────────────────────────────

const STORAGE_KEYS = {
  authorName: 'AutoHistory.authorName',
  historyLayerName: 'AutoHistory.historyLayerName',
  currentVersion: 'AutoHistory.currentVersion',
  history: 'AutoHistory.history',
} as const

async function readSettings(): Promise<Settings> {
  const authorName = (await figma.clientStorage.getAsync(STORAGE_KEYS.authorName)) as string | undefined
  const historyLayerName = (await figma.clientStorage.getAsync(STORAGE_KEYS.historyLayerName)) as
    | string
    | undefined
  const currentVersion = (await figma.clientStorage.getAsync(STORAGE_KEYS.currentVersion)) as number | undefined

  return {
    authorName: authorName ?? '',
    historyLayerName: historyLayerName ?? '이력관리',
    currentVersion: currentVersion ?? 0,
  }
}

async function writeSettings(patch: Partial<Settings>): Promise<void> {
  if (patch.authorName !== undefined) await figma.clientStorage.setAsync(STORAGE_KEYS.authorName, patch.authorName)
  if (patch.historyLayerName !== undefined)
    await figma.clientStorage.setAsync(STORAGE_KEYS.historyLayerName, patch.historyLayerName)
  if (patch.currentVersion !== undefined)
    await figma.clientStorage.setAsync(STORAGE_KEYS.currentVersion, patch.currentVersion)
}

function truncate(s: string, max: number): string {
  const t = s.replace(/\s+/g, ' ').trim()
  if (t.length <= max) return t
  return t.slice(0, max) + '…'
}

/**
 * 구 포맷(스캔·node 단위 diff) 이력을 현재 형식으로 느슨하게 이전한다.
 */
async function readHistory(): Promise<HistoryEntry[]> {
  const raw = await figma.clientStorage.getAsync(STORAGE_KEYS.history)
  if (!Array.isArray(raw)) return []

  return (raw as unknown[]).map((rawEntry) => {
    const e = rawEntry as Record<string, unknown> & {
      frames?: Array<Record<string, unknown>>
    }
    const framesRaw = e.frames ?? []

    const frames: HistoryFrame[] = framesRaw.map((f) => {
      const fr = f as Record<string, unknown>
      if (typeof fr.link === 'string' && typeof fr.nodeId === 'string') {
        return {
          nodeId: fr.nodeId,
          name: (fr.name as string) ?? '(이름 없음)',
          link: fr.link,
        }
      }
      const nodeId = (fr.contentNodeId ?? fr.nodeId ?? '') as string
      return {
        nodeId,
        name: (fr.sectionName ?? fr.frameName ?? '(이름 없음)') as string,
        link: '',
      }
    })

    const first = framesRaw[0] as Record<string, unknown> | undefined

    return {
      version: e.version as number,
      date: (e.date as string) ?? '',
      author: (e.author as string) ?? '',
      changeType: (e.changeType as ChangeType) ?? 'data',
      prevContent:
        (e.prevContent as string) ?? (first?.prevContent as string) ?? '',
      nextContent:
        (e.nextContent as string) ?? (first?.nextContent as string) ?? '',
      frames,
    }
  })
}

async function appendHistory(entry: HistoryEntry): Promise<void> {
  const prev = await readHistory()
  await figma.clientStorage.setAsync(STORAGE_KEYS.history, [entry, ...prev])
}

// ── 선택 / 링크 ────────────────────────────────────────────────────────────

function isTargetNode(n: SceneNode): boolean {
  return n.type === 'FRAME' || n.type === 'INSTANCE' || n.type === 'COMPONENT'
}

function collectSelectedTargets(): SceneNode[] {
  const out: SceneNode[] = []
  for (const n of figma.currentPage.selection) {
    if (isTargetNode(n)) out.push(n)
  }
  return out
}

function encodeNodeIdForUrl(nodeId: string): string {
  return nodeId.replace(/:/g, '-')
}

function buildFrameUrl(nodeId: string): string {
  const key = figma.fileKey
  if (!key) return ''
  return `https://www.figma.com/design/${key}?node-id=${encodeNodeIdForUrl(nodeId)}`
}

function buildSelectionPreview(): SelectionPreview {
  const nodes = collectSelectedTargets()
  return {
    count: nodes.length,
    frames: nodes.map((n) => ({ nodeId: n.id, name: n.name })),
  }
}

function resolveAuthor(fallback: string): string {
  const cu = figma.currentUser
  const fromProfile = cu && 'name' in cu && typeof (cu as { name?: string }).name === 'string'
    ? (cu as { name: string }).name.trim()
    : ''
  if (fromProfile) return fromProfile
  return fallback.trim() || '작성자 미확인'
}

// ── 폰트 ───────────────────────────────────────────────────────────────────

async function tryLoadFont(family: string, style: string): Promise<{ family: string; style: string } | null> {
  try {
    await figma.loadFontAsync({ family, style })
    return { family, style }
  } catch {
    return null
  }
}

async function loadAnyFont(): Promise<{ family: string; style: string } | null> {
  const candidates: Array<[string, string]> = [
    ['Inter', 'Bold'],
    ['Inter', 'Semi Bold'],
    ['Inter', 'Medium'],
    ['Roboto', 'Bold'],
    ['Inter', 'Regular'],
    ['Roboto', 'Regular'],
  ]
  for (const [f, s] of candidates) {
    const r = await tryLoadFont(f, s)
    if (r) return r
  }
  return null
}

// ── 배지 ───────────────────────────────────────────────────────────────────

const BADGE_PLUGIN_KEY = 'AutoHistory.badge'

async function placeBadgeOnNode(
  anchor: SceneNode,
  version: number,
  font: { family: string; style: string } | null,
): Promise<void> {
  const parent = anchor.parent
  if (!parent || !('appendChild' in parent)) return
  if (!('x' in anchor) || !('y' in anchor) || !('width' in anchor)) return

  const a = anchor as SceneNode & LayoutMixin

  const SIZE = 24

  const badge = figma.createFrame()
  badge.name = `v${version}`
  badge.setPluginData(BADGE_PLUGIN_KEY, '1')
  badge.resize(SIZE, SIZE)
  badge.cornerRadius = SIZE / 2
  badge.fills = [{ type: 'SOLID', color: { r: 1.0, g: 0.85, b: 0.0 } }]
  badge.strokes = [{ type: 'SOLID', color: { r: 0.6, g: 0.5, b: 0.0 } }]
  badge.strokeWeight = 1

  if (font) {
    const text = figma.createText()
    text.fontName = font
    text.characters = String(version)
    text.fontSize = 11
    text.fills = [{ type: 'SOLID', color: { r: 0.1, g: 0.1, b: 0.1 } }]
    text.textAlignHorizontal = 'CENTER'
    text.textAlignVertical = 'CENTER'
    text.resize(SIZE, SIZE)
    badge.appendChild(text)
  }

  let offsetIndex = 0
  if ('children' in parent) {
    for (const sib of (parent as ChildrenMixin).children) {
      if (sib.getPluginData && sib.getPluginData(BADGE_PLUGIN_KEY) === '1') {
        if ('x' in sib && 'y' in sib) {
          const sx = (sib as SceneNode & LayoutMixin).x
          const sy = (sib as SceneNode & LayoutMixin).y
          if (Math.abs(sy - (a.y - SIZE / 2)) < SIZE && sx >= a.x + a.width - SIZE && sx <= a.x + a.width + SIZE * 6) {
            offsetIndex++
          }
        }
      }
    }
  }

  ;(parent as ChildrenMixin).appendChild(badge)

  try {
    ;(badge as SceneNode & { layoutPositioning?: 'AUTO' | 'ABSOLUTE' }).layoutPositioning = 'ABSOLUTE'
  } catch {
    // ignore
  }

  badge.x = a.x + a.width - SIZE / 2 + offsetIndex * (SIZE + 2)
  badge.y = a.y - SIZE / 2
}

// ── 이력 레이어(한 줄 텍스트) ─────────────────────────────────────────────

function formatDate(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

const CHANGE_TYPE_LABEL: Record<ChangeType, string> = {
  flow: '동선변경',
  data: '데이터변경',
  ui: 'UI변경요청',
}

async function updateHistoryTable(
  page: PageNode,
  historyLayerName: string,
  entry: HistoryEntry,
  font: { family: string; style: string } | null,
): Promise<void> {
  const tableNode = page.findOne((n) => n.name === historyLayerName)
  if (!tableNode) return
  if (!font) return

  const names = entry.frames.map((f) => f.name).join(', ')
  const line = `v${entry.version} | ${CHANGE_TYPE_LABEL[entry.changeType]} | 이전:${truncate(entry.prevContent, 60)} | 변경:${truncate(entry.nextContent, 60)} | ${entry.author} | ${entry.date} | ${names}`

  const row = figma.createText()
  row.fontName = font
  row.characters = line
  row.name = `이력_v${entry.version}`
  row.fontSize = 12
  row.fills = [{ type: 'SOLID', color: { r: 0.1, g: 0.1, b: 0.1 } }]

  if ('x' in tableNode && 'y' in tableNode && 'height' in tableNode) {
    const t = tableNode as SceneNode & { x: number; y: number; height: number }
    row.x = t.x
    row.y = t.y + t.height + 4
  }

  page.appendChild(row)
}

// ── Messages ───────────────────────────────────────────────────────────────

figma.on('selectionchange', () => {
  figma.ui.postMessage({
    type: 'selection-preview',
    preview: buildSelectionPreview(),
  } satisfies PluginToUiMessage)
})

figma.ui.onmessage = async (msg: UiToPluginMessage) => {
  try {
    if (msg.type === 'close') {
      figma.closePlugin()
      return
    }

    if (msg.type === 'get-settings') {
      const settings = await readSettings()
      figma.ui.postMessage({ type: 'settings', ...settings } satisfies PluginToUiMessage)
      return
    }

    if (msg.type === 'save-settings') {
      await writeSettings({
        authorName: msg.authorName,
        historyLayerName: msg.historyLayerName,
      })
      figma.ui.postMessage({ type: 'settings-saved' } satisfies PluginToUiMessage)
      return
    }

    if (msg.type === 'get-selection-preview') {
      figma.ui.postMessage({
        type: 'selection-preview',
        preview: buildSelectionPreview(),
      } satisfies PluginToUiMessage)
      return
    }

    if (msg.type === 'get-history') {
      const entries = await readHistory()
      figma.ui.postMessage({ type: 'history', entries } satisfies PluginToUiMessage)
      return
    }

    if (msg.type === 'reset-history') {
      await figma.clientStorage.setAsync(STORAGE_KEYS.history, [])
      await writeSettings({ currentVersion: 0 })
      figma.notify('이력과 버전 번호가 초기화되었습니다.')
      const settings = await readSettings()
      figma.ui.postMessage({ type: 'settings', ...settings } satisfies PluginToUiMessage)
      figma.ui.postMessage({ type: 'history', entries: [] } satisfies PluginToUiMessage)
      return
    }

    if (msg.type === 'register') {
      const targets = collectSelectedTargets()
      if (targets.length === 0) {
        figma.ui.postMessage({
          type: 'error',
          message: '캔버스에서 프레임·컴포넌트·인스턴스를 하나 이상 선택한 뒤 등록하세요.',
        } satisfies PluginToUiMessage)
        return
      }

      const prevContent = msg.prevContent.trim()
      const nextContent = msg.nextContent.trim()
      if (!prevContent && !nextContent) {
        figma.ui.postMessage({
          type: 'error',
          message: '이전 내용 또는 변경 내용 중 하나는 입력해 주세요.',
        } satisfies PluginToUiMessage)
        return
      }

      const settings = await readSettings()
      const newVersion = settings.currentVersion + 1
      const date = formatDate()
      const author = resolveAuthor(msg.authorName)

      const frames: HistoryFrame[] = targets.map((n) => ({
        nodeId: n.id,
        name: n.name,
        link: buildFrameUrl(n.id),
      }))

      const entry: HistoryEntry = {
        version: newVersion,
        date,
        author,
        changeType: msg.changeType,
        prevContent: msg.prevContent,
        nextContent: msg.nextContent,
        frames,
      }

      const font = await loadAnyFont()

      for (const node of targets) {
        await placeBadgeOnNode(node, newVersion, font)
      }

      await updateHistoryTable(figma.currentPage, settings.historyLayerName, entry, font)
      await appendHistory(entry)
      await writeSettings({ currentVersion: newVersion })

      if (!figma.fileKey) {
        figma.notify('⚠ fileKey를 쓸 수 없어 링크는 비웠습니다. 프라이빗 플러그인·API 설정을 확인하세요.', {
          timeout: 8000,
          error: true,
        })
      }

      figma.notify(`✅ v${newVersion} 등록 완료 (${targets.length}개 프레임)`)

      figma.ui.postMessage({
        type: 'register-done',
        newVersion,
        count: targets.length,
      } satisfies PluginToUiMessage)
      return
    }

    if (msg.type === 'navigate-to-frame') {
      const node = await figma.getNodeByIdAsync(msg.nodeId)
      if (node && 'type' in node && node.type !== 'DOCUMENT' && node.type !== 'PAGE') {
        const sceneNode = node as SceneNode
        figma.currentPage.selection = [sceneNode]
        figma.viewport.scrollAndZoomIntoView([sceneNode])
      }
      return
    }

    if (msg.type === 'navigate-to-version') {
      const nodes: SceneNode[] = []
      for (const id of msg.nodeIds) {
        const node = await figma.getNodeByIdAsync(id)
        if (node && 'type' in node && node.type !== 'DOCUMENT' && node.type !== 'PAGE') {
          nodes.push(node as SceneNode)
        }
      }
      if (nodes.length > 0) {
        figma.currentPage.selection = nodes
        figma.viewport.scrollAndZoomIntoView(nodes)
      }
      return
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : '알 수 없는 에러가 발생했습니다.'
    figma.notify(message, { error: true })
    figma.ui.postMessage({ type: 'error', message } satisfies PluginToUiMessage)
  }
}
