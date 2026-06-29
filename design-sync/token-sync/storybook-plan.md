# 기획자용 UI 템플릿 카탈로그

## 목적

기획자가 화면 기획 시 "이런 레이아웃 써주세요"라고 요청할 수 있도록
실제 구현된 레이아웃 단위의 UI 템플릿을 제공하는 샘플 페이지.

컴포넌트 단위(Button, Input 등)가 아닌 **레이아웃/화면 구성 단위**로 제공.

---

## 현재 상태

실제 경로: `design-sync/src/markup/components/` (기존 문서의 `markup/views/components/`는 존재하지 않음)

폴더 단위로 마크업 컴포넌트가 정리되어 있음:

| 폴더 | 주요 파일 | 기획자용 여부 |
|------|----------|------------|
| `inputs/` | InputBase, InputPassword, InputFile | ❌ 코어 컴포넌트 |
| `select/` | SelectBase, ComboboxBase, ComboboxTag, ComboboxDisabled | ❌ 코어 컴포넌트 |
| `form/` | FormItem | ❌ 코어 컴포넌트 |
| `tag/` | Tags | ❌ 코어 컴포넌트 |
| `tabs/` | Tabs, PageTabs, LineTabs, BoxTabs | 🟡 패턴 |
| `table/` | TableLayout, Th, Td | ✅ 템플릿 근접 |
| `pagination/` | TablePagination, InputPagination, DotPagination | 🟡 패턴 |
| `modal/` | ModalBase, ConfirmModal, DeleteModal, tableLayout/* | ✅ 템플릿 근접 |
| `sheet/` | SheetBase, PushAlert | ✅ 템플릿 근접 |
| `popover/` | PopoverBase | 🟡 패턴 |
| `datePicker/` | DatePicker, DateRange | 🟡 패턴 |
| `loading/` | PageSkeleton, LoadingFull | ❌ 상태 표시 |
| `empty/` | EmptyPage, EmptyData | ❌ 상태 표시 |
| `layout/` | MarkupDefault, MarkupLogin, MarkupEmpty, Header, sideMenu/* | ✅ 템플릿 근접 |

> 별도 진입점(`index.vue`)이나 기획자용 템플릿 카탈로그 페이지는 아직 없음.
> Storybook 스토리는 `design-sync/src/stories/`에서 관리 (실프로젝트 동기화 금지 폴더).

---

## 해야 할 것

### 1. 템플릿 카탈로그 진입점 만들기
- 전체 템플릿 목록을 카드/리스트 형태로 보여주는 진입 페이지 신규 작성
- 각 항목에 이름 + 한 줄 설명 + 미리보기 링크 제공
- Storybook의 "템플릿" 레벨 스토리로 구성하는 방안 우선 검토

### 2. 추가가 필요한 템플릿

**화면 구성 타입**
- `Layout-A` : 1단 (전체 너비 콘텐츠)
- `Layout-B` : 2단 좌우 (사이드바 + 콘텐츠) ← `layout/sideMenu/*` 활용
- `Layout-C` : 리스트 + 상세 (마스터-디테일)

**테이블 타입** (`table/`, `pagination/`, `tabs/` 조합으로 정리)
- `Table-A` : 기본 테이블 (헤더 + 행, 페이지네이션 없음) ← `table/TableLayout.vue`
- `Table-B` : 풀스펙 테이블 (탭 + 검색 + 페이지네이션) ← table + tabs + pagination 조합
- `Table-C` : 편집 가능 테이블
- `Table-D` : 그룹 헤더 테이블 (신규)
- `Table-E` : 행 고정(pin) 테이블 (신규)

**시트/모달 타입**
- `Sheet-S` : 소형 시트
- `Sheet-M` : 중형 시트
- `Sheet-L` : 대형 시트
- `Sheet-F` : 전체 화면 시트
- `Modal-S` : 확인/경고 다이얼로그
- `Modal-M` : 폼 입력 모달

### 3. 각 템플릿에 레이블 추가
- 템플릿 이름 (예: "테이블 기본형")
- 한 줄 설명 (예: "검색/필터 없이 데이터가 적을 때 사용")
- 포함된 컴포넌트 태그 (예: Table, Pagination, Button)

---

## 참고

- Storybook(`@storybook/vue3-vite`)은 이미 도입됨. 스토리는 `design-sync/src/stories/`에서 관리.
- 마크업 컴포넌트는 `design-sync/src/markup/components/` 구조를 그대로 활용.
- 기획자용 템플릿은 Storybook "템플릿" 레벨 스토리로 분리해 공유 링크 제공 권장
  (자세한 스토리 레벨 구분은 `meeting-design-system-refactoring.md` 6번 참고).
- GitHub Pages 자동 배포 워크플로(`storybook-deploy.yml`)는 구성되어 있으나
  `paths` 필터(vars.css/ui/markup)는 추가 필요.
