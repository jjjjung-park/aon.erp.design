# aon.erp.design — 모노레포 컨텍스트

## 📁 로컬 폴더 위치
```
/Users/jepark/aon.erp.design/   ← 모노레포 루트 (git 레포)
```

**GitHub 레포:** https://github.com/jjjjung-park/aon.erp.design

---

## 📦 모노레포 구조

```
aon.erp.design/
  ├── design-sync/       ← Storybook + 디자인 토큰 (Vue 3 + Vite + Tailwind v4)
  ├── SheetToComponent/  ← Figma 플러그인 (스프레드시트 → 컴포넌트 동기화)
  ├── auto-history/      ← Figma 플러그인 (히스토리 관리)
  ├── .github/workflows/ ← GitHub Actions (Storybook 자동 배포)
  └── .gitignore
```

### 각 프로젝트별 CLAUDE.md
- `SheetToComponent/CLAUDE.md` — 플러그인 상세 컨텍스트
- `design-sync/` — 아래 섹션 참고

---

## 🎨 design-sync (Storybook)

### 기술 스택
- Vue 3 + Vite + TypeScript
- Tailwind CSS v4
- Storybook 10 (`@storybook/vue3-vite`)

### 핵심 폴더 규칙 ⚠️
| 폴더 | 설명 | 실프로젝트 동기화 |
|------|------|----------------|
| `src/ui/` | shadcn-vue 기반 UI 컴포넌트 | ✅ 양방향 동기화 |
| `src/markup/` | 공용 마크업 컴포넌트 | ✅ 양방향 동기화 |
| `src/stories/` | Storybook 전용 스토리 | ❌ **절대 실프로젝트에 복사 금지** |
| `src/assets/` | CSS 토큰 및 스타일 | ✅ 양방향 동기화 |
| `_reference/` | 실프로젝트 스냅샷 (참고용) | ✅ 덮어쓰기 가능 |

### Storybook 실행
```bash
cd /Users/jepark/aon.erp.design/design-sync
npm run storybook       # 개발 서버
npm run build-storybook # 정적 빌드
```

### 스토리 카테고리 순서 (작은 UI → 큰 UI)
`액션` → `데이터 입력` → `데이터 표시` → `피드백` → `오버레이` → `내비게이션` → `레이아웃`

### 데이터 표시 항목 순서
Tag → Badge → Progress → Card → Carousel → Accordion → ListBlockItem → Table

### 전역 컴포넌트 등록
`.storybook/preview.ts`에서 모든 `Ui*` 컴포넌트와 `Lucide*` 아이콘 전역 등록됨  
→ 스토리 템플릿에서 import 없이 바로 사용 가능

### CSS 컴포넌트 클래스 (`.list-block-item` 등)
`src/assets/index.css`의 `@layer components`에 정의  
컴포넌트로 만들지 않고 CSS 클래스로 관리하는 UI 패턴들도 스토리로 존재

---

## 🚀 GitHub Pages 배포

### 자동 배포
- `main` 브랜치에 `design-sync/src/**`, `design-sync/.storybook/**`, `design-sync/package.json` 변경 시 자동 실행
- `workflow_dispatch`로 수동 트리거 가능
  → https://github.com/jjjjung-park/aon.erp.design/actions/workflows/storybook-deploy.yml

### 브랜치 보호 정책
- `main`에 직접 push 불가 — 반드시 PR을 통해 머지

### 배포 흐름
1. PR 머지 → Actions 자동 실행
2. `design-sync/` 에서 `npm ci` + `npm run build-storybook`
3. `storybook-static/` → `gh-pages` 브랜치에 자동 push
4. GitHub Pages (Settings > Pages > `gh-pages` 브랜치) 에서 서빙

---

## 🔀 브랜치 전략


### 작업 순서
1. 브랜치 먼저 생성
2. 해당 브랜치에서 작업 및 커밋
3. 푸시
4. PR 생성 → 머지

### 네이밍 규칙
프로젝트별 prefix + 버전으로 구분하며, `main`에 직접 push 불가 — 반드시 PR을 통해 머지

```
plugin/dev_v0.0.2
storybook/dev_v1.0.1
hotfix/dev_v0.0.2
```

| prefix | 대상 프로젝트 | 예시 |
|--------|-------------|------|
| `plugin/` | SheetToComponent (Figma 플러그인) | `plugin/dev_v0.0.2` |
| `storybook/` | design-sync (Storybook) | `storybook/dev_v1.0.1` |
| `hotfix/` | 긴급 버그 수정 (프로젝트 무관) | `hotfix/dev_v0.0.2` |

### 현재 브랜치 현황

| 브랜치 | 설명 |
|--------|------|
| `main` | 배포 기준 브랜치 |



---

## 📝 이전 작업 이력 요약
- `study/token/` (구 로컬 폴더) → `aon.erp.design/design-sync/` 로 이동
- `figma-plugin_ai/auto-history/` → `aon.erp.design/auto-history/` 로 이동
- 구 폴더 (`/Users/jepark/study/token`, `/Users/jepark/figma-plugin_ai`) 는 아직 로컬에 존재하나 더 이상 사용 안 함
