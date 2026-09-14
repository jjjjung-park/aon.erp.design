# 뱃지/태그 컴포넌트 — Figma 반영 검토 및 결정사항 (2026-09-14)

## 배경

[디자인 회의록(2026-09-07)](2026-09-07-design-sync.md)에서 나온 "뱃지=숫자/플로우/액티브 분류, 태그=카테고리/칩/라벨링 분류" to-be안을 바탕으로, 디자인이 실제로 정리한 Figma 컴포넌트를 확인하고 개발 반영 범위를 검토함.

- Figma 참조: [❖ Chip / ❖ Badge (node 136-2447, 136-2448)](https://www.figma.com/design/mUPDdgGClaBINfIP4fUK15/?node-id=136-2447), [↓ Feedback — Status/Active Badge, Label, Tag 최종 스펙 (node 597-15)](https://www.figma.com/design/mUPDdgGClaBINfIP4fUK15/?node-id=597-15)
- 597-15가 as-is 문제 진단("태그, 상태(뱃지)가 동일한 칩 형태로 운용중 → 쉐입을 다르게 운용")까지 포함한 최신 확정안으로 확인됨

## 매핑 방향

- **Tag / Label → 개발 Tags 컴포넌트**
- **Status Badge / Active Badge → 개발 Badge 컴포넌트** (기존 `size="dot"`/`size="count"`는 그대로 유지)

## 컴포넌트별 검토 결과

### Status Badge (플로우)

- 6개 상태(notStarted/started/inProgress/completed/inHold/rejected)가 지금 Badge의 6개 variant(info/outline/process/accept/reject/hold)와 1:1 매핑됨
- shape는 `rounded-full`으로 기존과 동일
- border가 알파값 처리된 것 외에는 색상 토큰 값 교체 수준

**✅ 결정: Status Badge에는 인디케이터(신호등 동그라미)를 넣지 않는다.** Figma 실제 컴포넌트 코드에 dot이 없는 것으로 확인 — 이전에 개발에서 자체적으로 추가했던 workflow variant 자동 dot 기능은 제거하고 Figma 디자인 그대로 간다.

- **반영 완료**: [Badge.vue](../../src/ui/badge/Badge.vue), [index.ts](../../src/ui/badge/index.ts)
  - `indicator` prop은 남겨두되 자동 판단 로직(`workflowVariants` 기반 자동 true) 제거 → 명시적으로 `true`를 넘길 때만 표시
  - Storybook `기초/Badge/상태 배지`에서 6개 variant 전부 dot 없음 확인 완료

### Active Badge (이진)

- 사용/미사용 2-state, 배경(흰색)·테두리(회색) 항상 고정, **상태 표시는 앞에 붙는 8px 단색 원 하나로만 구분** (off `#D9D9D9` 회색 / on `#00A035` 초록 — 순수 `<circle>`, 아이콘 에셋 아님)
- 지금 만들어둔 `indicator`(dot) 로직을 그대로 재사용 가능 — 새 에셋/아이콘 불필요
- **미반영 (다음 작업)**: Badge에 액티브(이진) 축 추가 시 `indicator`를 무조건 true로 켜지는 조건으로 연결

### Label → Tags (라벨링)

- `outline`/`fill` × `Default(24px)`/`Inline(16px, 폰트 8px)` 2×2 구성
- `fill`이 브랜드색이 아니라 검정(`--color/gray/1000`) — 색상 값 교체 필요
- **Inline 사이즈가 지난번 논의한 "인라인 라벨" 요구사항과 정확히 일치** → 별도 컴포넌트 없이 Tags에 `size` prop만 추가하면 해결
- **미반영 (다음 작업)**: `tag.ts`에 `size: 'default'|'inline'` 축 신설, `outline` 타입이 border 없는 현재 구조(`type:'tag'`→`border-transparent` 강제) 수정

### Tag(칩/선택형) → Tags (칩)

- **shape이 `rounded-full`(pill) → `rounded-sm`(4px)로 변경** — Label과 동일한 각진 형태로 통일. 디자인이 지적한 "태그·뱃지 쉐입 구분" 문제의 실제 해법
- Selected 상태는 기존 `secondary` variant와 동일, Disabled는 기존 `props.disabled` 오버라이드 재사용 가능
- **미반영 (다음 작업)**:
  - `tag.ts`의 `type:'chip'`에서 `rounded-full` 제거 (→ `rounded-sm` 통일)
  - leading icon(체크 아이콘) 슬롯 신설 — `hasLeadingIcon` prop + 템플릿 추가
- ⚠️ 기존 화면에서 `type="chip"`을 쓰던 곳(필터 칩, 모달 내 선택 항목 칩 등)은 마크업 변경 없이도 **시각적으로 pill→사각으로 바뀜** — 영향 범위 화면 목록은 지난 대화에서 정리된 `type="chip"` 사용처 참고

## 부록 — "0차 오더/리오더" 사용 패턴 분석 및 variant 결정

레퍼런스 전체(33개 파일)에서 "0차 오더"/"0차 리오더" 실사용처를 조사해 어느 variant가 적합한지 분석함.

### 사용 패턴 6가지

1. **Sheet 패널 헤더 타이틀 옆** (~11개 파일) — [style/ViewForm.vue:5](../../_reference/markup/components/sheet/plan/style/ViewForm.vue) 등. 가장 눈에 잘 띄는 위치, "지금 보고 있는 레코드가 몇 차 오더인지" 알려주는 스코프/컨텍스트 마커
2. **테이블 셀 (오더차수/차수 컬럼)** — 원본 54건 중 대다수. 리스트 스캔용 컬럼
3. **집계형 컬럼과는 분리** — [plan/product/style/index.vue](../../_reference/markup/views/plan/product/style/index.vue)의 "전체 오더 상태"(멀티뱃지 집계)와 "0차 오더"(오더차수, 단일값)는 서로 다른 컬럼 — 섞이지 않음
4. **상세 정보 리스트(dl/dt/dd)에서는 뱃지 없이 순수 텍스트** — [sku/ViewForm.vue:119](../../_reference/markup/components/sheet/plan/sku/ViewForm.vue), [production/style/ViewForm.vue:110](../../_reference/markup/components/sheet/production/style/ViewForm.vue) 등. 다른 필드값과 나란히 나열될 땐 텍스트만
5. **확인 모달 안내 문구에서도 plain text** — [style/AddForm.vue:193](../../_reference/markup/components/sheet/plan/style/AddForm.vue), ReorderForm.vue:110
6. **취소선/비활성 처리된 행에서도 뱃지 색은 그대로** — [production/request/EditForm.vue:82](../../_reference/markup/components/sheet/production/request/EditForm.vue). 행 상태(포함/제외)를 뱃지 색으로 표현하지 않음 — 뱃지 자체는 상태와 완전 무관

### 종합 분석

| 관점 | 내용 |
|---|---|
| 의미 | 오더 회차 분류(0차=최초 발주, 1차/2차=리오더) — 레코드 생애주기 내내 따라다니는 고정 식별 태그 |
| 중요도 | 낮음~중간, 강조·경고 신호 아님 (취소선 행에서도 색 불변이 근거) |
| 노출 위치별 강도 | 헤더(뱃지, 최고) > 테이블 셀(뱃지, 중간) > 상세 필드 리스트(텍스트만, 최저) |
| 서비스 로직 결합도 | 워크플로우 색상(process/accept/reject 등)과 전혀 안 섞이는 순수 분류값 |

### ✅ 결정

- **`type="tag" variant="info"` 사용** — `category`(색상 자유)는 항목마다 색이 달라야 할 때 쓰는 건데 "0차 오더"는 모든 로우가 항상 동일한 톤이라 과함. `TagLevel`(중요도 단계)도 아님 — 위계가 없는 단순 분류값
- **뱃지 vs plain text는 variant가 아니라 노출 위치가 결정** — 스코프를 알리는 용도(헤더/테이블)일 땐 `info` 태그, 여러 필드 중 하나로 나열될 땐(상세 리스트/안내 문구) 텍스트만. 컴포넌트 가이드에 이 사용 기준 문서화 필요

## 종합 — 수정 범위

| 컴포넌트 | 새 파일 필요 여부 | 수정 수준 |
|---|---|---|
| Status Badge | 불필요 | ✅ 완료 (indicator 로직 제거) |
| Active Badge | 불필요 | 값 교체 + indicator 조건 연결 (예정) |
| Label | 불필요 | 값 교체 + `size` prop 신설 (예정) |
| Tag(칩) | 불필요 | shape 값 교체 + `hasLeadingIcon` prop 신설 (예정) |

**완전히 새로운 컴포넌트 파일 생성은 없음.** 기존 4개 파일(`Badge.vue`/`index.ts`, `Tags.vue`/`tag.ts`) 내부에서 값 교체 3건 + prop 신설 2건으로 커버 가능한 범위로 확인됨.

## Action Items

- [x] Status Badge indicator 제거
- [ ] Active Badge — `indicator` 무조건 표시 조건 연결
- [ ] Tags — `size: 'default'|'inline'` 축 추가
- [ ] Tags — `type:'tag'` border 로직을 variant에 위임하도록 수정
- [ ] Tags — `type:'chip'`에서 `rounded-full` 제거, `rounded-sm` 통일
- [ ] Tags — leading icon 슬롯(`hasLeadingIcon`) 신설
- [ ] `type="chip"` 사용 중인 기존 화면 전체에 shape 변경(pill→사각) 시각 영향 공지
- [x] "0차 오더/리오더" — `type="tag" variant="info"`로 결정, 뱃지/텍스트 사용 기준 문서화 필요
