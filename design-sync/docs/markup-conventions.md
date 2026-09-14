# AON ERP 마크업 컨벤션 가이드

> `_reference/markup` (실개발 소스 스냅샷, `ui/` 프리미티브 제외) 분석 기반.
> 이 문서 하나만 학습해도 이 코드베이스 스타일의 화면(목록 페이지, 상세 시트, 모달)을 만들 수 있도록 작성됨.

---

## 0. 기술 스택 / 기본 규칙

- Vue 3 `<script setup lang="ts">`, Composition API. `ref`/`computed`/`defineAsyncComponent` 등은 auto-import (import 문 없이 바로 사용 가능한 것들이 많음 — 실제 코드에도 `import {ref}` 없이 `ref()`를 쓰는 파일이 섞여 있음).
- Tailwind CSS v4. 커스텀 시멘틱 토큰(`bg-surface-muted`, `text-danger`, `border-border` 등)과 커스텀 유틸(`text-md`, `caption`, `title__bold` 등)을 최우선으로 쓰고, 원색 유틸(`bg-gray-100` 등)은 쓰지 않는다.
- 모든 화면 컴포넌트는 파일 하단에 다음 3-블록 구조를 갖는다:
  ```vue
  <template>...</template>
  <script setup lang="ts">...</script>
  <style scoped></style>
  <route lang="yaml">
  meta:
    layout: MarkupDefault
  </route>
  ```
  `<route>` 블록은 페이지(라우트) 컴포넌트에만 있고, 하위 컴포넌트(Form, Modal 등)에는 없다.
- `<style scoped>`는 거의 항상 **비워둔다**. 스타일은 Tailwind 클래스와 `index.css`의 커스텀 컴포넌트 클래스로만 처리하고, scoped CSS를 새로 작성하지 않는다.
- 시맨틱 태그를 의미에 맞게 쓴다: 라벨-값 쌍은 `<dl><dt>라벨</dt><dd>값</dd></dl>`, 페이지 제목은 `<h2>`, 섹션 제목은 `<h4>`, 폼은 `<form action="">`으로 감싼다(실제 submit은 안 함, 시맨틱 목적).

---

## 1. 폴더/파일 구조 컨벤션

도메인 기반 폴더 구조를 쓴다. 하나의 "관리 화면"은 보통 3곳에 파일이 나뉜다:

```
views/{도메인}/{엔티티}/index.vue                        ← 목록 페이지 (라우트)
components/sheet/{도메인}/{엔티티}/AddForm.vue            ← 추가 시트
components/sheet/{도메인}/{엔티티}/EditForm.vue           ← 수정 시트
components/sheet/{도메인}/{엔티티}/ViewForm.vue           ← 상세보기 시트
components/modal/{도메인}/{엔티티}/...                    ← (필요시) 관련 모달
```

예: `views/basic/warehouse/index.vue` + `components/sheet/basic/warehouse/{Add,Edit,View}Form.vue`

**더 복잡한 엔티티**(탭이 여러 개인 상세 화면)는 Edit/ViewForm 안에서 다시 하위 폴더로 쪼갠다:
```
components/sheet/organization/hr/EditForm.vue            ← 탭 컨테이너 (LineTabs)
components/sheet/organization/hr/editForm/DefaultForm.vue   ← 탭1 내용
components/sheet/organization/hr/editForm/EducationForm.vue ← 탭2 내용
components/sheet/organization/hr/editForm/CareerForm.vue    ← 탭3 내용
```
(view 모드도 동일하게 `viewForm/` 하위 폴더로 미러링)

**리스트 목록 안에서 상태별로 다른 레이아웃**을 보여줘야 하면 `components/page/{도메인}/{엔티티}/{State}.vue`로 쪼갠다 (아래 4장 참고).

도메인 최상위 폴더 예시: `basic`(기초정보), `company`(기업/조직), `md`(MD 관리), `plan`(기획), `production`(생산), `logistics`(물류), `system`(시스템), `integration`(외부연동).

---

## 2. 목록 페이지 (`views/**/index.vue`) 템플릿

가장 기본적인 목록 페이지는 이 순서로 구성된다:

