<template>
  <div class="flex flex-col h-screen bg-white text-[13px] font-sans select-none">
    <header class="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
      <span class="font-semibold text-gray-900">SheetToComponent</span>
      <button
        class="text-[12px] px-2 py-1 rounded border border-gray-200 hover:bg-gray-50"
        @click="refreshSelection"
        title="선택 새로고침"
      >
        선택 새로고침
      </button>
    </header>

    <main class="flex-1 overflow-y-auto p-4 space-y-4">
      <!-- 1) Sheet -->
      <section class="space-y-2">
        <div class="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">1) 구글 시트</div>
        <div class="flex items-center gap-2">
          <select
            v-model="urlChoice"
            class="flex-1 min-w-0 text-xs px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            @change="applyUrlChoice"
          >
            <option value="manual">직접입력</option>
            <option v-for="u in recentUrls" :key="u" :value="u">
              {{ displayUrl(u) }}
            </option>
          </select>
          <button
            class="px-3 py-2 text-xs rounded-md bg-white border border-gray-300 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400"
            :disabled="isLoadingTabs || isSearching || isGenerating || recentUrls.length === 0"
            @click="clearRecentUrls"
            title="최근 URL 목록 비우기"
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
        <input
          v-model="apiKey"
          type="password"
          placeholder="Google API Key (AIza...)"
          class="w-full text-xs px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div class="flex items-end gap-2">
          <button
            class="px-3 py-2 text-xs rounded-md bg-white border border-gray-300 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400"
            :disabled="isLoadingTabs || !sheetUrl.trim() || !apiKey.trim()"
            @click="loadTabs"
          >
            {{ isLoadingTabs ? '탭 불러오는 중...' : '탭 불러오기' }}
          </button>
          <div class="flex-1">
            <label class="text-xs font-medium text-gray-700 block mb-1">탭 범위</label>
            <select
              v-model="tabScope"
              class="w-full text-xs px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              :disabled="tabs.length === 0"
              @change="onTabScopeChange"
            >
              <option value="">전체 탭</option>
              <option v-for="t in tabs" :key="t.sheetId" :value="t.title">{{ t.title }}</option>
            </select>
          </div>
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
          />
          <button
            class="px-3 py-2 text-xs rounded-md bg-gray-900 text-white hover:bg-gray-700 disabled:bg-gray-300"
            :disabled="isSearching || !sheetUrl.trim() || !apiKey.trim() || !keyword.trim()"
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

          <div class="max-h-44 overflow-auto border border-gray-200 rounded-lg">
            <label
              v-for="r in rows"
              :key="rowId(r)"
              class="flex items-start gap-2 px-3 py-2 border-b border-gray-100 last:border-b-0 hover:bg-gray-50"
            >
              <input
                type="checkbox"
                class="mt-1"
                :checked="selectedRowIds.has(rowId(r))"
                @change="toggleRow(r)"
              />
              <div class="min-w-0">
                <div class="text-[12px] font-semibold text-gray-800 truncate">
                  {{ r.label || r.name || '(no label)' }}
                  <span class="text-[11px] text-gray-400 font-normal">({{ r.tabTitle }} / {{ r.rowNumber }}행)</span>
                </div>
                <div class="text-[11px] text-gray-500 truncate">value: {{ r.value }}</div>
                <div v-if="r.description" class="text-[11px] text-gray-400 truncate">desc: {{ r.description }}</div>
              </div>
            </label>
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
            <div
              v-if="applyInstances.length > 0"
              class="mt-2 pt-2 border-t border-blue-200/80 space-y-1.5"
            >
              <div class="text-[11px] font-semibold text-blue-900">플러그인 적용 기록</div>
              <p class="text-[10px] text-blue-700/90 leading-relaxed">
                이 플러그인으로 값을 넣은 인스턴스 {{ applyInstances.length }}개 · 마지막 적용 시점의 시트 행이 노드에 저장됩니다.
              </p>
              <ul class="max-h-28 overflow-y-auto space-y-1 text-[10px] text-blue-800">
                <li
                  v-for="a in applyInstances.slice(0, 8)"
                  :key="a.instanceId"
                  class="leading-snug pl-1 border-l-2 border-blue-300"
                >
                  <span class="font-medium">{{ a.instanceName }}</span>
                  · {{ a.tabTitle }} {{ a.rowNumber }}행 · name {{ a.rowName || '—' }}
                  <span v-if="a.sheetLabel" class="text-blue-600"> · 시트 label「{{ a.sheetLabel }}」</span>
                </li>
              </ul>
              <p v-if="applyInstances.length > 8" class="text-[10px] text-blue-600">
                외 {{ applyInstances.length - 8 }}개…
              </p>
            </div>
            <div
              v-if="hasApplyDrift"
              class="mt-2 p-2 rounded-md bg-amber-50 border border-amber-200 text-[11px] text-amber-900 leading-relaxed"
            >
              <span class="font-semibold">적용 이후 피그마에서 값이 바뀌었습니다.</span>
              변경된 항목의 시트 label:
              <span class="font-medium">{{ driftedSheetLabels.join(', ') }}</span>
            </div>
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

        <div class="pt-2">
          <label class="text-xs font-medium text-gray-700 block mb-1">복제 배치</label>
          <select
            v-model="generateLayout"
            class="w-full text-xs px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="below">아래로 (세로)</option>
            <option value="right">오른쪽으로 (가로)</option>
          </select>
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
      <button
        class="w-full py-2.5 rounded-lg font-semibold text-[13px] transition-colors bg-gray-900 text-white hover:bg-gray-700 disabled:bg-gray-300"
        :disabled="!canGenerate || isGenerating"
        @click="connectAndGenerate"
      >
        {{ isGenerating ? '생성/연결 중...' : `${selectedRowIds.size}개 생성 및 연결` }}
      </button>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

