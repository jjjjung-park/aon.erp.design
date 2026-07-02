const t={title:"기초/RadioGroup",tags:["autodocs","done"],parameters:{layout:"centered"}},e={name:"RadioGroup — 기본",render:()=>({template:`
      <UiRadioGroup default-value="option1" class="flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <UiRadioGroupItem id="option1" value="option1" />
          <UiLabel for="option1">옵션 1</UiLabel>
        </div>
        <div class="flex items-center gap-2">
          <UiRadioGroupItem id="option2" value="option2" />
          <UiLabel for="option2">옵션 2</UiLabel>
        </div>
        <div class="flex items-center gap-2">
          <UiRadioGroupItem id="option3" value="option3" :disabled="true" />
          <UiLabel for="option3" class="text-disabled-text">비활성화</UiLabel>
        </div>
      </UiRadioGroup>
    `})};var o,i,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'RadioGroup — 기본',
  render: () => ({
    template: \`
      <UiRadioGroup default-value="option1" class="flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <UiRadioGroupItem id="option1" value="option1" />
          <UiLabel for="option1">옵션 1</UiLabel>
        </div>
        <div class="flex items-center gap-2">
          <UiRadioGroupItem id="option2" value="option2" />
          <UiLabel for="option2">옵션 2</UiLabel>
        </div>
        <div class="flex items-center gap-2">
          <UiRadioGroupItem id="option3" value="option3" :disabled="true" />
          <UiLabel for="option3" class="text-disabled-text">비활성화</UiLabel>
        </div>
      </UiRadioGroup>
    \`
  })
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const n=["Default"];export{e as Default,n as __namedExportsOrder,t as default};
