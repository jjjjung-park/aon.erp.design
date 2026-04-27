<template>
  <main class="h-screen w-screen bg-white text-gray-900 p-4 flex flex-col gap-4">
    <header>
      <div class="flex items-center justify-between gap-2">
        <h1 class="text-base font-semibold">Google Sheet → Figma Variables</h1>
        <button
          class="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-md border border-gray-300 bg-white hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400"
          :disabled="isImporting || isLoadingTabs"
          @click="resetForm"
          aria-label="초기화"
          title="초기화"
        >
          <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 12a9 9 0 1 0 3-6.7" />
            <path d="M3 4v6h6" />
          </svg>
        </button>
      </div>
      <p class="text-xs text-gray-500 mt-1">시트 탭을 선택해서 name/type/label/value 기준으로 변수를 생성합니다.</p>
    </header>

    <section class="flex flex-col gap-1.5">
      <label class="text-xs font-medium text-gray-700">1) 구글 시트 URL</label>
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
          :disabled="isImporting || isLoadingTabs || recentUrls.length === 0"
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
    </section>

    <section class="flex flex-col gap-1.5">
      <label class="text-xs font-medium text-gray-700">2) Google API Key</label>
      <input
        v-model="apiKey"
        type="password"
        placeholder="AIza..."
        class="w-full text-xs px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p class="text-[11px] text-gray-500">
        탭 목록/값을 읽기 위해 Sheets API를 사용합니다.
      </p>
      <p class="text-[11px] text-gray-500">
        <code class="text-[10px] bg-gray-100 px-1 rounded">name</code>이 비어 있으면
        <a href="https://mymemory.translated.net/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">MyMemory</a>
        로 <code class="text-[10px] bg-gray-100 px-1 rounded">label</code>을 ko→en 번역해 변수명을 만듭니다.
      </p>
    </section>

    <section class="flex items-end gap-2">
      <button
        class="px-3 py-2 text-xs rounded-md bg-white border border-gray-300 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400"
        :disabled="isImporting || isLoadingTabs || !sheetUrl.trim() || !apiKey.trim()"
        @click="loadTabs"
      >
        {{ isLoadingTabs ? '탭 불러오는 중...' : '탭 불러오기' }}
      </button>

      <div class="flex-1">
        <label class="text-xs font-medium text-gray-700 block mb-1.5">3) 가져올 탭</label>
        <select
          v-model="selectedTab"
          class="w-full text-xs px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
          :disabled="tabs.length === 0"
        >
          <option value="" disabled>탭을 선택하세요</option>
          <option v-for="t in tabs" :key="t.sheetId" :value="t.title">
            {{ t.title }}
          </option>
        </select>
      </div>
    </section>

    <label class="flex items-center gap-2 text-xs text-gray-700">
      <input v-model="useTabNameAsCollection" type="checkbox" />
      탭 이름으로 변수 컬렉션 생성
    </label>

    <button
      class="mt-auto w-full px-3 py-2 text-xs rounded-md bg-gray-900 text-white hover:bg-gray-700 disabled:bg-gray-300"
      :disabled="isImporting || !sheetUrl.trim() || !apiKey.trim() || !selectedTab.trim()"
      @click="importVariables"
    >
      {{ isImporting ? '생성 중...' : '피그마 변수 생성' }}
    </button>

    <p v-if="statusMessage" class="text-xs text-gray-500">{{ statusMessage }}</p>
    <p v-if="errorMessage" class="text-xs text-red-500">{{ errorMessage }}</p>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const sheetUrl = ref('')
const apiKey = ref('')
const recentUrls = ref<string[]>([])
const urlChoice = ref<'manual' | string>('manual')
const tabs = ref<{ sheetId: number; title: string }[]>([])
const selectedTab = ref('')
const useTabNameAsCollection = ref(true)
const isLoadingTabs = ref(false)
const isImporting = ref(false)
const statusMessage = ref('')
const errorMessage = ref('')

function displayUrl(url: string) {
  const u = String(url ?? '')
  const max = 42
  if (u.length <= max) return u
  const head = u.slice(0, 20)
  const tail = u.slice(-16)
  return `${head}…${tail}`
}

function resetForm() {
  urlChoice.value = 'manual'
  sheetUrl.value = ''
  tabs.value = []
  selectedTab.value = ''
  statusMessage.value = ''
  errorMessage.value = ''
  isLoadingTabs.value = false
  isImporting.value = false
}

function applyUrlChoice() {
  if (urlChoice.value === 'manual') return
  sheetUrl.value = urlChoice.value
  tabs.value = []
  selectedTab.value = ''
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
  parent.postMessage({
    pluginMessage: {
      type: 'list-tabs',
      url: sheetUrl.value,
      apiKey: apiKey.value,
    },
  }, '*')
}

function importVariables() {
  errorMessage.value = ''
  statusMessage.value = ''
  isImporting.value = true
  parent.postMessage({
    pluginMessage: {
      type: 'import-sheet',
      url: sheetUrl.value,
      apiKey: apiKey.value,
      tabTitle: selectedTab.value,
      useTabNameAsCollection: useTabNameAsCollection.value,
    },
  }, '*')
}

onMounted(() => {
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

    if (msg.type === 'tabs') {
      isLoadingTabs.value = false
      tabs.value = Array.isArray(msg.tabs) ? msg.tabs : []
      selectedTab.value = tabs.value[0]?.title ?? ''
      statusMessage.value = tabs.value.length
        ? `탭 ${tabs.value.length}개를 불러왔습니다.`
        : '탭을 찾지 못했습니다.'
      return
    }

    if (msg.type === 'import-complete') {
      isImporting.value = false
      statusMessage.value = `${msg.collectionName} 컬렉션에 변수 ${msg.count}개 생성 완료`
      return
    }

    if (msg.type === 'error') {
      isLoadingTabs.value = false
      isImporting.value = false
      errorMessage.value = msg.message ?? '에러가 발생했습니다.'
    }
  }
})
</script>