type SheetRow = {
  tabTitle: string
  rowNumber: number
  name: string
  type: string
  label: string
  value: string
  description: string
}

type InstanceApplyTracking = {
  instanceId: string
  instanceName: string
  tabTitle: string
  rowNumber: number
  rowName: string
  sheetLabel: string
  appliedProps: ('label' | 'value' | 'description')[]
  driftedProps: ('label' | 'value' | 'description')[]
}

type SelectionInfo = {
  nodeId: string
  name: string
  kind: 'INSTANCE' | 'COMPONENT' | 'CONTAINER' | 'UNSUPPORTED'
  textProperties: { name: string }[]
  applyTracking?: { instances: InstanceApplyTracking[] }
}

const sheetUrl = ref('')
const apiKey = ref('')
const recentUrls = ref<string[]>([])
const urlChoice = ref<'manual' | string>('manual')
const tabs = ref<{ sheetId: number; title: string }[]>([])
const tabScope = ref('') // '' = 전체 탭

const keyword = ref('')
const rows = ref<SheetRow[]>([])
const selectedRowIds = ref<Set<string>>(new Set())

const selection = ref<SelectionInfo | null>(null)
const generateLayout = ref<'below' | 'right'>('below')

const isLoadingTabs = ref(false)
const isSearching = ref(false)
const isGenerating = ref(false)
const isLoadingTabRows = ref(false)
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

function displayUrl(url: string) {
  const u = String(url ?? '')
  const max = 42
  if (u.length <= max) return u
  const head = u.slice(0, 20)
  const tail = u.slice(-16)
  return `${head}…${tail}`
}

function refreshSelection() {
  parent.postMessage({ pluginMessage: { type: 'get-selection' } }, '*')
}

function applyUrlChoice() {
  if (urlChoice.value === 'manual') return
  sheetUrl.value = urlChoice.value
  tabs.value = []
  tabScope.value = ''
  statusMessage.value = ''
  errorMessage.value = ''
}

function clearRecentUrls() {
  parent.postMessage({ pluginMessage: { type: 'clear-recent-urls' } }, '*')
}

function loadTabs() {
  errorMessage.value = ''
  statusMessage.value = ''
  isLoadingTabs.value = true
  parent.postMessage({ pluginMessage: { type: 'list-tabs', url: sheetUrl.value, apiKey: apiKey.value } }, '*')
}

