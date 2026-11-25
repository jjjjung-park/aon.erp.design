# POS 디자인 ↔ 코드 컴포넌트 매핑표 (초안)

- 기준 Figma: `1. 디자인 > 6. 매장 관리` 파일, 페이지 **7. 결제/환불 내역** (`142:13035`)
- 비교 대상 코드: `design-sync/src/ui/*`, `design-sync/src/markup/components/*`
- 작성일: 2026-11-23 / **초안 — 속성 매핑 중 "확인"으로 표시한 항목은 디자이너 확인 전까지 가정입니다.**
- 사용 횟수(≈)는 해당 페이지에서 인스턴스(중첩 포함)로 쓰인 횟수입니다.
- 이 페이지에서 쓰인 비아이콘 컴포넌트 56종 전부를 다뤘습니다. (아이콘 `lucide/*`, `custom/*` 제외)

## 분류 기준

| 코드 | 의미 | 필요한 작업 |
|---|---|---|
| **A** | AON 라이브러리에 게시됨 + 코드에 대응이 있음 | 속성·크기 점검 |
| **A+E** | A인데 코드에 없는 variant/크기가 있음 | variant·크기 추가 |
| **B·D** | POS 파일에만 있는 **로컬** 컴포넌트 + 코드에 없음 | 라이브러리 게시 대기 → 신규 제작 |
| **C·D** | 인스턴스는 `REMOTE`인데 AON 라이브러리에서 같은 이름이 검색되지 않음 + 코드에 없음 | 출처 확인 → 신규 제작 |
| **D** | 코드에 없음(경량 패턴 포함) | 신규 제작 또는 유틸 클래스로 대체 |

## 1. 버튼·액션

| Figma | 위치 | ≈사용 | Figma 속성 | 코드 대응 | 차이·메모 | 분류 |
|---|---|---|---|---|---|---|
| Button-Text | AON | 381 | Type: Primary/Secondary/Normal/Danger/Ghost/Link, Size: sm/md/lg/xl, 텍스트, 앞/뒤 아이콘 | `ui/button` — variant: default/destructive/outline/secondary/ghost/link, size: sm/default/lg | Primary=default, Secondary=secondary, Link=link. Normal=outline, Danger=destructive로 **가정**(코드의 destructive는 빨간 *outline*; Figma Danger가 solid인지 확인). md=default. **xl 없음** | A+E |
| Button-Icon | AON | 236 | Type: Inline/Primary/Secondary/Normal/Danger/Ghost, Size: sm/md/lg | `ui/button` size: icon-sm/icon/icon-lg, inline-icon/inline-icon-sm | Inline ↔ inline-icon 계열로 가정 | A |
| Button-Icon1 | AON | 25 | type: Primary/Secondary/normal/Danger/Ghost/Disabled | 위와 동일 | Button-Icon과 중복 정의로 보임(Disabled 변형 포함) → 통합 여부 확인 | A (정리) |
| Button-Base-Icon / Button-Base-Text | AON | 24 / 4 | Style: Filled/Outlined/Disabled/Ghost, Size: lg/md/sm | `ui/button` | 구 명칭(Filled=Primary, Outlined=Normal)으로 보임 → Button-Text/Icon으로 통합 가능한지 확인 | A (정리) |
| ButtonGroup | AON | 59 | Slot, Item Count: 1/2/3/bulk | `ui/button-group` | Item Count는 슬롯 개수 표현이라 코드 prop 불필요 | A |
| ButtonGroup/Text/CTA | AON | 2 | 단일 컴포넌트 | 대응 없음 (조회 조건 CTA 묶음) | 확인 | A (확인) |
| ToggleButton | AON | 21 | 텍스트, isSelected, align: left/center/right/Single | `ui/toggle`, `ui/toggle-group` (variant: default/outline, size: default/sm/lg) | align은 그룹 내 모서리 처리 → ToggleGroup으로 해결되는지 확인 | A |
| IconButtonsWithText-Vertical | **로컬** | 16 | 텍스트, Has string, size: lg/sm, state: Default/Selected/Disabled/hover | 없음 (별 아이콘 즐겨찾기 토글) | Button variant로 흡수할지 신규로 만들지 결정 | B·D |

## 2. 입력·폼

