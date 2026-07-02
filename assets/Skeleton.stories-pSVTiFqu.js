const c={title:"기초/Skeleton",tags:["autodocs","done"],parameters:{layout:"centered"}},e={name:"Skeleton — 기본",render:()=>({template:`
      <div class="flex flex-col gap-3 w-80">
        <UiSkeleton class="h-5 w-1/2" />
        <UiSkeleton class="h-4 w-full" />
        <UiSkeleton class="h-4 w-5/6" />
        <UiSkeleton class="h-4 w-3/4" />
      </div>
    `})},l={name:"Skeleton — 카드형",render:()=>({template:`
      <div class="flex flex-col gap-3 w-80 p-4 border border-border rounded-sm">
        <div class="flex items-center gap-3">
          <UiSkeleton class="size-10 rounded-full" />
          <div class="flex flex-col gap-2 flex-1">
            <UiSkeleton class="h-4 w-1/2" />
            <UiSkeleton class="h-3 w-1/3" />
          </div>
        </div>
        <UiSkeleton class="h-32 w-full" />
        <UiSkeleton class="h-4 w-full" />
        <UiSkeleton class="h-4 w-4/5" />
      </div>
    `})};var s,n,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Skeleton — 기본',
  render: () => ({
    template: \`
      <div class="flex flex-col gap-3 w-80">
        <UiSkeleton class="h-5 w-1/2" />
        <UiSkeleton class="h-4 w-full" />
        <UiSkeleton class="h-4 w-5/6" />
        <UiSkeleton class="h-4 w-3/4" />
      </div>
    \`
  })
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var o,t,r;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Skeleton — 카드형',
  render: () => ({
    template: \`
      <div class="flex flex-col gap-3 w-80 p-4 border border-border rounded-sm">
        <div class="flex items-center gap-3">
          <UiSkeleton class="size-10 rounded-full" />
          <div class="flex flex-col gap-2 flex-1">
            <UiSkeleton class="h-4 w-1/2" />
            <UiSkeleton class="h-3 w-1/3" />
          </div>
        </div>
        <UiSkeleton class="h-32 w-full" />
        <UiSkeleton class="h-4 w-full" />
        <UiSkeleton class="h-4 w-4/5" />
      </div>
    \`
  })
}`,...(r=(t=l.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const d=["Default","Card"];export{l as Card,e as Default,d as __namedExportsOrder,c as default};
