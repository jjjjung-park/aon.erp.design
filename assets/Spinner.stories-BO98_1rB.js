const c={title:"기초/Spinner",tags:["autodocs"],parameters:{layout:"centered"}},e={name:"Spinner — 사이즈별",render:()=>({template:`
      <div class="flex items-center gap-6">
        <UiSpinner class="size-3" />
        <UiSpinner class="size-4" />
        <UiSpinner class="size-5" />
        <UiSpinner class="size-6" />
        <UiSpinner class="size-8" />
      </div>
    `})},n={name:"Spinner — 텍스트 조합",render:()=>({template:`
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2 text-muted">
          <UiSpinner />
          <span>로딩 중...</span>
        </div>
        <UiButton disabled class="flex items-center gap-2">
          <UiSpinner class="text-neutral" />
          처리 중
        </UiButton>
      </div>
    `})};var s,i,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Spinner — 사이즈별',
  render: () => ({
    template: \`
      <div class="flex items-center gap-6">
        <UiSpinner class="size-3" />
        <UiSpinner class="size-4" />
        <UiSpinner class="size-5" />
        <UiSpinner class="size-6" />
        <UiSpinner class="size-8" />
      </div>
    \`
  })
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var t,r,l;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Spinner — 텍스트 조합',
  render: () => ({
    template: \`
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2 text-muted">
          <UiSpinner />
          <span>로딩 중...</span>
        </div>
        <UiButton disabled class="flex items-center gap-2">
          <UiSpinner class="text-neutral" />
          처리 중
        </UiButton>
      </div>
    \`
  })
}`,...(l=(r=n.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const p=["Default","WithText"];export{e as Default,n as WithText,p as __namedExportsOrder,c as default};
