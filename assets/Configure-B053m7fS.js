import{u as r,j as s,d as a}from"./blocks-C0SJIopo.js";import"./preload-helper-FI0fEOG2.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-4xPXPRuq.js";function n(e){const i={p:"p",...r(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(a,{title:"소개"}),`
`,s.jsx("style",{children:`
.intro-wrap {
  max-width: 800px;
  margin: 0 auto;
  padding: 48px 24px;
  font-family: 'Pretendard Variable', sans-serif;
  color: var(--text-default);
}

.intro-header {
  margin-bottom: 48px;
}

.intro-header h1 {
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 8px;
}

.intro-header p {
  font-size: 15px;
  color: var(--text-muted);
  margin: 0;
  line-height: 1.6;
}

.intro-badge {
  display: inline-block;
  background: var(--surface-brand-subtle);
  color: var(--text-brand);
  font-size: 12px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 99px;
  margin-bottom: 16px;
}

.intro-version {
  display: inline-block;
  background: var(--surface-muted);
  color: var(--text-muted);
  font-size: 12px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 99px;
  margin-bottom: 16px;
  margin-left: 6px;
}

.section {
  margin-bottom: 40px;
}

.section h2 {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 16px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border-default);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
}

.card {
  border: 1px solid var(--border-default);
  border-radius: 8px;
  padding: 16px;
  background: var(--surface-muted);
}

.card-title {
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 4px;
}

.card-desc {
  font-size: 13px;
  color: var(--text-muted);
  margin: 0;
  line-height: 1.5;
}

.tip-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.tip-list li {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-default);
}

.tip-icon {
  font-size: 16px;
  flex-shrink: 0;
  margin-top: 1px;
}

.tip-list strong {
  color: var(--text-default);
}

.rule-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.rule-table th {
  background: var(--surface-muted);
  text-align: left;
  padding: 8px 12px;
  font-weight: 600;
  color: var(--text-default);
  border: 1px solid var(--border-default);
}

.rule-table td {
  padding: 8px 12px;
  border: 1px solid var(--border-default);
  color: var(--text-default);
  vertical-align: top;
}

.tag-sync { color: var(--text-success); font-weight: 600; }
.tag-no   { color: var(--text-danger);  font-weight: 600; }
`}),`
`,s.jsxs("div",{className:"intro-wrap",children:[s.jsxs("div",{className:"intro-header",children:[s.jsx("div",{className:"intro-badge",children:"AON ERP Design System"}),s.jsx("div",{className:"intro-version",children:"v0.0.8"}),s.jsx("h1",{children:"컴포넌트 라이브러리 소개"}),s.jsx("p",{children:s.jsxs(i.p,{children:["AON ERP에서 사용하는 UI 컴포넌트와 패턴을 모아둔 공간입니다.",s.jsx("br",{}),`
디자이너와 개발자가 동일한 기준으로 컴포넌트를 확인하고 소통하기 위해 만들었습니다.`]})})]}),s.jsxs("div",{className:"section",children:[s.jsx("h2",{children:"📁 카테고리 구성"}),s.jsxs("div",{className:"card-grid",children:[s.jsxs("div",{className:"card",children:[s.jsx("p",{className:"card-title",children:"Foundation"}),s.jsx("p",{className:"card-desc",children:"타이포그래피, 컬러, 아이콘 등 디자인 시스템의 가장 기본이 되는 스타일 요소. 모든 컴포넌트는 이 기반 위에 구성됩니다."})]}),s.jsxs("div",{className:"card",children:[s.jsx("p",{className:"card-title",children:"기초"}),s.jsx("p",{className:"card-desc",children:"Button, Input, Badge 등 단독으로 존재하며 트리거 없이 화면에 항상 노출되는 원자 단위 컴포넌트."})]}),s.jsxs("div",{className:"card",children:[s.jsx("p",{className:"card-title",children:"UI 패턴"}),s.jsx("p",{className:"card-desc",children:"사용자 행동이나 특정 이벤트에 의해 나타나거나, 여러 기초 컴포넌트를 조합해 만든 실사용 패턴. Modal, FormItem, Toast 등이 포함됩니다."})]}),s.jsxs("div",{className:"card",children:[s.jsx("p",{className:"card-title",children:"레이아웃"}),s.jsx("p",{className:"card-desc",children:"Header, Sidebar, Layout 등 화면 전체의 구조를 구성하는 요소. 기획 단계에서 페이지 뼈대를 설계할 때 참고합니다."})]})]})]}),s.jsxs("div",{className:"section",children:[s.jsx("h2",{children:"🖥️ 화면 사용 방법"}),s.jsxs("ul",{className:"tip-list",children:[s.jsxs("li",{children:[s.jsx("span",{className:"tip-icon",children:"◀"}),s.jsxs("span",{children:[s.jsx("strong",{children:"좌측 사이드바"})," — 카테고리별 컴포넌트 목록. 클릭하면 해당 컴포넌트로 이동합니다."]})]}),s.jsxs("li",{children:[s.jsx("span",{className:"tip-icon",children:"📄"}),s.jsxs("span",{children:[s.jsx("strong",{children:"Docs 탭"})," — 컴포넌트 설명, Props 목록, 모든 스토리를 한 페이지에서 확인할 수 있습니다."]})]}),s.jsxs("li",{children:[s.jsx("span",{className:"tip-icon",children:"🎛️"}),s.jsxs("span",{children:[s.jsx("strong",{children:"Controls 패널 (하단)"})," — Props 값을 직접 바꿔가며 컴포넌트 상태를 실시간으로 확인할 수 있습니다."]})]}),s.jsxs("li",{children:[s.jsx("span",{className:"tip-icon",children:"♿"}),s.jsxs("span",{children:[s.jsx("strong",{children:"Accessibility 탭 (하단)"})," — 접근성 자동 검사 결과를 확인할 수 있습니다."]})]}),s.jsxs("li",{children:[s.jsx("span",{className:"tip-icon",children:"📐"}),s.jsxs("span",{children:[s.jsx("strong",{children:"뷰포트 조절 (상단 툴바)"})," — 모바일/태블릿 등 다양한 화면 크기로 미리볼 수 있습니다."]})]}),s.jsxs("li",{children:[s.jsx("span",{className:"tip-icon",children:"🌗"}),s.jsxs("span",{children:[s.jsx("strong",{children:"배경 변경 (상단 툴바)"})," — 밝은/어두운 배경으로 전환해 컴포넌트를 확인할 수 있습니다."]})]})]})]}),s.jsxs("div",{className:"section",children:[s.jsx("h2",{children:"🚀 업데이트 정책(1차)"}),s.jsxs("ul",{className:"tip-list",children:[s.jsxs("li",{children:[s.jsx("span",{className:"tip-icon",children:"🔁"}),s.jsxs("span",{children:[s.jsx("strong",{children:"자동 배포"})," — ",s.jsx("code",{children:"main"})," 브랜치에 컴포넌트 변경사항이 머지되면 GitHub Actions가 자동으로 빌드 후 배포합니다."]})]}),s.jsxs("li",{children:[s.jsx("span",{className:"tip-icon",children:"🔒"}),s.jsxs("span",{children:[s.jsx("strong",{children:"브랜치 보호"})," — ",s.jsx("code",{children:"main"}),"에 직접 push는 불가하며, 반드시 PR을 통해 머지합니다."]})]}),s.jsxs("li",{children:[s.jsx("span",{className:"tip-icon",children:"📦"}),s.jsxs("span",{children:[s.jsx("strong",{children:"배포 대상"})," — ",s.jsx("code",{children:"design-sync/src/"})," 및 ",s.jsx("code",{children:"design-sync/.storybook/"})," 변경 시에만 배포가 트리거됩니다."]})]}),s.jsxs("li",{children:[s.jsx("span",{className:"tip-icon",children:"🌐"}),s.jsxs("span",{children:[s.jsx("strong",{children:"배포 URL"})," — ",s.jsx("a",{href:"https://jjjjung-park.github.io/aon.erp.design/",target:"_blank",children:"https://jjjjung-park.github.io/aon.erp.design/"})]})]})]})]})]})]})}function o(e={}){const{wrapper:i}={...r(),...e.components};return i?s.jsx(i,{...e,children:s.jsx(n,{...e})}):n(e)}export{o as default};
