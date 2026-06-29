figma.showUI(__html__, { width: 460, height: 960, title: 'SheetToComponent' })

// ── Types ──────────────────────────────────────────────────────────────────────

type SheetRow = {
  tabTitle: string
  rowNumber: number // 2부터 시작 (헤더 제외)
  name: string
  type: string
  label: string
  value: string
  description: string
  /** 구글 시트에서 취소선(strikethrough) 처리된 행 — 삭제 예정으로 감지 */
  strikethrough?: boolean
}

type SelectionInfo = {
  nodeId: string
  name: string
  kind: 'INSTANCE' | 'COMPONENT' | 'CONTAINER' | 'UNSUPPORTED'
  textProperties: { name: string }[]
  /** 서브트리(깊이 무관)에서 label/value/description TEXT 매핑 가능 여부 */
  hasMappableSheetProps: boolean
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
      /** 매칭 직후 스냅샷으로 저장할 현재 UI의 전체 시트 행 */
      snapshotRows: SheetRow[]
      tabScope?: string
      /** 복제 인스턴스 나열: 아래로 | 오른쪽으로 (미지정 시 아래) */
      generateLayout?: 'below' | 'right'
    }
  | { type: 'sheet-diff-request'; url: string; currentRows: SheetRow[] }
  | { type: 'sync-value-changes'; valueChangedItems: SheetDiffItem[]; labelChangedItems?: SheetLabelChangedItem[]; url?: string }
  | { type: 'close' }

type RecentSheet = { url: string; title: string }

/** label 기준 diff 한 줄 (UI 표시용) */
type SheetDiffItem = {
  label: string
  tabTitle: string
  rowNumber: number
  name: string
  value: string
  previousValue?: string
}

/** 동일 행(tabTitle + rowNumber)에서 label 텍스트 자체가 바뀐 경우 */
type SheetLabelChangedItem = {
  oldLabel: string
  newLabel: string
  tabTitle: string
  rowNumber: number
  value: string
}

/** 스냅샷에 없던 신규 행 */
type SheetLabelNewItem = {
  tabTitle: string
  rowNumber: number
  label: string
  value: string
}

/** 스냅샷에는 있지만 현재 시트에서 삭제된 행 */
type PluginToUiMessage =
  | { type: 'selection'; selection: SelectionInfo | null }
  | { type: 'settings'; apiKey: string; recentSheets: RecentSheet[] }
  | { type: 'tabs'; tabs: { sheetId: number; title: string }[]; rows: SheetRow[]; labelChanged: SheetLabelChangedItem[]; labelAdded: SheetLabelNewItem[] }
  | { type: 'tab-rows'; tabTitle: string; rows: SheetRow[]; labelChanged: SheetLabelChangedItem[]; labelAdded: SheetLabelNewItem[] }
  | { type: 'search-results'; keyword: string; rows: SheetRow[] }
  | {
      type: 'sheet-diff'
      hasSnapshot: boolean
      sameSpreadsheet: boolean
      added: SheetDiffItem[]
      deleted: SheetDiffItem[]
      valueChanged: SheetDiffItem[]
      labelChanged: SheetLabelChangedItem[]
    }
  | { type: 'done'; created: number; appliedInPlace?: number }
  | { type: 'sync-done'; updated: number }
  | { type: 'error'; message: string }
  | { type: 'node-scanning' }

// ── Settings (clientStorage) ────────────────────────────────────────────────────

type Settings = {
  apiKey: string
  recentSheets: RecentSheet[]
}

const STORAGE_KEYS = {
  apiKey: 'SheetToComponent.apiKey',
  recentSheets: 'SheetToComponent.recentSheets',
  /** 구버전 string[] — 읽기만 하고 마이그레이션 후 저장 시 제거 */
  recentUrlsLegacy: 'SheetToComponent.recentUrls',
} as const

function fallbackSheetTitle(url: string): string {
  const id = parseSpreadsheetId(url)
  if (id) return `스프레드시트 (${id.slice(0, 8)}…)`
  const u = url.trim()
  return u.length > 36 ? `${u.slice(0, 20)}…${u.slice(-12)}` : u || '시트'
}

async function readSettings(): Promise<Settings> {
  const apiKey = (await figma.clientStorage.getAsync(STORAGE_KEYS.apiKey)) as string | undefined
  const rawSheets = (await figma.clientStorage.getAsync(STORAGE_KEYS.recentSheets)) as unknown
  const legacyUrls = (await figma.clientStorage.getAsync(STORAGE_KEYS.recentUrlsLegacy)) as string[] | undefined

  let recentSheets: RecentSheet[] = []
  if (Array.isArray(rawSheets)) {
    for (const x of rawSheets) {
      if (!x || typeof (x as RecentSheet).url !== 'string') continue
      const url = String((x as RecentSheet).url).trim()
      if (!url) continue
      const t = typeof (x as RecentSheet).title === 'string' ? String((x as RecentSheet).title).trim() : ''
      recentSheets.push({ url, title: t || fallbackSheetTitle(url) })
    }
  } else if (Array.isArray(legacyUrls)) {
    recentSheets = legacyUrls
      .filter((u): u is string => typeof u === 'string' && u.trim().length > 0)
      .map((url) => ({ url: url.trim(), title: fallbackSheetTitle(url.trim()) }))
  }

  return {
    apiKey: typeof apiKey === 'string' ? apiKey : '',
    recentSheets: recentSheets.slice(0, 10),
  }
}

async function writeSettings(patch: Partial<Settings>): Promise<void> {
  const current = await readSettings()
  const next: Settings = {
    apiKey: patch.apiKey ?? current.apiKey,
    recentSheets: patch.recentSheets ?? current.recentSheets,
  }
  await figma.clientStorage.setAsync(STORAGE_KEYS.apiKey, next.apiKey)
  await figma.clientStorage.setAsync(STORAGE_KEYS.recentSheets, next.recentSheets)
  await figma.clientStorage.setAsync(STORAGE_KEYS.recentUrlsLegacy, [])
}

function addRecentSheet(list: RecentSheet[], url: string, title: string): RecentSheet[] {
  const u = url.trim()
  if (!u) return list
  const t = title.trim() || fallbackSheetTitle(u)
  const deduped = [{ url: u, title: t }, ...list.filter((x) => x.url.trim() !== u)]
  return deduped.slice(0, 10)
}

async function fetchSpreadsheetTitle(spreadsheetId: string, apiKey: string): Promise<string> {
  const url =
    `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(spreadsheetId)}` +
    `?fields=properties(title)&key=${encodeURIComponent(apiKey)}`
  const res = await fetch(url)
  if (!res.ok) return ''
  const data: any = await res.json()
  return String(data?.properties?.title ?? '').trim()
}

async function upsertRecentSheet(prev: RecentSheet[], sheetUrl: string, apiKey: string): Promise<RecentSheet[]> {
  const id = parseSpreadsheetId(sheetUrl)
  if (!id) return prev
  let title = ''
  try {
    title = await fetchSpreadsheetTitle(id, apiKey)
  } catch {
    title = ''
  }
  if (!title) {
    title = prev.find((x) => x.url.trim() === sheetUrl.trim())?.title ?? fallbackSheetTitle(sheetUrl)
  }
  return addRecentSheet(prev, sheetUrl, title)
}

async function postSettingsToUi(): Promise<void> {
  figma.ui.postMessage({ type: 'settings', ...(await readSettings()) } satisfies PluginToUiMessage)
}

// ── Sheet snapshot (매칭 시점 시트 → 선택 루트 노드 pluginData) ─────────────────

const SHEET_SNAPSHOT_PLUGIN_KEY = 'SheetToComponent.sheetMatchSnapshotV1'
const CLONE_SOURCE_PLUGIN_KEY = 'SheetToComponent.cloneSourceId'
/** 페이지에 최신 스냅샷 노드 ID를 캐시하는 키 (spreadsheetId별) */
const SNAPSHOT_NODE_CACHE_KEY_PREFIX = 'SheetToComponent.snapshotNodeId.'
/**
 * 페이지에 직접 저장하는 durable 스냅샷 키 (spreadsheetId별).
 * 기준 인스턴스(template)를 삭제해도 변경 감지/동기화가 유지되도록,
 * 노드가 아닌 페이지에 스냅샷을 누적 저장한다.
 */
const SHEET_SNAPSHOT_PAGE_KEY_PREFIX = 'SheetToComponent.pageSnapshot.'

type PersistedSheetSnapshotV1 = {
  v: 1
  spreadsheetId: string
  capturedAt: string
  rows: SheetRow[]
}

