import{J as a,be as T}from"./iframe-CGZVOpYz.js";import"./preload-helper-FI0fEOG2.js";const w={title:"데이터 표시/Tag",component:a,tags:["autodocs"],argTypes:{type:{control:"radio",options:["tag","chip"],description:"타입"},tagVariant:{control:"select",options:["default","secondary","outline","info"],description:"variant",if:{arg:"type",eq:"tag"}},chipVariant:{control:"select",options:["secondary","outline","disabled"],description:"variant",if:{arg:"type",eq:"chip"}},title:{control:"text",description:"태그 텍스트"},closeable:{control:"boolean",description:"닫기 버튼 표시",if:{arg:"type",eq:"chip"}}},args:{type:"tag",tagVariant:"default",chipVariant:"secondary",title:"태그",closeable:!1}},t={name:"Tags — 인터랙티브",render:e=>({components:{Tags:a},setup(){const x=T(()=>e.type==="chip"?e.chipVariant:e.tagVariant);return{args:e,variant:x}},template:'<Tags :type="args.type" :variant="variant" :title="args.title" :closeable="args.closeable" />'})},n={name:"모든 Variant",render:()=>({components:{Tags:a},template:`
      <div class="flex flex-col gap-3">
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs text-muted w-10">tag</span>
          <Tags type="tag" variant="default"   title="Default" />
          <Tags type="tag" variant="secondary" title="Secondary" />
          <Tags type="tag" variant="outline"   title="Outline" />
          <Tags type="tag" variant="info"      title="Info" />
        </div>
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs text-muted w-10">chip</span>
          <Tags type="chip" variant="secondary" title="Secondary" />
          <Tags type="chip" variant="outline"   title="Outline" />
          <Tags type="chip" variant="disabled"  title="Disabled" />
        </div>
      </div>
    `})},s={name:"Tag vs Chip",render:()=>({components:{Tags:a},template:`
      <div class="flex flex-col gap-3">
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs text-muted w-10">tag</span>
          <Tags type="tag" variant="default"   title="Default" />
          <Tags type="tag" variant="secondary" title="Secondary" />
          <Tags type="tag" variant="outline"   title="Outline" />
          <Tags type="tag" variant="info"      title="Info" />
        </div>
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs text-muted w-10">chip</span>
          <Tags type="chip" variant="secondary" title="Secondary" />
          <Tags type="chip" variant="outline"   title="Outline" />
          <Tags type="chip" variant="disabled"  title="Disabled" />
        </div>
      </div>
    `})},i={name:"닫기 버튼",render:()=>({components:{Tags:a},template:`
      <div class="flex flex-wrap gap-2 items-center">
        <Tags variant="default"   title="삭제 가능" :closeable="true" />
        <Tags variant="secondary" title="삭제 가능" :closeable="true" />
        <Tags variant="outline"   title="삭제 가능" :closeable="true" />
      </div>
    `})};var r,l,p;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
    template: \`<Tags :type="args.type" :variant="variant" :title="args.title" :closeable="args.closeable" />\`
  })
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,o,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '모든 Variant',
  render: () => ({
    components: {
      Tags
    },
    template: \`
      <div class="flex flex-col gap-3">
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs text-muted w-10">tag</span>
          <Tags type="tag" variant="default"   title="Default" />
          <Tags type="tag" variant="secondary" title="Secondary" />
          <Tags type="tag" variant="outline"   title="Outline" />
          <Tags type="tag" variant="info"      title="Info" />
        </div>
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs text-muted w-10">chip</span>
          <Tags type="chip" variant="secondary" title="Secondary" />
          <Tags type="chip" variant="outline"   title="Outline" />
          <Tags type="chip" variant="disabled"  title="Disabled" />
        </div>
      </div>
    \`
  })
}`,...(d=(o=n.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var g,v,u;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Tag vs Chip',
  render: () => ({
    components: {
      Tags
    },
    template: \`
      <div class="flex flex-col gap-3">
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs text-muted w-10">tag</span>
          <Tags type="tag" variant="default"   title="Default" />
          <Tags type="tag" variant="secondary" title="Secondary" />
          <Tags type="tag" variant="outline"   title="Outline" />
          <Tags type="tag" variant="info"      title="Info" />
        </div>
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs text-muted w-10">chip</span>
          <Tags type="chip" variant="secondary" title="Secondary" />
          <Tags type="chip" variant="outline"   title="Outline" />
          <Tags type="chip" variant="disabled"  title="Disabled" />
        </div>
      </div>
    \`
  })
}`,...(u=(v=s.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var m,y,f;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '닫기 버튼',
  render: () => ({
    components: {
      Tags
    },
    template: \`
      <div class="flex flex-wrap gap-2 items-center">
        <Tags variant="default"   title="삭제 가능" :closeable="true" />
        <Tags variant="secondary" title="삭제 가능" :closeable="true" />
        <Tags variant="outline"   title="삭제 가능" :closeable="true" />
      </div>
    \`
  })
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const S=["Default","AllVariants","Types","Closeable"];export{n as AllVariants,i as Closeable,t as Default,s as Types,S as __namedExportsOrder,w as default};
