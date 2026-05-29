const d={title:"데이터 표시/Progress",tags:["autodocs"],parameters:{layout:"centered"},argTypes:{modelValue:{control:{type:"range",min:0,max:100},description:"진행률 (0~100)"}},args:{modelValue:40}},e={name:"Progress — 인터랙티브",render:c=>({setup(){return{args:c}},template:'<UiProgress :model-value="args.modelValue" class="w-80" />'})},s={name:"Progress — 단계별",render:()=>({template:`
      <div class="flex flex-col gap-4 w-80">
        <div class="flex flex-col gap-1"><span class="text-xs text-secondary">0%</span><UiProgress :model-value="0" /></div>
        <div class="flex flex-col gap-1"><span class="text-xs text-secondary">25%</span><UiProgress :model-value="25" /></div>
        <div class="flex flex-col gap-1"><span class="text-xs text-secondary">50%</span><UiProgress :model-value="50" /></div>
        <div class="flex flex-col gap-1"><span class="text-xs text-secondary">75%</span><UiProgress :model-value="75" /></div>
        <div class="flex flex-col gap-1"><span class="text-xs text-secondary">100%</span><UiProgress :model-value="100" /></div>
      </div>
    `})};var a,l,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Progress — 인터랙티브',
  render: args => ({
    setup() {
      return {
        args
      };
    },
    template: \`<UiProgress :model-value="args.modelValue" class="w-80" />\`
  })
}`,...(r=(l=e.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};var t,o,n;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Progress — 단계별',
  render: () => ({
    template: \`
      <div class="flex flex-col gap-4 w-80">
        <div class="flex flex-col gap-1"><span class="text-xs text-secondary">0%</span><UiProgress :model-value="0" /></div>
        <div class="flex flex-col gap-1"><span class="text-xs text-secondary">25%</span><UiProgress :model-value="25" /></div>
        <div class="flex flex-col gap-1"><span class="text-xs text-secondary">50%</span><UiProgress :model-value="50" /></div>
        <div class="flex flex-col gap-1"><span class="text-xs text-secondary">75%</span><UiProgress :model-value="75" /></div>
        <div class="flex flex-col gap-1"><span class="text-xs text-secondary">100%</span><UiProgress :model-value="100" /></div>
      </div>
    \`
  })
}`,...(n=(o=s.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const x=["Default","Steps"];export{e as Default,s as Steps,x as __namedExportsOrder,d as default};