/** 실제로 인스턴스가 생성된 행의 식별자 + 생성 당시 라벨 (변경 감지 기준점) */
type GeneratedRowRef = { tabTitle: string; rowNumber: number; label: string }

type PersistedSheetSnapshotV2 = {
  v: 2
  spreadsheetId: string
  capturedAt: string
  rows: SheetRow[]
  /** label key → 연결된 Figma node ID 목록 (복제/in-place 모두) */
  labelToNodeIds: Record<string, string[]>
  /** 이 스냅샷에서 실제로 생성된 행 목록 (생성 시점 라벨 보존) */
  generatedRows?: GeneratedRowRef[]
}

type NormalizedSheetSnapshot = {
  spreadsheetId: string
  capturedAt: string
  rows: SheetRow[]
  labelToNodeIds: Record<string, string[]>
  generatedRows: GeneratedRowRef[]
}

function labelKeyForDiff(rawLabel: string): string {
  const t = String(rawLabel ?? '').trim()
  return t.length === 0 ? '\0empty' : t
}

function labelDisplayFromKey(key: string): string {
  return key === '\0empty' ? '(빈 label)' : key
}

/** 동일 label 문자열이 여러 행이면 마지막 행이 대표 */
function indexRowsByLabelKey(rows: SheetRow[]): Map<string, SheetRow> {
  const m = new Map<string, SheetRow>()
  for (const r of rows) {
    m.set(labelKeyForDiff(r.label), r)
  }
  return m
}

function rowToDiffItem(row: SheetRow, previousValue?: string): SheetDiffItem {
  const key = labelKeyForDiff(row.label)
  return {
    label: labelDisplayFromKey(key),
    tabTitle: row.tabTitle,
    rowNumber: row.rowNumber,
    name: row.name,
    value: row.value,
    ...(previousValue !== undefined ? { previousValue } : {}),
  }
}

function computeSheetLabelDiff(prevRows: SheetRow[], currRows: SheetRow[]): {
  added: SheetDiffItem[]
  deleted: SheetDiffItem[]
  valueChanged: SheetDiffItem[]
} {
  const P = indexRowsByLabelKey(prevRows)
  const C = indexRowsByLabelKey(currRows)
  const added: SheetDiffItem[] = []
  const deleted: SheetDiffItem[] = []
  const valueChanged: SheetDiffItem[] = []

  for (const [key, row] of C) {
    if (!P.has(key)) {
      added.push(rowToDiffItem(row))
    } else {
      const pRow = P.get(key)!
      if (String(pRow.value ?? '').trim() !== String(row.value ?? '').trim()) {
        valueChanged.push(rowToDiffItem(row, pRow.value))
      }
    }
  }
  for (const [key, row] of P) {
    if (!C.has(key)) {
      deleted.push(rowToDiffItem(row))
    }
  }
  return { added, deleted, valueChanged }
}

/**
 * 동일 tabTitle + rowNumber를 기준으로 label 텍스트 자체가 바뀐 항목을 반환.
 * (delete+add로 처리되던 label 변경을 rename으로 감지)
 */
function computeLabelChanges(prevRows: SheetRow[], currRows: SheetRow[]): SheetLabelChangedItem[] {
  const prevIndex = new Map<string, SheetRow>()
  for (const r of prevRows) {
    prevIndex.set(`${r.tabTitle}::${r.rowNumber}`, r)
  }
  const result: SheetLabelChangedItem[] = []
  for (const curr of currRows) {
    const prev = prevIndex.get(`${curr.tabTitle}::${curr.rowNumber}`)
    if (prev && prev.label.trim() !== curr.label.trim()) {
      result.push({
        oldLabel: prev.label.trim(),
        newLabel: curr.label.trim(),
        tabTitle: curr.tabTitle,
        rowNumber: curr.rowNumber,
        value: curr.value,
      })
    }
  }
  return result
}

/** 스냅샷에 없던 신규 행(tabTitle::rowNumber 기준)을 반환 */
function computeNewLabels(prevRows: SheetRow[], currRows: SheetRow[]): SheetLabelNewItem[] {
  const prevKeys = new Set(prevRows.map((r) => `${r.tabTitle}::${r.rowNumber}`))
  return currRows
    .filter((r) => !r.strikethrough && !prevKeys.has(`${r.tabTitle}::${r.rowNumber}`))
    .map((r) => ({ tabTitle: r.tabTitle, rowNumber: r.rowNumber, label: r.label, value: r.value }))
}

function detectNewLabelsFromPage(spreadsheetId: string, currentRows: SheetRow[]): SheetLabelNewItem[] {
  // 페이지 durable 스냅샷 우선 (기준 인스턴스 삭제 후에도 신규 판정 기준 유지)
  const pageSnapshot = readPageSnapshot(spreadsheetId)
  if (pageSnapshot) return computeNewLabels(pageSnapshot.rows, currentRows)
  const nodeSnap = findAnySnapshotOnPage(figma.currentPage, spreadsheetId)
  if (!nodeSnap) return []
  return computeNewLabels(nodeSnap.snapshot.rows, currentRows)
}



function readSheetSnapshotFromNode(root: SceneNode): NormalizedSheetSnapshot | null {
  if (!('getPluginData' in root) || typeof (root as { getPluginData?: (k: string) => string }).getPluginData !== 'function') {
    return null
  }
  const raw = (root as { getPluginData: (k: string) => string }).getPluginData(SHEET_SNAPSHOT_PLUGIN_KEY)
  if (!raw || !raw.trim()) return null
  try {
    const data = JSON.parse(raw) as PersistedSheetSnapshotV1 | PersistedSheetSnapshotV2
    if (!data || typeof data.spreadsheetId !== 'string' || !Array.isArray(data.rows)) return null
    if (data.v !== 1 && data.v !== 2) return null
    return {
      spreadsheetId: data.spreadsheetId,
      capturedAt: data.capturedAt,
      rows: data.rows,
      labelToNodeIds: data.v === 2 ? data.labelToNodeIds : {},
      generatedRows: data.v === 2 && Array.isArray(data.generatedRows) ? data.generatedRows : [],
    }
  } catch {
    return null
  }
}

/**
 * 선택된 노드에서 스냅샷을 찾는 순서:
 * 1. 노드 자신
 * 2. 조상(ancestor) 탐색 — in-place 적용 케이스에서 인스턴스가 컨테이너 안에 있을 때
 * 3. cloneSourceId 참조 — 생성된 클론에서 원본 템플릿으로 역추적
 */
function findSnapshotNode(node: SceneNode): { node: SceneNode; snapshot: NormalizedSheetSnapshot } | null {
  const direct = readSheetSnapshotFromNode(node)
  if (direct) return { node, snapshot: direct }

  let parent: BaseNode | null = node.parent
  while (parent && parent.type !== 'PAGE' && parent.type !== 'DOCUMENT') {
    const parentSnap = readSheetSnapshotFromNode(parent as SceneNode)
    if (parentSnap) return { node: parent as SceneNode, snapshot: parentSnap }
    parent = parent.parent
  }

  if ('getPluginData' in node && typeof (node as { getPluginData?: unknown }).getPluginData === 'function') {
    const sourceId = (node as { getPluginData: (k: string) => string }).getPluginData(CLONE_SOURCE_PLUGIN_KEY)
    if (sourceId) {
      const sourceNode = figma.getNodeById(sourceId)
      if (sourceNode && !sourceNode.removed && sourceNode.type !== 'DOCUMENT' && sourceNode.type !== 'PAGE') {
        const sourceSnap = readSheetSnapshotFromNode(sourceNode as SceneNode)
        if (sourceSnap) return { node: sourceNode as SceneNode, snapshot: sourceSnap }
      }
    }
  }

  return null
}

function writeSheetSnapshotOnSelection(
  root: SceneNode,
  spreadsheetId: string,
  rows: SheetRow[],
  labelToNodeIds: Record<string, string[]> = {},
  generatedRows: GeneratedRowRef[] = [],
): void {
  if (!('setPluginData' in root) || typeof (root as { setPluginData?: (k: string, v: string) => void }).setPluginData !== 'function') {
    return
  }
  const payload: PersistedSheetSnapshotV2 = {
    v: 2,
    spreadsheetId,
    capturedAt: new Date().toISOString(),
    rows: rows.map((r) => ({ ...r })),
    labelToNodeIds,
    generatedRows: generatedRows.map((g) => ({ ...g })),
  }
  try {
    ;(root as { setPluginData: (k: string, v: string) => void }).setPluginData(
      SHEET_SNAPSHOT_PLUGIN_KEY,
      JSON.stringify(payload),
    )
    // 페이지에 최신 스냅샷 노드 ID 캐시 → 다음 탐색 시 전체 순회 불필요
    figma.currentPage.setPluginData(SNAPSHOT_NODE_CACHE_KEY_PREFIX + spreadsheetId, root.id)
  } catch {
    // 용량·직렬화 실패 시 무시
  }
}

