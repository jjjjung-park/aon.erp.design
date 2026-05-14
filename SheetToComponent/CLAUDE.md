# SheetToComponent — 프로젝트 컨텍스트

## 📁 프로젝트 구조
- `/src/plugin/code.ts` — 피그마 플러그인 백엔드 (TypeScript)
- `/src/ui/App.vue` — 플러그인 UI (Vue 3 + Tailwind)
- 브랜치: `dev_v0.0.1`

---

## ✅ 확정된 기능 및 동작 방식

### 1. 인스턴스 생성 및 배치
- 선택한 인스턴스의 **편집 가능한 첫 번째 부모 프레임** 안에 생성 (인스턴스 내부 선택 시 자동으로 상위 프레임으로 탈출)
- 레이어 패널 기준 선택한 노드의 **sibling(형제)**으로 삽입 (`insertChild`)
- 배치 방향:
  - 감싸는 프레임 없음 (페이지 직속) → **무조건 아래로**
  - 오토 레이아웃 프레임 안 → Figma 자동 처리
  - 일반 프레임 안 → UI 설정값 따름 (아래 / 오른쪽)
- gap 없이 **붙여서** 생성

### 2. 스냅샷 시스템
- 형식: `PersistedSheetSnapshotV2`, `spreadsheetId` 포함
- 저장 위치: 선택 노드에 `setPluginData`
- 탐색: `findAnySnapshotOnPage(page, spreadsheetId?)` — spreadsheetId 필터로 다른 시트 스냅샷과 혼용 방지

### 3. 라벨 변경 감지
- `detectLabelChangesFromPage(spreadsheetId, currentRows)` — spreadsheetId 필터 적용
- 변경된 행에 **"label 변경"** 뱃지 표시
- **수정건 선택** 버튼으로 변경 행만 일괄 선택 가능

### 4. 동기화 (sync)
- UI에서 `url` 포함해서 `sync-value-changes` 메시지 전송
- 플러그인에서 `parseSpreadsheetId(url)`로 spreadsheetId 추출
- 스냅샷 업데이트 시 `findAnySnapshotOnPage(page, spreadsheetId)` 사용 (n번째 동기화 버그 수정)

### 5. 검색 결과 키워드 하이라이트
- 검색 키워드와 일치하는 텍스트 **파란색** (`text-blue-500`) 표시
- `splitByKeyword(text, kw)` 함수로 매칭 구간 분리

### 6. 선택 항목 태그 표시
- 검색 결과 박스 바로 아래에 체크한 항목 **태그(pill) 나열**
- 태그에 **✕ 버튼** 클릭 시 해당 항목 선택 해제

### 7. 플러그인 크기
- `width: 460, height: 960`

---

## 🐛 수정된 버그

| 버그 | 원인 | 수정 |
|------|------|------|
| 특정 페이지에서 라벨 변경 감지 안 됨 | 깨진 컴포넌트 인스턴스에서 `componentProperties` 접근 시 throw | `safeComponentProperties()` try-catch 래퍼 추가 |
| INSTANCE skip으로 스냅샷 못 찾음 | `findAnySnapshotOnPage`에서 INSTANCE 건너뜀 | INSTANCE skip 제거, spreadsheetId 필터만 유지 |
| n번째 동기화 실패 ("동기화할 인스턴스를 찾지 못했습니다") | 스냅샷 업데이트 시 `findSnapshotNode(sel)`이 다른 시트 스냅샷을 업데이트 | `findAnySnapshotOnPage(page, spreadsheetId)` 로 교체 |
| `insertChild` 오류 ("Cannot move node. New parent is an instance") | `selection.parent`가 INSTANCE인 경우 직접 사용 | `getCloneContext()`로 편집 가능한 상위 프레임 탐색 |

---

## ⚠️ 미처리 항목

- [ ] **디버그 알림 제거** — `sync-value-changes` 핸들러 안에 임시 `figma.notify("[디버그]...")` 코드 남아있음 (커밋됨, 나중에 삭제 필요)

---

## 🔧 주요 함수 위치 (code.ts)

| 함수 | 역할 |
|------|------|
| `safeComponentProperties(inst)` | componentProperties 안전 접근 |
| `findAnySnapshotOnPage(page, spreadsheetId?)` | 페이지에서 스냅샷 탐색 |
| `detectLabelChangesFromPage(spreadsheetId, rows)` | 라벨 변경 감지 |
| `getCloneContext(selection)` | 편집 가능한 부모 + anchor 반환 |
| `syncLabelOnPage(page, oldLabel, newLabel)` | 페이지 전체 인스턴스 라벨 동기화 |

---

## 📌 Git 규칙
- **커밋만** 하고 push는 사용자가 명시적으로 요청할 때만
