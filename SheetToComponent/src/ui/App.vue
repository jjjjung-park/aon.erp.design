<template>
  <div class="flex flex-col h-screen bg-white text-[13px] font-sans select-none">
    <header class="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
      <span class="font-semibold text-gray-900">SheetToComponent</span>
      <button
        class="text-[12px] px-2 py-1 rounded border border-gray-200 hover:bg-gray-50"
        @click="resetUi"
        title="시트·검색·행 선택 등 작업 영역을 비웁니다. API 키·최근 URL은 유지됩니다."
      >
        초기화
      </button>
    </header>

    <main class="flex-1 overflow-y-auto p-4 space-y-4">
      <!-- 1) Sheet -->
      <section class="space-y-2">
        <div class="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">1) 시트 호출</div>
        <p class="text-[10px] text-gray-500 leading-relaxed">
          시트 호출 시 탭 목록과 함께 전체 탭의 label/value 행을 한 번에 불러옵니다. 탭 범위에서 특정 탭만 고르면 해당 탭만 다시 조회합니다.
        </p>
        <div class="flex items-center gap-2">
          <select
            v-model="urlChoice"
            class="flex-1 min-w-0 text-xs px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            @change="applyUrlChoice"
          >
            <option value="manual">직접입력</option>
            <option v-for="s in recentSheets" :key="s.url" :value="s.url">
              {{ s.title }}
            </option>
          </select>
          <button
            type="button"
            class="shrink-0 px-3 py-2 text-xs rounded-md bg-gray-900 text-white hover:bg-gray-700 disabled:bg-gray-300"
            :disabled="isLoadingTabs || !sheetUrl.trim() || !apiKey.trim()"
            @click="loadTabs"
          >
            {{ invokeButtonLabel }}
          </button>
          <button
            type="button"
            class="px-3 py-2 text-xs rounded-md bg-white border border-gray-300 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400"
            :disabled="isLoadingTabs || isSearching || isGenerating || recentSheets.length === 0"
            @click="clearRecentUrls"
            title="최근 시트 목록 비우기"
          >
            목록 비우기
          </button>
        </div>

       

        <input
          v-if="urlChoice === 'manual'"
          v-model="sheetUrl"
          type="text"
          placeholder="https://docs.google.com/spreadsheets/d/..."
          class="w-full text-xs px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
         <label v-if="apiKey.trim()" class="flex items-center gap-2 text-xs text-gray-600 cursor-pointer w-fit">
          <input v-model="changeApiKey" type="checkbox" class="shrink-0" />
          API 키 변경
        </label>
        <input
          v-if="showApiKeyInput"
          v-model="apiKey"
          type="password"
          placeholder="Google API Key (AIza...)"
          class="w-full text-xs px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div class="flex flex-col gap-1">
          <label class="text-xs font-medium text-gray-700">탭 범위</label>
          <select
            v-model="tabScope"
            class="w-full text-xs px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
            :disabled="tabs.length === 0"
            @change="onTabScopeChange"
          >
            <option value="">전체 탭</option>
            <option v-for="t in tabs" :key="t.sheetId" :value="t.title">{{ t.title }}</option>
          </select>
          <p class="text-[10px] text-gray-500">특정 탭만 선택하면 그 탭 행만 다시 불러옵니다. 전체 탭으로 돌리면 시트 호출 때 모아 둔 전체 행 목록을 다시 보여 줍니다.</p>
        </div>
      </section>

      <!-- 2) Keyword search -->
      <section class="space-y-2 pt-3 border-t border-gray-100">
        <div class="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">2) 키워드 검색</div>
        <div class="flex gap-2">
          <input
            v-model="keyword"
            type="text"
            placeholder="name/type/label/value/description에서 검색"
            class="flex-1 text-xs px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            @keydown.enter.prevent="onKeywordEnter"
          />
          <button
            class="px-3 py-2 text-xs rounded-md bg-gray-900 text-white hover:bg-gray-700 disabled:bg-gray-300"
            :disabled="isSearching || isLoadingTabRows || !sheetUrl.trim() || !apiKey.trim() || (!keyword.trim() && cachedAllTabRows.length === 0 && !tabScope)"
            @click="search"
          >
            {{ isSearching ? '검색 중...' : '검색' }}
          </button>
        </div>

        <div v-if="rows.length" class="space-y-2">
          <div class="flex items-center justify-between">
            <div class="text-xs text-gray-600">
              결과 {{ rows.length }}개 / 선택 {{ selectedRowIds.size }}개
            </div>
            <div class="flex items-center gap-2">
              <button
                v-if="detectedLabelChanges.length > 0"
                class="text-[11px] px-2 py-1 rounded border border-orange-400 text-orange-700 bg-orange-50 hover:bg-orange-100"
                @click="selectChangedLabels"
              >
                수정건 선택
              </button>
              <button
                v-if="detectedNewLabels.length > 0"
                class="text-[11px] px-2 py-1 rounded border border-blue-400 text-blue-700 bg-blue-50 hover:bg-blue-100"
                @click="selectNewLabels"
              >
                신규 선택
              </button>
              <button
                class="text-[11px] px-2 py-1 rounded border border-gray-200 hover:bg-gray-50"
                @click="selectAll"
              >
                전체선택
              </button>
              <button
                class="text-[11px] px-2 py-1 rounded border border-gray-200 hover:bg-gray-50"
                @click="clearSelected"
              >
                선택해제
              </button>
            </div>
          </div>

          <div class="max-h-60 overflow-auto border border-gray-200 rounded-lg">
            <label
              v-for="r in rows"
              :key="rowId(r)"
              :class="[
                'flex items-start gap-2 px-3 py-2 border-b border-gray-100 last:border-b-0 hover:bg-gray-50',
                labelChangedSet.has(`${r.tabTitle}::${r.rowNumber}`) ? 'bg-orange-50' : ''
              ]"
            >
              <input
                type="checkbox"
                class="mt-1"
                :checked="selectedRowIds.has(rowId(r))"
                @change="toggleRow(r)"
              />
              <div class="min-w-0 flex-1">
                <div class="flex items-center gap-1.5 truncate">
                  <span class="text-[12px] font-semibold text-gray-800 truncate">
                    <template v-if="keyword.trim()">
                      <span
                        v-for="(part, pi) in splitByKeyword(r.label || r.name || '(no label)', keyword)"
                        :key="pi"
                        :class="part.match ? 'text-blue-500' : ''"
                      >{{ part.text }}</span>
                    </template>
                    <template v-else>{{ r.label || r.name || '(no label)' }}</template>
                  </span>
                  <span class="text-[11px] text-gray-400 font-normal shrink-0">({{ r.tabTitle }} / {{ r.rowNumber }}행)</span>
                  <span
                    v-if="labelChangedSet.has(`${r.tabTitle}::${r.rowNumber}`)"
                    class="shrink-0 text-[9px] font-bold px-1 py-0.5 rounded bg-orange-500 text-white leading-none"
                  >label 변경</span>
                  <span
                    v-if="labelAddedSet.has(`${r.tabTitle}::${r.rowNumber}`)"
                    class="shrink-0 text-[9px] font-bold px-1 py-0.5 rounded bg-blue-500 text-white leading-none"
                  >신규</span>
                </div>
                <div class="text-[11px] text-gray-500 truncate">value:
                  <template v-if="keyword.trim()">
                    <span
                      v-for="(part, pi) in splitByKeyword(r.value, keyword)"
                      :key="pi"
                      :class="part.match ? 'text-blue-500' : ''"
                    >{{ part.text }}</span>
                  </template>
                  <template v-else>{{ r.value }}</template>
                </div>
                <div v-if="r.description" class="text-[11px] text-gray-400 truncate">desc: {{ r.description }}</div>
              </div>
            </label>
          </div>

          <!-- 선택된 항목 label 태그 목록 -->
          <div v-if="selectedRows.length > 0" class="flex flex-wrap gap-1 pt-1">
            <span
              v-for="r in selectedRows"
              :key="rowId(r)"
              class="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200"
            >
              {{ r.label || r.name || '(no label)' }}
              <button
                type="button"
                class="text-gray-400 hover:text-gray-600 leading-none"
                @click.prevent="toggleRow(r)"
              >✕</button>
            </span>
          </div>
        </div>
      </section>

      <!-- 3) Selection + property mapping -->
      <section class="space-y-2 pt-3 border-t border-gray-100">
        <div class="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">3) 연결 대상(선택)</div>
        <div class="p-3 rounded-lg border"
          :class="selection ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'">
          <template v-if="selection">
            <div class="text-[12px] font-semibold text-blue-800 truncate">{{ selection.name }}</div>
            <div class="text-[11px] text-blue-600 mt-0.5">
              {{ selection.kind }} / TEXT 프로퍼티 {{ selection.textProperties.length }}개
            </div>
            <p
              v-if="duplicatedSheetLabels.length > 0"
              class="mt-2 text-[11px] text-amber-800 leading-relaxed"
            >
              중복된 label명이 있습니다 : {{ duplicatedSheetLabels.join(', ') }}
            </p>
          </template>
          <div v-else class="text-[12px] text-gray-500">
            인스턴스(또는 인스턴스를 포함한 레이어)를 선택해주세요.
          </div>
        </div>
        <div class="text-[12px] text-gray-600">
          <div class="font-semibold text-gray-700 mb-1">자동 연결 규칙</div>
          <div class="text-[11px] text-gray-500 leading-5">
            선택한 컨테이너/인스턴스 내부 인스턴스의 TEXT 프로퍼티 중
            <code class="text-[10px] bg-gray-100 px-1 rounded">label</code>,
            <code class="text-[10px] bg-gray-100 px-1 rounded">value</code>,
            <code class="text-[10px] bg-gray-100 px-1 rounded">description</code>
            이 존재하면 각각 시트의 값으로 자동 연결합니다. (2개 이상 있어도 각각 연결)
          </div>
        </div>

      </section>

      <p v-if="statusMessage" class="text-xs text-gray-500">{{ statusMessage }}</p>
      <p v-if="errorMessage" class="text-xs text-red-600">{{ errorMessage }}</p>
    </main>

    <footer class="px-4 py-3 border-t border-gray-200">
      <p
        v-if="showNoMatchingPropsWarning"
        class="text-xs text-red-600 mb-2"
      >
        일치하는 프로퍼티가 없습니다
      </p>
      <div class="flex gap-2">
        <button
          class="flex-1 py-2.5 rounded-lg font-semibold text-[13px] transition-colors bg-gray-900 text-white hover:bg-gray-700 disabled:bg-gray-300"
          :disabled="!canGenerate || isGenerating"
          @click="connectAndGenerate"
        >
          {{
            isGenerating
              ? '생성/연결 중...'
              : hasDuplicateLabelsInSelection
                ? `${selectedRowIds.size}개 기존 인스턴스에 연결`
                : `${selectedRowIds.size}개 생성 및 연결`
          }}
        </button>
        <button
          v-if="canSync || isSyncing"
          class="flex-1 py-2.5 rounded-lg font-semibold text-[13px] transition-colors border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400"
          :disabled="isSyncing"
          @click="syncSelectedRows"
        >
          {{ isSyncing ? '동기화 중...' : `⚡ ${selectedRowIds.size}개 동기화` }}
        </button>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'