| Figma | 위치 | ≈사용 | Figma 속성 | 코드 대응 | 차이·메모 | 분류 |
|---|---|---|---|---|---|---|
| Input-Base | AON | 40 | Value, 앞/뒤 아이콘, BI, size: lg/sm/xxl | `markup/inputs/InputBase` — size: default/sm | lg=default로 가정, **xxl 없음** | A+E |
| TextField / SelectField / dataField / SearchField | AON | 13 / 17 / 8 / 6 | State: PlaceHolder/Filled/Static/Disabled/**Foucs**/Error, Label, HelpText, Required, Deletable | `markup/form/FormItem` + `ui/input`·`ui/select`·datePicker·InputBase | State 오타(Foucs). SearchField는 검색 버튼 포함 → InputBase+버튼 조합 | A |
| CheckBox | AON | 27 | Label, isChecked, isDisabled, size: Large/Small | `ui/checkbox` (size-4 단일) | **Large 없음** (터치 대응) | A+E |
| Radio / RadioField | AON | 31 / 8 | label, isChecked, state | `ui/radio-group` (size-4 단일) | RadioField 구조(라벨 묶음) 확인 | A |
| Amount Input | 출처 확인 | 11 | Property 1: Filled/Statics | 없음 | 밑줄형 큰 금액 입력(단위 `원`, 지우기 ×) | C·D |
| FilterOptionGroup | AON(REMOTE) | 6 | 단일 컴포넌트 | 없음 | 용도 확인 | D |
| Pagination/Table | AON | 6 | 단일 컴포넌트 | `ui/pagination` | 확인 | A |
| 숫자 키패드 | **컴포넌트 아님** | — | 화면에서 Button으로 조립 (1~9, 00/010, C, ←, 이전 화면으로/발행 완료) | 없음 | 컴포넌트화 필요 | D |

## 3. 표시 (태그·배지·라벨·구분)

| Figma | 위치 | ≈사용 | Figma 속성 | 코드 대응 | 차이·메모 | 분류 |
|---|---|---|---|---|---|---|
| tag | AON | 264 | 텍스트, has LeadingIcon, isFilter: true/false, size: sm/lg | `markup/tag/Tags` — type: tag/chip, variant: default/secondary/outline/info/category, size: default/sm | isFilter≈chip(닫기), lg=default. **다색 variant(증정품·시즌 상품 등) 없음**, 10px 텍스트 하드코딩(`text-[10px]`) | A+E |
| Badge | AON | 10 | label, Type: Count/Dot, Color: red/blue/green/subtle | `ui/badge` — size: count/dot, variant | Color ↔ variant: red=reject, blue=process, green=accept, subtle=info로 가정 | A |
| Status Badge | AON | 31 | Workflow: notStarted/started/inProgress/completed/inHold/rejected | `ui/badge` variant: process/accept/reject/hold/info | 6단계 ↔ 5변형: notStarted/started 구분 확인 | A |
| Active Badge | AON | 11 | On Actived: On/Off | `ui/badge` variant: active/inActive | — | A |
| label | AON | 23 | Label, LeadingIcon, Type: outline/fill, Size: Default/Inline | `ui/badge`(outline) 또는 Tags | 매장 태그("성수 플래그십") → 대응 확인 | A (확인) |
| IconLable | AON | 14 | 텍스트, hasLeadingIcon, Size: Body(16)/Caption(12), Icon Align | 없음 | 유틸 클래스 조합으로 충분할 수 있음 | D |
| Icons | AON | 422 | 아이콘 교체, Size: sm/md/lg | `lucide-vue-next` + `size-*` | lucide 29종 설치본(0.511.0)에 모두 존재. `custom/star-fill` = `LucideStar` + `fill-current` (SVG 경로 동일) | A |
| Divider-Vertical / Divider-Horizontal | AON | 408 / 89 | size: sm/md, size: lg/sm | `ui/separator` — size: sm/md/full, orientation | 두 Divider의 size 값 이름이 서로 다름(정리 필요) | A |
| Avatar / avatarBlock / headerLogo | AON / 출처 확인 | 23 | Avatar size: s/m/l, bage: on/off. headerLogo state: Default/NoneImage/symbol | `ui/avatar` (size-10 고정) | Avatar size 변형 없음 → E. headerLogo·avatarBlock은 C | A+E / C |
| List-Item/Meta | AON | **433** | Meta1~4(텍스트), Item Count: 1~4 | 대응 없음(`ui/item`과 구조가 다름) | 구분선으로 나뉜 텍스트 목록. **사용 빈도 최다** → 컴포넌트 필요 여부 확인 | D |
| Section/Label | AON | 16 | 단일 컴포넌트 | 없음 (섹션 제목) | 확인 | D |
| Surface | AON | 30 | Contents(slot), Type: Filled/Outlined/Elevated | `ui/card` | 확인 | A (확인) |
| accordion | AON | 2 | Contents, label, isExpanded, Type: Default/inner | `ui/accordion` | — | A |
| Empty/Label | AON | 2 | Description, Body, Show Icon, Type: Vertical/Horizontal | `ui/empty`, `markup/empty` | — | A |
| Alet/Banner | AON | 10 | label, type: Error/Default/Complete/Progress/Stable, has CTA | `ui/alert` — variant: default/primary/info/warning/danger/success | 5종 ↔ 6종 매핑 확인, 이름 오타(Alet) | A |

## 4. 구조 (모달·탭·표)

