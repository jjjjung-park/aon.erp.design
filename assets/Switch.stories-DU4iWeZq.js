const i={title:"데이터 입력/Switch",tags:["autodocs"],parameters:{layout:"centered"},argTypes:{disabled:{control:"boolean",description:"비활성화"},showLabel:{control:"boolean",description:"라벨 표시"},label:{control:"text",description:"라벨 텍스트"},labelPosition:{control:"radio",options:["left","right"],description:"라벨 위치"}},args:{disabled:!1,showLabel:!0,label:"label text",labelPosition:"right"}},e={name:"Switch",render:l=>({setup(){return{args:l}},template:`
      <div class="flex items-center gap-2">
        <UiLabel v-if="args.showLabel && args.labelPosition === 'left'" for="switch" :class="{ 'text-disabled-text': args.disabled }">{{ args.label }}</UiLabel>
        <UiSwitch
          id="switch"
          :disabled="args.disabled"
        />
        <UiLabel v-if="args.showLabel && args.labelPosition === 'right'" for="switch" :class="{ 'text-disabled-text': args.disabled }">{{ args.label }}</UiLabel>
      </div>
    `})};var a,s,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Switch',
  render: args => ({
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="flex items-center gap-2">
        <UiLabel v-if="args.showLabel && args.labelPosition === 'left'" for="switch" :class="{ 'text-disabled-text': args.disabled }">{{ args.label }}</UiLabel>
        <UiSwitch
          id="switch"
          :disabled="args.disabled"
        />
        <UiLabel v-if="args.showLabel && args.labelPosition === 'right'" for="switch" :class="{ 'text-disabled-text': args.disabled }">{{ args.label }}</UiLabel>
      </div>
    \`
  })
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const r=["Default"];export{e as Default,r as __namedExportsOrder,i as default};
