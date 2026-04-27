<template>
  <main class="h-screen w-screen bg-white text-gray-900 p-4 flex flex-col gap-3 text-xs">
    <header class="flex items-start justify-between gap-2">
      <div class="min-w-0">
        <h1 class="text-base font-semibold leading-tight">텍스트 → 변수</h1>
        <p v-if="contextOk && selectionName" class="text-[11px] text-gray-500 mt-0.5 truncate">
          선택: {{ selectionName }}
        </p>
      </div>
      <button
        type="button"
        class="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-md border border-gray-300 bg-white hover:bg-gray-50"
        title="초기화"
        aria-label="초기화"
        @click="resetUi"
      >
        <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 12a9 9 0 1 0 3-6.7" />
          <path d="M3 4v6h6" />
        </svg>
      </button>
    </header>

    <p v-if="contextMessage" class="text-amber-700 text-[11px] leading-snug">{{ contextMessage }}</p>
    <p v-if="errorMessage" class="text-red-600 text-[11px] leading-snug">{{ errorMessage }}</p>

    <section v-if="contextOk" class="flex flex-col gap-1.5">
      <label class="font-medium text-gray-700">1) 소스</label>
      <p class="text-[10px] text-gray-500 leading-snug">
        텍스트 소스는 이름이 <code class="bg-gray-100 px-0.5 rounded">cell-header</code> 또는
        <code class="bg-gray-100 px-0.5 rounded">cell-Body</code>(대소문자 무시)인 레이어 <strong>안</strong>에 있는 것만 보입니다.
      </p>
      <select
        v-model="sourceId"
        class="w-full px-2 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option v-for="o in options" :key="o.id" :value="o.id">
          {{ o.kind === 'property' ? `[프로퍼티] ${o.key}` : '[텍스트]' }} — {{ o.preview || '(빈 문자열)' }}
        </option>
      </select>
    </section>

    <section v-if="contextOk" class="flex flex-col gap-1.5">
      <span class="font-medium text-gray-700">2) 값을 넣을 변수 모드</span>
      <div class="flex gap-3">
        <label class="flex items-center gap-1.5 cursor-pointer">
          <input v-model="targetMode" type="radio" value="label" class="rounded-full" />
          label
        </label>
        <label class="flex items-center gap-1.5 cursor-pointer">
          <input v-model="targetMode" type="radio" value="value" class="rounded-full" />
          value
        </label>
      </div>
      <p class="text-[10px] text-gray-500 leading-snug">
        선택한 모드에만 시트 문자열이 들어가고, 다른 모드는 빈 문자열입니다.
      </p>
    </section>

    <section v-if="contextOk" class="flex flex-col gap-1.5">
      <label class="font-medium text-gray-700">3) 변수 이름 (camelCase)</label>
      <div class="flex gap-2">
        <input
          v-model="variableName"
          type="text"
          class="flex-1 min-w-0 px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="수정 가능"
        />
        <button
          type="button"
          class="shrink-0 px-2 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50"
          :disabled="!selectedSourceText.trim() || isTranslating"
          @click="runTranslate"
        >
          {{ isTranslating ? '…' : '번역' }}
        </button>
      </div>
      <p class="text-[10px] text-gray-500">
        label 모드 기준 원문은 MyMemory(ko→en)로 제안합니다. value만 채울 때도 원문으로 이름을 제안합니다.
      </p>
    </section>

    <section v-if="contextOk" class="flex flex-col gap-1.5">
      <span class="font-medium text-gray-700">4) 콜렉션</span>
      <div class="flex flex-col gap-2">
        <label class="flex items-center gap-2 cursor-pointer">
          <input v-model="collectionChoice" type="radio" value="existing" />
          기존 콜렉션
        </label>
        <select
          v-model="collectionId"
          :disabled="collectionChoice !== 'existing'"
          class="w-full px-2 py-2 border border-gray-300 rounded-md bg-white disabled:bg-gray-100"
        >
          <option v-for="c in collections" :key="c.id" :value="c.id">
            {{ c.name }} (모드 {{ c.modes.length }}개)
          </option>
        </select>

        <label class="flex items-center gap-2 cursor-pointer">
          <input v-model="collectionChoice" type="radio" value="new" />
          새 콜렉션
        </label>
        <input
          v-model="newCollectionName"
          type="text"
          :disabled="collectionChoice !== 'new'"
          placeholder="콜렉션 이름"
          class="w-full px-2 py-2 border border-gray-300 rounded-md disabled:bg-gray-100"
        />
      </div>
      <p class="text-[10px] text-gray-500 leading-snug">
        새 콜렉션은 모드 <code class="bg-gray-100 px-0.5 rounded">label</code> /
        <code class="bg-gray-100 px-0.5 rounded">value</code> 로 만듭니다. 기존은 이름이 같으면 그 모드를 쓰고, 없으면 앞의 두 모드를 사용합니다.
      </p>
    </section>

    <button
      v-if="contextOk"
      type="button"
      class="mt-auto w-full py-2.5 rounded-md bg-gray-900 text-white text-xs font-medium hover:bg-gray-800 disabled:bg-gray-300"
      :disabled="!canApply || isApplying"
      @click="apply"
    >
      {{ isApplying ? '처리 중…' : '변수 생성 · 연결' }}
    </button>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'