```vue
<template>
  <!-- ① 페이지 헤더 -->
  <section class="border-b-1 border-border px-8">
    <header class="contents-header">
      <div class="contents-header__title">
        <h2>창고 관리</h2>
      </div>
      <div class="contents-header__button justify-self-end">
        <UiButton variant="outline" @click="open('AddForm')">
          <LucidePlus/>추가
        </UiButton>
      </div>
    </header>
  </section>

  <!-- ② 검색 아코디언 (선택) -->
  <section class="px-8 pt-6">
    <PageSearch>
      <template #search-body>
        <div class="flex flex-wrap gap-2 [&>*]:w-50">
          <ComboboxTag placeholder="..." :list-item="[...]"/>
          <InputBase placeholder="..."/>
        </div>
      </template>
    </PageSearch>
  </section>

  <!-- ③ 테이블 -->
  <TableLayout :pagination="false">
    <colgroup><col v-for="i in 5" :key="i"/></colgroup>
    <template #table-action/>
    <template #table>
      <DefaultTable class="row-link">
        <UiTableHeader class="sticky top-0 z-10">
          <UiTableRow>
            <Th data="컬럼명"/>
          </UiTableRow>
        </UiTableHeader>
        <UiTableBody>
          <UiTableRow @click="open('ViewForm')" v-for="_ in 5">
            <Td class="text-center" data="값"/>
          </UiTableRow>
        </UiTableBody>
      </DefaultTable>
    </template>
  </TableLayout>

  <!-- ④ 시트/모달 오케스트레이션 -->
  <component :is="currentComponent" v-model:open="openValue" @open="open"/>
</template>

<script setup lang="ts">
const openValue = ref<boolean>(false);
type formMode = 'AddForm' | 'EditForm' | 'ViewForm' | 'AddrModal';
const mode = ref<formMode>('AddForm');

const open = (selectedMode: formMode) => {
  openValue.value = true;
  mode.value = selectedMode;
}

const componentsMap: Record<formMode, any> = {
  AddForm: defineAsyncComponent(() => import('@/markup/components/sheet/.../AddForm.vue')),
  EditForm: defineAsyncComponent(() => import('@/markup/components/sheet/.../EditForm.vue')),
  ViewForm: defineAsyncComponent(() => import('@/markup/components/sheet/.../ViewForm.vue')),
  AddrModal: defineAsyncComponent(() => import('@/markup/components/modal/AddrModal.vue')),
}
const currentComponent = computed(() => componentsMap[mode.value])
</script>

<route lang="yaml">
meta:
  layout: MarkupDefault
</route>
```

### 목록 페이지에 탭(상태별 뷰)이 있는 경우

`contents-header` 아래에 `<nav><LineTabs/></nav>`를 추가하고, 탭 값에 따라 **페이지 본문 자체**를 다른 컴포넌트로 스위칭한다 (모달/시트 오케스트레이션과 동일한 `defineAsyncComponent` + `computed` 패턴을 본문에도 그대로 적용):

```vue
<nav>
  <LineTabs :tab-list="pageTab" @change="changeTab">
    <template #default="{tab}">
      {{tab.label}}
      <UiBadge size="count" :class="tab.active ? 'bg-primary-light text-primary' : ''" v-if="tab.count > 0">{{ tab.count }}</UiBadge>
    </template>
  </LineTabs>
</nav>
...
<component :is="pageComponent"/>
```
```ts
const pageTab = ref([
  {label: '할당 대기', value: 'Hold', active: true, count: 10},
  {label: '할당 확정', value: 'Confirm', active: false, count: 5},
])
const pageComponentMap: Record<viewMode, any> = {
  Hold: defineAsyncComponent(() => import('@/markup/components/page/.../Hold.vue')),
  Confirm: defineAsyncComponent(() => import('@/markup/components/page/.../Confirm.vue')),
}
```
각 상태별 화면 파일은 `components/page/{도메인}/{엔티티}/{State}.vue`에 둔다.

---

## 3. 상세 시트/모달 (`components/sheet|modal/**`) 템플릿

시트는 `SheetBase`, 모달은 `ModalBase`를 항상 감싸서 쓴다 (직접 `UiSheet`/`UiDialog`를 쓰지 않음).

