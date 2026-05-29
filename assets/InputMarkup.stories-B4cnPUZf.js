import{_ as r,a as h}from"./InputPassword-DkrTEvxl.js";import{U as g,n as b,bL as w}from"./iframe-DooHc6g7.js";import"./preload-helper-FI0fEOG2.js";const P={title:"데이터 입력/Input",component:r,tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"플레이스홀더"},disabled:{control:"boolean",description:"비활성화"},readonly:{control:"boolean",description:"읽기 전용"},ariaInvalid:{control:"boolean",description:"에러 상태"},type:{control:"select",options:["text","email","number","tel","url","search"],description:"input type"},size:{control:"select",options:[void 0,"sm"],description:"크기"}},args:{placeholder:"내용을 입력해 주세요",disabled:!1,readonly:!1,ariaInvalid:!1,type:"text"}},e={name:"InputBase — 인터랙티브",render:n=>({components:{InputBase:r},setup(){const B=w("");return{args:n,value:B}},template:'<div class="w-80"><InputBase v-model="value" v-bind="args" /></div>'})},a={name:"InputBase — 상태별",render:()=>({components:{InputBase:r},template:`
      <div class="flex flex-col gap-3 w-80">
        <InputBase placeholder="기본" />
        <InputBase placeholder="비활성화" :disabled="true" />
        <InputBase placeholder="읽기 전용" :readonly="true" />
        <InputBase placeholder="에러" :aria-invalid="true" />
      </div>
    `})},s={name:"InputBase — prefix / suffix",render:()=>({components:{InputBase:r,LucideSearch:b,LucideUser:g},template:`
      <div class="flex flex-col gap-3 w-80">
        <InputBase placeholder="검색어 입력">
          <template #prefix><LucideSearch class="size-3 stroke-3" /></template>
        </InputBase>
        <InputBase placeholder="사용자명">
          <template #prefix><LucideUser class="size-3 stroke-3" /></template>
          <template #suffix><span class="text-xs text-secondary">@aon.com</span></template>
        </InputBase>
      </div>
    `})},t={name:"InputPassword — 인터랙티브",argTypes:{placeholder:{control:"text",description:"플레이스홀더"},disabled:{control:"boolean",description:"비활성화"},ariaInvalid:{control:"boolean",description:"에러 상태"}},args:{placeholder:"비밀번호를 입력해 주세요",disabled:!1,ariaInvalid:!1},render:n=>({components:{InputPassword:h},setup(){return{args:n}},template:'<div class="w-80"><InputPassword v-bind="args" /></div>'})};var o,l,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'InputBase — 인터랙티브',
  render: args => ({
    components: {
      InputBase
    },
    setup() {
      const value = ref('');
      return {
        args,
        value
      };
    },
    template: \`<div class="w-80"><InputBase v-model="value" v-bind="args" /></div>\`
  })
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,d,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'InputBase — 상태별',
  render: () => ({
    components: {
      InputBase
    },
    template: \`
      <div class="flex flex-col gap-3 w-80">
        <InputBase placeholder="기본" />
        <InputBase placeholder="비활성화" :disabled="true" />
        <InputBase placeholder="읽기 전용" :readonly="true" />
        <InputBase placeholder="에러" :aria-invalid="true" />
      </div>
    \`
  })
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var u,m,I;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'InputBase — prefix / suffix',
  render: () => ({
    components: {
      InputBase,
      LucideSearch,
      LucideUser
    },
    template: \`
      <div class="flex flex-col gap-3 w-80">
        <InputBase placeholder="검색어 입력">
          <template #prefix><LucideSearch class="size-3 stroke-3" /></template>
        </InputBase>
        <InputBase placeholder="사용자명">
          <template #prefix><LucideUser class="size-3 stroke-3" /></template>
          <template #suffix><span class="text-xs text-secondary">@aon.com</span></template>
        </InputBase>
      </div>
    \`
  })
}`,...(I=(m=s.parameters)==null?void 0:m.docs)==null?void 0:I.source}}};var f,v,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'InputPassword — 인터랙티브',
  argTypes: {
    placeholder: {
      control: 'text',
      description: '플레이스홀더'
    },
    disabled: {
      control: 'boolean',
      description: '비활성화'
    },
    ariaInvalid: {
      control: 'boolean',
      description: '에러 상태'
    }
  },
  args: {
    placeholder: '비밀번호를 입력해 주세요',
    disabled: false,
    ariaInvalid: false
  },
  render: args => ({
    components: {
      InputPassword
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div class="w-80"><InputPassword v-bind="args" /></div>\`
  })
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const _=["Default","States","WithAffix","Password"];export{e as Default,t as Password,a as States,s as WithAffix,_ as __namedExportsOrder,P as default};
