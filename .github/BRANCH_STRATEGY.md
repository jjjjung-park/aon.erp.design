# 브랜치 전략

## 브랜치 구조

```
main
├── publisher/token-update-{YYYYMMDD}   ← Claude가 자동 생성 (토큰 변환 후)
├── token/update-{YYYYMMDD}             ← 디자이너 /sync-tokens 실행 시 자동 생성
└── feature/{작업명}                     ← 일반 기능 개발
```

## 브랜치별 역할

| 브랜치 | 생성 주체 | 목적 | 머지 대상 |
|--------|---------|------|---------|
| `main` | — | 배포 기준. Storybook 자동 배포 트리거 | — |
| `token/update-{날짜}` | 디자이너 (Claude /sync-tokens) | Figma 토큰 변경사항 PR | main |
| `publisher/token-update-{날짜}` | Claude 자동 | tokens.json → vars.css 변환 결과 | main |
| `feature/*` | 퍼블리셔 | 컴포넌트/스타일 작업 | main |

## 머지 규칙

- `main`은 직접 push 금지 — PR을 통해서만 머지
- `token/*` PR은 Claude 영향도 분석 완료 후 머지
- `publisher/token-update-*` PR은 영향 없음 판정 시 Claude 자동 머지 가능
- `feature/*` PR은 퍼블리셔 직접 검토 후 머지

## 네이밍 규칙

```
token/update-20260526
publisher/token-update-20260526
feature/button-refactor
feature/storybook-setup
fix/input-height
```

## GitHub 브랜치 보호 설정 (main) — 웹에서 직접 설정 필요

Settings → Branches → Add rule → Branch name pattern: `main`

- [x] Require a pull request before merging
- [x] Require approvals: 1
- [ ] Require status checks (Storybook 배포 Actions 활성화 후 추가)
- [x] Do not allow bypassing the above settings