```vue
<SheetBase title="창고 상세">
  <!-- 탭이 필요하면 -->
  <template #tab>
    <section class="border-b-1 border-border px-6">
      <nav><LineTabs @change="changeTab" :tab-list="tabList"/></nav>
    </section>
  </template>

  <template #body>
    ...
  </template>

  <template #footer>
    <div class="flex gap-2">
      <UiButton variant="destructive" @click="deleteOpen = true">삭제</UiButton>
      <UiButton @click="$emit('open', 'EditForm')">수정</UiButton>
    </div>
    <DeleteModal v-model:open="deleteOpen" item="창고"/>
  </template>
</SheetBase>
```

- `title`은 prop으로, 뱃지 등 커스텀이 필요하면 `#title` 슬롯을 대신 쓴다.
- 전체화면 시트는 `<SheetBase :full-screen="true">`.
- **모달/시트를 여는 쪽(부모)**과 **닫기 버튼을 눌러 다른 모달을 여는 쪽(자식)**은 항상 `@emit('open', 'ModalName')`으로 이벤트를 위로 흘려보내고, 실제 오케스트레이션(어떤 컴포넌트를 보여줄지)은 최상위 목록 페이지나 EditForm이 담당한다. 자식 컴포넌트가 자기 스스로 다른 모달의 존재를 import하지 않는다 (AddrModal 예외 — 이건 공용이라 각 Form에서 직접 emit만 함).

### 3-1. 보기(View) 모드 — `view-list`

라벨-값 쌍은 `dl.view-list__item` 안에 `dt.view-list__item-title` + `dd.view-list__item-cont`로 감싼다. 값이 여러 줄이면 `dd`를 여러 개 반복한다.

```vue
<div class="view-list">
  <dl class="view-list__item">
    <dt class="view-list__item-title">창고 코드</dt>
    <dd class="view-list__item-cont">SMART1</dd>
  </dl>
  <dl class="view-list__item">
    <dt class="view-list__item-title">창고 주소</dt>
    <dd class="view-list__item-cont">서울 성동구 아차산로 17</dd>
    <dd class="view-list__item-cont">xx빌딩 10층 1001호</dd>
  </dl>
</div>
```
`view-list`는 세로 나열(`flex flex-col gap-4 p-6`)이고, 컬럼 배치가 필요 없는 단순 상세일 때 쓴다. 값 옆에 값을 가로로 나란히 두고 싶으면 `dl.view-list__item--row`.

### 3-2. 보기 모드 — 여러 섹션으로 나뉜 복잡한 상세는 `list-layout--grid`

섹션마다 `<h4>제목</h4>` + `dl.view-list__item` 여러 개를 `.list-layout--grid`로 감싸고, 섹션 사이는 `<UiSeparator orientation="horizontal"/>`로 구분한다. 전체를 `.container-type--inline`으로 한 번 더 감싸면 시트 너비에 따라 1열→2열(960px~)→3열(1440px~)로 반응형이 된다.

```vue
<div class="container-type--inline">
  <div class="list-layout--grid">
    <h4>스타일 정보</h4>
    <dl class="view-list__item">
      <dt class="view-list__item-title">컬렉션</dt>
      <dd class="view-list__item-cont">thisisneverthat</dd>
    </dl>
    <!-- ...더 많은 dl -->
  </div>

  <UiSeparator orientation="horizontal" />

  <div class="list-layout--grid">
    <h4>SKU 정보</h4>
    ...
  </div>
</div>
```

이미지 등 폭이 큰 요소를 그리드 안에 한 줄 전체로 넣고 싶으면 `col-span-full`을 직접 준다.

### 3-3. 수정/추가(Edit/Add) 모드 — `FormItem`

입력 필드는 전부 `FormItem`으로 감싼다. `view-list__item`(수정 불가 필드)과 `FormItem`(수정 가능 필드)을 같은 `<div class="px-6 py-4 flex flex-col gap-4">` 안에 섞어 쓰는 것도 흔한 패턴이다 (예: 코드값은 view-list로 읽기전용, 나머지는 FormItem).

