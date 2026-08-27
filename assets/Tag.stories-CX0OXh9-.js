import{A as n,bb as h}from"./iframe-RcI2tPm4.js";import"./preload-helper-FI0fEOG2.js";const v={title:"기초/Tag",component:n,tags:["autodocs"],argTypes:{type:{control:"radio",options:["tag","chip"],description:"타입"},tagVariant:{control:"select",options:["default","secondary","outline","info"],description:"variant",if:{arg:"type",eq:"tag"}},chipVariant:{control:"select",options:["default","secondary","outline"],description:"variant",if:{arg:"type",eq:"chip"}},title:{control:"text",description:"태그 텍스트"},closeable:{control:"boolean",description:"닫기 버튼 표시",if:{arg:"type",eq:"chip"}},disabled:{control:"boolean",description:"비활성화",if:{arg:"type",eq:"chip"}}},args:{type:"tag",tagVariant:"default",chipVariant:"secondary",title:"태그",closeable:!1,disabled:!1}},a={name:"Tags — 인터랙티브",render:e=>({components:{Tags:n},setup(){const m=h(()=>e.type==="chip"?e.chipVariant:e.tagVariant);return{args:e,variant:m}},template:`<Tags :type="args.type" :variant="variant" :title="args.title" :closeable="args.closeable" :disabled="args.type === 'chip' ? args.disabled : undefined" />`})},t={name:"Chip — 선택 상태",render:()=>({components:{Tags:n},template:`
      <div class="flex flex-wrap gap-2 items-center">
        <Tags type="chip" variant="default"   title="선택완료된 태그" :closeable="true">
          <template #default><LucideCheck class="size-3 shrink-0"/><p class="truncate">선택완료된 태그</p></template>
        </Tags>
        <Tags type="chip" variant="secondary" title="선택한 태그" :closeable="true">
          <template #default><LucideCheck class="size-3 shrink-0"/><p class="truncate">선택한 태그</p></template>
        </Tags>
        <Tags type="chip" variant="outline"   title="미선택 태그"  :closeable="true"/>
        <Tags type="chip" :disabled="true" title="비활성 태그" :closeable="true">
          <template #default><LucideCheck class="size-3 shrink-0"/><p class="truncate">비활성 태그</p></template>
        </Tags>
      </div>
    `})},s={name:"Tag — 레벨",render:()=>({components:{Tags:n},template:`
      <div class="flex flex-wrap gap-2 items-center">
        <Tags type="tag" variant="outline"   title="Low Level" />
        <Tags type="tag" variant="info"      title="Middle level" />
        <Tags type="tag" variant="default"   title="High Level" />
        <Tags type="tag" variant="secondary">
          <template #default><LucideCheck class="size-3 shrink-0"/><p class="truncate">Checked</p></template>
        </Tags>
      </div>
    `})};var i,r,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Tags — 인터랙티브',
  render: args => ({
    components: {
      Tags
    },
    setup() {
      const variant = computed(() => args.type === 'chip' ? args.chipVariant : args.tagVariant);
      return {
        args,
        variant
      };
    },
    template: \`<Tags :type="args.type" :variant="variant" :title="args.title" :closeable="args.closeable" :disabled="args.type === 'chip' ? args.disabled : undefined" />\`
  })
}`,...(l=(r=a.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var c,p,o;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Chip — 선택 상태',
  render: () => ({
    components: {
      Tags
    },
    template: \`
      <div class="flex flex-wrap gap-2 items-center">
        <Tags type="chip" variant="default"   title="선택완료된 태그" :closeable="true">
          <template #default><LucideCheck class="size-3 shrink-0"/><p class="truncate">선택완료된 태그</p></template>
        </Tags>
        <Tags type="chip" variant="secondary" title="선택한 태그" :closeable="true">
          <template #default><LucideCheck class="size-3 shrink-0"/><p class="truncate">선택한 태그</p></template>
        </Tags>
        <Tags type="chip" variant="outline"   title="미선택 태그"  :closeable="true"/>
        <Tags type="chip" :disabled="true" title="비활성 태그" :closeable="true">
          <template #default><LucideCheck class="size-3 shrink-0"/><p class="truncate">비활성 태그</p></template>
        </Tags>
      </div>
    \`
  })
}`,...(o=(p=t.parameters)==null?void 0:p.docs)==null?void 0:o.source}}};var d,g,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Tag — 레벨',
  render: () => ({
    components: {
      Tags
    },
    template: \`
      <div class="flex flex-wrap gap-2 items-center">
        <Tags type="tag" variant="outline"   title="Low Level" />
        <Tags type="tag" variant="info"      title="Middle level" />
        <Tags type="tag" variant="default"   title="High Level" />
        <Tags type="tag" variant="secondary">
          <template #default><LucideCheck class="size-3 shrink-0"/><p class="truncate">Checked</p></template>
        </Tags>
      </div>
    \`
  })
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const y=["Default","Chip","TagLevel"];export{t as Chip,a as Default,s as TagLevel,y as __namedExportsOrder,v as default};