/** 페이지에 저장된 durable 스냅샷 읽기 (기준 인스턴스 삭제와 무관하게 생존) */
function readPageSnapshot(spreadsheetId: string): NormalizedSheetSnapshot | null {
  try {
    const raw = figma.currentPage.getPluginData(SHEET_SNAPSHOT_PAGE_KEY_PREFIX + spreadsheetId)
    if (!raw || !raw.trim()) return null
    const data = JSON.parse(raw) as PersistedSheetSnapshotV2
    if (!data || data.v !== 2 || !Array.isArray(data.rows)) return null
    return {
      spreadsheetId: data.spreadsheetId,
      capturedAt: data.capturedAt,
      rows: data.rows,
      labelToNodeIds: data.labelToNodeIds ?? {},
      generatedRows: Array.isArray(data.generatedRows) ? data.generatedRows : [],
    }
  } catch {
    return null
  }
}

/**
 * 페이지 durable 스냅샷에 이번 생성분을 병합 저장.
 * - rows: 최신 시트 전체 행으로 교체 (신규 감지 기준)
 * - labelToNodeIds: 기존과 union (여러 번 생성 누적)
 * - generatedRows: tabTitle::rowNumber 기준 병합 (이번 생성이 최신값으로 갱신)
 */
function mergeWritePageSnapshot(
  spreadsheetId: string,
  rows: SheetRow[],
  labelToNodeIds: Record<string, string[]>,
  generatedRows: GeneratedRowRef[],
): void {
  const prev = readPageSnapshot(spreadsheetId)

  // labelToNodeIds union
  const mergedLabelToNodeIds: Record<string, string[]> = { ...(prev?.labelToNodeIds ?? {}) }
  for (const [k, ids] of Object.entries(labelToNodeIds)) {
    const set = new Set([...(mergedLabelToNodeIds[k] ?? []), ...ids])
    mergedLabelToNodeIds[k] = [...set]
  }

  // generatedRows 병합 (key = tabTitle::rowNumber, 이번 생성이 최신)
  const genByKey = new Map<string, GeneratedRowRef>()
  for (const g of (prev?.generatedRows ?? [])) genByKey.set(`${g.tabTitle}::${g.rowNumber}`, g)
  for (const g of generatedRows) genByKey.set(`${g.tabTitle}::${g.rowNumber}`, { ...g })

  const payload: PersistedSheetSnapshotV2 = {
    v: 2,
    spreadsheetId,
    capturedAt: new Date().toISOString(),
    rows: rows.map((r) => ({ ...r })),
    labelToNodeIds: mergedLabelToNodeIds,
    generatedRows: [...genByKey.values()],
  }
  try {
    figma.currentPage.setPluginData(SHEET_SNAPSHOT_PAGE_KEY_PREFIX + spreadsheetId, JSON.stringify(payload))
  } catch {
    // 용량·직렬화 실패 시 무시
  }
}

/** 페이지 durable 스냅샷을 통째로 덮어쓰기 (동기화 후 갱신용) */
function overwritePageSnapshot(snapshot: NormalizedSheetSnapshot): void {
  const payload: PersistedSheetSnapshotV2 = {
    v: 2,
    spreadsheetId: snapshot.spreadsheetId,
    capturedAt: new Date().toISOString(),
    rows: snapshot.rows.map((r) => ({ ...r })),
    labelToNodeIds: snapshot.labelToNodeIds,
    generatedRows: snapshot.generatedRows.map((g) => ({ ...g })),
  }
  try {
    figma.currentPage.setPluginData(SHEET_SNAPSHOT_PAGE_KEY_PREFIX + snapshot.spreadsheetId, JSON.stringify(payload))
  } catch { /* 무시 */ }
}

function postSheetDiffToUi(
  hasSnapshot: boolean,
  sameSpreadsheet: boolean,
  prevRows: SheetRow[],
  currRows: SheetRow[],
): void {
  const labelChanged = hasSnapshot && sameSpreadsheet ? computeLabelChanges(prevRows, currRows) : []
  const changedOldLabels = new Set(labelChanged.map((it) => it.oldLabel))
  const changedNewLabels = new Set(labelChanged.map((it) => it.newLabel))

  const { added, deleted, valueChanged } =
    hasSnapshot && sameSpreadsheet ? computeSheetLabelDiff(prevRows, currRows) : { added: [], deleted: [], valueChanged: [] }

  figma.ui.postMessage({
    type: 'sheet-diff',
    hasSnapshot,
    sameSpreadsheet,
    // labelChanged로 이미 감지된 항목은 added/deleted에서 제거해 중복 표시 방지
    added: added.filter((it) => !changedNewLabels.has(it.label)),
    deleted: deleted.filter((it) => !changedOldLabels.has(it.label)),
    valueChanged,
    labelChanged,
  } satisfies PluginToUiMessage)
}

// ── Google Sheets helpers ──────────────────────────────────────────────────────
// 시트 1행 헤더: name/type/label/value/description 열 이름은 대소문자·앞뒤 공백·BOM만 정규화 후 매칭 (Label, VALUE 등 동일 처리)

function normalizeSheetHeaderCell(v: unknown): string {
  return String(v ?? '')
    .replace(/^\uFEFF/, '')
    .trim()
    .toLowerCase()
}

/** 헤더 행에서 허용 이름(대소문자 무시) 중 첫 일치 열 */
function findSheetColumnIndex(headerRow: unknown[], ...allowedNames: string[]): number {
  const allowed = new Set(allowedNames.map((s) => s.trim().toLowerCase()))
  for (let i = 0; i < headerRow.length; i++) {
    const key = normalizeSheetHeaderCell(headerRow[i])
    if (allowed.has(key)) return i
  }
  return -1
}

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
  const headerRow = values[0]
  const nameIndex = findSheetColumnIndex(headerRow, 'name')
  const typeIndex = findSheetColumnIndex(headerRow, 'type')
  const labelIndex = findSheetColumnIndex(headerRow, 'label')
  const valueIndex = findSheetColumnIndex(headerRow, 'value')
  const descIndex = findSheetColumnIndex(headerRow, 'description')

  if (nameIndex < 0 || typeIndex < 0 || labelIndex < 0 || valueIndex < 0) {
    throw new Error(
      '첫 번째 행에서 name, type, label, value 헤더를 찾지 못했습니다. (열 이름은 대소문자 구분 없음)',
    )
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
  // includeGridData=true로 셀 값과 취소선 서식을 함께 가져옴
  const range = `${tabTitle}!A:E`
  const fields = 'sheets.data.rowData.values(userEnteredValue,userEnteredFormat.textFormat.strikethrough)'
  const url =
    `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(spreadsheetId)}` +
    `?includeGridData=true` +
    `&ranges=${encodeURIComponent(range)}` +
    `&fields=${encodeURIComponent(fields)}` +
    `&key=${encodeURIComponent(apiKey)}`

  const res = await fetch(url)
  if (!res.ok) throw new Error('시트 데이터를 가져오지 못했습니다. URL/탭 이름/권한을 확인해주세요.')
  const data: any = await res.json()

  const rowData: any[] = data?.sheets?.[0]?.data?.[0]?.rowData ?? []
  if (rowData.length === 0) return []

  // 셀 값 → string 변환 (NFC 정규화로 한글 분리 방지)
  function cellStr(cell: any): string {
    const v = cell?.userEnteredValue
    if (!v) return ''
    if ('stringValue' in v) return String(v.stringValue ?? '').normalize('NFC')
    if ('numberValue' in v) return String(v.numberValue ?? '')
    if ('boolValue' in v) return String(v.boolValue ?? '')
    return ''
  }

  // 헤더 행 파싱 (열 인덱스 찾기)
  const headerCells: any[] = rowData[0]?.values ?? []
  const headerRow = headerCells.map(cellStr)
  const nameIndex = findSheetColumnIndex(headerRow, 'name')
  const typeIndex = findSheetColumnIndex(headerRow, 'type')
  const labelIndex = findSheetColumnIndex(headerRow, 'label')
  const valueIndex = findSheetColumnIndex(headerRow, 'value')
  const descIndex = findSheetColumnIndex(headerRow, 'description')

  if (nameIndex < 0 || typeIndex < 0 || labelIndex < 0 || valueIndex < 0) {
    throw new Error('첫 번째 행에서 name, type, label, value 헤더를 찾지 못했습니다. (열 이름은 대소문자 구분 없음)')
  }

  // 데이터 행 파싱
  const result: SheetRow[] = []
  let rowCount = 0
  for (let i = 1; i < rowData.length; i++) {
    const cells: any[] = rowData[i]?.values ?? []
    const name = cellStr(cells[nameIndex]).trim()
    const type = cellStr(cells[typeIndex]).trim()
    const label = cellStr(cells[labelIndex]).trim()
    const value = cellStr(cells[valueIndex]).trim()
    const description = descIndex >= 0 ? cellStr(cells[descIndex]).trim() : ''

    if (!name && !label) continue // 빈 행 건너뜀

    // 행의 임의 셀에 취소선이 있으면 삭제 예정 행으로 표시
    const strikethrough = cells.some((cell: any) =>
      cell?.userEnteredFormat?.textFormat?.strikethrough === true
    )

    rowCount++
    result.push({
      tabTitle,
      rowNumber: rowCount + 1, // 기존 방식과 동일: 헤더=1행, 첫 데이터=2행
      name,
      type,
      label,
      value,
      description,
      strikethrough,
    })
  }

  return result
}