```vue
<form action="">
  <div class="px-6 py-4 flex flex-col gap-4">
    <dl class="view-list__item">
      <dt class="view-list__item-title">창고 코드</dt>
      <dd class="view-list__item-cont">SMART1</dd>
    </dl>
    <FormItem required label="창고 명" placeholder="창고 명을 입력해 주세요" validateText="필수 입력 항목입니다."/>
    <FormItem required label="창고 구분" placeholder="창고 구분을 선택해 주세요" validate-text="...">
      <template #input-item>
        <ComboboxTag :list-item="[{label:'실물',value:'val1'}]"/>
      </template>
    </FormItem>
    <!-- 주소 필드는 항상 검색버튼+상세주소 2단 구성, 그리드에서 한 줄 전체 차지 -->
    <FormItem class="col-span-full h-27" required label="창고 주소">
      <template #input-item>
        <div class="grid gap-1">
          <div class="flex gap-2">
            <InputBase placeholder="주소를 입력해 주세요"/>
            <UiButton variant="secondary" @click="$emit('open', 'AddrModal')">검색</UiButton>
          </div>
          <InputBase placeholder="상세주소를 입력해 주세요"/>
        </div>
      </template>
    </FormItem>
  </div>
</form>
```

기본 텍스트 입력은 `label`/`placeholder`/`validateText`만 주면 되고, 커스텀 입력 컨트롤(콤보박스/날짜/파일 등)이 필요하면 `#input-item` 슬롯을 쓴다.

저장 버튼은 실제 API 호출 대신 `toast.success('요청이 정상 처리되었습니다')`로 목업 처리한다.

---

## 4. 목록/리스트 표현 방식 — 어떤 클래스를 언제 쓰나

같은 "목록"이라도 용도에 따라 쓰는 클래스가 다르다:

| 클래스 | 용도 | 특징 |
|---|---|---|
| `.view-list` / `.view-list__item` | 상세 화면의 라벨-값 나열 | `dl/dt/dd`, 세로 스택 |
| `.list-layout--grid` | 상세 화면을 섹션으로 나눌 때 | `h4` 섹션제목 + 반응형 1~3열 그리드 |
| `.data-list` / `.data-list__item` | 클릭 가능한 로우 형태 리스트 (알림, 검색결과 등) | `.data-list__item--clickable`, `.data-list__item--selected`, `.data-list__cont`(좌우 분할), `.data-list__meta`(우측 보조정보) |
| `.list-block-item` | 트리형/DnD 가능한 블록 리스트 (메뉴 관리, 권한 관리 등) | `.active`, `.item--dragging`, `.item--drag-target`, hover 시 `.list-block-item__edit` 노출 |
| `.icon-list` / `.icon-list__item` | 아이콘+텍스트 알림형 리스트 | `.icon-list__icon--default/success/warning` |
| `.addr-list` / `.addr-list__item` | 주소 검색 결과 리스트 | `AddrModal` 전용 |
| `UiTable` + `Th`/`Td` | 표 형태 데이터 | 아래 5장 참고 |

**선택 기준**: 클릭해서 상세/토글로 진입하는 단순 로우 나열 → `data-list`. 드래그 정렬·트리 구조·인라인 편집 버튼이 필요 → `list-block-item`. 폼처럼 라벨-값을 나열하는 읽기 전용 상세 → `view-list`(+섹션 구분 필요하면 `list-layout--grid`).

---

## 5. 테이블 컨벤션

- 항상 `Th`(`@/markup/components/table/Th.vue`) / `Td`(`.../Td.vue`) 마크업 컴포넌트를 통해 헤더/셀을 만든다. `<th>`/`<td>`를 직접 안 쓴다.
- 기본 뼈대는 `DefaultTable`(`@/markup/components/table/DefaultTable.vue`, `<UiTable class="border-b table-fixed w-full">`의 얇은 래퍼)로 감싼다.
- 체크박스 컬럼: `<Th type="checkbox"/>` / `<Td type="checkbox"/>`.
- 액션(더보기 등) 컬럼: `<Th type="function"/>` / `<Td type="function"><UiButton .../></Td>`.
- 로우 클릭으로 상세 진입: `<UiTableRow @click="open('ViewForm')">` + 테이블 자체에 `class="row-link"` (커서 포인터 처리).
- 목록 페이지의 전체 뼈대는 항상 `TableLayout`으로 감싼다 — 헤더 위 검색/필터/설정 아이콘, 하단 페이지네이션까지 전부 이 컴포넌트가 슬롯으로 제공한다. `:pagination="false"`로 끄지 않는 한 하단에 `TablePagination` + 페이지당 개수 콤보박스가 자동으로 붙는다.
- 시트/모달 내부의 보조 테이블(2차 정보용)은 `class="table-secondary"`를 붙인다 — 헤더가 작고(`!h-8`) 회색 배경(`bg-surface-muted`)인 축소판 스타일이 된다.
- 헤더 그룹핑(컬럼 여러 개를 하나의 상위 헤더로 묶기)이 필요하면 테이블에 `class="table--group-header"`를 추가하고 `<Th colspan="2">그룹명</Th>` 행을 헤더 맨 위에 추가한다.

