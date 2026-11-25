const l={title:"기초/Spinner",tags:["autodocs"],parameters:{layout:"centered"}},e={name:"Spinner — 사이즈별",render:()=>({template:`
      <div class="flex items-center gap-6">
        <UiSpinner class="size-4" />
        <UiSpinner class="size-6" />
        <UiSpinner class="size-14" />
      </div>
    `})},n={name:"Spinner — 텍스트 조합",render:()=>({template:`
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2 text-muted">
          <UiSpinner />
          <span>로딩 중...</span>
        </div>
        <UiButton disabled>
          <UiSpinner class="text-disabled-text" />
          처리 중
        </UiButton>
      </div>
    `})};var s,t,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Spinner — 사이즈별',
  render: () => ({
    template: \`
      <div class="flex items-center gap-6">
        <UiSpinner class="size-4" />
        <UiSpinner class="size-6" />
        <UiSpinner class="size-14" />
      </div>
    \`
  })
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};var i,r,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Spinner — 텍스트 조합',
  render: () => ({
    template: \`
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2 text-muted">
          <UiSpinner />
          <span>로딩 중...</span>
        </div>
        <UiButton disabled>
          <UiSpinner class="text-disabled-text" />
          처리 중
        </UiButton>
      </div>
    \`
  })
}`,...(p=(r=n.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};const c=["Default","WithText"];export{e as Default,n as WithText,c as __namedExportsOrder,l as default};
