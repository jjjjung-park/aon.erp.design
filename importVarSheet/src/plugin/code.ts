figma.showUI(__html__, { width: 420, height: 580, title: 'importVarSheet' })

type UiMessage =
  | { type: 'close' }
  | { type: 'get-settings' }
  | { type: 'clear-recent-urls' }
  | { type: 'list-tabs'; url: string; apiKey: string }
  | {
      type: 'import-sheet'
      url: string
      apiKey: string
      tabTitle: string
      useTabNameAsCollection: boolean
    }

interface SheetRow {
  name: string
  type: VariableResolvedDataType
  label: string
  value: string
}

type Settings = {
  apiKey: string
  recentUrls: string[]
}

const STORAGE_KEYS = {
  apiKey: 'importVarSheet.apiKey',
  recentUrls: 'importVarSheet.recentUrls',
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

async function translateToEnglish(text: string): Promise<string> {
  const q = text.trim()
  if (!q) return ''

  // Unofficial but widely-used endpoint (no API key). Public sheets use-case only.
  const url =
    'https://translate.googleapis.com/translate_a/single' +
    `?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURIComponent(q)}`

  const res = await fetch(url)
  if (!res.ok) throw new Error('자동 번역에 실패했습니다. 네트워크/도메인 허용을 확인해주세요.')

  const data: any = await res.json()
  // data[0] is array of translation chunks: [[translated, original, ...], ...]
  const chunks: any[] = Array.isArray(data?.[0]) ? data[0] : []
  const translated = chunks.map((c) => String(c?.[0] ?? '')).join('')
  return translated.trim()
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

function normalizeProvidedName(name: string): string {
  const trimmed = name.trim()
  if (!trimmed) return ''
  // If the sheet already provides an identifier, we still enforce camelCase as requested.
  return toCamelCaseVariableName(trimmed)
}

async function fillMissingNamesFromLabel(rows: SheetRow[]): Promise<SheetRow[]> {
  const used = new Set<string>()
  for (const r of rows) {
    const n = normalizeProvidedName(r.name)
    if (n) used.add(n)
  }

  const cache = new Map<string, string>()

  async function uniqueNameFromLabel(label: string): Promise<string> {
    const key = label.trim()
    if (!key) return 'variable'
    const cached = cache.get(key)
    if (cached) return cached

    const translated = await translateToEnglish(key)
    const base = toCamelCaseVariableName(translated || key)

    let candidate = base
    let i = 2
    while (used.has(candidate)) {
      candidate = `${base}${i}`
      i += 1
    }
    used.add(candidate)
    cache.set(key, candidate)
    return candidate
  }

  const out: SheetRow[] = []
  for (const r of rows) {
    const normalizedName = normalizeProvidedName(r.name)
    if (normalizedName.length > 0) {
      out.push({ ...r, name: normalizedName })
      continue
    }
    if (r.label.trim().length === 0) {
      // Can't generate a meaningful name; skip.
      continue
    }
    out.push({ ...r, name: await uniqueNameFromLabel(r.label) })
  }
  return out
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
  if (!res.ok) {
    throw new Error('탭 목록을 가져오지 못했습니다. API Key/권한/도메인 허용을 확인해주세요.')
  }

  const data: any = await res.json()
  const sheets: any[] = Array.isArray(data?.sheets) ? data.sheets : []
  return sheets
    .map((s) => s?.properties)
    .filter(Boolean)
    .map((p) => ({ sheetId: Number(p.sheetId), title: String(p.title) }))
}


function mapSheetTypeToVariableType(rawType: string): VariableResolvedDataType {
  const normalized = rawType.trim().toLowerCase()
  if (normalized === 'string' || normalized === 'text') return 'STRING'
  if (normalized === 'number' || normalized === 'float') return 'FLOAT'
  if (normalized === 'boolean' || normalized === 'bool') return 'BOOLEAN'
  if (normalized === 'color' || normalized === 'rgba' || normalized === 'hex') return 'COLOR'
  throw new Error(`지원하지 않는 type 값입니다: ${rawType}`)
}

function parseColorValue(value: string): RGBA {
  const hex = value.trim()
  if (/^#[0-9a-fA-F]{6}$/.test(hex)) {
    const r = parseInt(hex.slice(1, 3), 16) / 255
    const g = parseInt(hex.slice(3, 5), 16) / 255
    const b = parseInt(hex.slice(5, 7), 16) / 255
    return { r, g, b, a: 1 }
  }
  if (/^#[0-9a-fA-F]{8}$/.test(hex)) {
    const r = parseInt(hex.slice(1, 3), 16) / 255
    const g = parseInt(hex.slice(3, 5), 16) / 255
    const b = parseInt(hex.slice(5, 7), 16) / 255
    const a = parseInt(hex.slice(7, 9), 16) / 255
    return { r, g, b, a }
  }
  throw new Error(`COLOR 값은 #RRGGBB 또는 #RRGGBBAA 형식이어야 합니다: ${value}`)
}

function parseValueByType(value: string, type: VariableResolvedDataType): VariableValue {
  if (type === 'STRING') return value
  if (type === 'FLOAT') {
    const num = Number(value)
    if (Number.isNaN(num)) throw new Error(`FLOAT 값이 숫자가 아닙니다: ${value}`)
    return num
  }
  if (type === 'BOOLEAN') {
    const v = value.trim().toLowerCase()
    if (v === 'true' || v === '1' || v === 'yes') return true
    if (v === 'false' || v === '0' || v === 'no') return false
    throw new Error(`BOOLEAN 값은 true/false(또는 1/0)여야 합니다: ${value}`)
  }
  return parseColorValue(value)
}

function parseRowsFromValues(values: string[][]): SheetRow[] {
  if (!values.length) {
    throw new Error('시트에 데이터가 없습니다.')
  }
  const headers = values[0].map(v => String(v ?? '').trim().toLowerCase())
  const nameIndex = headers.indexOf('name')
  const typeIndex = headers.indexOf('type')
  const labelIndex = headers.indexOf('label')
  const valueIndex = headers.indexOf('value')

  if (nameIndex < 0 || typeIndex < 0 || labelIndex < 0 || valueIndex < 0) {
    throw new Error('첫 번째 행에서 name, type, label, value 헤더를 찾지 못했습니다.')
  }

  return values
    .slice(1)
    .map((row) => ({
      name: String(row[nameIndex] ?? '').trim(),
      type: mapSheetTypeToVariableType(String(row[typeIndex] ?? 'string')),
      label: String(row[labelIndex] ?? '').trim(),
      value: String(row[valueIndex] ?? '').trim(),
    }))
    .filter((r) => r.name.length > 0 || r.label.length > 0)
}

async function fetchSheetRowsByTabTitle(
  spreadsheetId: string,
  apiKey: string,
  tabTitle: string,
): Promise<SheetRow[]> {
  const range = `${tabTitle}!A:D`
  const url =
    `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(spreadsheetId)}` +
    `/values/${encodeURIComponent(range)}` +
    `?valueRenderOption=UNFORMATTED_VALUE&key=${encodeURIComponent(apiKey)}`

  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('시트 데이터를 가져오지 못했습니다. URL/탭 이름/권한을 확인해주세요.')
  }

  const data: any = await res.json()
  const values: unknown[][] = Array.isArray(data?.values) ? data.values : []
  return parseRowsFromValues(values.map((r) => r.map((v) => String(v ?? ''))))
}

function createVariablesFromRows(rows: SheetRow[], collectionName: string): number {
  const collection = figma.variables.createVariableCollection(collectionName)
  const mode1Id = collection.defaultModeId
  const mode2Id = collection.addMode('mode2')

  for (const row of rows) {
    const variableName = normalizeProvidedName(row.name)
    const variable = figma.variables.createVariable(variableName, collection, row.type)
    // 요구사항: label -> mode1, value -> mode2
    variable.setValueForMode(mode1Id, parseValueByType(row.label, row.type))
    variable.setValueForMode(mode2Id, parseValueByType(row.value, row.type))
  }

  return rows.length
}

figma.ui.onmessage = async (msg: UiMessage) => {
  try {
    if (msg.type === 'close') {
      figma.closePlugin()
      return
    }

    if (msg.type === 'get-settings') {
      const settings = await readSettings()
      figma.ui.postMessage({ type: 'settings', ...settings })
      return
    }

    if (msg.type === 'clear-recent-urls') {
      await writeSettings({ recentUrls: [] })
      figma.ui.postMessage({ type: 'settings', ...(await readSettings()) })
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
      figma.ui.postMessage({ type: 'tabs', tabs })
      return
    }

    if (msg.type === 'import-sheet') {
      const spreadsheetId = parseSpreadsheetId(msg.url)
      if (!spreadsheetId) throw new Error('유효한 구글 시트 URL을 입력해주세요.')
      if (!msg.apiKey.trim()) throw new Error('Google API Key를 입력해주세요.')
      if (!msg.tabTitle.trim()) throw new Error('가져올 탭을 선택해주세요.')

      const prev = await readSettings()
      await writeSettings({
        apiKey: msg.apiKey,
        recentUrls: addRecentUrl(prev.recentUrls, msg.url),
      })

      const rawRows = await fetchSheetRowsByTabTitle(spreadsheetId, msg.apiKey, msg.tabTitle)
      const rows = await fillMissingNamesFromLabel(rawRows)
      if (rows.length === 0) throw new Error('변수로 생성할 행이 없습니다.')

      const collectionName = msg.useTabNameAsCollection ? msg.tabTitle : 'Imported Variables'
      const count = createVariablesFromRows(rows, collectionName)
      figma.notify(`변수 ${count}개를 생성했습니다.`)
      figma.ui.postMessage({ type: 'import-complete', count, collectionName })
      return
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : '알 수 없는 에러가 발생했습니다.'
    figma.notify(message, { error: true })
    figma.ui.postMessage({ type: 'error', message })
  }
}
