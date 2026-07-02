const c={title:"기초/Separator",tags:["autodocs"],parameters:{layout:"centered"}},a={name:"Vertical — 사이즈별",render:()=>({template:`
      <div class="flex flex-col gap-6">
        <div class="flex items-center gap-2">
          <span class="caption text-muted w-16">12px</span>
          <div class="flex h-10 items-center gap-2">
            <span>항목 A</span>
            <UiSeparator orientation="vertical" class="h-3 bg-border" />
            <span>항목 B</span>
            <UiSeparator orientation="vertical" class="h-3 bg-border" />
            <span>항목 C</span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span class="caption text-muted w-16">16px</span>
          <div class="flex h-10 items-center gap-2">
            <span>항목 A</span>
            <UiSeparator orientation="vertical" class="h-4 bg-border" />
            <span>항목 B</span>
            <UiSeparator orientation="vertical" class="h-4 bg-border" />
            <span>항목 C</span>
          </div>
        </div>
      </div>
    `})},e={name:"Horizontal",render:()=>({template:`
      <div class="w-80 flex flex-col gap-3">
        <p>섹션 A</p>
        <UiSeparator class="!h-2 bg-surface-muted" />
        <p>섹션 B</p>
        <UiSeparator class="!h-2 bg-surface-muted" />
        <p>섹션 C</p>
      </div>
    `})};var s,n,r;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Vertical — 사이즈별',
  render: () => ({
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex items-center gap-2">
          <span class="caption text-muted w-16">12px</span>
          <div class="flex h-10 items-center gap-2">
            <span>항목 A</span>
            <UiSeparator orientation="vertical" class="h-3 bg-border" />
            <span>항목 B</span>
            <UiSeparator orientation="vertical" class="h-3 bg-border" />
            <span>항목 C</span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span class="caption text-muted w-16">16px</span>
          <div class="flex h-10 items-center gap-2">
            <span>항목 A</span>
            <UiSeparator orientation="vertical" class="h-4 bg-border" />
            <span>항목 B</span>
            <UiSeparator orientation="vertical" class="h-4 bg-border" />
            <span>항목 C</span>
          </div>
        </div>
      </div>
    \`
  })
}`,...(r=(n=a.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var t,p,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Horizontal',
  render: () => ({
    template: \`
      <div class="w-80 flex flex-col gap-3">
        <p>섹션 A</p>
        <UiSeparator class="!h-2 bg-surface-muted" />
        <p>섹션 B</p>
        <UiSeparator class="!h-2 bg-surface-muted" />
        <p>섹션 C</p>
      </div>
    \`
  })
}`,...(i=(p=e.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const o=["Vertical","Horizontal"];export{e as Horizontal,a as Vertical,o as __namedExportsOrder,c as default};