/** 모든 탭의 행을 순서대로 이어 붙임 (개별 탭 오류 시 해당 탭만 건너뜀) */
async function fetchAllTabRows(spreadsheetId: string, apiKey: string, tabs: SheetTab[]): Promise<SheetRow[]> {
  const out: SheetRow[] = []
  for (const t of tabs) {
    try {
      const tabRows = await fetchSheetRowsByTabTitle(spreadsheetId, apiKey, t.title)
      out.push(...tabRows)
    } catch {
      // 탭 이름 특수문자·권한 등으로 실패한 시트는 생략
    }
  }
  return out
}

/** 선택된 시트 행들 중, label 열 값이 2회 이상 나온 고유 문자열(표시용) */
function getDuplicatedSheetLabels(rows: SheetRow[]): string[] {
  const counts = new Map<string, number>()
  for (const r of rows) {
    const raw = String(r.label ?? '').trim()
    const key = raw.length === 0 ? '\0empty' : raw
    counts.set(key, (counts.get(key) ?? 0) + 1)
  }
  const out: string[] = []
  for (const [key, c] of counts) {
    if (c < 2) continue
    out.push(key === '\0empty' ? '(빈 label)' : key)
  }
  return out
}

function hasDuplicateSheetLabels(rows: SheetRow[]): boolean {
  return getDuplicatedSheetLabels(rows).length > 0
}

function rowMatchesKeyword(row: SheetRow, keyword: string): boolean {
  const keywords = keyword.split(',').map((k) => k.trim().toLowerCase().normalize('NFC')).filter((k) => k.length >= 2)
  if (keywords.length === 0) return false
  const hay = [row.label, row.value].join(' ').toLowerCase().normalize('NFC')
  return keywords.some((k) => hay.includes(k))
}

// ── Selection helpers ──────────────────────────────────────────────────────────
// 컴포넌트 TEXT 프로퍼티: 베이스 이름이 label / value / description 이면 대소문자 무시로 매칭 (Label, Description 등)

function normalizePropKeyBase(s: string): string {
  return String(s ?? '').split('#')[0].trim().toLowerCase()
}

// propKey: "Name#nodeId" 형식 또는 단순 이름 → 실제 키 (베이스 이름 대소문자 무시)
function resolveKey(componentProperties: ComponentProperties, propName: string): string | undefined {
  const want = normalizePropKeyBase(propName)
  return Object.keys(componentProperties).find((k) => normalizePropKeyBase(k) === want)
}

function resolveKeyByBaseName(
  componentProperties: ComponentProperties,
  baseName: 'label' | 'value' | 'description',
): string | undefined {
  const want = baseName.toLowerCase()
  return Object.keys(componentProperties).find((k) => normalizePropKeyBase(k) === want)
}

function propBindingIsText(
  props: ComponentProperties | ComponentPropertyDefinitions,
  key: string,
): boolean {
  const entry = (props as Record<string, { type?: string }>)[key]
  return entry?.type === 'TEXT'
}

/**
 * 컴포넌트 원본에 오류가 있는 인스턴스(broken component)의 경우
 * `componentProperties` 접근 시 Figma가 에러를 throw할 수 있으므로 안전하게 래핑.
 */
function safeComponentProperties(inst: InstanceNode): ComponentProperties | null {
  try {
    return inst.componentProperties ?? null
  } catch {
    return null
  }
}

/**
 * COMPONENT 노드의 `componentPropertyDefinitions` 안전 접근.
 * variant 컴포넌트(컴포넌트 셋 소속)에 접근하면 Figma가 throw하므로 try-catch로 래핑.
 */
function safeComponentPropertyDefinitions(comp: ComponentNode): ComponentPropertyDefinitions | null {
  try {
    return comp.componentPropertyDefinitions ?? null
  } catch {
    return null
  }
}

/** label / value / description 중 TEXT로 시트 매핑 가능한 항목이 있는지 (깊이 무관 수집과 함께 사용) */
function hasMappableTextSheetPropsInTarget(t: InstanceNode | ComponentNode): boolean {
  const props =
    t.type === 'INSTANCE'
      ? safeComponentProperties(t as InstanceNode)
      : safeComponentPropertyDefinitions(t as ComponentNode)
  if (!props) return false
  const cp = props as ComponentProperties
  for (const base of ['label', 'value', 'description'] as const) {
    const key = resolveKeyByBaseName(cp, base)
    if (key && propBindingIsText(props, key)) return true
  }
  return false
}

/** 프레임 등 중간 컨테이너를 통과해 서브트리의 모든 Instance/Component 수집 (DFS + findAll 누락 보정) */
function collectInstanceOrComponentDescendants(root: SceneNode): (InstanceNode | ComponentNode)[] {
  const dfsOut: (InstanceNode | ComponentNode)[] = []
  function visitDfs(n: BaseNode) {
    if (n.removed) return
    if (n.type === 'INSTANCE' || n.type === 'COMPONENT') {
      dfsOut.push(n as InstanceNode | ComponentNode)
    }
    if ('children' in n) {
      for (const child of (n as ChildrenMixin).children) {
        visitDfs(child)
      }
    }
  }
  visitDfs(root)

  const rootWithFind = root as SceneNode & { findAll?: (cb: (n: SceneNode) => boolean) => SceneNode[] }
  if (typeof rootWithFind.findAll !== 'function') return dfsOut

  try {
    const found = rootWithFind.findAll((n) => n.type === 'INSTANCE' || n.type === 'COMPONENT')
    const seen = new Set(dfsOut.map((x) => x.id))
    const merged = [...dfsOut]
    for (const n of found) {
      if (n.removed) continue
      if (n.type !== 'INSTANCE' && n.type !== 'COMPONENT') continue
      if (seen.has(n.id)) continue
      seen.add(n.id)
      merged.push(n as InstanceNode | ComponentNode)
    }
    return merged
  } catch {
    return dfsOut
  }
}

function selectionHasAnyMatchingSheetProps(selection: SceneNode): boolean {
  for (const t of collectInstanceOrComponentDescendants(selection)) {
    if (hasMappableTextSheetPropsInTarget(t)) return true
  }
  return false
}

/** 시트 행을 넣을 수 있는 인스턴스만, 서브트리 순서(수집 순서)대로 */
function collectApplicableInstancesInOrder(root: SceneNode): InstanceNode[] {
  return collectInstanceOrComponentDescendants(root).filter(
    (t): t is InstanceNode => t.type === 'INSTANCE' && hasMappableTextSheetPropsInTarget(t),
  )
}

function extractTextPropNames(targets: (InstanceNode | ComponentNode)[]): { name: string }[] {
  const out: { name: string }[] = []
  const seenBase = new Set<string>()

  for (const t of targets) {
    const props = t.type === 'INSTANCE' ? safeComponentProperties(t as InstanceNode) : safeComponentPropertyDefinitions(t as ComponentNode)
    if (!props) continue
    for (const propName of Object.keys(props)) {
      const def: any = (props as any)[propName]
      if (!def || def.type !== 'TEXT') continue
      const base = normalizePropKeyBase(propName)
      if (seenBase.has(base)) continue
      seenBase.add(base)
      out.push({ name: propName.split('#')[0] })
    }
  }
  return out
}