---

## 6. 클래스 네이밍 컨벤션 (BEM 계열)

- **블록**: 소문자-케밥 (`view-list`, `data-list`, `list-block-item`, `icon-list`, `table-layout`).
- **엘리먼트**: `블록__엘리먼트` — 언더바 두 개 (`view-list__item`, `data-list__cont`, `contents-header__title`).
- **모디파이어**: `블록--모디파이어` — 하이픈 두 개 (`item--dragging`, `data-list__item--selected`, `table--group-header`). 단, 아주 오래된 클래스 중 `.table-secondary`, `.table-editable`처럼 하이픈 한 개짜리 예외도 남아있음(신규 클래스는 항상 `--` 두 개 컨벤션을 따를 것).
- **상태**는 클래스보다 **속성 선택자**를 우선한다: `.active`, `.focus`, `.highlighted` 같은 단순 상태 클래스도 쓰지만, 컴포넌트 내부 상태는 `data-state`, `data-slot`, `data-disabled` 같은 `data-*` 속성 + Tailwind `data-[state=...]:` variant로 처리하는 게 기본. 커스텀 컴포넌트를 만들 때도 루트 엘리먼트에 `data-slot="컴포넌트이름"`을 붙이는 게 관례.
- **반응형/컨테이너 쿼리 대상**은 `.container-type--inline`으로 감싸고, 그 안의 그리드는 `@container` 쿼리로 컬럼 수를 바꾼다 (일반 `@media`가 아니라 부모 컨테이너 폭 기준).

---

## 7. 레이아웃 컴포넌트 (앱 셸)

- `Header.vue`: 상단 고정 바. 사이드바 토글 + 브랜드 선택 콤보박스 + 우측 알림/설정 아이콘 + 프로필 드롭다운. `h-10`, `border-b-1`.
- `LeftSidebar.vue`: 아이콘 전용 축소 사이드바(`MainMenuIcon`) + 펼침 시 텍스트 사이드바(`MainMenuText`) 2단 구조. 상단에 메뉴 검색용 `ComboboxBase`.
- 페이지 콘텐츠 최상단은 거의 항상 `<section class="border-b-1 border-border px-8"><header class="contents-header">...</header></section>` 패턴으로 시작한다 — `contents-header`가 좌측 타이틀(`contents-header__title`)과 우측 버튼 그룹(`contents-header__button`)을 `justify-between`으로 배치해준다.

---

## 8. 모달/시트 오케스트레이션 패턴 (가장 중요한 재사용 패턴)

이 코드베이스는 **Vue Router로 모달을 열지 않는다.** 대신 어디서든 아래 4종 세트를 그대로 복붙해서 쓴다:

```ts
const openValue = ref<boolean>(false);
type Mode = 'AddForm' | 'EditForm' | 'ViewForm' | ... ;
const mode = ref<Mode>('AddForm');

const open = (selected: Mode) => {
  openValue.value = true;
  mode.value = selected;
}

const componentsMap: Record<Mode, any> = {
  AddForm: defineAsyncComponent(() => import('경로/AddForm.vue')),
  EditForm: defineAsyncComponent(() => import('경로/EditForm.vue')),
}
const currentComponent = computed(() => componentsMap[mode.value])
```
```vue
<component :is="currentComponent" v-model:open="openValue" @open="open"/>
```