type SheetRow = {
  tabTitle: string
  rowNumber: number
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
  hasMappableSheetProps: boolean
}

type SheetDiffItem = {
  label: string
  tabTitle: string
  rowNumber: number
  name: string
  value: string
  previousValue?: string
}

type SheetLabelChangedItem = {
  oldLabel: string
  newLabel: string
  tabTitle: string
  rowNumber: number
  value: string
}

type SheetLabelNewItem = {
  tabTitle: string
  rowNumber: number
  label: string
  value: string
}

type SheetDiffPayload = {
  hasSnapshot: boolean
  sameSpreadsheet: boolean
  added: SheetDiffItem[]
  deleted: SheetDiffItem[]
  valueChanged: SheetDiffItem[]
  labelChanged: SheetLabelChangedItem[]
}

type RecentSheet = { url: string; title: string }

const sheetUrl = ref('')
const apiKey = ref('')
const changeApiKey = ref(false)
/** 저장된 API 키가 없거나 "API 키 변경" 체크 시 입력칸 표시 */
const showApiKeyInput = computed(() => !apiKey.value.trim() || changeApiKey.value)
const recentSheets = ref<RecentSheet[]>([])
const urlChoice = ref<'manual' | string>('manual')
/** 시트 호출(탭 목록)에 성공한 URL — 버튼 문구 전환용 */
const lastSuccessfulInvokeUrl = ref('')
const tabs = ref<{ sheetId: number; title: string }[]>([])
const tabScope = ref('') // '' = 전체 탭