| Figma | 위치 | ≈사용 | Figma 속성 | 코드 대응 | 차이·메모 | 분류 |
|---|---|---|---|---|---|---|
| Modal/Base | AON | 26 | Header, has footer, tag, Size: sm(480)/lg(720)/xl(1200) | `markup/modal/ModalBase` (`w-modal-sm/md/lg`, fullSize) | POS는 480/720만 사용(full 없음). Figma sm/lg ↔ 코드 sm/md/lg 폭 매핑 확인 | A |
| Modal/Section | AON | 10 | Type: Body/Confirm/Guide, BodyTitle, BodyNotice | `ConfirmModal` 등 모달 본문 구성 | 확인 | A (확인) |
| Footer | AON | 16 | mode: create/update/delete | ModalBase footer 슬롯 | mode는 버튼 구성 프리셋 | A |
| ContentsTab / ContentsTab-Group | AON | 48 / 21 | Label, has count, isSelected, type: primary/Sub/Disabled/Default / Group Type: Main/Sheet | `markup/tabs` (LineTabs/BoxTabs/PageTabs) | 어느 탭 종류와 대응하는지 확인 | A (확인) |
| TableFilter | AON | 23 | has SearchField, TotalCount, SelectedCount, has Utility, Type: Basic/Bulk, Fn | `markup/table` 계열 | **POS 파일이 참조하는 키(`f30f9e1f…`)가 AON 파일의 키(`55b40867…`)와 다름 → 구버전 사용 가능성** | A (확인) |

## 5. POS 전용 (코드에 없음)

| Figma | 위치 | ≈사용 | Figma 속성 | 메모 | 분류 |
|---|---|---|---|---|---|
| POS/index | **로컬** | 21 | 단일 (1024×768 화면 틀) | 레이아웃 + `data-mode` 연결 | B·D |
| Header | **로컬** | 22 | 단일 (1024×40) | ERP 헤더(`markup/layout/Header`)와 다름 | B·D |
| Navigation | **로컬** | 19 | date, Type: BackButton/Tab (976×48) | 상단 탭 + 이전 화면 | B·D |
| SubItem | **로컬** | **256** | Label, amount, align: vertical/Horizontal | 라벨-금액 한 쌍. 사용 빈도 높음 | B·D |
| Panel | **로컬** | 35 | 단일 (600×648) | 구조 확인 전 | B·D |
| Product | **로컬** | 33 | body1, body2, Show CheckBox, **Property 1**: Default/Variant3/Selected | 체크 선택 행. 속성명 정리 필요 | B·D |
| OderItem/Static | **로컬** | 14 | 단일 (705×128) | 주문 상품 행(태그+취소선 가격+스테퍼). 이름 오타(Oder) | B·D |
| Amount Display | **로컬** | 47 | 단일 (내부 variant: vertical/Horizontal) | 금액 요약 표시 | B·D |
| Payment History | 출처 확인 | 21 | Show tag, body1, body2, state: Default/Hover/Selected | 결제 내역 리스트 행 | C·D |
| OrderDetails | 출처 확인 | 78 | has ButtonSlot, Has Favorite, Body1/2, Show tag, type: Statics/Editable | 상품 정보 행 + 즐겨찾기 | C·D |
| Product Info | 출처 확인 | 70 | 단일 | 상품 정보 블록 | C·D |

## 집계

| 분류 | 개수(행 기준) | 포함 |
|---|---|---|
| A (+정리/확인) | 약 22 | Button-Icon, ButtonGroup, ToggleButton, 폼 4종, Radio, Pagination, Badge 3종, label, Icons, Divider, Surface, accordion, Empty, Alert, Modal 3종, Tabs, TableFilter |
| A+E | 5 | Button-Text(xl), Input-Base(xxl), CheckBox(Large), tag(색 variant), Avatar(size) |
| B·D | 9 | IconButtonsWithText-Vertical, POS/index, Header, Navigation, SubItem, Panel, Product, OderItem/Static, Amount Display |
| C·D | 4 | Amount Input, Payment History, OrderDetails, Product Info |
| D | 5 | 키패드, FilterOptionGroup, IconLable, List-Item/Meta, Section/Label |
| C (출처 확인) | 2 | headerLogo, avatarBlock |

## Figma 이름·속성 정리 요청 목록 (디자이너)

- 오타: `OderItem`, `Alet/Banner`, `Delecte`, `Swith`, `Foucs`(State), `bage`(Avatar), `IconLable`
- 의미 없는 이름: `Property 1`(Product, Amount Input), `Variant3`
- 공백/한글/특수문자: `Status Badge `(끝 공백), 속성명의 공백(`Show Tag`, `has Utility`)
- 중복 정의: `Button-Icon` vs `Button-Icon1`, `Button-Base-*` vs `Button-Text/Icon`, `Icons` vs `Icons/md`
- 값 이름 불일치: `Divider-Horizontal`(lg/sm) vs `Divider-Vertical`(sm/md)
- 출처 확인: `Amount Input`, `Payment History`, `OrderDetails`, `Product Info`, `headerLogo`, `avatarBlock`
- 라이브러리 버전: POS 파일의 `TableFilter` 참조 키가 AON 파일과 다름

## 한계

- Figma 속성값(Normal/Danger 등)의 **실제 모양**은 확인하지 않고 이름으로 매핑했습니다. 위의 "가정" 표시 부분은 시안과 대조가 필요합니다.
- 로컬 컴포넌트 중 `Panel`, `Amount Display`, `OderItem/Static`은 내부 구조를 열어 보지 않았습니다.
- 사용 횟수는 중첩 인스턴스를 포함한 값이라 화면 수와 직접 대응하지 않습니다.