function getSelectionInfo(): SelectionInfo | null {
  const selection = figma.currentPage.selection[0]
  if (!selection) return null

  const targets = collectInstanceOrComponentDescendants(selection)
  const hasMappableSheetProps = targets.some((t) => hasMappableTextSheetPropsInTarget(t))

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
    hasMappableSheetProps,
  }
}

function applyRowToInstance(
  inst: InstanceNode,
  row: SheetRow,
) {
  const props = safeComponentProperties(inst)
  if (!props) return
  const updates: Record<string, string> = {}

  const labelKey = resolveKeyByBaseName(props, 'label')
  const valueKey = resolveKeyByBaseName(props, 'value')
  const descKey = resolveKeyByBaseName(props, 'description')

  if (labelKey && propBindingIsText(props, labelKey)) {
    updates[labelKey] = row.label
  }
  if (valueKey && propBindingIsText(props, valueKey)) {
    updates[valueKey] = row.value
  }
  if (descKey && propBindingIsText(props, descKey)) {
    updates[descKey] = row.description
  }

  if (Object.keys(updates).length > 0) {
    inst.setProperties(updates)
  }
}

function applyRowToSelectionClone(
  clone: SceneNode,
  row: SheetRow,
) {
  for (const t of collectInstanceOrComponentDescendants(clone)) {
    if (t.type === 'INSTANCE') applyRowToInstance(t, row)
  }
}

/** 현재 페이지에서 label 프로퍼티 값이 일치하는 인스턴스를 전부 수집 */
function findInstancesByLabelOnPage(page: PageNode, labelValue: string): InstanceNode[] {
  const target = String(labelValue ?? '').trim()
  const results: InstanceNode[] = []

  function visit(node: BaseNode) {
    if ((node as { removed?: boolean }).removed) return
    if (node.type === 'INSTANCE') {
      const inst = node as InstanceNode
      const props = safeComponentProperties(inst)
      if (props) {
        const labelKey = resolveKeyByBaseName(props, 'label')
        if (labelKey && propBindingIsText(props, labelKey)) {
          const current = String((props[labelKey] as { value: unknown }).value ?? '').trim()
          if (current === target) results.push(inst)
        }
      }
    }
    if ('children' in node) {
      for (const child of (node as ChildrenMixin).children) visit(child)
    }
  }

  for (const child of page.children) visit(child)
  return results
}

/** value 프로퍼티만 업데이트 (label·description은 건드리지 않음) */
function applyValueToInstance(inst: InstanceNode, newValue: string): void {
  const props = safeComponentProperties(inst)
  if (!props) return
  const valueKey = resolveKeyByBaseName(props, 'value')
  if (valueKey && propBindingIsText(props, valueKey)) {
    inst.setProperties({ [valueKey]: newValue })
  }
}

/**
 * 페이지에서 label 프로퍼티가 일치하는 인스턴스를 찾아 value를 업데이트.
 * - label + value가 같은 인스턴스에 있는 경우 → 직접 업데이트
 * - label만 있는 인스턴스인 경우 → 부모 컨테이너 안에서 value 프로퍼티를 가진 형제 인스턴스를 찾아 업데이트
 * @returns 실제로 업데이트된 인스턴스 수
 */
function syncValueByLabelOnPage(page: PageNode, labelValue: string, newValue: string): number {
  const target = String(labelValue ?? '').trim()
  if (!target) return 0

  let updated = 0
  const processed = new Set<string>()

  function visit(node: BaseNode) {
    if ((node as { removed?: boolean }).removed) return
    if (node.type === 'INSTANCE') {
      const inst = node as InstanceNode
      const props = safeComponentProperties(inst)
      if (props && !processed.has(inst.id)) {
        const labelKey = resolveKeyByBaseName(props, 'label')
        if (labelKey && propBindingIsText(props, labelKey)) {
          const current = String((props[labelKey] as { value: unknown }).value ?? '').trim()
          if (current === target) {
            processed.add(inst.id)
            const valueKey = resolveKeyByBaseName(props, 'value')
            if (valueKey && propBindingIsText(props, valueKey)) {
              // label + value가 같은 인스턴스에 있는 구조
              inst.setProperties({ [valueKey]: newValue })
              updated++
            } else {
              // label과 value가 분리된 구조 → 부모에서 value 인스턴스 탐색
              const parent = inst.parent
              if (parent && parent.type !== 'PAGE' && parent.type !== 'DOCUMENT') {
                const parentId = (parent as { id: string }).id
                if (!processed.has(parentId)) {
                  processed.add(parentId)
                  for (const sibling of collectInstanceOrComponentDescendants(parent as SceneNode)) {
                    if (sibling.type !== 'INSTANCE' || sibling.id === inst.id) continue
                    const siblingProps = safeComponentProperties(sibling as InstanceNode)
                    if (!siblingProps) continue
                    const vKey = resolveKeyByBaseName(siblingProps, 'value')
                    if (vKey && propBindingIsText(siblingProps, vKey)) {
                      sibling.setProperties({ [vKey]: newValue })
                      updated++
                    }
                  }
                }
              }
            }
            return // 매칭된 인스턴스 내부는 더 탐색하지 않음
          }
        }
      }
    }
    if ('children' in node) {
      for (const child of (node as ChildrenMixin).children) visit(child)
    }
  }

  for (const child of page.children) visit(child)
  return updated
}

/** 페이지에서 label 프로퍼티 값이 oldLabel인 인스턴스를 찾아 newLabel로 교체 */
function syncLabelOnPage(page: PageNode, oldLabel: string, newLabel: string): number {
  const target = String(oldLabel ?? '').trim()
  const replacement = String(newLabel ?? '').trim()
  if (!target || !replacement || target === replacement) return 0

  let updated = 0
  const processed = new Set<string>()

  function visit(node: BaseNode) {
    if ((node as { removed?: boolean }).removed) return
    if (node.type === 'INSTANCE') {
      const inst = node as InstanceNode
      const props = safeComponentProperties(inst)
      if (props && !processed.has(inst.id)) {
        const labelKey = resolveKeyByBaseName(props, 'label')
        if (labelKey && propBindingIsText(props, labelKey)) {
          const current = String((props[labelKey] as { value: unknown }).value ?? '').trim()
          if (current === target) {
            processed.add(inst.id)
            inst.setProperties({ [labelKey]: replacement })
            updated++
            return
          }
        }
      }
    }
    if ('children' in node) {
      for (const child of (node as ChildrenMixin).children) visit(child)
    }
  }

  for (const child of page.children) visit(child)
  return updated
}

/**
 * 페이지 스냅샷과 현재 시트 행을 비교해 label이 바뀐 항목 목록을 반환.
 * 스냅샷이 없거나 다른 스프레드시트이면 빈 배열.
 *
 * spreadsheetId를 findAnySnapshotOnPage에 전달해,
 * 다른 시트로 연결된 스냅샷이 먼저 발견되더라도 올바른 스냅샷을 찾습니다.
 */
function detectLabelChangesFromPage(spreadsheetId: string, currentRows: SheetRow[]): SheetLabelChangedItem[] {
  // 페이지 durable 스냅샷 + 노드 스냅샷을 모두 수집 (기준 인스턴스 삭제와 무관하게 생존)
  const nodeSnaps = collectAllSnapshotsOnPage(figma.currentPage, spreadsheetId)
  const pageSnap = readPageSnapshot(spreadsheetId)
  const allSnaps = [...nodeSnaps.map((s) => s.snapshot), ...(pageSnap ? [pageSnap] : [])]
  if (allSnaps.length === 0) return []

  // capturedAt 오래된 것 먼저 정렬 → 최신이 덮어쓰도록
  const sorted = [...allSnaps].sort((a, b) => {
    const ta = a.capturedAt ? new Date(a.capturedAt).getTime() : 0
    const tb = b.capturedAt ? new Date(b.capturedAt).getTime() : 0
    return ta - tb
  })

  const capturedLabelByKey = new Map<string, string>()
  let hasAnyGeneratedRows = false
  for (const snapshot of sorted) {
    for (const g of snapshot.generatedRows) {
      hasAnyGeneratedRows = true
      capturedLabelByKey.set(`${g.tabTitle}::${g.rowNumber}`, g.label)
    }
  }

  // generatedRows가 없는 구버전 스냅샷만 있는 경우: 기존 방식(labelToNodeIds 필터)으로 폴백
  if (!hasAnyGeneratedRows) {
    const latest = sorted[sorted.length - 1]
    const linkedLabelKeys = new Set(Object.keys(latest.labelToNodeIds ?? {}))
    const prevRows = linkedLabelKeys.size > 0
      ? latest.rows.filter((r) => linkedLabelKeys.has(labelKeyForDiff(r.label)))
      : latest.rows
    return computeLabelChanges(prevRows, currentRows)
  }

  // 생성된 행만 대상으로, 생성 당시 라벨과 현재 시트 라벨 비교
  const result: SheetLabelChangedItem[] = []
  for (const curr of currentRows) {
    const key = `${curr.tabTitle}::${curr.rowNumber}`
    const capturedLabel = capturedLabelByKey.get(key)
    if (capturedLabel !== undefined && capturedLabel.trim() !== curr.label.trim()) {
      result.push({
        oldLabel: capturedLabel.trim(),
        newLabel: curr.label.trim(),
        tabTitle: curr.tabTitle,
        rowNumber: curr.rowNumber,
        value: curr.value,
      })
    }
  }
  return result
}

