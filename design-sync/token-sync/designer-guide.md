# 디자인 토큰 동기화 가이드 (디자이너용)

Figma Variables에서 토큰을 수정한 후 GitHub에 올리는 방법을 설명합니다.

---

## 필요한 것

- Figma 플러그인: **Export/Import Variables**
  Figma 커뮤니티에서 "Export/Import Variables" 검색 후 설치
- GitHub Desktop 앱 (또는 GitHub 웹)

---

## 전체 흐름

```
Figma Variables에서 토큰 수정
    ↓
JSON export (플러그인)
    ↓
지정 폴더에 파일 저장
    ↓
GitHub에 push
```

---

## 1단계 — Figma Variables에서 토큰 수정

평소 작업하던 방식 그대로 Figma Variables 패널에서 수정합니다.

---

## 2단계 — JSON Export

1. Figma에서 **Plugins > Export/Import Variables** 실행
2. **Export Variables** 선택
3. 컬렉션을 각각 export해서 아래 파일명으로 저장:

| 컬렉션 | 파일명 |
|--------|--------|
| Primitive | `primitives.json` |
| Semantic | `semantic.json` |

---

## 3단계 — 파일 저장 위치

두 파일을 아래 폴더에 덮어씁니다:

```
aon.erp.design/
└── design-sync/
    └── token-sync/
        └── tokens/    ← 여기에 저장
            ├── primitives.json
            └── semantic.json
```

> Finder에서 `aon.erp.design > design-sync > token-sync > tokens` 폴더입니다.

---

## 4단계 — GitHub에 push

### GitHub Desktop 사용 시

1. GitHub Desktop 실행
2. 좌측에서 변경된 파일 확인 (`primitives.json`, `semantic.json`)
3. 좌측 하단 Summary에 변경 사유 입력 (예: `surface/brand 색상 수정`)
4. **Commit to `main`** 클릭
5. 상단 **Push origin** 클릭

### GitHub 웹 사용 시

1. [github.com/jjjjung-park/aon.erp.design](https://github.com/jjjjung-park/aon.erp.design) 접속
2. `design-sync/token-sync/tokens/` 경로로 이동
3. 파일 클릭 → 연필 아이콘(Edit) → JSON 내용 붙여넣기 → Commit changes

---

## 주의사항

- **파일명을 반드시 `primitives.json`, `semantic.json` 으로 맞춰주세요.**
- push 후 나머지 작업(코드 반영)은 퍼블리셔가 처리합니다.
- 토큰 이름을 변경하거나 삭제한 경우 퍼블리셔에게 미리 알려주세요.
