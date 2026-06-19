# Figma 디자인 토큰 → 코드 동기화

## 개요

Figma의 **AON Design Tokens** 변수를 JSON으로 export → `vars.css`로 변환 → GitHub에 반영하는 흐름.
디자이너는 플러그인으로 JSON을 내보내고, 변환/코드 반영은 Claude(슬래시 커맨드)가 담당한다.

> 토큰 구조는 디자인 시스템 리팩토링(`meeting-design-system-refactoring.md`)에 따라
> 기존 3레이어(primitive/semantic/component)에서 **2레이어(primitive/semantic)**로 전환 완료됨.

---

## 관련 파일

| 항목 | 값 |
|------|-----|
| Figma 파일 | AON Design Tokens |
| 토큰 export 위치 | `design-sync/token-sync/tokens/` (`primitives.json`, `semantic.json`) |
| 업데이트 대상 | `design-sync/src/assets/vars.css` |
| @theme 매핑 | `design-sync/src/assets/tailwind.css` |
| 슬래시 커맨드 | `.claude/commands/sync-tokens.md` |
| 디자이너 가이드 | `design-sync/token-sync/designer-guide.md` |
| 컬렉션 구조 | primitive → semantic (2레이어) |

---

## 동기화 흐름

```
Figma (AON Design Tokens 수정)
    ↓ Export/Import Variables 플러그인으로 JSON export
token-sync/tokens/primitives.json, semantic.json 덮어쓰기
    ↓ git push (디자이너)
/sync-tokens 실행 (퍼블리셔/Claude)
    ↓ JSON → CSS custom property 변환
vars.css 업데이트 → 영향도 판별 → 브랜치/커밋/PR 생성
```

---

## 실행 방법

### 수동 (권장)

Claude Code에서 `/sync-tokens` 슬래시 커맨드 실행.
상세 동작(JSON 파싱 규칙, 변수명 변환, 영향도 판별, PR 생성)은 `.claude/commands/sync-tokens.md` 참고.

### 자동 (선택)

MCP scheduled-tasks로 주기 실행 설정 가능. (현재 미구성)

---

## 변환 규칙 (요약)

`name`의 `/` → `-` 치환 후 `--` prefix 추가. alias가 있으면 `var(--…)`로 참조.

| 예시 (Figma name) | CSS 변수 |
|------|------|
| `color/blue/500` | `--color-blue-500` |
| `surface/brand` | `--surface-brand` → `var(--color-blue-500)` |
| `text/default` | `--text-default` |
| `spacing/padding/sm` | `--spacing-padding-sm` |
| `shape/radius/md` | `--shape-radius-md` |

> 정확한 파싱/변환 규칙은 `.claude/commands/sync-tokens.md`가 단일 기준(SSOT).

---

## 현재 토큰 체계 (vars.css 기준)

```
PRIMITIVES   color/{blue,gray,red,green,orange}, unit/*, font/* (퍼블 자체 관리)
SEMANTIC     surface/*, text/*, border/*, icon/*, size/*,
             spacing/{padding,gap}/*, shape/{radius,border,stroke}/*, typography/*
PUBLISHER    color-border-focus, size-width-min-* (Figma 미정의, 코드 전용)
```

---

## 자동화 파이프라인 결정 사항 (2026-05-26)

### 선택된 방식

| 단계 | 담당 | 방식 |
|------|------|------|
| A. Figma → JSON export + push | 디자이너 | Export/Import Variables 플러그인 + GitHub Desktop |
| B. JSON → vars.css 변환 + PR | 퍼블리셔/Claude | `/sync-tokens` 슬래시 커맨드 |
| C. PR 리뷰 | Claude 자동 | 변경 토큰 diff → 영향도 체크 → 퍼블리셔 알림 |
| D. 배포 | Claude/CI | 영향 없으면 main 머지 → Storybook 빌드/배포 |

### 영향도 판별 기준

| 변경 유형 | 자동화 가능 여부 |
|---------|--------------|
| 색상 값만 변경 | ✅ 자동 변환 + 자동 머지 |
| 크기/간격 값 변경 (영향 파일 0개) | ✅ 자동 변환 + 자동 머지 |
| 크기/간격 값 변경 (영향 파일 있음) | ⚠️ 퍼블리셔 확인 후 진행 |
| 토큰 이름 변경 | ⚠️ vars.css 키 수정 필요 → 퍼블리셔 확인 |
| 토큰 삭제 | ⚠️ 퍼블리셔 확인 필요 |
| 1개 토큰 → N개로 분리 / semantic 의미 변경 | 🔴 수동 판단 필수 |

### Storybook 배포 트리거 조건 (예정)

```yaml
on:
  push:
    branches: [main]
    paths:
      - 'design-sync/src/assets/vars.css'
      - 'design-sync/src/ui/**'
      - 'design-sync/src/markup/**'
```

---

## 구현 현황 (2026-06-18 기준)

| 항목 | 상태 |
|------|------|
| 2레이어 토큰 구조 전환 (vars.css) | ✅ 완료 |
| primitives.json / semantic.json export | ✅ 존재 |
| tailwind.css @theme 신규 semantic 매핑 | ✅ 완료 |
| `/sync-tokens` 슬래시 커맨드 | ✅ 작성됨 (end-to-end 실검증 미완) |
| 컴포넌트 CVA 신규 토큰 마이그레이션 | 🟡 진행 중 (alert/badge 등) |
| GitHub Actions paths 필터 / 자동 배포 | ⬜ 미구현 |
| 스토리북 기획자 템플릿 카탈로그 | ⬜ 미구현 (`storybook-plan.md` 참고) |

---

## 과거 불일치 항목 → 해소됨

리팩토링 전 vars.css와 구 Figma 토큰 사이의 불일치는 신규 2레이어 토큰으로 정리됨.

| 항목 | 과거 불일치 | 현재 (신규 토큰) |
|------|-----------|-----------------|
| 기본/연한색 suffix | `default/light` vs `deep/bright` | `surface/text/border-{brand,danger,…}` + `*-subtle` |
| 그레이 prefix | `color/neutral/100` vs `--color-neutral-gray-100` | `--color-gray-*` 로 통일 |
| 배경 prefix | `color/bg/*` vs `--color-background-*` | `surface/*` semantic 으로 통일 |
| spacing semantic | 값 불일치 | `spacing/padding/*`, `spacing/gap/*` 로 분리 정의 |
| shape vs radius | 카테고리명 논쟁 | `shape/radius/*` (CSS 기준 radius로 결정) |
| minWidth 토큰 | 제거 vs 잔존 | `--size-width-min-*` 퍼블 전용으로 명시 분리 |

> 디자인·퍼블 협업 회의 잔여 결정(SSOT 기준, 코멘트 규칙, 컴포넌트명 매핑 등)은
> `meeting-design-pub.md` / `meeting-design-system-refactoring.md` 참고.