/**
 * 선택 없이도 스냅샷을 찾을 수 있도록 페이지 전체를 순회해 첫 번째 스냅샷 노드를 반환.
 * 선택 기반 findSnapshotNode 가 null 일 때 폴백으로 사용.
 *
 * @param spreadsheetId - 지정하면 해당 ID와 일치하는 스냅샷만 반환 (DFS 첫 번째 스냅샷이
 *   다른 시트에 연결된 경우 오탐 방지). 생략하면 첫 번째 스냅샷 반환.
 */
// 스냅샷이 저장될 수 없는 리프 노드 타입 (탐색 스킵)
const LEAF_NODE_TYPES = new Set(['TEXT', 'VECTOR', 'RECTANGLE', 'ELLIPSE', 'POLYGON', 'STAR', 'LINE', 'BOOLEAN_OPERATION', 'SLICE'])

function findAnySnapshotOnPage(
  page: PageNode,
  spreadsheetId?: string,
): { node: SceneNode; snapshot: NormalizedSheetSnapshot } | null {
  // 1) 캐시된 노드 ID로 빠른 조회
  if (spreadsheetId) {
    try {
      const cachedId = page.getPluginData(SNAPSHOT_NODE_CACHE_KEY_PREFIX + spreadsheetId)
      if (cachedId) {
        const cachedNode = figma.getNodeById(cachedId) as SceneNode | null
        if (cachedNode && !(cachedNode as { removed?: boolean }).removed) {
          const snap = readSheetSnapshotFromNode(cachedNode)
          if (snap && snap.spreadsheetId === spreadsheetId) {
            return { node: cachedNode, snapshot: snap }
          }
        }
        // 캐시가 유효하지 않으면 키 삭제 후 풀스캔으로 폴백
        page.setPluginData(SNAPSHOT_NODE_CACHE_KEY_PREFIX + spreadsheetId, '')
      }
    } catch {
      // 캐시 접근 실패 시 풀스캔으로 폴백
    }
  }

  // 2) 폴백: 전체 페이지 탐색 (컨테이너 노드만)
  const candidates: { node: SceneNode; snapshot: NormalizedSheetSnapshot }[] = []

  function visit(node: BaseNode): void {
    try {
      if ((node as { removed?: boolean }).removed) return
      if (LEAF_NODE_TYPES.has((node as SceneNode).type)) return
      const snap = readSheetSnapshotFromNode(node as SceneNode)
      if (snap && (!spreadsheetId || snap.spreadsheetId === spreadsheetId)) {
        candidates.push({ node: node as SceneNode, snapshot: snap })
      }
      if ('children' in node) {
        for (const child of (node as ChildrenMixin).children) {
          visit(child)
        }
      }
    } catch { /* 무시 */ }
  }

  for (const child of page.children) {
    visit(child)
  }

  if (candidates.length === 0) return null

  candidates.sort((a, b) => {
    const ta = a.snapshot.capturedAt ? new Date(a.snapshot.capturedAt).getTime() : 0
    const tb = b.snapshot.capturedAt ? new Date(b.snapshot.capturedAt).getTime() : 0
    return tb - ta
  })

  // 찾은 최신 노드를 캐시에 저장
  const best = candidates[0]
  if (spreadsheetId) {
    try { page.setPluginData(SNAPSHOT_NODE_CACHE_KEY_PREFIX + spreadsheetId, best.node.id) } catch { /* 무시 */ }
  }

  return best
}

/** 페이지 내 해당 spreadsheetId의 모든 스냅샷을 수집 (컨테이너 노드만 순회) */
function collectAllSnapshotsOnPage(
  page: PageNode,
  spreadsheetId: string,
): { node: SceneNode; snapshot: NormalizedSheetSnapshot }[] {
  const out: { node: SceneNode; snapshot: NormalizedSheetSnapshot }[] = []
  function visit(node: BaseNode): void {
    try {
      if ((node as { removed?: boolean }).removed) return
      if (LEAF_NODE_TYPES.has((node as SceneNode).type)) return
      const snap = readSheetSnapshotFromNode(node as SceneNode)
      if (snap && snap.spreadsheetId === spreadsheetId) {
        out.push({ node: node as SceneNode, snapshot: snap })
      }
      if ('children' in node) {
        for (const child of (node as ChildrenMixin).children) visit(child)
      }
    } catch { /* 무시 */ }
  }
  for (const child of page.children) visit(child)
  return out
}

function sendSelection() {
  const info = getSelectionInfo()
  const out: PluginToUiMessage = { type: 'selection', selection: info }
  figma.ui.postMessage(out)
}

/**
 * 복제본을 삽입할 부모와 anchor(sibling 기준 노드)를 반환.
 *
 * 인스턴스 노드나 인스턴스 내부에는 자식을 추가할 수 없으므로,
 * 트리를 위로 올라가며 편집 가능한 첫 번째 부모(FRAME / GROUP / COMPONENT / PAGE)를 찾는다.
 * anchor = 최종 부모의 직접 자식 중 selection의 조상(또는 selection 자신) → sibling 삽입 기준.
 */
