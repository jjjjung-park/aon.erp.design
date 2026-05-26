# 기획자용 UI 템플릿 카탈로그

## 목적

기획자가 화면 기획 시 "이런 레이아웃 써주세요"라고 요청할 수 있도록
실제 구현된 레이아웃 단위의 UI 템플릿을 제공하는 샘플 페이지.

컴포넌트 단위(Button, Input 등)가 아닌 **레이아웃/화면 구성 단위**로 제공.

---

## 현재 상태

경로: `markup/views/components/`

| 파일 | 내용 | 기획자용 여부 |
|------|------|------------|
| `Atomic.vue` | 개별 컴포넌트 나열 | ❌ 개발 참고용 |
| `Molecule.vue` | 컴포넌트 조합 | ❌ 개발 참고용 |
| `Organism.vue` | Sheet, Drawer 등 복합 컴포넌트 | ❌ 개발 참고용 |
| `Skeleton.vue` | 로딩 상태 | ❌ 개발 참고용 |
| `Structures.vue` | 테이블 최소 스펙 (페이지네이션 없음) | ✅ 근접 |
| `Structures2.vue` | 테이블 최대 스펙 (탭+검색+페이지네이션) | ✅ 근접 |
| `Table.vue` | 편집 가능 테이블 | ✅ 근접 |
| `index.vue` | Structures만 보여줌 (진입점 역할 못 함) | ❌ 개선 필요 |

---

## 해야 할 것

### 1. index.vue → 템플릿 카탈로그 네비게이션으로 개선
- 현재는 Structures.vue 하나만 렌더링
- 전체 템플릿 목록을 카드/리스트 형태로 보여주는 진입 페이지로 변경
- 각 항목에 이름 + 한 줄 설명 + 미리보기 링크 제공

### 2. 추가가 필요한 템플릿

**화면 구성 타입**
- `Layout-A` : 1단 (전체 너비 콘텐츠)
- `Layout-B` : 2단 좌우 (사이드바 + 콘텐츠)
- `Layout-C` : 리스트 + 상세 (마스터-디테일)

**테이블 타입** (Structures.vue, Structures2.vue, Table.vue 기반으로 정리)
- `Table-A` : 기본 테이블 (헤더 + 행, 페이지네이션 없음) ← Structures.vue
- `Table-B` : 풀스펙 테이블 (탭 + 검색 + 페이지네이션) ← Structures2.vue
- `Table-C` : 편집 가능 테이블 ← Table.vue
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

- Storybook 도입은 추후 검토. 현재는 기존 `markup/views/components/` 구조 그대로 활용.
- 기획자가 외부에서 접근할 수 있도록 추후 GitHub Pages 또는 Vercel 배포 연동 필요.