const keyword = ref('')
const rows = ref<SheetRow[]>([])
/** 시트 호출(list-tabs)로 불러온 전체 탭 병합 행 — 탭 범위「전체 탭」 복귀 시 복원 */
const cachedAllTabRows = ref<SheetRow[]>([])
const selectedRowIds = ref<Set<string>>(new Set())

const selection = ref<SelectionInfo | null>(null)

const sheetDiff = ref<SheetDiffPayload | null>(null)
const diffAcknowledged = ref(false)
let sheetDiffDebounce: ReturnType<typeof setTimeout> | null = null

/** 시트 호출 시 스냅샷 대비 label이 바뀐 항목 전체 (oldLabel 포함) */
const detectedLabelChanges = ref<SheetLabelChangedItem[]>([])
/** 시트 호출 시 스냅샷 대비 label이 바뀐 행의 "tabTitle::rowNumber" 키 집합 (UI 표시용) */
const labelChangedSet = computed(() =>
  new Set(detectedLabelChanges.value.map((it) => `${it.tabTitle}::${it.rowNumber}`))
)

/** 시트 호출 시 스냅샷에 없던 신규 행 */
const detectedNewLabels = ref<SheetLabelNewItem[]>([])
/** 신규 행의 "tabTitle::rowNumber" 키 집합 (UI 표시용) */
const labelAddedSet = computed(() =>
  new Set(detectedNewLabels.value.map((it) => `${it.tabTitle}::${it.rowNumber}`))
)

