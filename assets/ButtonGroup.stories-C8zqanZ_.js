const u={title:"UI 패턴/ButtonGroup",tags:["autodocs","unused"],parameters:{layout:"centered"}},t={name:"ButtonGroup — 토글",render:()=>({template:`
      <div class="flex flex-col gap-4">
        <UiButtonGroup>
          <UiButton variant="outline"><LucideAlignLeft /></UiButton>
          <UiButton variant="outline"><LucideAlignCenter /></UiButton>
          <UiButton variant="outline"><LucideAlignRight /></UiButton>
        </UiButtonGroup>
        <UiButtonGroup>
          <UiButton variant="outline">이전</UiButton>
          <UiButton variant="outline">다음</UiButton>
        </UiButtonGroup>
        <UiButtonGroup orientation="vertical">
          <UiButton variant="outline">항목 1</UiButton>
          <UiButton variant="outline">항목 2</UiButton>
          <UiButton variant="outline">항목 3</UiButton>
        </UiButtonGroup>
      </div>
    `})};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'ButtonGroup — 토글',
  render: () => ({
    template: \`
      <div class="flex flex-col gap-4">
        <UiButtonGroup>
          <UiButton variant="outline"><LucideAlignLeft /></UiButton>
          <UiButton variant="outline"><LucideAlignCenter /></UiButton>
          <UiButton variant="outline"><LucideAlignRight /></UiButton>
        </UiButtonGroup>
        <UiButtonGroup>
          <UiButton variant="outline">이전</UiButton>
          <UiButton variant="outline">다음</UiButton>
        </UiButtonGroup>
        <UiButtonGroup orientation="vertical">
          <UiButton variant="outline">항목 1</UiButton>
          <UiButton variant="outline">항목 2</UiButton>
          <UiButton variant="outline">항목 3</UiButton>
        </UiButtonGroup>
      </div>
    \`
  })
}`,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const e=["Toggle"];export{t as Toggle,e as __namedExportsOrder,u as default};
