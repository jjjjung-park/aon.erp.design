import{n as S,y as b,z as n,U as y,bb as L,bM as D}from"./iframe-RcI2tPm4.js";import"./preload-helper-FI0fEOG2.js";const q={title:"기초/Input",tags:["autodocs"],argTypes:{type:{control:"radio",options:["text","password"],description:"입력 타입"},size:{control:"radio",options:["default","sm"],description:"사이즈"},placeholder:{control:"text",description:"플레이스홀더"},disabled:{control:"boolean",description:"비활성화"},ariaInvalid:{control:"boolean",description:"에러 상태"},readonly:{control:"boolean",description:"읽기 전용 (text 전용)",if:{arg:"type",eq:"text"}},prefix:{control:"boolean",description:"프리픽스 아이콘",if:{arg:"type",eq:"text"}},suffix:{control:"boolean",description:"서픽스 텍스트",if:{arg:"type",eq:"text"}}},args:{type:"text",size:"default",placeholder:"내용을 입력해 주세요",disabled:!1,readonly:!1,ariaInvalid:!1,prefix:!1,suffix:!1}},e={name:"Input — Default",render:l=>({components:{InputBase:n,InputPassword:b,LucideSearch:S},setup(){const z=D(""),P=L(()=>l.type==="password");return{args:l,value:z,isPassword:P}},template:`
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
          :size="args.size"
          :placeholder="args.placeholder"
          :disabled="args.disabled"
          :readonly="args.readonly"
          :aria-invalid="args.ariaInvalid"
        >
          <template v-if="args.prefix" #prefix><LucideSearch class="size-4" /></template>
          <template v-if="args.suffix" #suffix><span class="text-muted">@aon.com</span></template>
        </InputBase>
      </div>
    `})},a={name:"상태별",render:()=>({components:{InputBase:n},template:`
      <div class="flex flex-col gap-3 w-80">
        <InputBase placeholder="기본" />
        <InputBase placeholder="비활성화" :disabled="true" />
        <InputBase placeholder="읽기 전용" :readonly="true" />
        <InputBase placeholder="에러" :aria-invalid="true" />
      </div>
    `})},s={name:"사이즈",render:()=>({components:{InputBase:n},template:`
      <div class="flex flex-col gap-3 w-80">
        <InputBase placeholder="Default (32px)" size="default" />
        <InputBase placeholder="Small (24px)" size="sm" />
      </div>
    `})},r={name:"Prefix / Suffix",render:()=>({components:{InputBase:n,LucideSearch:S,LucideUser:y},template:`
      <div class="flex flex-col gap-3 w-80">
        <InputBase placeholder="검색어 입력">
          <template #prefix><LucideSearch class="size-4" /></template>
        </InputBase>
        <InputBase placeholder="사용자명">
          <template #prefix><LucideUser class="size-4" /></template>
          <template #suffix><span class="text-muted">@aon.com</span></template>
        </InputBase>
      </div>
    `})},t={name:"Password",render:()=>({components:{InputPassword:b},template:`
      <div class="w-80">
        <InputPassword placeholder="비밀번호를 입력해 주세요" />
      </div>
    `})};var o,p,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Input — Default',
  render: args => ({
    components: {
      InputBase,
      InputPassword,
      LucideSearch
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
          :size="args.size"
          :placeholder="args.placeholder"
          :disabled="args.disabled"
          :readonly="args.readonly"
          :aria-invalid="args.ariaInvalid"
        >
          <template v-if="args.prefix" #prefix><LucideSearch class="size-4" /></template>
          <template v-if="args.suffix" #suffix><span class="text-muted">@aon.com</span></template>
        </InputBase>
      </div>
    \`
  })
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var i,c,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '상태별',
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
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,f,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '사이즈',
  render: () => ({
    components: {
      InputBase
    },
    template: \`
      <div class="flex flex-col gap-3 w-80">
        <InputBase placeholder="Default (32px)" size="default" />
        <InputBase placeholder="Small (24px)" size="sm" />
      </div>
    \`
  })
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var v,I,g;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Prefix / Suffix',
  render: () => ({
    components: {
      InputBase,
      LucideSearch,
      LucideUser
    },
    template: \`
      <div class="flex flex-col gap-3 w-80">
        <InputBase placeholder="검색어 입력">
          <template #prefix><LucideSearch class="size-4" /></template>
        </InputBase>
        <InputBase placeholder="사용자명">
          <template #prefix><LucideUser class="size-4" /></template>
          <template #suffix><span class="text-muted">@aon.com</span></template>
        </InputBase>
      </div>
    \`
  })
}`,...(g=(I=r.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};var h,B,w;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Password',
  render: () => ({
    components: {
      InputPassword
    },
    template: \`
      <div class="w-80">
        <InputPassword placeholder="비밀번호를 입력해 주세요" />
      </div>
    \`
  })
}`,...(w=(B=t.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};const A=["Default","States","Sizes","WithAffix","Password"];export{e as Default,t as Password,s as Sizes,a as States,r as WithAffix,A as __namedExportsOrder,q as default};