const isLoadingTabs = ref(false)
const isSearching = ref(false)
const isGenerating = ref(false)
const isLoadingTabRows = ref(false)
const isSyncing = ref(false)
const statusMessage = ref('')
const errorMessage = ref('')

function normalizeKey(s: string): string {
  return String(s ?? '')
    .trim()
    .toLowerCase()
    .replace(/[#()[\]{}]/g, ' ')
    .replace(/[_\-\s]+/g, '')
}

function levenshtein(a: string, b: string): number {
  const s = a ?? ''
  const t = b ?? ''
  const m = s.length
  const n = t.length
  if (m === 0) return n
  if (n === 0) return m

  const dp = new Array<number>(n + 1)
  for (let j = 0; j <= n; j += 1) dp[j] = j

  for (let i = 1; i <= m; i += 1) {
    let prev = dp[0]
    dp[0] = i
    for (let j = 1; j <= n; j += 1) {
      const tmp = dp[j]
      const cost = s[i - 1] === t[j - 1] ? 0 : 1
      dp[j] = Math.min(
        dp[j] + 1, // deletion
        dp[j - 1] + 1, // insertion
        prev + cost, // substitution
      )
      prev = tmp
    }
  }
  return dp[n]
}

function similarityScore(rawProp: string, rawTarget: string): number {
  const prop = normalizeKey(rawProp)
  const target = normalizeKey(rawTarget)
  if (!prop || !target) return 0
  if (prop === target) return 1
  if (prop.includes(target) || target.includes(prop)) return 0.92

  const dist = levenshtein(prop, target)
  const maxLen = Math.max(prop.length, target.length)
  if (maxLen === 0) return 0
  return 1 - dist / maxLen
}

function pickBestDistinct(
  propNames: string[],
  targetAliases: string[],
  used: Set<string>,
  threshold = 0.6,
): string {
  let best = ''
  let bestScore = 0
  for (const p of propNames) {
    if (used.has(p)) continue
    let score = 0
    for (const a of targetAliases) {
      score = Math.max(score, similarityScore(p, a))
    }
    if (score > bestScore) {
      bestScore = score
      best = p
    }
  }
  if (best && bestScore >= threshold) return best
  return ''
}

function autoMatchMapping() {
  const props = selection.value?.textProperties?.map(p => p.name) ?? []
  if (props.length === 0) return

  const used = new Set<string>()
  const labelProp = pickBestDistinct(props, ['label', 'title', 'name', 'key', 'header'], used, 0.55)
  if (labelProp) used.add(labelProp)

  const valueProp = pickBestDistinct(props, ['value', 'content', 'text', 'body'], used, 0.55)
  if (valueProp) used.add(valueProp)

  const descriptionProp = pickBestDistinct(props, ['description', 'desc', 'helper', 'hint', 'subtitle', 'note'], used, 0.55)
  if (descriptionProp) used.add(descriptionProp)

  // UI 매핑 선택은 제거됐지만, 기존 로직은 남겨둠(향후 자동 가이드용 확장 가능)
  void labelProp
  void valueProp
  void descriptionProp
}

function rowId(r: SheetRow) {
  return `${r.tabTitle}::${r.rowNumber}::${r.name}::${r.label}`
}

/** 텍스트를 키워드 기준으로 분할 — 매칭 부분과 비매칭 부분 교대로 반환 */
/** 텍스트를 키워드(들) 기준으로 분할 — 쉼표로 구분된 복수 키워드 지원, 매칭 부분과 비매칭 부분 교대로 반환 */
function splitByKeyword(text: string, kw: string): { text: string; match: boolean }[] {
  const keywords = kw.split(',').map((k) => k.trim().toLowerCase()).filter(Boolean)
  if (keywords.length === 0) return [{ text, match: false }]

  // 모든 키워드의 매칭 구간 수집
  const lower = text.toLowerCase()
  const ranges: { start: number; end: number }[] = []
  for (const k of keywords) {
    let idx = 0
    while (idx < lower.length) {
      const found = lower.indexOf(k, idx)
      if (found === -1) break
      ranges.push({ start: found, end: found + k.length })
      idx = found + k.length
    }
  }

  if (ranges.length === 0) return [{ text, match: false }]

  // 범위 정렬 및 병합 (겹치는 구간 합치기)
  ranges.sort((a, b) => a.start - b.start)
  const merged: { start: number; end: number }[] = []
  for (const r of ranges) {
    if (merged.length === 0 || r.start >= merged[merged.length - 1].end) {
      merged.push({ ...r })
    } else {
      merged[merged.length - 1].end = Math.max(merged[merged.length - 1].end, r.end)
    }
  }

  // 텍스트 분할
  const result: { text: string; match: boolean }[] = []
  let pos = 0
  for (const { start, end } of merged) {
    if (pos < start) result.push({ text: text.slice(pos, start), match: false })
    result.push({ text: text.slice(start, end), match: true })
    pos = end
  }
  if (pos < text.length) result.push({ text: text.slice(pos), match: false })

  return result
}

function plainSheetRows(list: SheetRow[]): SheetRow[] {
  return list.map((r) => ({
    tabTitle: r.tabTitle,
    rowNumber: r.rowNumber,
    name: r.name,
    type: r.type,
    label: r.label,
    value: r.value,
    description: r.description,
  }))
}

function scheduleSheetDiffRequest() {
  if (sheetDiffDebounce) clearTimeout(sheetDiffDebounce)
  sheetDiffDebounce = setTimeout(() => {
    sheetDiffDebounce = null
    if (!sheetUrl.value.trim()) {
      sheetDiff.value = null
      diffAcknowledged.value = false
      return
    }
    if (!selection.value || rows.value.length === 0) {
      sheetDiff.value = null
      diffAcknowledged.value = false
      return
    }
    parent.postMessage(
      {
        pluginMessage: {
          type: 'sheet-diff-request',
          url: sheetUrl.value,
          currentRows: plainSheetRows(rows.value),
        },
      },
      '*',
    )
  }, 120)
}

function refreshSelection() {
  parent.postMessage({ pluginMessage: { type: 'get-selection' } }, '*')
}

/** 시트 입력·탭·검색·결과·선택 행·메시지 초기화. API 키·최근 URL은 유지 후 현재 피그마 선택만 다시 동기화 */
function resetUi() {
  urlChoice.value = 'manual'
  sheetUrl.value = ''
  changeApiKey.value = false
  tabs.value = []
  tabScope.value = ''
  keyword.value = ''
  rows.value = []
  cachedAllTabRows.value = []
  selectedRowIds.value = new Set()
  lastSuccessfulInvokeUrl.value = ''
  errorMessage.value = ''
  statusMessage.value = '작업 영역을 초기화했습니다.'
  isLoadingTabs.value = false
  isLoadingTabRows.value = false
  isSearching.value = false
  isGenerating.value = false
  sheetDiff.value = null
  diffAcknowledged.value = false
  detectedLabelChanges.value = []
  refreshSelection()
}

/** 시트(URL) 컨텍스트가 바뀌면 탭·목록·검색어 초기화 */
function clearSheetDerivedUi() {
  tabs.value = []
  tabScope.value = ''
  rows.value = []
  cachedAllTabRows.value = []
  selectedRowIds.value = new Set()
  keyword.value = ''
  lastSuccessfulInvokeUrl.value = ''
  statusMessage.value = ''
  errorMessage.value = ''
  sheetDiff.value = null
  diffAcknowledged.value = false
  detectedLabelChanges.value = []
}

function applyUrlChoice() {
  if (urlChoice.value === 'manual') {
    clearSheetDerivedUi()
    return
  }
  sheetUrl.value = urlChoice.value
  clearSheetDerivedUi()
}

let sheetUrlDebounce: ReturnType<typeof setTimeout> | null = null
watch(sheetUrl, (_val, prev) => {
  if (urlChoice.value !== 'manual') return
  if (prev === undefined) return
  if (sheetUrlDebounce) clearTimeout(sheetUrlDebounce)
  sheetUrlDebounce = setTimeout(() => {
    sheetUrlDebounce = null
    clearSheetDerivedUi()
  }, 450)
})

const invokeButtonLabel = computed(() => {
  if (isLoadingTabs.value) return '호출 중...'
  const u = sheetUrl.value.trim()
  if (u && lastSuccessfulInvokeUrl.value === u && tabs.value.length > 0) return '시트 호출'
  return '호출하기'
})

function clearRecentUrls() {
  parent.postMessage({ pluginMessage: { type: 'clear-recent-urls' } }, '*')
}

function loadTabs() {
  errorMessage.value = ''
  statusMessage.value = ''
  lastSuccessfulInvokeUrl.value = ''
  tabs.value = []
  tabScope.value = ''
  rows.value = []
  cachedAllTabRows.value = []
  selectedRowIds.value = new Set()
  isLoadingTabs.value = true
  parent.postMessage({ pluginMessage: { type: 'list-tabs', url: sheetUrl.value, apiKey: apiKey.value } }, '*')
}

function onTabScopeChange() {
  if (!sheetUrl.value.trim() || !apiKey.value.trim()) return
  errorMessage.value = ''
  statusMessage.value = ''
  if (!tabScope.value) {
    rows.value = cachedAllTabRows.value.length ? [...cachedAllTabRows.value] : []
    selectedRowIds.value = new Set()
    statusMessage.value = cachedAllTabRows.value.length
      ? `전체 탭 ${cachedAllTabRows.value.length}개 행`
      : '시트 호출 후 전체 탭 목록이 여기에 표시됩니다.'
    return
  }
  isLoadingTabRows.value = true
  parent.postMessage({
    pluginMessage: {
      type: 'load-tab-rows',
      url: sheetUrl.value,
      apiKey: apiKey.value,
      tabTitle: tabScope.value,
    },
  }, '*')
}

function search() {
  errorMessage.value = ''
  statusMessage.value = ''

  // 유효한 키워드가 없으면 (빈 입력 또는 쉼표만 입력) 전체 결과로 복원
  const validKeywords = keyword.value.split(',').map((k) => k.trim()).filter(Boolean)
  if (validKeywords.length === 0) {
    selectedRowIds.value = new Set()
    if (tabScope.value) {
      // 특정 탭 선택 중이면 해당 탭 재호출
      isLoadingTabRows.value = true
      parent.postMessage({
        pluginMessage: {
          type: 'load-tab-rows',
          url: sheetUrl.value,
          apiKey: apiKey.value,
          tabTitle: tabScope.value,
        },
      }, '*')
    } else if (cachedAllTabRows.value.length > 0) {
      // 전체 탭 캐시가 있으면 바로 복원
      rows.value = [...cachedAllTabRows.value]
      statusMessage.value = `전체 ${cachedAllTabRows.value.length}개 행`
    }
    return
  }

  isSearching.value = true
  parent.postMessage({
    pluginMessage: {
      type: 'search',
      url: sheetUrl.value,
      apiKey: apiKey.value,
      keyword: keyword.value,
      tabTitle: tabScope.value || undefined,
    },
  }, '*')
}

function onKeywordEnter() {
  if (isSearching.value || isLoadingTabRows.value || !sheetUrl.value.trim() || !apiKey.value.trim()) return
  // 키워드가 있으면 검색, 비어 있으면 전체 복원 (단, 데이터가 로드된 상태일 때만)
  if (keyword.value.trim() || cachedAllTabRows.value.length > 0 || tabScope.value) search()
}


function toggleRow(r: SheetRow) {
  const id = rowId(r)
  const next = new Set(selectedRowIds.value)
  if (next.has(id)) next.delete(id)
  else next.add(id)
  selectedRowIds.value = next
}

function selectChangedLabels() {
  const changedKeys = labelChangedSet.value
  selectedRowIds.value = new Set(
    rows.value.filter((r) => changedKeys.has(`${r.tabTitle}::${r.rowNumber}`)).map(rowId)
  )
}

function selectNewLabels() {
  const addedKeys = labelAddedSet.value
  selectedRowIds.value = new Set(
    rows.value.filter((r) => addedKeys.has(`${r.tabTitle}::${r.rowNumber}`)).map(rowId)
  )
}

function selectAll() {
  selectedRowIds.value = new Set(rows.value.map(rowId))
}

function clearSelected() {
  selectedRowIds.value = new Set()
}

const selectedRows = computed(() => {
  const ids = selectedRowIds.value
  return rows.value.filter((r) => ids.has(rowId(r)))
})

const diffChangeCount = computed(() => {
  const d = sheetDiff.value
  if (!d) return 0
  return d.added.length + d.deleted.length + d.valueChanged.length + d.labelChanged.length
})

/** 같은 스프레드시트 스냅샷이 있고 label/value 변경이 있을 때만 확인 필수 */
const diffRequiresAck = computed(() => {
  const d = sheetDiff.value
  if (!d || !d.hasSnapshot || !d.sameSpreadsheet) return false
  return diffChangeCount.value > 0
})

/**
 * 동기화 버튼 활성 조건:
 * 1. label 변경이 감지된 행이 존재
 * 2. 선택된 행 중 label이 변경된 행이 1개 이상 포함
 */
const canSync = computed(() => {
  if (detectedLabelChanges.value.length === 0) return false
  const changedKeys = labelChangedSet.value
  return selectedRows.value.some((r) => changedKeys.has(`${r.tabTitle}::${r.rowNumber}`))
})

/** 플러그인과 동일: 선택 서브트리 전체에서 TEXT label/value/description 매핑 가능 여부 */
const hasAnyMatchingProps = computed(() => selection.value?.hasMappableSheetProps === true)

const showNoMatchingPropsWarning = computed(() => {
  if (!selection.value) return false
  return !hasAnyMatchingProps.value
})

/** 시트 label 열 값이 선택 행에서 2회 이상 등장한 고유값 */
const duplicatedSheetLabels = computed(() => {
  const counts = new Map<string, number>()
  for (const r of selectedRows.value) {
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
})

const hasDuplicateLabelsInSelection = computed(() => duplicatedSheetLabels.value.length > 0)

const canGenerate = computed(() => {
  if (!selection.value) return false
  if (selectedRows.value.length === 0) return false
  if (!hasAnyMatchingProps.value) return false
  return true
})

function syncSelectedRows() {
  if (selectedRowIds.value.size === 0) return

  // 선택된 행 중 label이 바뀐 항목만 추출 (tabTitle+rowNumber 기준으로 매칭)
  const selectedKeys = new Set(
    selectedRows.value.map((r) => `${r.tabTitle}::${r.rowNumber}`)
  )
  const labelChangedItems = detectedLabelChanges.value
    .filter((it) => selectedKeys.has(`${it.tabTitle}::${it.rowNumber}`))
    .map((it) => ({
      oldLabel: it.oldLabel,
      newLabel: it.newLabel,
      tabTitle: it.tabTitle,
      rowNumber: it.rowNumber,
      value: it.value,
    }))

  if (labelChangedItems.length === 0) {
    statusMessage.value = '선택한 행 중 변경된 label이 없습니다.'
    return
  }

  isSyncing.value = true
  errorMessage.value = ''
  statusMessage.value = ''
  parent.postMessage({
    pluginMessage: { type: 'sync-value-changes', valueChangedItems: [], labelChangedItems, url: sheetUrl.value },
  }, '*')
}

function syncValueChanges() {
  const diff = sheetDiff.value
  if (!diff) return
  const hasChanges = diff.valueChanged.length > 0 || diff.labelChanged.length > 0
  if (!hasChanges) return
  isSyncing.value = true
  errorMessage.value = ''
  statusMessage.value = ''
  const valueChangedItems = diff.valueChanged.map((it) => ({
    label: it.label,
    tabTitle: it.tabTitle,
    rowNumber: it.rowNumber,
    name: it.name,
    value: it.value,
    previousValue: it.previousValue,
  }))
  const labelChangedItems = diff.labelChanged.map((it) => ({
    oldLabel: it.oldLabel,
    newLabel: it.newLabel,
    tabTitle: it.tabTitle,
    rowNumber: it.rowNumber,
    value: it.value,
  }))
  parent.postMessage({ pluginMessage: { type: 'sync-value-changes', valueChangedItems, labelChangedItems } }, '*')
}

function connectAndGenerate() {
  errorMessage.value = ''
  statusMessage.value = ''
  isGenerating.value = true

  // Vue reactive proxy가 postMessage 구조화 복사에서 터질 수 있어 순수 JSON으로 변환
  const keywordRows = selectedRows.value.map((r) => ({
    tabTitle: r.tabTitle,
    rowNumber: r.rowNumber,
    name: r.name,
    type: r.type,
    label: r.label,
    value: r.value,
    description: r.description,
  }))

  parent.postMessage({
    pluginMessage: {
      type: 'connect-and-generate',
      url: sheetUrl.value,
      apiKey: apiKey.value,
      keywordRows,
      snapshotRows: plainSheetRows(rows.value),
      tabScope: tabScope.value || undefined,
    },
  }, '*')
}

watch([rows, selection, sheetUrl], () => scheduleSheetDiffRequest(), { deep: true })

onMounted(() => {
  refreshSelection()
  parent.postMessage({ pluginMessage: { type: 'get-settings' } }, '*')
  window.onmessage = (event) => {
    const msg = event.data?.pluginMessage
    if (!msg) return

    if (msg.type === 'settings') {
      apiKey.value = typeof msg.apiKey === 'string' ? msg.apiKey : ''
      recentSheets.value = Array.isArray(msg.recentSheets) ? msg.recentSheets : []
      return
    }

    if (msg.type === 'selection') {
      selection.value = msg.selection ?? null
      // 선택이 바뀌면 자동 매칭(이름 유사도 기반)
      autoMatchMapping()
      scheduleSheetDiffRequest()
      return
    }

    if (msg.type === 'sheet-diff') {
      sheetDiff.value = {
        hasSnapshot: msg.hasSnapshot === true,
        sameSpreadsheet: msg.sameSpreadsheet === true,
        added: Array.isArray(msg.added) ? msg.added : [],
        deleted: Array.isArray(msg.deleted) ? msg.deleted : [],
        valueChanged: Array.isArray(msg.valueChanged) ? msg.valueChanged : [],
        labelChanged: Array.isArray(msg.labelChanged) ? msg.labelChanged : [],
      }
      diffAcknowledged.value = false
      return
    }

    if (msg.type === 'tabs') {
      isLoadingTabs.value = false
      tabs.value = Array.isArray(msg.tabs) ? msg.tabs : []
      const merged = Array.isArray(msg.rows) ? msg.rows : []
      cachedAllTabRows.value = merged
      rows.value = [...merged]
      selectedRowIds.value = new Set()
      lastSuccessfulInvokeUrl.value = sheetUrl.value.trim()
      const changed = Array.isArray(msg.labelChanged) ? msg.labelChanged : []
      detectedLabelChanges.value = changed
      detectedNewLabels.value = Array.isArray(msg.labelAdded) ? msg.labelAdded : []
      if (tabs.value.length === 0) {
        statusMessage.value = '탭을 찾지 못했습니다.'
      } else if (merged.length === 0) {
        statusMessage.value = `탭 ${tabs.value.length}개를 불러왔습니다. (행 데이터 없음 또는 일부 탭만 읽음)`
      } else {
        const changedCount = labelChangedSet.value.size
        const addedCount = labelAddedSet.value.size
        const notices = [
          changedCount > 0 ? `⚠️ label 변경 ${changedCount}건 감지` : '',
          addedCount > 0 ? `🆕 신규 ${addedCount}건 감지` : '',
        ].filter(Boolean).join(' · ')
        statusMessage.value = notices
          ? `탭 ${tabs.value.length}개 · ${merged.length}개 행 불러옴 · ${notices}`
          : `탭 ${tabs.value.length}개 · 전체 ${merged.length}개 행(label/value 등)을 불러왔습니다.`
      }
      scheduleSheetDiffRequest()
      return
    }

    if (msg.type === 'tab-rows') {
      isLoadingTabRows.value = false
      rows.value = Array.isArray(msg.rows) ? msg.rows : []
      selectedRowIds.value = new Set()
      const changed = Array.isArray(msg.labelChanged) ? msg.labelChanged : []
      detectedLabelChanges.value = changed
      detectedNewLabels.value = Array.isArray(msg.labelAdded) ? msg.labelAdded : []
      const changedCount = changed.length
      const addedCount = detectedNewLabels.value.length
      const notices = [
        changedCount > 0 ? `⚠️ label 변경 ${changedCount}건 감지` : '',
        addedCount > 0 ? `🆕 신규 ${addedCount}건 감지` : '',
      ].filter(Boolean).join(' · ')
      statusMessage.value = rows.value.length
        ? `${msg.tabTitle} 탭에서 ${rows.value.length}개 항목을 불러왔습니다.` +
          (notices ? ` · ${notices}` : '')
        : `${msg.tabTitle} 탭에 항목이 없습니다.`
      scheduleSheetDiffRequest()
      return
    }

    if (msg.type === 'search-results') {
      isSearching.value = false
      rows.value = Array.isArray(msg.rows) ? msg.rows : []
      selectedRowIds.value = new Set()
      statusMessage.value = rows.value.length ? `검색 결과 ${rows.value.length}개` : '검색 결과가 없습니다.'
      scheduleSheetDiffRequest()
      return
    }

    if (msg.type === 'sync-done') {
      isSyncing.value = false
      const count = typeof msg.updated === 'number' ? msg.updated : 0
      statusMessage.value = count > 0 ? `${count}개 인스턴스 동기화 완료` : '동기화할 인스턴스를 찾지 못했습니다.'
      scheduleSheetDiffRequest()
      return
    }

    if (msg.type === 'done') {
      isGenerating.value = false
      const applied = typeof msg.appliedInPlace === 'number' ? msg.appliedInPlace : 0
      const created = typeof msg.created === 'number' ? msg.created : 0
      if (applied > 0 && created > 0) {
        statusMessage.value = `${applied}개 기존 인스턴스 갱신 · ${created}개 복제 생성 및 연결 완료`
      } else if (applied > 0 && created === 0) {
        statusMessage.value = `${applied}개 기존 인스턴스에 연결 완료 (복제 없음)`
      } else {
        statusMessage.value = `${created}개 생성 및 연결 완료`
      }
      scheduleSheetDiffRequest()
      return
    }

    if (msg.type === 'error') {
      isLoadingTabs.value = false
      isLoadingTabRows.value = false
      isSearching.value = false
      isGenerating.value = false
      isSyncing.value = false
      errorMessage.value = msg.message ?? '에러가 발생했습니다.'
    }
  }
})
</script>
