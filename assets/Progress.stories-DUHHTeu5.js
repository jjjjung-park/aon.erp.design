const x={title:"기초/Progress",tags:["autodocs","done"],parameters:{layout:"centered"},argTypes:{modelValue:{control:{type:"range",min:0,max:100},description:"진행률 (0~100)"}},args:{modelValue:40}},e={name:"Progress — 인터랙티브",render:n=>({setup(){return{args:n}},template:'<UiProgress :model-value="args.modelValue" class="w-80" />'})},s={name:"Progress — 단계별",render:()=>({template:`
      <div class="flex flex-col gap-4 w-80">
        <div class="flex flex-col gap-1"><span class="text-xs text-muted">0%</span><UiProgress :model-value="0" /></div>
        <div class="flex flex-col gap-1"><span class="text-xs text-muted">25%</span><UiProgress :model-value="25" /></div>
        <div class="flex flex-col gap-1"><span class="text-xs text-muted">50%</span><UiProgress :model-value="50" /></div>
        <div class="flex flex-col gap-1"><span class="text-xs text-muted">75%</span><UiProgress :model-value="75" /></div>
        <div class="flex flex-col gap-1"><span class="text-xs text-muted">100%</span><UiProgress :model-value="100" /></div>
      </div>
    `})};var a,l,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Progress — 인터랙티브',
  render: args => ({
    setup() {
      return {
        args
      };
    },
    template: \`<UiProgress :model-value="args.modelValue" class="w-80" />\`
  })
}`,...(t=(l=e.parameters)==null?void 0:l.docs)==null?void 0:t.source}}};var r,o,d;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Progress — 단계별',
  render: () => ({
    template: \`
      <div class="flex flex-col gap-4 w-80">
        <div class="flex flex-col gap-1"><span class="text-xs text-muted">0%</span><UiProgress :model-value="0" /></div>
        <div class="flex flex-col gap-1"><span class="text-xs text-muted">25%</span><UiProgress :model-value="25" /></div>
        <div class="flex flex-col gap-1"><span class="text-xs text-muted">50%</span><UiProgress :model-value="50" /></div>
        <div class="flex flex-col gap-1"><span class="text-xs text-muted">75%</span><UiProgress :model-value="75" /></div>
        <div class="flex flex-col gap-1"><span class="text-xs text-muted">100%</span><UiProgress :model-value="100" /></div>
      </div>
    \`
  })
}`,...(d=(o=s.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const c=["Default","Steps"];export{e as Default,s as Steps,c as __namedExportsOrder,x as default};
