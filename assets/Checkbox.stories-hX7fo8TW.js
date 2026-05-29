const n={title:"데이터 입력/Checkbox",tags:["autodocs"],parameters:{layout:"centered"},argTypes:{checked:{control:"boolean",description:"체크 여부"},disabled:{control:"boolean",description:"비활성화"}},args:{checked:!1,disabled:!1}},e={name:"Checkbox — 인터랙티브",render:r=>({setup(){return{args:r}},template:`
      <div class="flex items-center gap-2">
        <UiCheckbox id="cb" :checked="args.checked" :disabled="args.disabled" />
        <UiLabel for="cb">체크박스 라벨</UiLabel>
      </div>
    `})},a={name:"Checkbox — 상태별",render:()=>({template:`
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-2"><UiCheckbox id="c1" /><UiLabel for="c1">미체크</UiLabel></div>
        <div class="flex items-center gap-2"><UiCheckbox id="c2" :checked="true" /><UiLabel for="c2">체크됨</UiLabel></div>
        <div class="flex items-center gap-2"><UiCheckbox id="c3" :disabled="true" /><UiLabel for="c3" class="text-disabled-text">비활성화</UiLabel></div>
        <div class="flex items-center gap-2"><UiCheckbox id="c4" :checked="true" :disabled="true" /><UiLabel for="c4" class="text-disabled-text">비활성화 + 체크</UiLabel></div>
      </div>
    `})};var c,s,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Checkbox — 인터랙티브',
  render: args => ({
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="flex items-center gap-2">
        <UiCheckbox id="cb" :checked="args.checked" :disabled="args.disabled" />
        <UiLabel for="cb">체크박스 라벨</UiLabel>
      </div>
    \`
  })
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var d,t,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(l=(t=a.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const o=["Default","States"];export{e as Default,a as States,o as __namedExportsOrder,n as default};
