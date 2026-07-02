const g={title:"Foundation/Typography",tags:["autodocs","done"]},e={name:"텍스트 스타일 전체",render:()=>({template:`
      <div class="flex flex-col gap-6 p-4">
        <div class="flex flex-col gap-1">
          <p class="caption text-muted">heading1 · 24px / 600 / 1.5</p>
          <h1>Heading 1 — 페이지 대제목</h1>
        </div>
        <div class="flex flex-col gap-1">
          <p class="caption text-muted">heading2 · 20px / 600 / 1.5</p>
          <h2>Heading 2 — 섹션 제목</h2>
        </div>
        <div class="flex flex-col gap-1">
          <p class="caption text-muted">title · 16px / 400 / 1.5</p>
          <p class="title">Title — 카드, 모달 제목</p>
        </div>
        <div class="flex flex-col gap-1">
          <p class="caption text-muted">title-bold · 16px / 600 / 1.5</p>
          <p class="title__bold">Title Bold — 강조 제목</p>
        </div>
        <div class="flex flex-col gap-1">
          <p class="caption text-muted">body (기본) · 14px / 400 / 1.4</p>
          <p>Body — 일반 본문 텍스트. body는 전역 기본값으로 별도 클래스 없음.</p>
        </div>
        <div class="flex flex-col gap-1">
          <p class="caption text-muted">body-bold · 14px / 600 / 1.4</p>
          <p class="font-bold">Body Bold — 강조 본문</p>
        </div>
        <div class="flex flex-col gap-1">
          <p class="caption text-muted">caption · 12px / 400 / 1.4</p>
          <p class="caption">Caption — 보조 설명, 레이블</p>
        </div>
        <div class="flex flex-col gap-1">
          <p class="caption text-muted">caption-bold · 12px / 600 / 1.4</p>
          <p class="caption__bold">Caption Bold — 강조 보조 텍스트</p>
        </div>
      </div>
    `})},a={name:"Heading",render:()=>({template:`
      <div class="flex flex-col gap-4 p-4">
        <div class="flex items-baseline gap-4">
          <h1>Heading 1</h1>
          <span class="caption text-muted">24px / SemiBold / 1.5</span>
        </div>
        <div class="flex items-baseline gap-4">
          <h2>Heading 2</h2>
          <span class="caption text-muted">20px / SemiBold / 1.5</span>
        </div>
      </div>
    `})},t={name:"Body",render:()=>({template:`
      <div class="flex flex-col gap-4 p-4">
        <div class="flex items-baseline gap-4">
          <p class="title">Title</p>
          <span class="caption text-muted">16px / Regular / 1.5</span>
        </div>
        <div class="flex items-baseline gap-4">
          <p class="title__bold">Title Bold</p>
          <span class="caption text-muted">16px / SemiBold / 1.5</span>
        </div>
        <div class="flex items-baseline gap-4">
          <p>Body</p>
          <span class="caption text-muted">14px / Regular / 1.4 · 전역 기본값</span>
        </div>
        <div class="flex items-baseline gap-4">
          <p class="font-bold">Body Bold</p>
          <span class="caption text-muted">14px / SemiBold / 1.4</span>
        </div>
        <div class="flex items-baseline gap-4">
          <p class="caption">Caption</p>
          <span class="caption text-muted">12px / Regular / 1.4</span>
        </div>
        <div class="flex items-baseline gap-4">
          <p class="caption__bold">Caption Bold</p>
          <span class="caption text-muted">12px / SemiBold / 1.4</span>
        </div>
      </div>
    `})},s={name:"컬러 조합",render:()=>({template:`
      <div class="flex flex-col gap-1 p-4">
        <div class="flex items-center gap-4 py-2 border-b border-border">
          <p class="w-32 caption text-muted">--text-default</p>
          <p class="text-default">Default — 기본 본문 텍스트</p>
        </div>
        <div class="flex items-center gap-4 py-2 border-b border-border">
          <p class="w-32 caption text-muted">--text-brand</p>
          <p style="color: var(--text-brand)">Brand — 브랜드 강조</p>
        </div>
        <div class="flex items-center gap-4 py-2 border-b border-border bg-default rounded-sm">
          <p class="w-32 caption" style="color: var(--text-brand)">--text-neutral</p>
          <p style="color: var(--text-neutral)">Neutral — 반전 텍스트 (dark bg)</p>
        </div>
        <div class="flex items-center gap-4 py-2 border-b border-border">
          <p class="w-32 caption text-muted">--text-muted</p>
          <p class="text-muted">Muted — 흐린 텍스트</p>
        </div>
        <div class="flex items-center gap-4 py-2 border-b border-border">
          <p class="w-32 caption text-muted">--text-disabled</p>
          <p class="text-disabled-text">Disabled — 비활성화</p>
        </div>
        <div class="flex items-center gap-4 py-2 border-b border-border">
          <p class="w-32 caption text-muted">--text-danger</p>
          <p class="text-danger">Danger — 오류</p>
        </div>
        <div class="flex items-center gap-4 py-2 border-b border-border">
          <p class="w-32 caption text-muted">--text-success</p>
          <p class="text-success">Success — 성공</p>
        </div>
        <div class="flex items-center gap-4 py-2">
          <p class="w-32 caption text-muted">--text-warning</p>
          <p class="text-warning">Warning — 경고</p>
        </div>
      </div>
    `})};var p,l,n;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '텍스트 스타일 전체',
  render: () => ({
    template: \`
      <div class="flex flex-col gap-6 p-4">
        <div class="flex flex-col gap-1">
          <p class="caption text-muted">heading1 · 24px / 600 / 1.5</p>
          <h1>Heading 1 — 페이지 대제목</h1>
        </div>
        <div class="flex flex-col gap-1">
          <p class="caption text-muted">heading2 · 20px / 600 / 1.5</p>
          <h2>Heading 2 — 섹션 제목</h2>
        </div>
        <div class="flex flex-col gap-1">
          <p class="caption text-muted">title · 16px / 400 / 1.5</p>
          <p class="title">Title — 카드, 모달 제목</p>
        </div>
        <div class="flex flex-col gap-1">
          <p class="caption text-muted">title-bold · 16px / 600 / 1.5</p>
          <p class="title__bold">Title Bold — 강조 제목</p>
        </div>
        <div class="flex flex-col gap-1">
          <p class="caption text-muted">body (기본) · 14px / 400 / 1.4</p>
          <p>Body — 일반 본문 텍스트. body는 전역 기본값으로 별도 클래스 없음.</p>
        </div>
        <div class="flex flex-col gap-1">
          <p class="caption text-muted">body-bold · 14px / 600 / 1.4</p>
          <p class="font-bold">Body Bold — 강조 본문</p>
        </div>
        <div class="flex flex-col gap-1">
          <p class="caption text-muted">caption · 12px / 400 / 1.4</p>
          <p class="caption">Caption — 보조 설명, 레이블</p>
        </div>
        <div class="flex flex-col gap-1">
          <p class="caption text-muted">caption-bold · 12px / 600 / 1.4</p>
          <p class="caption__bold">Caption Bold — 강조 보조 텍스트</p>
        </div>
      </div>
    \`
  })
}`,...(n=(l=e.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var d,i,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Heading',
  render: () => ({
    template: \`
      <div class="flex flex-col gap-4 p-4">
        <div class="flex items-baseline gap-4">
          <h1>Heading 1</h1>
          <span class="caption text-muted">24px / SemiBold / 1.5</span>
        </div>
        <div class="flex items-baseline gap-4">
          <h2>Heading 2</h2>
          <span class="caption text-muted">20px / SemiBold / 1.5</span>
        </div>
      </div>
    \`
  })
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var o,r,x;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Body',
  render: () => ({
    template: \`
      <div class="flex flex-col gap-4 p-4">
        <div class="flex items-baseline gap-4">
          <p class="title">Title</p>
          <span class="caption text-muted">16px / Regular / 1.5</span>
        </div>
        <div class="flex items-baseline gap-4">
          <p class="title__bold">Title Bold</p>
          <span class="caption text-muted">16px / SemiBold / 1.5</span>
        </div>
        <div class="flex items-baseline gap-4">
          <p>Body</p>
          <span class="caption text-muted">14px / Regular / 1.4 · 전역 기본값</span>
        </div>
        <div class="flex items-baseline gap-4">
          <p class="font-bold">Body Bold</p>
          <span class="caption text-muted">14px / SemiBold / 1.4</span>
        </div>
        <div class="flex items-baseline gap-4">
          <p class="caption">Caption</p>
          <span class="caption text-muted">12px / Regular / 1.4</span>
        </div>
        <div class="flex items-baseline gap-4">
          <p class="caption__bold">Caption Bold</p>
          <span class="caption text-muted">12px / SemiBold / 1.4</span>
        </div>
      </div>
    \`
  })
}`,...(x=(r=t.parameters)==null?void 0:r.docs)==null?void 0:x.source}}};var m,v,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '컬러 조합',
  render: () => ({
    template: \`
      <div class="flex flex-col gap-1 p-4">
        <div class="flex items-center gap-4 py-2 border-b border-border">
          <p class="w-32 caption text-muted">--text-default</p>
          <p class="text-default">Default — 기본 본문 텍스트</p>
        </div>
        <div class="flex items-center gap-4 py-2 border-b border-border">
          <p class="w-32 caption text-muted">--text-brand</p>
          <p style="color: var(--text-brand)">Brand — 브랜드 강조</p>
        </div>
        <div class="flex items-center gap-4 py-2 border-b border-border bg-default rounded-sm">
          <p class="w-32 caption" style="color: var(--text-brand)">--text-neutral</p>
          <p style="color: var(--text-neutral)">Neutral — 반전 텍스트 (dark bg)</p>
        </div>
        <div class="flex items-center gap-4 py-2 border-b border-border">
          <p class="w-32 caption text-muted">--text-muted</p>
          <p class="text-muted">Muted — 흐린 텍스트</p>
        </div>
        <div class="flex items-center gap-4 py-2 border-b border-border">
          <p class="w-32 caption text-muted">--text-disabled</p>
          <p class="text-disabled-text">Disabled — 비활성화</p>
        </div>
        <div class="flex items-center gap-4 py-2 border-b border-border">
          <p class="w-32 caption text-muted">--text-danger</p>
          <p class="text-danger">Danger — 오류</p>
        </div>
        <div class="flex items-center gap-4 py-2 border-b border-border">
          <p class="w-32 caption text-muted">--text-success</p>
          <p class="text-success">Success — 성공</p>
        </div>
        <div class="flex items-center gap-4 py-2">
          <p class="w-32 caption text-muted">--text-warning</p>
          <p class="text-warning">Warning — 경고</p>
        </div>
      </div>
    \`
  })
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const u=["TextStyles","HeadingTokens","BodyTokens","ColorVariants"];export{t as BodyTokens,s as ColorVariants,a as HeadingTokens,e as TextStyles,u as __namedExportsOrder,g as default};
