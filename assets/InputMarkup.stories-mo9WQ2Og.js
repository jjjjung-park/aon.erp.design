import{E as I,G as t,U as h,p as x,bf as B,bV as g}from"./iframe-4xPXPRuq.js";import"./preload-helper-FI0fEOG2.js";const b={title:"기초/Input",tags:["autodocs"],argTypes:{type:{control:"radio",options:["text","password"],description:"입력 타입"},placeholder:{control:"text",description:"플레이스홀더"},disabled:{control:"boolean",description:"비활성화"},ariaInvalid:{control:"boolean",description:"에러 상태"},readonly:{control:"boolean",description:"읽기 전용 (text 전용)",if:{arg:"type",eq:"text"}}},args:{type:"text",placeholder:"내용을 입력해 주세요",disabled:!1,readonly:!1,ariaInvalid:!1}},e={name:"Input — 인터랙티브",render:r=>({components:{InputBase:t,InputPassword:I},setup(){const v=g(""),f=B(()=>r.type==="password");return{args:r,value:v,isPassword:f}},template:`
      <div class="w-80">
        <InputPassword
          v-if="isPassword"
          v-model="value"
          :placeholder="args.placeholder"
          :disabled="args.disabled"
          :aria-invalid="args.ariaInvalid"
        />
        <InputBase
          v-else
          v-model="value"
          :placeholder="args.placeholder"
          :disabled="args.disabled"
          :readonly="args.readonly"
          :aria-invalid="args.ariaInvalid"
        />
      </div>
    `})},a={name:"InputBase — 상태별",render:()=>({components:{InputBase:t},template:`
      <div class="flex flex-col gap-3 w-80">
        <InputBase placeholder="기본" />
        <InputBase placeholder="비활성화" :disabled="true" />
        <InputBase placeholder="읽기 전용" :readonly="true" />
        <InputBase placeholder="에러" :aria-invalid="true" />
      </div>
    `})},s={name:"InputBase — prefix / suffix",render:()=>({components:{InputBase:t,LucideSearch:x,LucideUser:h},template:`
      <div class="flex flex-col gap-3 w-80">
        <InputBase placeholder="검색어 입력">
          <template #prefix><LucideSearch class="size-3" style="stroke-width: var(--shape-stroke-xs)" /></template>
        </InputBase>
        <InputBase placeholder="사용자명">
          <template #prefix><LucideUser class="size-3" style="stroke-width: var(--shape-stroke-xs)" /></template>
          <template #suffix><span class="text-xs text-muted">@aon.com</span></template>
        </InputBase>
      </div>
    `})};var l,n,o;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Input — 인터랙티브',
  render: args => ({
    components: {
      InputBase,
      InputPassword
    },
    setup() {
      const value = ref('');
      const isPassword = computed(() => args.type === 'password');
      return {
        args,
        value,
        isPassword
      };
    },
    template: \`
      <div class="w-80">
        <InputPassword
          v-if="isPassword"
          v-model="value"
          :placeholder="args.placeholder"
          :disabled="args.disabled"
          :aria-invalid="args.ariaInvalid"
        />
        <InputBase
          v-else
          v-model="value"
          :placeholder="args.placeholder"
          :disabled="args.disabled"
          :readonly="args.readonly"
          :aria-invalid="args.ariaInvalid"
        />
      </div>
    \`
  })
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var d,p,i;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var c,u,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
          <template #prefix><LucideSearch class="size-3" style="stroke-width: var(--shape-stroke-xs)" /></template>
        </InputBase>
        <InputBase placeholder="사용자명">
          <template #prefix><LucideUser class="size-3" style="stroke-width: var(--shape-stroke-xs)" /></template>
          <template #suffix><span class="text-xs text-muted">@aon.com</span></template>
        </InputBase>
      </div>
    \`
  })
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const S=["Default","States","WithAffix"];export{e as Default,a as States,s as WithAffix,S as __namedExportsOrder,b as default};
