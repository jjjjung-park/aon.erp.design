# POS 모드 준비 메모 (토큰·모드 구조·동기화)

작성일: 2026-11-23 / 관련 문서: `pos-component-mapping.md`

## 1. 현황

| 항목 | 상태 |
|---|---|
| AON 토큰 파일(`mUPDdgGClaBINfIP4fUK15`) `semantic` 컬렉션 | 모드 `ERP` / `POS`, 변수 63개 |
| ERP와 POS 값이 다른 변수 | **2개뿐**: `size/xxs` 12→0, `size/lg` 40→0 |
| 나머지 61개 | ERP와 동일 |
| POS 화면(`142:13035`)이 읽는 값 | `size/lg`=40, `size/xxs`=12 → ERP 값으로 설계됨 |
| 저장소 토큰 JSON(`token-sync/tokens/semantic.json`) | 모드 1개(`30:0` = `Mode 1`). 아직 ERP/POS 이름·POS 값 없음 |
| `vars.css`의 size 토큰 | ERP 값과 일치 (12/16/24/32/40/64/80) |

**주의:** POS의 `size/xxs`, `size/lg` 값 0은 **컨트롤 높이 0**이 되므로 값 확정 전의 placeholder로 판단합니다. 이 값은 `vars.css`에 반영하면 안 됩니다.

## 2. 모드 구조 (구현 방향)

### html 속성
- ERP = **속성 없음**, POS = `<html data-mode="pos">`
- 반드시 `html`(`document.documentElement`)에 겁니다. Dialog·Sheet·Dropdown은 `body`로 포털 이동하므로 레이아웃 래퍼에 걸면 모달만 ERP 크기로 나옵니다.

### CSS 블록 (값 확정 후 추가)
```css
/* vars.css — :root 블록 아래 */
:root[data-mode="pos"] {
  /* POS에서 ERP와 값이 다른 semantic 변수만 */
  /* --size-md: var(--unit-40); */
}
```
- 셀렉터는 `:root[data-mode="pos"]`(우선순위가 `:root`보다 높음)로 씁니다.
- Tailwind `@theme inline`은 유틸이 `var(--...)`를 직접 참조하므로 런타임 덮어쓰기가 먹습니다. 단, **`h-8` 같은 고정 숫자 유틸은 모드가 바뀌어도 그대로**입니다(→ 4번).

### Storybook (구현됨)
- `.storybook/preview.ts`에 툴바 `모드`(ERP/POS)를 추가했습니다. 선택에 따라 `html`에 `data-mode="pos"`를 걸거나 제거합니다.
- URL로도 지정됩니다: `iframe.html?id=<스토리 id>&globals=mode:pos`
- 확인: `globals=mode:pos` → `html[data-mode="pos"]`, `globals=mode:erp` → 속성 없음, 툴바에 `ERP`/`POS` 선택 표시.
- 현재는 `:root[data-mode="pos"]` 블록이 비어 있으므로 화면 변화는 없습니다.

## 3. 토큰 동기화 규칙 변경안 (`/sync-tokens`)

현재 규칙(`.claude/commands/sync-tokens.md`): `resolvedValuesByMode`의 **첫 번째 모드 값만** 사용 → POS 값은 무시됩니다.

변경안:
1. `modes` 객체의 **첫 번째 모드 = 기본 모드(ERP)** → 기존대로 `:root`에 출력
2. 그 외 모드 → `:root[data-mode="<모드 이름 소문자>"]` 블록에 **기본 모드와 값이 다른 변수만** 출력
3. alias(`aliasName`) 처리 규칙은 동일
4. FLOAT 값이 `0`인 모드 값은 경고로 표시하고 반영하지 않음 (placeholder 방지)

선행 조건:
- 디자이너가 JSON을 다시 export해야 합니다. 현재 저장소 JSON은 모드 이름이 `Mode 1`이라, `ERP`/`POS` 이름이 들어간 export가 필요합니다.
- JSON 구조는 이미 멀티 모드를 지원합니다 (`modes`: `{id: 이름}`, `valuesByMode`/`resolvedValuesByMode`: 모드 ID별 값). **플러그인 변경은 필요 없고 변환 규칙만 바꾸면 됩니다.**
- 토큰 JSON을 수정하는 작업은 `token_v0.0.x` 브랜치에서 해야 합니다(가드 훅).

