# 디자인 회의록 — 2026-09-07

## 참석
- 디자이너
- 퍼블리셔 (aon.erp.design / design-sync)

## 안건

1. 신규 메뉴 추가 관련 전체 업무 로직 설명 및 개발 일정 공유
2. 후반부 작업 대비 컴포넌트 추가/수정 (상태칩 분리)
3. 신규 메뉴용 인라인 라벨 파악
4. 확장형 테이블 컴포넌트 추가
5. 기타 확정 사항

---

## 1. 신규 메뉴 추가 — 업무 로직 & 일정 공유

- 신규 메뉴 관련 전체 업무 흐름 설명, 개발 일정 공유 (내용은 구두 공유 — 별도 기록 없음)

---

## 2. 상태칩(뱃지) 분리 논의

### 2-1. 결론: 컴포넌트 분리 대신 기존 Badge 확장

- **컴포넌트 물리적 분리는 하지 않음.** [Badge/index.ts](../../src/ui/badge/index.ts)가 이미 `variant`(색상/의미) + `size`(형태) 축으로 여러 상태를 한 컴포넌트에서 cva로 관리하는 구조라, 이 패턴을 그대로 확장하는 쪽으로 결정.
- 분리 시 기존 621건(마크업 레퍼런스 기준) 전수 재분류가 필요해 리스크 대비 실익이 적다고 판단.
- **on/off(활성 뱃지)는 신규 variant/size로 추가, 신규 화면부터 적용.** 기존 workflow 계열(299건) 호출부는 변경 없음.
- 용어 정리:
  - workflow 상태 → **상태 뱃지 (Status Badge)**
  - on/off 상태 → **활성 뱃지 (Active Badge)**

### 2-2. Workflow 뱃지 디자인 변경 — "신호등" 인디케이터

- 디자인 변경 사항: 상태 텍스트 앞에 **variant 색과 동일한 동그라미**가 붙는 형태 (신호등 스타일)
- **구현 방식**: 새 컴포넌트를 만들지 않고 기존 Badge에 `indicator` prop 추가
  - `indicator`가 `true`인 workflow variant(`process`/`accept`/`reject`/`hold`)는 **자동으로 dot 표시**
  - dot 색상은 별도 지정 없이 `bg-current`로 각 variant의 텍스트 색을 그대로 상속 (색상 값 이중 관리 불필요)
  - 기존 호출부 코드 변경 없이 자동 적용됨 (회귀 없음)
- **적용 완료**: [Badge.vue](../../src/ui/badge/Badge.vue), [index.ts](../../src/ui/badge/index.ts) — Storybook `기초/Badge/상태 배지` 스토리에서 확인 완료
- **미확정 (디자이너 확인 필요)**: `info`/`outline` variant도 신호등 dot을 붙일지 여부 — 현재는 workflow 4종(process/accept/reject/hold)에만 자동 적용, info/outline은 제외 상태

### 2-3. 참고 레퍼런스 (신호등형 상태 뱃지)

