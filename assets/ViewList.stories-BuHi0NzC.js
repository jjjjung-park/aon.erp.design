const c={title:"UI 패턴/list/ViewList",tags:["autodocs"],parameters:{layout:"centered"}},s={name:"세로",render:()=>({template:`
      <div class="view-list w-80 border border-border rounded-sm">
        <h4>기본 정보</h4>
        <div class="view-list__item">
          <span class="view-list__item-title">이름</span>
          <span class="view-list__item-cont">홍길동</span>
        </div>
        <div class="view-list__item">
          <span class="view-list__item-title">부서</span>
          <span class="view-list__item-cont">개발팀</span>
        </div>
        <div class="view-list__item">
          <span class="view-list__item-title">이메일</span>
          <span class="view-list__item-cont">hong@example.com</span>
        </div>
        <div class="view-list__item">
          <span class="view-list__item-title">등록일</span>
          <span class="view-list__item-cont">2024-01-15</span>
        </div>
      </div>
    `})},i={name:"복수 값",render:()=>({template:`
      <div class="view-list w-80 border border-border rounded-sm">
        <h4>첨부 파일</h4>
        <div class="view-list__item">
          <span class="view-list__item-title">파일 목록</span>
          <span class="view-list__item-cont">보고서_최종.pdf</span>
          <span class="view-list__item-cont">첨부이미지.png</span>
          <span class="view-list__item-cont">데이터.xlsx</span>
        </div>
        <div class="view-list__item--row">
          <span class="view-list__item-title">담당자</span>
          <span class="view-list__item-cont">홍길동</span>
        </div>
      </div>
    `})};var e,t,n;s.parameters={...s.parameters,docs:{...(e=s.parameters)==null?void 0:e.docs,source:{originalSource:`{
  name: '세로',
  render: () => ({
    template: \`
      <div class="view-list w-80 border border-border rounded-sm">
        <h4>기본 정보</h4>
        <div class="view-list__item">
          <span class="view-list__item-title">이름</span>
          <span class="view-list__item-cont">홍길동</span>
        </div>
        <div class="view-list__item">
          <span class="view-list__item-title">부서</span>
          <span class="view-list__item-cont">개발팀</span>
        </div>
        <div class="view-list__item">
          <span class="view-list__item-title">이메일</span>
          <span class="view-list__item-cont">hong@example.com</span>
        </div>
        <div class="view-list__item">
          <span class="view-list__item-title">등록일</span>
          <span class="view-list__item-cont">2024-01-15</span>
        </div>
      </div>
    \`
  })
}`,...(n=(t=s.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var a,l,_;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: '복수 값',
  render: () => ({
    template: \`
      <div class="view-list w-80 border border-border rounded-sm">
        <h4>첨부 파일</h4>
        <div class="view-list__item">
          <span class="view-list__item-title">파일 목록</span>
          <span class="view-list__item-cont">보고서_최종.pdf</span>
          <span class="view-list__item-cont">첨부이미지.png</span>
          <span class="view-list__item-cont">데이터.xlsx</span>
        </div>
        <div class="view-list__item--row">
          <span class="view-list__item-title">담당자</span>
          <span class="view-list__item-cont">홍길동</span>
        </div>
      </div>
    \`
  })
}`,...(_=(l=i.parameters)==null?void 0:l.docs)==null?void 0:_.source}}};const p=["Column","MultiCont"];export{s as Column,i as MultiCont,p as __namedExportsOrder,c as default};
