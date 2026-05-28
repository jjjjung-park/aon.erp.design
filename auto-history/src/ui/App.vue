<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type {
  PluginToUiMessage,
  UiToPluginMessage,
  HistoryEntry,
  SelectionPreview,
  ChangeType,
} from './types'

type Tab = 'record' | 'history' | 'settings'
const activeTab = ref<Tab>('record')

const authorName = ref('')
const historyLayerName = ref('이력관리')

const selectionPreview = ref<SelectionPreview>({ count: 0, frames: [] })

const prevContent = ref('')
const nextContent = ref('')
const changeType = ref<ChangeType>('data')

const isRegistering = ref(false)

const CHANGE_TYPES = [
  { value: 'flow' as const, label: '동선변경' },
  { value: 'data' as const, label: '데이터변경' },
  { value: 'ui' as const, label: 'UI변경요청' },
]

const historyEntries = ref<HistoryEntry[]>([])
const currentVersion = ref(0)

const statusMessage = ref('')
const isError = ref(false)

function showStatus(msg: string, error = false) {
  statusMessage.value = msg
  isError.value = error
  setTimeout(() => { statusMessage.value = '' }, 3000)
}

function sendToPlugin(msg: UiToPluginMessage) {
  parent.postMessage({ pluginMessage: msg }, '*')
}

onMounted(() => {
  window.onmessage = (event: MessageEvent) => {
    const msg = event.data.pluginMessage as PluginToUiMessage
    if (!msg) return

    if (msg.type === 'settings') {
      authorName.value = msg.authorName
      historyLayerName.value = msg.historyLayerName
      currentVersion.value = msg.currentVersion
    }

    if (msg.type === 'selection-preview') {
      selectionPreview.value = msg.preview
    }

    if (msg.type === 'register-done') {
      isRegistering.value = false
      currentVersion.value = msg.newVersion
      prevContent.value = ''
      nextContent.value = ''
      showStatus(`v${msg.newVersion} 등록 완료 (${msg.count}개 프레임)`)
      activeTab.value = 'history'
      sendToPlugin({ type: 'get-history' })
    }

    if (msg.type === 'history') {
      historyEntries.value = msg.entries
    }

    if (msg.type === 'settings-saved') {
      showStatus('설정이 저장되었습니다.')
    }

    if (msg.type === 'error') {
      isRegistering.value = false
      showStatus(msg.message, true)
    }
  }

  sendToPlugin({ type: 'get-settings' })
  sendToPlugin({ type: 'get-history' })
  sendToPlugin({ type: 'get-selection-preview' })
})

function handleRegister() {
  if (selectionPreview.value.count === 0) {
    showStatus('프레임·컴포넌트·인스턴스를 하나 이상 선택하세요.', true)
    return
  }
  const p = prevContent.value.trim()
  const n = nextContent.value.trim()
  if (!p && !n) {
    showStatus('이전 내용 또는 변경 내용 중 하나는 입력하세요.', true)
    return
  }
  isRegistering.value = true
  sendToPlugin({
    type: 'register',
    prevContent: prevContent.value,
    nextContent: nextContent.value,
    changeType: changeType.value,
    authorName: authorName.value,
  })
}

function navigateToFrame(nodeId: string) {
  sendToPlugin({ type: 'navigate-to-frame', nodeId })
}

function navigateToVersion(entry: HistoryEntry) {
  const nodeIds = entry.frames.map((f) => f.nodeId).filter(Boolean)
  if (nodeIds.length === 0) return
  sendToPlugin({ type: 'navigate-to-version', nodeIds })
}

async function copyLink(url: string) {
  if (!url) {
    showStatus('저장된 링크가 없습니다.', true)
    return
  }
  try {
    await navigator.clipboard.writeText(url)
    showStatus('링크를 복사했습니다.')
  } catch {
    showStatus('복사에 실패했습니다.', true)
  }
}

function handleSaveSettings() {
  sendToPlugin({
    type: 'save-settings',
    authorName: authorName.value,
    historyLayerName: historyLayerName.value,
  })
}

function handleResetHistory() {
  if (!confirm('등록된 이력과 버전 번호를 모두 초기화합니다. 계속할까요?')) return
  sendToPlugin({ type: 'reset-history' })
}
</script>