## 4. 고정 높이 → size 토큰 전환 범위

`h-6/7/8/9/10/11/12/14/16`, `min-h-*`, `size-*` 등 고정 크기 유틸 사용 횟수 (정규식에 `size-4/5`, `h-5` 등은 미포함):

| 구분 | 폴더(횟수) |
|---|---|
| **POS 사용 컴포넌트** (약 55곳) | ui: button(7), select(4), combobox(4), toggle(3), table(2), item(2), input(1), input-group(1), badge(1), avatar(1), tabs(1), dialog(1), accordion(1), pagination(1), number-field(1) / markup: modal(15), select(5), tabs(4), table(1), inputs(1) |
| POS와 무관 (약 50곳) | ui: sidebar(7), tags-input, range-calendar, carousel, calendar, resizable 등 / markup: loading(21), layout(11), sheet(4), datePicker(2) |

- POS 사용 컴포넌트만 우선 전환하면 약 20개 폴더, 55곳입니다.
- 체크박스·라디오·스위치는 크기가 `size-4`/`h-5 w-10`으로 박혀 있어 위 정규식에 안 잡힙니다. POS에서 `Large`가 필요하면 별도 작업입니다.
- 방식: ① `size-*` 토큰 유틸로 교체 ② cva `size` variant에 POS용 값 추가 — 컴포넌트별로 판단합니다.

## 5. erp-fe 연결 (정리)

| 항목 | 방법 | 위치 |
|---|---|---|
| 페이지가 POS 모드임을 선언 | 페이지의 `<route lang="yaml">`에 `meta: { mode: pos, newWindow: true }` | `src/views/**` |
| `html` 속성 설정 | `router.beforeEach` 맨 위에서 `to.meta.mode`로 설정/제거 | `src/router/routerPermission.ts` |
| 메뉴 클릭 시 새 탭 | `moveRouter`에서 `newWindow` 메타면 `/detection?brand=…&redirect=…`로 `window.open` | `src/stores/menu.ts` |
| 브랜드·메뉴 재조회 | 기존 `Detection.vue`가 `setBrand` → `refresh()` → `redirect` | `src/views/Detection.vue` |

- 새 탭은 `sessionStorage`(브랜드, 메뉴 트리)가 비어 있으므로 반드시 `/detection` 경로로 진입해야 합니다.
- `app-state`(`isSideOpen`)는 `localStorage`라 창 사이에 동기화됩니다. POS 레이아웃은 이 키를 쓰지 않아야 합니다.

## 6. 아이콘

- 화면에서 쓰는 lucide 아이콘 29종은 설치본(`lucide-vue-next` 0.511.0)에 모두 있습니다.
- `custom/star-fill`은 lucide `Star`와 **같은 경로**(좌표 표기만 다름)이므로 별도 SVG 없이 `<LucideStar class="fill-current" />`로 대체합니다. (색은 `text-*`로 지정)

## 7. 디자이너 확인 질문

1. POS 모드에서 바뀌는 변수 범위와 값 (`size/*`, spacing, typography). `size/xxs`, `size/lg`의 0은 의도인지?
2. 큰 금액 숫자 40px의 typography 토큰화 여부 (현재 최대 `xl`=24)
3. 태그 색 팔레트(증정품/시즌 상품 등): `#F7860D`, `#6D930D`가 기존 warning/success(`#F36D00`, `#00A035`)와 다른데 토큰으로 만들지, 기존 토큰으로 맞출지
4. 10px 텍스트 스타일(작은 태그)과 radius 5px, gap 10px 정리
5. 로컬 컴포넌트 9종(POS/index, Header, Navigation, SubItem, Panel, Product, OderItem/Static, Amount Display, IconButtonsWithText-Vertical)을 AON 라이브러리로 게시하는 계획과 시점
6. `REMOTE`이나 AON에서 이름이 안 나온 컴포넌트 6종(`Amount Input`, `Payment History`, `OrderDetails`, `Product Info`, `headerLogo`, `avatarBlock`)의 출처
7. `TableFilter` 참조 키 불일치(구버전 사용 여부)
8. `Button-Text` Type 값(Normal, Danger)의 실제 모양과 `xl` 크기의 용도
9. `Button-Icon1`, `Button-Base-*` 등 중복 컴포넌트 정리 여부