- 자식(Form/Modal)에서 다른 모달을 열고 싶으면 직접 열지 말고 `$emit('open', '모달이름')`으로 위에 알린다.
- 이 패턴은 목록 페이지의 Add/Edit/View 전환, TableLayout의 설정/정렬 모달, EditForm 내부의 탭 전환(`defineAsyncComponent`로 탭 콘텐츠 스위칭) 등 **"이 화면 안에서 다른 화면 조각을 보여줘야 하는" 모든 곳에 동일하게 적용**된다. 새 화면을 만들 때 이 패턴부터 세팅하고 시작한다.

---

## 9. 자주 쓰는 공용 마크업 컴포넌트 임포트 경로

```ts
import FormItem from "@/markup/components/form/FormItem.vue";
import SheetBase from "@/markup/components/sheet/SheetBase.vue";
import ModalBase from "@/markup/components/modal/ModalBase.vue";
import ConfirmModal from "@/markup/components/modal/ConfirmModal.vue";
import DeleteModal from "@/markup/components/modal/DeleteModal.vue";
import TableLayout from "@/markup/components/table/TableLayout.vue";
import DefaultTable from "@/markup/components/table/DefaultTable.vue";
import Th from "@/markup/components/table/Th.vue";
import Td from "@/markup/components/table/Td.vue";
import PageSearch from "@/markup/components/accordion/PageSearch.vue";
import ComboboxTag from "@/markup/components/select/ComboboxTag.vue";
import ComboboxBase from "@/markup/components/select/ComboboxBase.vue";
import { InputBase } from "@/markup/components/inputs";
import DatePicker from "@/markup/components/datePicker/DatePicker.vue";
import { LineTabs } from "@/markup/components/tabs";
import Tags from "@/markup/components/tag/Tags.vue";
import { toast } from 'vue-sonner';
```

`Ui`로 시작하는 모든 컴포넌트(`UiButton`, `UiBadge`, `UiTable*`, `UiDropdownMenu*`, `UiSeparator` 등)는 전역 등록돼 있어 import 없이 바로 쓴다. 실개발에서는 `@/components/ui/*` 별칭으로 이 컴포넌트들을 불러온다(하위 컴포넌트 내부 구현에서만 보이고, 화면 마크업에서는 어차피 전역 등록이라 신경 쓸 필요 없음).

---

## 10. 버튼/푸터 컨벤션

- 시트/모달 푸터는 좌측 위험 액션 + 우측 확정 액션 순서: `삭제(destructive, 좌측)` → 나머지 → `저장/확인(default, 우측 끝)`.
- `닫기` 버튼(`variant="outline"`)은 `SheetBase`/`ModalBase`가 기본 슬롯으로 이미 제공하므로 별도로 안 넣어도 된다 (`footer` prop이 `true`일 때 자동 노출).
- 상태 변경류 버튼(사용/미사용, 활성/비활성)은 `ConfirmModal`로 한번 더 확인시킨다.
- 아이콘만 있는 버튼은 `size="icon"`(일반) / `size="icon-sm"`(테이블 액션처럼 작은 곳) / `size="inline-icon"`(텍스트 사이에 인라인으로 들어가는 아주 작은 아이콘).

---

## 11. 체크포인트 — 새 화면을 만들 때 확인할 것

1. 목록 페이지인가, 상세 시트인가, 모달인가 → 1장 폴더 규칙에 맞는 위치에 파일 생성
2. 목록이면: `contents-header` → (선택)`PageSearch` → `TableLayout`+`DefaultTable`+`Th`/`Td` → 모달 오케스트레이션 4종 세트
3. 상세면: `SheetBase`/`ModalBase` → 읽기 전용은 `view-list`(섹션 나뉘면 `list-layout--grid`+`UiSeparator`), 수정 가능은 `FormItem`
4. 여러 탭이 있으면 `LineTabs` + `defineAsyncComponent` 맵으로 콘텐츠 스위칭 (모달 오케스트레이션과 동일 패턴)
5. 색상/여백은 전부 시멘틱 토큰(`bg-surface-muted`, `text-danger`, `border-border`, `px-padding-sm` 등)으로, 원색 유틸 금지
6. 라벨-값 쌍은 항상 `dl/dt/dd`, 새 리스트 UI가 필요하면 4장 표를 보고 기존 클래스 중 맞는 것을 재사용 (새 클래스는 최후의 수단)