<template>
  <div class="flex flex-col h-screen bg-white text-[13px] text-[#1a1a1a]">

    <div class="flex items-center justify-between px-3 py-2 border-b border-[#e5e5e5]">
      <span class="font-semibold text-[14px]">Auto History</span>
      <span class="text-[11px] text-[#999]">v{{ currentVersion > 0 ? currentVersion : '-' }}</span>
    </div>

    <div class="flex border-b border-[#e5e5e5]">
      <button
        v-for="tab in [{ key: 'record', label: '기록' }, { key: 'history', label: '이력' }, { key: 'settings', label: '설정' }]"
        :key="tab.key"
        type="button"
        @click="activeTab = tab.key as Tab"
        class="flex-1 py-2 text-[12px] border-b-2 transition-colors"
        :class="activeTab === tab.key
          ? 'border-[#0D99FF] text-[#0D99FF] font-medium'
          : 'border-transparent text-[#666] hover:text-[#1a1a1a]'"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="flex-1 overflow-y-auto">

      <!-- 기록 -->
      <div v-if="activeTab === 'record'" class="p-3 flex flex-col gap-3">

        <div class="rounded-md border border-[#e5e5e5] bg-[#fafafa] p-2">
          <div class="flex items-center justify-between mb-1">
            <span class="text-[12px] font-medium text-[#333]">선택한 프레임</span>
            <span class="text-[11px] text-[#0D99FF]">{{ selectionPreview.count }}개</span>
          </div>
          <ul v-if="selectionPreview.frames.length > 0" class="text-[11px] text-[#555] space-y-0.5 max-h-24 overflow-y-auto">
            <li v-for="f in selectionPreview.frames" :key="f.nodeId" class="truncate">{{ f.name }}</li>
          </ul>
          <p v-else class="text-[11px] text-[#aaa]">캔버스에서 프레임·컴포넌트·인스턴스를 선택하세요.</p>
        </div>

        <div class="flex gap-1 flex-wrap">
          <button
            v-for="ct in CHANGE_TYPES"
            :key="ct.value"
            type="button"
            @click="changeType = ct.value"
            class="px-2 py-1 rounded text-[11px] border transition-colors"
            :class="changeType === ct.value
              ? 'bg-[#0D99FF] text-white border-[#0D99FF]'
              : 'bg-white text-[#666] border-[#ddd] hover:border-[#0D99FF]'"
          >
            {{ ct.label }}
          </button>
        </div>

        <div class="flex flex-col gap-1">
          <span class="text-[11px] text-[#666]">이전 내용</span>
          <textarea
            v-model="prevContent"
            rows="3"
            placeholder="기획/스펙 기준 이전 상태를 적습니다."
            class="text-[12px] border border-[#e5e5e5] rounded px-2 py-1 resize-none focus:outline-none focus:border-[#0D99FF]"
          />
        </div>

        <div class="flex flex-col gap-1">
          <span class="text-[11px] text-[#666]">변경 내용</span>
          <textarea
            v-model="nextContent"
            rows="3"
            placeholder="바뀐 점을 적습니다."
            class="text-[12px] border border-[#e5e5e5] rounded px-2 py-1 resize-none focus:outline-none focus:border-[#0D99FF]"
          />
        </div>

        <p class="text-[10px] text-[#aaa] leading-relaxed">
          등록 시 <b>버전·날짜·작성자(피그마 계정)</b>·<b>딥링크</b>는 자동으로 붙고, 선택한 프레임에 <b>버전 배지</b>가 추가됩니다.
        </p>

        <button
          type="button"
          @click="handleRegister"
          :disabled="isRegistering"
          class="w-full py-2 rounded-md text-[13px] font-medium transition-colors"
          :class="isRegistering
            ? 'bg-[#aaa] text-white cursor-not-allowed'
            : 'bg-[#1a1a1a] text-white hover:bg-[#333]'"
        >
          {{ isRegistering ? '등록 중...' : `v${currentVersion + 1}로 등록` }}
        </button>
      </div>

      <!-- 이력 -->
      <div v-if="activeTab === 'history'" class="flex flex-col">
        <div v-if="historyEntries.length === 0" class="text-center text-[#aaa] text-[12px] py-8">
          등록된 이력이 없습니다
        </div>

        <div
          v-for="entry in historyEntries"
          :key="entry.version"
          class="border-b border-[#f0f0f0] p-3 flex flex-col gap-2"
        >
          <div class="flex items-start justify-between gap-2">
            <div class="min-w-0">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="font-semibold text-[13px]">v{{ entry.version }}</span>
                <span class="text-[11px] text-[#999]">{{ entry.date }}</span>
                <span
                  class="text-[10px] px-1.5 py-0.5 rounded"
                  :class="{
                    'bg-[#fff0e0] text-[#e06000]': entry.changeType === 'flow',
                    'bg-[#e8f4ff] text-[#0066cc]': entry.changeType === 'data',
                    'bg-[#f0e8ff] text-[#6600cc]': entry.changeType === 'ui',
                  }"
                >
                  {{ entry.changeType === 'flow' ? '동선' : entry.changeType === 'data' ? '데이터' : 'UI' }}
                </span>
              </div>
              <p class="text-[11px] text-[#666] mt-1">{{ entry.author }}</p>
            </div>
            <button
              type="button"
              @click="navigateToVersion(entry)"
              class="flex-shrink-0 text-[11px] text-[#0D99FF] hover:underline"
            >
              전체 선택 ↗
            </button>
          </div>

          <div v-if="entry.prevContent.trim()" class="text-[11px] text-[#555]">
            <span class="text-[#999]">이전</span> {{ entry.prevContent }}
          </div>
          <div v-if="entry.nextContent.trim()" class="text-[11px] text-[#555]">
            <span class="text-[#999]">변경</span> {{ entry.nextContent }}
          </div>

          <div class="flex flex-col gap-1 pl-1 border-l-2 border-[#eee]">
            <div
              v-for="fr in entry.frames"
              :key="fr.nodeId"
              class="flex items-center justify-between gap-2"
            >
              <span class="text-[12px] truncate min-w-0">{{ fr.name }}</span>
              <div class="flex items-center gap-2 flex-shrink-0">
                <button
                  type="button"
                  class="text-[11px] text-[#0D99FF] hover:underline"
                  @click="copyLink(fr.link)"
                >
                  링크 복사
                </button>
                <button
                  type="button"
                  class="text-[11px] text-[#0D99FF] hover:underline"
                  @click="navigateToFrame(fr.nodeId)"
                >
                  이동
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 설정 -->
      <div v-if="activeTab === 'settings'" class="p-3 flex flex-col gap-4">

        <div class="flex flex-col gap-1">
          <label class="text-[12px] text-[#666] font-medium">작성자 표시 (대체)</label>
          <input
            v-model="authorName"
            type="text"
            placeholder="피그마 프로필 이름을 쓰지 못할 때만 사용"
            class="border border-[#e5e5e5] rounded px-2 py-1.5 text-[13px] focus:outline-none focus:border-[#0D99FF]"
          />
          <span class="text-[11px] text-[#aaa]">기본은 로그인한 피그마 계정 이름입니다.</span>
        </div>

        <div class="flex flex-col gap-1">
          <label class="text-[12px] text-[#666] font-medium">이력관리 레이어 이름</label>
          <input
            v-model="historyLayerName"
            type="text"
            placeholder="이력관리"
            class="border border-[#e5e5e5] rounded px-2 py-1.5 text-[13px] focus:outline-none focus:border-[#0D99FF]"
          />
          <span class="text-[11px] text-[#aaa]">이 이름의 노드를 찾아 그 아래에 이력 한 줄을 추가합니다.</span>
        </div>

        <button
          type="button"
          @click="handleSaveSettings"
          class="w-full py-2 bg-[#0D99FF] text-white rounded-md text-[13px] font-medium hover:bg-[#0085e0] transition-colors"
        >
          설정 저장
        </button>

        <div class="border-t border-[#f0f0f0] pt-3">
          <p class="text-[11px] text-[#aaa] mb-2">
            이력 데이터와 버전 카운터만 삭제합니다. 캔버스에 붙인 배지는 자동으로 지우지 않습니다.
          </p>
          <button
            type="button"
            @click="handleResetHistory"
            class="w-full py-2 border border-[#e5e5e5] text-[#cc0000] rounded-md text-[13px] hover:bg-[#fff8f8] transition-colors"
          >
            이력 초기화
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="statusMessage"
      class="px-3 py-2 text-[12px] text-center border-t"
      :class="isError ? 'bg-[#fff0f0] text-[#cc0000] border-[#ffcccc]' : 'bg-[#f0fff0] text-[#006600] border-[#ccffcc]'"
    >
      {{ statusMessage }}
    </div>

  </div>
</template>