| 레퍼런스 | 특징 |
|---|---|
| [Ant Design Badge](https://ant.design/components/badge) | `status` + `text` prop으로 dot+텍스트 구성 — 현재 구조와 가장 유사. processing 상태에 펄스 애니메이션 |
| [Vercel Geist Status Dot](https://vercel.com/geist/status-dot) | 진행중(BUILDING/QUEUED) 상태에서만 dot이 애니메이션, 완료 시 정적으로 전환 |
| [Carbon Design System Status Indicator](https://v10.carbondesignsystem.com/patterns/status-indicator-pattern/) | 색상 위계 가이드 — 빨강/주황=즉시 대응, 초록/파랑=정상 진행, 회색=미확정. 현재 variant 색 위계와 논리 일치 |

- 공통 가이드: dot 단독 사용 금지(텍스트 라벨 필수 동반), "처리중" 류 상태는 펄스 애니메이션이 업계 공통 패턴 → **추후 process variant 애니메이션 추가 여부 디자이너와 논의 필요**

### 2-4. 사이드 이펙트 / 공수 파악 (design-sync `_reference/markup` 기준)

| 구분 | variant | 건수 |
|---|---|---|
| workflow류 | process | 85 |
| | info | 71 |
| | outline | 53 |
| | accept | 48 |
| | reject | 28 |
| | hold | 14 |
| on/off·카운트류 | size="count" | 10 |
| | size="dot" | 6 |

- ⚠️ 위 수치는 design-sync 마크업 레퍼런스 기준. 실제 운영 중인 개발 소스(진짜 ERP 레포) 반영 현황은 별도 확인 필요.

---

## 3. 인라인 라벨

- **정의**: 상세 페이지 진입 없이 리스트/테이블 행(row) 안에서 값 옆에 바로 붙어 상태·속성을 짧게 보여주는 라벨
- **작업 방향 2안**:
  - (A) Badge 확장안 — `size="inline"` 등 더 작은 사이즈 추가, 기존 variant 색상 체계 재사용
  - (B) 별도 경량 컴포넌트안 — 텍스트/아이콘 조합 등 Badge로 커버 안 되는 형태가 필요할 때
- **결정 보류**: 인라인 라벨로 표현할 항목 종류(색상 뱃지만인지, 텍스트/아이콘 조합도 필요한지)를 디자이너가 정리해오면 A/B 결정
- 레퍼런스: [Shopify Polaris Badge (테이블 배치 가이드)](https://shopify.dev/docs/api/admin-extensions/latest/web-components/feedback-and-status-indicators/badge) — 테이블 셀 안에 배송/결제 상태 뱃지 배치 패턴, "1-2단어로 간결하게" 라벨링 가이드

---

## 4. 확장형 테이블 컴포넌트

- **디자인**: main/sub 테이블 타입 선택 필요
  - 현재 `_reference/markup/components/table/`에 [DefaultTable.vue](../../_reference/markup/components/table/DefaultTable.vue), [SecondaryTable.vue](../../_reference/markup/components/table/SecondaryTable.vue)가 이미 존재(`table-secondary` 클래스로 구분) — 확장 내부용 서브 테이블이 이 스타일을 재사용할지 확인 필요
- **개발**: [TableLayout.vue](../../_reference/markup/components/table/TableLayout.vue) 사용 여부 파악
  - 사용한다면 TableLayout을 베이스로 확장 내부 전용 테이블 컴포넌트 추가 (슬롯 구조: `table-action`/`table` 유지, `pagination` 슬롯은 축소판으로 구성하는 안 제안)

---

## 5. 기타 확정 사항

| 항목 | 결정 |
|---|---|
| 메뉴 아이콘 | 서비스 릴리즈 직전 일괄 변경 예정 — 지금은 placeholder로 진행 |
| 메뉴 계층/위치 | 빈번한 변경 있음 — 확정 논의 보류, 유동적으로 유지 |
| 카운트 뱃지 | 현재 스펙으로 픽스 |
| 상세페이지 레이아웃 / 체크박스+라벨 감싸기 | 현재 규칙으로 픽스 |
| 디자인 토큰 동기화 | 디자이너와 별도 논의 필요 (미결) |

---

## Action Items

- [ ] `info`/`outline` variant의 신호등 dot 포함 여부 디자이너 확인
- [ ] process variant 펄스 애니메이션 적용 여부 논의
- [ ] 인라인 라벨 표현 항목 종류 정리 (디자이너) → Badge 확장 vs 별도 컴포넌트 결정
- [ ] 확장형 테이블 — main/sub 타입 디자인 시안 확정
- [ ] 확장형 테이블 — TableLayout 실사용 여부 개발 확인
- [ ] 실제 개발 소스(운영 ERP 레포) 내 Badge 사용 현황 개발팀 확인
- [ ] 디자인 토큰 동기화 상태 디자이너와 논의

## 완료된 작업

- [x] Badge `indicator` prop 추가 — workflow variant(process/accept/reject/hold) 자동 신호등 dot 적용 ([Badge.vue](../../src/ui/badge/Badge.vue), [index.ts](../../src/ui/badge/index.ts))