type SourceOption =
  | { id: string; kind: 'property'; key: string; preview: string; sourceText: string }
  | { id: string; kind: 'text'; nodeId: string; preview: string; sourceText: string }

type CollectionInfo = {
  id: string
  name: string
  modes: { modeId: string; name: string }[]
}

const contextOk = ref(false)
const contextMessage = ref('')
const selectionName = ref('')
const options = ref<SourceOption[]>([])
const collections = ref<CollectionInfo[]>([])

const sourceId = ref('')
const targetMode = ref<'label' | 'value'>('label')
const variableName = ref('')
const collectionChoice = ref<'existing' | 'new'>('existing')
const collectionId = ref('')
const newCollectionName = ref('')

const errorMessage = ref('')
const isTranslating = ref(false)
const isApplying = ref(false)

const selectedSource = computed(() => options.value.find((o) => o.id === sourceId.value))
const selectedSourceText = computed(() => selectedSource.value?.sourceText ?? '')

const canApply = computed(() => {
  if (!contextOk.value || !sourceId.value) return false
  if (collectionChoice.value === 'existing' && !collectionId.value) return false
  if (collectionChoice.value === 'new' && !newCollectionName.value.trim()) return false
  return true
})

function resetUi() {
  contextMessage.value = ''
  errorMessage.value = ''
  targetMode.value = 'label'
  variableName.value = ''
  collectionChoice.value = 'existing'
  newCollectionName.value = ''
  isTranslating.value = false
  isApplying.value = false
  parent.postMessage({ pluginMessage: { type: 'get-context' } }, '*')
}

function runTranslate() {
  const t = selectedSourceText.value.trim()
  if (!t) return
  errorMessage.value = ''
  isTranslating.value = true
  parent.postMessage({ pluginMessage: { type: 'translate-for-name', text: t } }, '*')
}

function apply() {
  errorMessage.value = ''
  isApplying.value = true
  parent.postMessage(
    {
      pluginMessage: {
        type: 'apply',
        sourceId: sourceId.value,
        targetMode: targetMode.value,
        variableNameInput: variableName.value,
        collectionChoice: collectionChoice.value,
        collectionId: collectionChoice.value === 'existing' ? collectionId.value : undefined,
        newCollectionName:
          collectionChoice.value === 'new' ? newCollectionName.value.trim() : undefined,
      },
    },
    '*',
  )
}

function syncFirstOptions() {
  if (options.value.length && !options.value.some((o) => o.id === sourceId.value)) {
    sourceId.value = options.value[0].id
  }
}

function syncFirstCollection() {
  if (collections.value.length && !collections.value.some((c) => c.id === collectionId.value)) {
    collectionId.value = collections.value[0].id
  }
}

watch(selectedSource, () => {
  variableName.value = ''
})

onMounted(() => {
  parent.postMessage({ pluginMessage: { type: 'get-context' } }, '*')

  window.onmessage = (event: MessageEvent) => {
    const msg = event.data?.pluginMessage
    if (!msg) return

    if (msg.type === 'context') {
      contextOk.value = !!msg.ok
      contextMessage.value = msg.ok ? '' : (msg.message ?? '')
      selectionName.value = msg.selectionName ?? ''
      options.value = Array.isArray(msg.options) ? msg.options : []
      collections.value = Array.isArray(msg.collections) ? msg.collections : []
      errorMessage.value = ''
      syncFirstOptions()
      if (collections.value.length === 0) {
        collectionChoice.value = 'new'
        collectionId.value = ''
      } else {
        collectionChoice.value = 'existing'
        syncFirstCollection()
      }
      if (!msg.ok) {
        sourceId.value = ''
      }
      return
    }

    if (msg.type === 'translated-name') {
      isTranslating.value = false
      if (typeof msg.camel === 'string') variableName.value = msg.camel
      return
    }

    if (msg.type === 'apply-done') {
      isApplying.value = false
      return
    }

    if (msg.type === 'error') {
      isTranslating.value = false
      isApplying.value = false
      errorMessage.value = msg.message ?? '오류'
    }
  }
})
</script>
