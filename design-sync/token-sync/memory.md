# Figma 디자인 토큰 → 코드 동기화

## 개요

Figma MCP를 통해 AON Design Tokens 파일의 변수를 읽어 `vars.css`를 자동 업데이트한다.
플러그인 없이 Claude가 중간 다리 역할을 한다.

---

## 관련 파일

| 항목 | 값 |
|------|-----|
| Figma 파일 | AON Design Tokens |
| Figma 파일 키 | `tRL9oy6QJRhvKLZVVs52AR` |
| 업데이트 대상 | `assets/styles/vars.css` |
| 컬렉션 구조 | primitive (49) → semantic (65) → component (26) |

---

## 동기화 흐름

```
Figma (AON Design Tokens 수정)
    ↓ Figma MCP로 variables 읽기
Claude (CSS custom property로 변환)
    ↓ vars.css 덮어쓰기
git commit & push
```

---

## 실행 방법

### 수동 (권장)

Claude Code에서 아래 명령 실행:

```
Figma AON Design Tokens(tRL9oy6QJRhvKLZVVs52AR)에서
primitive/semantic/component 변수 전체를 읽어서
/Users/jepark/study/token/assets/styles/vars.css를
업데이트하고 git commit해줘.
```

또는 `.claude/commands/sync-tokens.md` 슬래시 커맨드로 등록해두면 `/sync-tokens`로 실행 가능.

### 자동 (선택)

MCP scheduled-tasks로 주기 실행 설정 가능. (매일 오전 등)

---

## 변환 규칙

| Figma 컬렉션 | CSS 변수 prefix | 예시 |
|-------------|----------------|------|
| primitive | `--[카테고리]-[이름]` | `--color-primary-default` |
| semantic | `--color-[용도]-[상태]` | `--color-text-primary` |
| component | `--[컴포넌트]-[속성]` | `--button-height-md` |

> 실제 변환 규칙은 기존 vars.css 네이밍을 기준으로 맞춤 적용할 것.

---

## 자동화 파이프라인 결정 사항 (2026-05-26)

### 선택된 방식

| 단계 | 담당 | 방식 |
|------|------|------|
| B. Figma → Git 푸시 | 디자이너 | Claude MCP 슬래시 커맨드 (`/sync-tokens`) 한 줄로 푸시 + PR 생성까지 자동 |
| C. PR 리뷰 | Claude 자동 | 변경 토큰 diff → 영향도 체크 → 퍼블리셔에게 알림 |
| D. 토큰 변환 + 배포 | Claude 자동 | JSON→vars.css 변환 → 퍼블 브랜치 커밋 → 영향 없으면 main 머지 → Storybook 빌드/배포 |

### 전체 파이프라인 흐름

```
[디자이너] Claude에서 /sync-tokens "변경 사유" 입력
    ↓ B
Figma 변수 전체 읽기 (get_variable_defs)
→ tokens.json 생성
→ git branch token/update-{날짜} 생성
→ commit + PR 생성 (변경 토큰 목록 자동 삽입)
    ↓ C
Claude 자동 PR 리뷰:
  - 변경된 토큰 diff 파싱
  - vars.css에서 영향받는 변수 검색
  - *.vue / *.ts grep → 영향 파일 수 집계
  - 구조적 불일치 판별 (1→N 분리, 의미 변경, 이름 변경, 값 변경)
  - PR 코멘트 등록 + 퍼블리셔 알림
    ↓ D (자동 변환 가능 판정 시)
tokens.json → vars.css 자동 패치 (퍼블 브랜치)
→ 영향도 재확인
  → 영향 없음: main 자동 머지 → Storybook 빌드/배포 트리거
  → 영향 있음: 퍼블리셔 확인 요청 후 대기
```

### 영향도 판별 기준

| 변경 유형 | 자동화 가능 여부 |
|---------|--------------|
| 색상 값만 변경 | ✅ 자동 변환 + 자동 머지 |
| 크기/간격 값 변경 (영향 파일 0개) | ✅ 자동 변환 + 자동 머지 |
| 크기/간격 값 변경 (영향 파일 있음) | ⚠️ 퍼블리셔 확인 후 진행 |
| 토큰 이름 변경 | ⚠️ vars.css 키 수정 필요 → 퍼블리셔 확인 |
| 1개 토큰 → N개로 분리 | 🔴 수동 판단 필수 |
| semantic 의미 변경 | 🔴 수동 판단 필수 |

### 구축 순서

```
1단계  tokens.json 포맷 정의 + Figma → JSON 변환 스크립트
2단계  B: /sync-tokens 슬래시 커맨드 (.claude/commands/sync-tokens.md)
       C: diff 분석 + 영향도 체크 스크립트
3단계  D: vars.css 자동 패치 로직
       D: GitHub Actions storybook-deploy.yml (paths: vars.css, ui/**, markup/components/**)
4단계  전체 파이프라인 통합 테스트
```

### Storybook 배포 트리거 조건 (예정)

```yaml
on:
  push:
    branches: [main]
    paths:
      - 'assets/styles/vars.css'
      - 'ui/**'
      - 'markup/components/**'
```

---

## 현재 불일치 항목 (미결)

디자인 확정 후 vars.css와 Figma 토큰 중 하나를 기준으로 통일 필요.

| 항목 | Figma 토큰 | 현재 vars.css |
|------|-----------|--------------|
| 기본색 suffix | `default / light` | `deep / bright` |
| 그레이 prefix | `color/neutral/100` | `--color-neutral-gray-100` |
| 배경 prefix | `color/bg/*` | `--color-background-*` |
| 타이포 스케일 | `typography/xs~xl` | `typography-h1~caption` |
| line-height 종류 | 2종 (120% / 150%) | 3종 (1.3 / 1.4 / 1.5) |
| spacing semantic 값 | xs=4 sm=8 md=12 lg=16 xl=24 xxl=32 | sm=4 md=8 lg=12 xl=20 xxl=40 |
| button radius | 8px | 4px |
| minWidth 토큰 | 제거 확정 | 코드에 잔존 |
