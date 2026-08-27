import{_ as l}from"./SelectBase-DJQhvxQp.js";import{_ as b}from"./ComboboxTag-D3Kuh4rs.js";import"./iframe-RcI2tPm4.js";import"./preload-helper-FI0fEOG2.js";import"./EmptyData-CpBZOKlK.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const t=[{label:"옵션 1",value:"1"},{label:"옵션 2",value:"2"},{label:"옵션 3",value:"3"},{label:"옵션 4",value:"4"}],B={title:"UI 패턴/Select",tags:["autodocs"],parameters:{layout:"centered"},argTypes:{type:{control:"radio",options:["기본 셀렉트","comboboxTag"],description:"셀렉트 종류"},multiple:{control:"radio",options:["단일","멀티"],description:"선택 모드",if:{arg:"type",eq:"comboboxTag"}},size:{control:"radio",options:["sm","default"],description:"사이즈",if:{arg:"type",eq:"기본 셀렉트"}},placeholder:{control:"text",description:"플레이스홀더"},disabled:{control:"boolean",description:"비활성화"}},args:{type:"comboboxTag",multiple:"단일",size:"default",placeholder:"선택하세요",disabled:!1}},e={name:"기본",render:g=>({components:{SelectBase:l,ComboboxTag:b},setup(){return{args:g,sampleItems:t}},template:`
      <div class="w-60">
        <ComboboxTag
          v-if="args.type === 'comboboxTag'"
          :list-item="sampleItems"
          :placeholder="args.placeholder"
          :multiple="args.multiple === '멀티'"
          :disabled="args.disabled"
        />
        <SelectBase
          v-else
          :list-item="sampleItems"
          :placeholder="args.placeholder"
          :disabled="args.disabled"
          :size="args.size"
        />
      </div>
    `})},s={name:"사이즈",render:()=>({components:{SelectBase:l},setup(){return{sampleItems:t}},template:`
      <div class="flex flex-col gap-3 w-60">
        <SelectBase size="sm"      :list-item="sampleItems" placeholder="Small" />
        <SelectBase size="default" :list-item="sampleItems" placeholder="Default" />
      </div>
    `})},a={name:"상태",render:()=>({components:{SelectBase:l},setup(){return{sampleItems:t}},template:`
      <div class="flex flex-col gap-3 w-60">
        <SelectBase :list-item="sampleItems" placeholder="기본" />
        <SelectBase :list-item="sampleItems" placeholder="비활성화" :disabled="true" />
        <SelectBase :list-item="sampleItems" placeholder="읽기 전용" :readonly="true" />
      </div>
    `})};var r,o,m;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: '기본',
  render: args => ({
    components: {
      SelectBase,
      ComboboxTag
    },
    setup() {
      return {
        args,
        sampleItems
      };
    },
    template: \`
      <div class="w-60">
        <ComboboxTag
          v-if="args.type === 'comboboxTag'"
          :list-item="sampleItems"
          :placeholder="args.placeholder"
          :multiple="args.multiple === '멀티'"
          :disabled="args.disabled"
        />
        <SelectBase
          v-else
          :list-item="sampleItems"
          :placeholder="args.placeholder"
          :disabled="args.disabled"
          :size="args.size"
        />
      </div>
    \`
  })
}`,...(m=(o=e.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var i,p,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '사이즈',
  render: () => ({
    components: {
      SelectBase
    },
    setup() {
      return {
        sampleItems
      };
    },
    template: \`
      <div class="flex flex-col gap-3 w-60">
        <SelectBase size="sm"      :list-item="sampleItems" placeholder="Small" />
        <SelectBase size="default" :list-item="sampleItems" placeholder="Default" />
      </div>
    \`
  })
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var n,d,u;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '상태',
  render: () => ({
    components: {
      SelectBase
    },
    setup() {
      return {
        sampleItems
      };
    },
    template: \`
      <div class="flex flex-col gap-3 w-60">
        <SelectBase :list-item="sampleItems" placeholder="기본" />
        <SelectBase :list-item="sampleItems" placeholder="비활성화" :disabled="true" />
        <SelectBase :list-item="sampleItems" placeholder="읽기 전용" :readonly="true" />
      </div>
    \`
  })
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const z=["Default","Sizes","States"];export{e as Default,s as Sizes,a as States,z as __namedExportsOrder,B as default};
