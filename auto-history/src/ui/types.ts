// ── 변경 유형 (등록 시 선택) ───────────────────────────────────────────────
export type ChangeType = 'flow' | 'data' | 'ui'

// ── 이력에 남길 프레임(링크용) ─────────────────────────────────────────────
export type HistoryFrame = {
  nodeId: string
  name: string
  /** 등록 시점 딥링크 (fileKey 없으면 빈 문자열 가능) */
  link: string
}

// ── 이력 항목 ──────────────────────────────────────────────────────────────
export type HistoryEntry = {
  version: number
  /** YYYY-MM-DD */
  date: string
  /** 표시용 작성자 (currentUser 이름 우선 시 플러그인에서 채움) */
  author: string
  changeType: ChangeType
  prevContent: string
  nextContent: string
  frames: HistoryFrame[]
}

export type Settings = {
  authorName: string
  historyLayerName: string
  currentVersion: number
}

// ── UI → Plugin ───────────────────────────────────────────────────────────
export type UiToPluginMessage =
  | { type: 'get-settings' }
  | { type: 'save-settings'; authorName: string; historyLayerName: string }
  | { type: 'get-selection-preview' }
  | {
      type: 'register'
      prevContent: string
      nextContent: string
      changeType: ChangeType
      /** 설정의 기본 작성자 — 플러그인에서 currentUser와 병합 */
      authorName: string
    }
  | { type: 'get-history' }
  | { type: 'reset-history' }
  | { type: 'navigate-to-frame'; nodeId: string }
  | { type: 'navigate-to-version'; nodeIds: string[] }
  | { type: 'close' }

// ── Plugin → UI ───────────────────────────────────────────────────────────
export type SelectionPreview = {
  count: number
  frames: Array<{ nodeId: string; name: string }>
}

export type PluginToUiMessage =
  | { type: 'settings'; authorName: string; historyLayerName: string; currentVersion: number }
  | { type: 'selection-preview'; preview: SelectionPreview }
  | { type: 'register-done'; newVersion: number; count: number }
  | { type: 'history'; entries: HistoryEntry[] }
  | { type: 'settings-saved' }
  | { type: 'error'; message: string }