function getCloneContext(selection: SceneNode): { cloneParent: ChildrenMixin; anchor: SceneNode } {
  let anchor: SceneNode = selection
  let p: BaseNode | null = selection.parent

  while (p) {
    if (p.type === 'PAGE' || p.type === 'DOCUMENT') {
      return { cloneParent: figma.currentPage, anchor }
    }

    // 인스턴스이거나 인스턴스 내부에 있으면 편집 불가 → 위로 이동
    const isInstance = p.type === 'INSTANCE'
    const insideInstance = (() => {
      let a = p!.parent
      while (a && a.type !== 'PAGE' && a.type !== 'DOCUMENT') {
        if (a.type === 'INSTANCE') return true
        a = a.parent
      }
      return false
    })()

    if (!isInstance && !insideInstance && 'children' in p) {
      return { cloneParent: p as unknown as ChildrenMixin, anchor }
    }

    anchor = p as SceneNode
    p = p.parent
  }

  return { cloneParent: figma.currentPage, anchor }
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
      await writeSettings({ recentSheets: [] })
      await postSettingsToUi()
      return
    }

    if (msg.type === 'list-tabs') {
      const spreadsheetId = parseSpreadsheetId(msg.url)
      if (!spreadsheetId) throw new Error('유효한 구글 시트 URL을 입력해주세요.')
      if (!msg.apiKey.trim()) throw new Error('Google API Key를 입력해주세요.')

      const tabs = await fetchSheetTabs(spreadsheetId, msg.apiKey)
      const rows = await fetchAllTabRows(spreadsheetId, msg.apiKey, tabs)

      const prev = await readSettings()
      const recentSheets = await upsertRecentSheet(prev.recentSheets, msg.url, msg.apiKey)
      await writeSettings({
        apiKey: msg.apiKey,
        recentSheets,
      })

      figma.ui.postMessage({ type: 'node-scanning' } satisfies PluginToUiMessage)
      await new Promise<void>((resolve) => setTimeout(resolve, 32))
      const labelChanged = detectLabelChangesFromPage(spreadsheetId, rows)
      const labelAdded = detectNewLabelsFromPage(spreadsheetId, rows)
      figma.ui.postMessage({ type: 'tabs', tabs, rows, labelChanged, labelAdded } satisfies PluginToUiMessage)
      await postSettingsToUi()
      return
    }

    if (msg.type === 'load-tab-rows') {
      const spreadsheetId = parseSpreadsheetId(msg.url)
      if (!spreadsheetId) throw new Error('유효한 구글 시트 URL을 입력해주세요.')
      if (!msg.apiKey.trim()) throw new Error('Google API Key를 입력해주세요.')
      if (!msg.tabTitle.trim()) throw new Error('탭을 선택해주세요.')

      const prev = await readSettings()
      const recentSheets = await upsertRecentSheet(prev.recentSheets, msg.url, msg.apiKey)
      await writeSettings({
        apiKey: msg.apiKey,
        recentSheets,
      })

      const rows = await fetchSheetRowsByTabTitle(spreadsheetId, msg.apiKey, msg.tabTitle.trim())
      figma.ui.postMessage({ type: 'node-scanning' } satisfies PluginToUiMessage)
      await new Promise<void>((resolve) => setTimeout(resolve, 32))
      const labelChanged = detectLabelChangesFromPage(spreadsheetId, rows)
      const labelAdded = detectNewLabelsFromPage(spreadsheetId, rows)
      figma.ui.postMessage({ type: 'tab-rows', tabTitle: msg.tabTitle.trim(), rows, labelChanged, labelAdded } satisfies PluginToUiMessage)
      await postSettingsToUi()
      return
    }

    if (msg.type === 'search') {
      const spreadsheetId = parseSpreadsheetId(msg.url)
      if (!spreadsheetId) throw new Error('유효한 구글 시트 URL을 입력해주세요.')
      if (!msg.apiKey.trim()) throw new Error('Google API Key를 입력해주세요.')
      const keyword = msg.keyword.trim()
      if (!keyword) throw new Error('검색 키워드를 입력해주세요.')

      const prev = await readSettings()
      const recentSheets = await upsertRecentSheet(prev.recentSheets, msg.url, msg.apiKey)
      await writeSettings({
        apiKey: msg.apiKey,
        recentSheets,
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
      await postSettingsToUi()
      return
    }

    if (msg.type === 'sheet-diff-request') {
      const sel = figma.currentPage.selection[0]
      const sheetId = parseSpreadsheetId(msg.url)
      if (!sel || !sheetId || !Array.isArray(msg.currentRows)) {
        postSheetDiffToUi(false, false, [], [])
        return
      }
      const found = findSnapshotNode(sel)
      if (!found) {
        postSheetDiffToUi(false, false, [], msg.currentRows)
        return
      }
      const same = found.snapshot.spreadsheetId === sheetId
      postSheetDiffToUi(true, same, found.snapshot.rows, msg.currentRows)
      return
    }

    if (msg.type === 'connect-and-generate') {
      const selection = figma.currentPage.selection[0]
      if (!selection) throw new Error('인스턴스(또는 레이어)를 선택해주세요.')
      if (!Array.isArray(msg.keywordRows) || msg.keywordRows.length === 0) {
        throw new Error('연결할 키워드를 선택해주세요.')
      }
      if (!Array.isArray(msg.snapshotRows)) {
        throw new Error('시트 목록 스냅샷이 없습니다. 시트를 다시 불러온 뒤 시도해주세요.')
      }
      if (!selectionHasAnyMatchingSheetProps(selection)) {
        throw new Error('일치하는 프로퍼티가 없습니다')
      }

      const spreadsheetId = parseSpreadsheetId(msg.url)

      const prev = await readSettings()
      const recentSheets = await upsertRecentSheet(prev.recentSheets, msg.url, msg.apiKey)
      await writeSettings({
        apiKey: msg.apiKey,
        recentSheets,
      })

      if (hasDuplicateSheetLabels(msg.keywordRows)) {
        const targets = collectApplicableInstancesInOrder(selection)
        if (msg.keywordRows.length > targets.length) {
          throw new Error(
            `중복 label 적용 시 새 복제 없이 기존 인스턴스에만 값을 넣습니다. 매핑 가능한 인스턴스는 ${targets.length}개인데 선택한 행은 ${msg.keywordRows.length}개입니다.`,
          )
        }
        const inPlaceLabelToNodeIds: Record<string, string[]> = {}
        for (let i = 0; i < msg.keywordRows.length; i += 1) {
          applyRowToInstance(targets[i], msg.keywordRows[i])
          const key = labelKeyForDiff(msg.keywordRows[i].label)
          inPlaceLabelToNodeIds[key] = [...(inPlaceLabelToNodeIds[key] ?? []), targets[i].id]
        }
        const applied = targets.slice(0, msg.keywordRows.length)
        if (spreadsheetId) {
          const generatedRows: GeneratedRowRef[] = msg.keywordRows.map((r) => ({
            tabTitle: r.tabTitle, rowNumber: r.rowNumber, label: r.label,
          }))
          writeSheetSnapshotOnSelection(selection, spreadsheetId, msg.snapshotRows, inPlaceLabelToNodeIds, generatedRows)
          mergeWritePageSnapshot(spreadsheetId, msg.snapshotRows, inPlaceLabelToNodeIds, generatedRows)
        }
        figma.currentPage.selection = applied
        figma.viewport.scrollAndZoomIntoView(applied)
        figma.notify(`✅ ${applied.length}개 기존 인스턴스에 연결 (중복 label — 복제 없음)`)
        figma.ui.postMessage({
          type: 'done',
          created: 0,
          appliedInPlace: applied.length,
        } satisfies PluginToUiMessage)
        await postSettingsToUi()
        return
      }

      const generated: SceneNode[] = []
      const cloneLabelToNodeIds: Record<string, string[]> = {}

      // 편집 가능한 부모 프레임과 그 안의 anchor 노드를 찾음 (인스턴스 내부 선택 시 안전하게 탈출)
      const { cloneParent, anchor } = getCloneContext(selection)

      // anchor 기준으로 부모 내 삽입 위치 계산
      const selectionIndex = (cloneParent as { children: readonly SceneNode[] }).children
        .findIndex((c) => c.id === anchor.id)

      // 부모의 오토레이아웃 방향 (있으면 Figma가 위치 자동 처리)
      const parentLayoutMode: 'HORIZONTAL' | 'VERTICAL' | 'NONE' =
        'layoutMode' in cloneParent ? (cloneParent as FrameNode).layoutMode : 'NONE'

      // 감싸는 프레임이 없으면(페이지 직속) 무조건 아래로, 있으면 UI 설정 따름
      const isOnPage = (cloneParent as BaseNode).type === 'PAGE'
      const manualLayout: 'right' | 'below' = isOnPage ? 'below' : (msg.generateLayout === 'right' ? 'right' : 'below')

      // 오토레이아웃 없을 때 누적 좌표 기준은 anchor 노드 위치 사용
      const anchorNode = anchor as SceneNode & { x: number; y: number; width: number; height: number }
      let currentX = anchorNode.x + anchorNode.width
      let currentY = anchorNode.y + anchorNode.height

      for (let i = 0; i < msg.keywordRows.length; i++) {
        const row = msg.keywordRows[i]
        const clone = selection.clone()

        // clone()은 selection과 동일 부모에 추가됨 → insertChild로 sibling 위치로 이동
        if (selectionIndex >= 0) {
          cloneParent.insertChild(selectionIndex + 1 + i, clone)
        } else {
          cloneParent.appendChild(clone)
        }

        // 오토레이아웃이 없는 경우에만 수동으로 위치 지정 (gap 없이 붙임)
        if (parentLayoutMode === 'NONE') {
          if (manualLayout === 'right') {
            clone.x = currentX
            clone.y = anchorNode.y
            currentX += clone.width
          } else {
            clone.x = anchorNode.x
            clone.y = currentY
            currentY += clone.height
          }
        }

        applyRowToSelectionClone(clone, row)
        generated.push(clone)
        const key = labelKeyForDiff(row.label)
        cloneLabelToNodeIds[key] = [...(cloneLabelToNodeIds[key] ?? []), clone.id]
        if ('setPluginData' in clone) clone.setPluginData(CLONE_SOURCE_PLUGIN_KEY, selection.id)
      }

      if (spreadsheetId) {
        const generatedRows: GeneratedRowRef[] = msg.keywordRows.map((r) => ({
          tabTitle: r.tabTitle, rowNumber: r.rowNumber, label: r.label,
        }))
        writeSheetSnapshotOnSelection(selection, spreadsheetId, msg.snapshotRows, cloneLabelToNodeIds, generatedRows)
        mergeWritePageSnapshot(spreadsheetId, msg.snapshotRows, cloneLabelToNodeIds, generatedRows)
      }

      figma.currentPage.selection = generated
      figma.viewport.scrollAndZoomIntoView(generated)
      const created = msg.keywordRows.length
      figma.notify(`✅ ${created}개 생성 및 연결 완료!`)
      figma.ui.postMessage({ type: 'done', created, appliedInPlace: 0 } satisfies PluginToUiMessage)
      await postSettingsToUi()
      return
    }
    if (msg.type === 'sync-value-changes') {
      const hasValueChanges = Array.isArray(msg.valueChangedItems) && msg.valueChangedItems.length > 0
      const hasLabelChanges = Array.isArray(msg.labelChangedItems) && msg.labelChangedItems.length > 0
      if (!hasValueChanges && !hasLabelChanges) {
        throw new Error('동기화할 변경 항목이 없습니다.')
      }

      let updated = 0

      // label 변경 동기화 — labelToNodeIds로 정확한 노드를 찾아 변경 (페이지 전체 검색 방지)
      if (Array.isArray(msg.labelChangedItems) && msg.labelChangedItems.length > 0) {
        const syncSpreadsheetId = msg.url ? parseSpreadsheetId(msg.url) ?? undefined : undefined
        // 페이지 durable 스냅샷 우선 (기준 인스턴스 삭제 후에도 클론 ID 보존)
        const pageSnap = syncSpreadsheetId ? readPageSnapshot(syncSpreadsheetId) : null
        const found = findAnySnapshotOnPage(figma.currentPage, syncSpreadsheetId)
        const labelToNodeIds = pageSnap?.labelToNodeIds ?? found?.snapshot.labelToNodeIds ?? {}

        for (const labelItem of msg.labelChangedItems) {
          const oldKey = labelKeyForDiff(labelItem.oldLabel)
          const nodeIds = labelToNodeIds[oldKey] ?? []

          if (nodeIds.length > 0) {
            // 스냅샷에 노드 ID가 있으면 해당 노드만 정확히 변경
            for (const nodeId of nodeIds) {
              try {
                const node = figma.getNodeById(nodeId)
                if (!node || (node as { removed?: boolean }).removed) continue
                if (node.type === 'INSTANCE') {
                  const props = safeComponentProperties(node as InstanceNode)
                  if (!props) continue
                  const labelKey = resolveKeyByBaseName(props, 'label')
                  if (labelKey && propBindingIsText(props, labelKey)) {
                    ;(node as InstanceNode).setProperties({ [labelKey]: labelItem.newLabel })
                    updated++
                  }
                } else {
                  // 노드가 인스턴스가 아니면(프레임 등) 내부 인스턴스 순회
                  const cnt = syncLabelOnPage(figma.currentPage, labelItem.oldLabel, labelItem.newLabel)
                  updated += cnt
                  break
                }
              } catch { /* 접근 불가 노드 무시 */ }
            }
          } else {
            // 노드 ID 없으면 기존 방식 폴백 (label 텍스트 검색)
            updated += syncLabelOnPage(figma.currentPage, labelItem.oldLabel, labelItem.newLabel)
          }
        }
      }

      // label 변경 동기화 — 스냅샷과 tabTitle+rowNumber 기준 비교 후 label이 바뀐 행만 처리
      if (Array.isArray(msg.valueChangedItems) && msg.valueChangedItems.length > 0) {
        const syncSpreadsheetIdForValue = msg.url ? parseSpreadsheetId(msg.url) ?? undefined : undefined
        const pageSnapForValue = syncSpreadsheetIdForValue ? readPageSnapshot(syncSpreadsheetIdForValue) : null
        const found = findAnySnapshotOnPage(figma.currentPage, syncSpreadsheetIdForValue)
        const baseRows = pageSnapForValue?.rows ?? found?.snapshot.rows

        if (baseRows) {
          // tabTitle+rowNumber 키로 스냅샷 색인
          const snapByKey = new Map<string, SheetRow>()
          for (const r of baseRows) {
            snapByKey.set(`${r.tabTitle}::${r.rowNumber}`, r)
          }
          for (const item of msg.valueChangedItems) {
            const snapRow = snapByKey.get(`${item.tabTitle}::${item.rowNumber}`)
            const labelChanged = snapRow && snapRow.label.trim() !== item.label.trim()
            if (labelChanged) {
              // Figma에는 아직 OLD label → oldLabel로 인스턴스 찾아 newLabel로 교체
              updated += syncLabelOnPage(figma.currentPage, snapRow!.label.trim(), item.label.trim())
            }
            // label이 동일하면 value 변경 여부와 무관하게 건너뜀
          }
        }
        // 스냅샷 없으면 label 변경 기준을 알 수 없으므로 아무것도 하지 않음
      }

      // 스냅샷 갱신 (best-effort) — 동기화된 label 변경을 페이지 내 모든 스냅샷에 반영
      {
        const syncSpreadsheetId = msg.url ? parseSpreadsheetId(msg.url) ?? undefined : undefined

        // 동기화된 모든 label 변경을 "tabTitle::rowNumber → newLabel" 맵으로 통합
        const syncedNewLabelByKey = new Map<string, string>()
        // footer 버튼(valueChangedItems): 스냅샷 라벨과 다르면 label 변경으로 간주
        if (Array.isArray(msg.valueChangedItems)) {
          for (const item of msg.valueChangedItems) {
            syncedNewLabelByKey.set(`${item.tabTitle}::${item.rowNumber}`, item.label)
          }
        }
        // diff 패널(labelChangedItems): newLabel 명시
        for (const item of (msg.labelChangedItems ?? [])) {
          syncedNewLabelByKey.set(`${item.tabTitle}::${item.rowNumber}`, item.newLabel)
        }

        if (syncSpreadsheetId && syncedNewLabelByKey.size > 0) {
          // 스냅샷 1개에 동기화된 label 변경 반영 (rows/labelToNodeIds/generatedRows)
          const applyToSnapshot = (snapshot: NormalizedSheetSnapshot): NormalizedSheetSnapshot => {
            const updatedRows = snapshot.rows.map((r) => ({ ...r }))
            const updatedLabelToNodeIds = { ...snapshot.labelToNodeIds }
            const updatedGeneratedRows = snapshot.generatedRows.map((g) => ({ ...g }))

            updatedRows.forEach((r, i) => {
              const newLabel = syncedNewLabelByKey.get(`${r.tabTitle}::${r.rowNumber}`)
              if (newLabel !== undefined && r.label.trim() !== newLabel.trim()) {
                const oldKey = labelKeyForDiff(r.label)
                const newKey = labelKeyForDiff(newLabel)
                updatedRows[i] = { ...r, label: newLabel }
                if (oldKey !== newKey && updatedLabelToNodeIds[oldKey] !== undefined) {
                  updatedLabelToNodeIds[newKey] = updatedLabelToNodeIds[oldKey]
                  delete updatedLabelToNodeIds[oldKey]
                }
              }
            })
            updatedGeneratedRows.forEach((g, i) => {
              const newLabel = syncedNewLabelByKey.get(`${g.tabTitle}::${g.rowNumber}`)
              if (newLabel !== undefined) updatedGeneratedRows[i] = { ...g, label: newLabel }
            })

            return { ...snapshot, rows: updatedRows, labelToNodeIds: updatedLabelToNodeIds, generatedRows: updatedGeneratedRows }
          }

          // 노드 스냅샷 갱신 (살아있는 기준 노드들)
          const allSnaps = collectAllSnapshotsOnPage(figma.currentPage, syncSpreadsheetId)
          for (const { node, snapshot } of allSnaps) {
            const u = applyToSnapshot(snapshot)
            writeSheetSnapshotOnSelection(node, u.spreadsheetId, u.rows, u.labelToNodeIds, u.generatedRows)
          }

          // 페이지 durable 스냅샷 갱신 (기준 노드 삭제 후에도 유지)
          const pageSnap = readPageSnapshot(syncSpreadsheetId)
          if (pageSnap) overwritePageSnapshot(applyToSnapshot(pageSnap))
        }
      }

      figma.notify(updated > 0 ? `✅ ${updated}개 인스턴스 동기화 완료` : '동기화할 인스턴스를 찾지 못했습니다.')
      figma.ui.postMessage({ type: 'sync-done', updated } satisfies PluginToUiMessage)
      return
    }

  } catch (error) {
    const message = error instanceof Error ? error.message : '알 수 없는 에러가 발생했습니다.'
    figma.notify(message, { error: true })
    figma.ui.postMessage({ type: 'error', message } satisfies PluginToUiMessage)
  }
}

