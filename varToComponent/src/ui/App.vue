<template>
  <div class="flex flex-col h-screen bg-white text-[13px] font-sans select-none">

    <!-- Header -->
    <header class="px-4 py-3 border-b border-gray-200 flex-shrink-0 flex items-center justify-between">
      <span class="font-semibold text-gray-900">varToComponent</span>
      <button
        @click="resetAll"
        title="초기화"
        class="w-6 h-6 flex items-center justify-center rounded text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
      >
        <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </button>
    </header>

    <main class="flex-1 overflow-y-auto p-4 space-y-4">

      <!-- 선택 대상 -->
      <div class="p-3 rounded-lg border"
        :class="component ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'">
        <template v-if="component">
          <p class="font-semibold text-blue-700 truncate">{{ component.name }}</p>
          <p class="text-[11px] text-blue-500 mt-0.5">
            TEXT 프로퍼티 {{ component.properties.length }}개 감지됨
          </p>
        </template>
        <p v-else class="text-gray-500">
          텍스트 프로퍼티가 있는 요소를 선택해주세요
        </p>
      </div>

      <!-- 1. 변수 콜렉션 선택 -->
      <section v-if="collections.length > 0" class="space-y-1.5">
        <label class="field-label">1. 변수 콜렉션 선택</label>
        <select v-model="selectedCollectionId" class="select-input">
          <option disabled value="">콜렉션을 선택하세요</option>
          <option v-for="col in collections" :key="col.id" :value="col.id">
            {{ col.name }} ({{ col.variableCount }}개)
          </option>
        </select>
      </section>

      <div v-else class="text-[12px] text-gray-400 text-center py-2">
        파일에 변수 콜렉션이 없습니다
      </div>

      <!-- 2. 프로퍼티 ↔ 모드 매핑 -->
      <section
        v-if="selectedCollectionId && component && component.properties.length > 0"
        class="space-y-2 pt-3 border-t border-gray-100"
      >
        <label class="field-label">2. 프로퍼티 ↔ 변수 모드 맵핑</label>

        <div v-for="(map, idx) in mappings" :key="idx" class="flex items-center gap-2">
          <select v-model="map.propertyName" class="select-input flex-1 min-w-0">
            <option disabled value="">프로퍼티</option>
            <option v-for="prop in component.properties" :key="prop.instanceName + prop.name" :value="prop.name">
              {{ prop.instanceName }} / {{ prop.name.split('#')[0] }}
            </option>
          </select>

          <span class="text-gray-400 flex-shrink-0">↔</span>

          <select v-model="map.modeId" class="select-input flex-1 min-w-0">
            <option disabled value="">모드</option>
            <option v-for="mode in currentModes" :key="mode.modeId" :value="mode.modeId">
              {{ mode.name }}
            </option>
          </select>

          <button
            @click="removeMapping(idx)"
            class="flex-shrink-0 w-6 h-6 flex items-center justify-center text-gray-300 hover:text-red-400 transition-colors"
          >✕</button>
        </div>

        <button
          @click="addMapping"
          class="text-[12px] text-blue-500 hover:text-blue-700 font-medium transition-colors"
        >+ 맵핑 추가</button>
      </section>

    </main>

    <!-- Footer -->
    <footer class="px-4 py-3 border-t border-gray-200 flex-shrink-0">
      <button
        v-if="selectedCollectionId && component"
        @click="generate"
        :disabled="!isReadyToGenerate"
        class="w-full py-2.5 rounded-lg font-semibold text-[13px] transition-colors
               bg-gray-900 text-white hover:bg-gray-700
               disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
      >
        {{ currentVariableCount }}개 자동 생성 및 바인딩
      </button>
      <p v-else class="text-center text-[12px] text-gray-400">
        요소와 콜렉션을 선택하면 생성 버튼이 활성화됩니다
      </p>
    </footer>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

interface ModeInfo { modeId: string; name: string }
interface CollectionData { id: string; name: string; variableCount: number; modes: ModeInfo[] }
interface PropertyInfo { name: string; instanceName: string }
interface ComponentData { name: string; properties: PropertyInfo[] }
interface Mapping { propertyName: string; modeId: string }

const component = ref<ComponentData | null>(null)
const collections = ref<CollectionData[]>([])
const selectedCollectionId = ref('')
const mappings = ref<Mapping[]>([{ propertyName: '', modeId: '' }])

const currentCollection = computed(() =>
  collections.value.find(c => c.id === selectedCollectionId.value) ?? null
)
const currentModes = computed(() => currentCollection.value?.modes ?? [])
const currentVariableCount = computed(() => currentCollection.value?.variableCount ?? 0)
const isReadyToGenerate = computed(() =>
  mappings.value.some(m => m.propertyName && m.modeId)
)

const addMapping = () => mappings.value.push({ propertyName: '', modeId: '' })
const removeMapping = (idx: number) => mappings.value.splice(idx, 1)

function resetAll() {
  selectedCollectionId.value = ''
  mappings.value = [{ propertyName: '', modeId: '' }]
}

onMounted(() => {
  window.onmessage = (event) => {
    const msg = event.data?.pluginMessage
    if (!msg || msg.type !== 'init-data') return

    component.value = msg.component
    collections.value = msg.collections

    // 콜렉션이 하나면 자동 선택
    if (collections.value.length === 1 && !selectedCollectionId.value) {
      selectedCollectionId.value = collections.value[0].id
    }
  }
})

function generate() {
  const cleanMappings = mappings.value
    .filter(m => m.propertyName && m.modeId)
    .map(m => ({ propertyName: m.propertyName, modeId: m.modeId }))

  parent.postMessage({
    pluginMessage: {
      type: 'generate',
      data: {
        collectionId: selectedCollectionId.value,
        mappings: cleanMappings,
      },
    },
  }, '*')
}
</script>

<style>
@import "tailwindcss";

.field-label {
  @apply block text-[11px] font-semibold text-gray-500 uppercase tracking-wide;
}

.select-input {
  @apply w-full px-2.5 py-2 border border-gray-200 rounded-lg text-[12px] text-gray-800
         bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
         cursor-pointer;
}
</style>