function onTabScopeChange() {
  // 특정 탭을 선택하면 키워드 없이도 해당 탭 전체 행을 노출
  if (!tabScope.value) return
  if (!sheetUrl.value.trim() || !apiKey.value.trim()) return
  errorMessage.value = ''
  statusMessage.value = ''
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

function toggleRow(r: SheetRow) {
  const id = rowId(r)
  const next = new Set(selectedRowIds.value)
  if (next.has(id)) next.delete(id)
  else next.add(id)
  selectedRowIds.value = next
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

const hasAnyMatchingProps = computed(() => {
  const props = selection.value?.textProperties ?? []
  const set = new Set(props.map(p => String(p.name ?? '').trim().toLowerCase()))
  return set.has('label') || set.has('value') || set.has('description')
})

const showNoMatchingPropsWarning = computed(() => {
  if (!selection.value) return false
  return !hasAnyMatchingProps.value
})

const applyInstances = computed(() => selection.value?.applyTracking?.instances ?? [])

const driftedSheetLabels = computed(() => {
  const list = applyInstances.value.filter((i) => i.driftedProps.length > 0)
  const labels: string[] = []
  const seen = new Set<string>()
  for (const i of list) {
    const lab = String(i.sheetLabel ?? '').trim() || String(i.rowName ?? '').trim() || '(이름 없음)'
    if (seen.has(lab)) continue
    seen.add(lab)
    labels.push(lab)
  }
  return labels
})

const hasApplyDrift = computed(() => driftedSheetLabels.value.length > 0)

const canGenerate = computed(() => {
  if (!selection.value) return false
  if (selectedRows.value.length === 0) return false
  if (!hasAnyMatchingProps.value) return false
  return true
})

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
      tabScope: tabScope.value || undefined,
      generateLayout: generateLayout.value,
    },
  }, '*')
}

onMounted(() => {
  refreshSelection()
  parent.postMessage({ pluginMessage: { type: 'get-settings' } }, '*')
  window.onmessage = (event) => {
    const msg = event.data?.pluginMessage
    if (!msg) return

    if (msg.type === 'settings') {
      apiKey.value = typeof msg.apiKey === 'string' ? msg.apiKey : ''
      recentUrls.value = Array.isArray(msg.recentUrls) ? msg.recentUrls : []
      urlChoice.value = 'manual'
      return
    }

    if (msg.type === 'selection') {
      selection.value = msg.selection ?? null
      // 선택이 바뀌면 자동 매칭(이름 유사도 기반)
      autoMatchMapping()
      return
    }

    if (msg.type === 'tabs') {
      isLoadingTabs.value = false
      tabs.value = Array.isArray(msg.tabs) ? msg.tabs : []
      statusMessage.value = tabs.value.length ? `탭 ${tabs.value.length}개를 불러왔습니다.` : '탭을 찾지 못했습니다.'
      return
    }

    if (msg.type === 'tab-rows') {
      isLoadingTabRows.value = false
      rows.value = Array.isArray(msg.rows) ? msg.rows : []
      selectedRowIds.value = new Set()
      statusMessage.value = rows.value.length
        ? `${msg.tabTitle} 탭에서 ${rows.value.length}개 항목을 불러왔습니다.`
        : `${msg.tabTitle} 탭에 항목이 없습니다.`
      return
    }

    if (msg.type === 'search-results') {
      isSearching.value = false
      rows.value = Array.isArray(msg.rows) ? msg.rows : []
      selectedRowIds.value = new Set()
      statusMessage.value = rows.value.length ? `검색 결과 ${rows.value.length}개` : '검색 결과가 없습니다.'
      return
    }

    if (msg.type === 'done') {
      isGenerating.value = false
      statusMessage.value = `${msg.created ?? 0}개 생성 및 연결 완료`
      return
    }

    if (msg.type === 'error') {
      isLoadingTabs.value = false
      isLoadingTabRows.value = false
      isSearching.value = false
      isGenerating.value = false
      errorMessage.value = msg.message ?? '에러가 발생했습니다.'
    }
  }
})
</script>
