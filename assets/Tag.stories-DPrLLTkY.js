import{_ as e}from"./Tags-CO3dDQ2_.js";import"./iframe-DooHc6g7.js";import"./preload-helper-FI0fEOG2.js";const h={title:"데이터 표시/Tag",component:e,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","secondary","outline","info"],description:"variant"},type:{control:"select",options:["tag","chip"],description:"크기 타입 (tag: border-transparent / chip: rounded-full)"},title:{control:"text",description:"태그 텍스트"},closeable:{control:"boolean",description:"닫기 버튼 표시"}},args:{variant:"default",type:"tag",title:"태그",closeable:!1}},a={name:"Tags — 인터랙티브",render:T=>({components:{Tags:e},setup(){return{args:T}},template:'<Tags v-bind="args" />'})},t={name:"모든 Variant",render:()=>({components:{Tags:e},template:`
      <div class="flex flex-wrap gap-2 items-center">
        <Tags variant="default"   title="Default" />
        <Tags variant="secondary" title="Secondary" />
        <Tags variant="outline"   title="Outline" />
        <Tags variant="info"      title="Info" />
      </div>
    `})},n={name:"Tag vs Chip",render:()=>({components:{Tags:e},template:`
      <div class="flex flex-col gap-3">
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs text-secondary w-10">tag</span>
          <Tags type="tag" variant="default"   title="Default" />
          <Tags type="tag" variant="secondary" title="Secondary" />
          <Tags type="tag" variant="outline"   title="Outline" />
          <Tags type="tag" variant="info"      title="Info" />
        </div>
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs text-secondary w-10">chip</span>
          <Tags type="chip" variant="default"   title="Default" />
          <Tags type="chip" variant="secondary" title="Secondary" />
          <Tags type="chip" variant="outline"   title="Outline" />
          <Tags type="chip" variant="info"      title="Info" />
        </div>
      </div>
    `})},s={name:"닫기 버튼",render:()=>({components:{Tags:e},template:`
      <div class="flex flex-wrap gap-2 items-center">
        <Tags variant="default"   title="삭제 가능" :closeable="true" />
        <Tags variant="secondary" title="삭제 가능" :closeable="true" />
        <Tags variant="outline"   title="삭제 가능" :closeable="true" />
      </div>
    `})};var r,i,l;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Tags — 인터랙티브',
  render: args => ({
    components: {
      Tags
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Tags v-bind="args" />\`
  })
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var o,c,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '모든 Variant',
  render: () => ({
    components: {
      Tags
    },
    template: \`
      <div class="flex flex-wrap gap-2 items-center">
        <Tags variant="default"   title="Default" />
        <Tags variant="secondary" title="Secondary" />
        <Tags variant="outline"   title="Outline" />
        <Tags variant="info"      title="Info" />
      </div>
    \`
  })
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,g,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Tag vs Chip',
  render: () => ({
    components: {
      Tags
    },
    template: \`
      <div class="flex flex-col gap-3">
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs text-secondary w-10">tag</span>
          <Tags type="tag" variant="default"   title="Default" />
          <Tags type="tag" variant="secondary" title="Secondary" />
          <Tags type="tag" variant="outline"   title="Outline" />
          <Tags type="tag" variant="info"      title="Info" />
        </div>
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs text-secondary w-10">chip</span>
          <Tags type="chip" variant="default"   title="Default" />
          <Tags type="chip" variant="secondary" title="Secondary" />
          <Tags type="chip" variant="outline"   title="Outline" />
          <Tags type="chip" variant="info"      title="Info" />
        </div>
      </div>
    \`
  })
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var v,f,m;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(m=(f=s.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};const w=["Default","AllVariants","Types","Closeable"];export{t as AllVariants,s as Closeable,a as Default,n as Types,w as __namedExportsOrder,h as default};
