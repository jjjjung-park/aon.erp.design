const o={title:"기초/Checkbox",tags:["autodocs","done"],parameters:{layout:"centered"},argTypes:{disabled:{control:"boolean",description:"비활성화"},showLabel:{control:"boolean",description:"라벨 표시"},label:{control:"text",description:"라벨 텍스트"}},args:{disabled:!1,showLabel:!0,label:"체크박스 라벨"}},e={name:"Checkbox",render:r=>({setup(){return{args:r}},template:`
      <div class="flex items-center gap-2">
        <UiCheckbox id="cb" :disabled="args.disabled" />
        <UiLabel v-if="args.showLabel" for="cb" :class="{ 'text-disabled-text': args.disabled }">{{ args.label }}</UiLabel>
      </div>
    `})},a={name:"Checkbox — 상태별",render:()=>({template:`
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-2"><UiCheckbox id="c1" /><UiLabel for="c1">미체크</UiLabel></div>
        <div class="flex items-center gap-2"><UiCheckbox id="c2" :checked="true" /><UiLabel for="c2">체크됨</UiLabel></div>
        <div class="flex items-center gap-2"><UiCheckbox id="c3" :disabled="true" /><UiLabel for="c3" class="text-disabled-text">비활성화</UiLabel></div>
        <div class="flex items-center gap-2"><UiCheckbox id="c4" :checked="true" :disabled="true" /><UiLabel for="c4" class="text-disabled-text">비활성화 + 체크</UiLabel></div>
      </div>
    `})};var s,i,t;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Checkbox',
  render: args => ({
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="flex items-center gap-2">
        <UiCheckbox id="cb" :disabled="args.disabled" />
        <UiLabel v-if="args.showLabel" for="cb" :class="{ 'text-disabled-text': args.disabled }">{{ args.label }}</UiLabel>
      </div>
    \`
  })
}`,...(t=(i=e.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var l,c,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Checkbox — 상태별',
  render: () => ({
    template: \`
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-2"><UiCheckbox id="c1" /><UiLabel for="c1">미체크</UiLabel></div>
        <div class="flex items-center gap-2"><UiCheckbox id="c2" :checked="true" /><UiLabel for="c2">체크됨</UiLabel></div>
        <div class="flex items-center gap-2"><UiCheckbox id="c3" :disabled="true" /><UiLabel for="c3" class="text-disabled-text">비활성화</UiLabel></div>
        <div class="flex items-center gap-2"><UiCheckbox id="c4" :checked="true" :disabled="true" /><UiLabel for="c4" class="text-disabled-text">비활성화 + 체크</UiLabel></div>
      </div>
    \`
  })
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const b=["Default","States"];export{e as Default,a as States,b as __namedExportsOrder,o as default};
