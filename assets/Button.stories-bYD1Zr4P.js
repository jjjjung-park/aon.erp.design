import{x as t,n as T,q as P,P as w}from"./iframe-DooHc6g7.js";import"./preload-helper-FI0fEOG2.js";const A={title:"액션/Button",component:t,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive","outline","secondary","ghost","link"]},size:{control:"select",options:["sm","default","lg","icon-sm","icon","icon-lg"]}},args:{variant:"default",size:"default"}},n={render:y=>({components:{Button:t},setup(){return{args:y}},template:'<Button v-bind="args">버튼</Button>'})},e={name:"모든 Variant",render:()=>({components:{Button:t},template:`
      <div class="flex flex-wrap gap-3 items-center">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>
    `})},a={name:"모든 Size",render:()=>({components:{Button:t},template:`
      <div class="flex flex-wrap gap-3 items-end">
        <Button size="lg">Large</Button>
        <Button size="default">Default</Button>
        <Button size="sm">Small</Button>
      </div>
    `})},o={name:"아이콘 버튼",render:()=>({components:{Button:t,LucidePlus:w,LucideTrash2:P,LucideSearch:T},template:`
      <div class="flex flex-wrap gap-3 items-end">
        <Button size="icon-lg" variant="outline"><LucidePlus /></Button>
        <Button size="icon" variant="outline"><LucideSearch /></Button>
        <Button size="icon-sm" variant="outline"><LucideTrash2 /></Button>
      </div>
    `})},s={name:"텍스트 + 아이콘",render:()=>({components:{Button:t,LucidePlus:w,LucideTrash2:P},template:`
      <div class="flex flex-wrap gap-3 items-center">
        <Button variant="default"><LucidePlus />추가</Button>
        <Button variant="outline"><LucidePlus />추가</Button>
        <Button variant="destructive"><LucideTrash2 />삭제</Button>
      </div>
    `})},r={name:"Disabled 상태",render:()=>({components:{Button:t},template:`
      <div class="flex flex-wrap gap-3 items-center">
        <Button variant="default" disabled>Default</Button>
        <Button variant="outline" disabled>Outline</Button>
        <Button variant="secondary" disabled>Secondary</Button>
        <Button variant="ghost" disabled>Ghost</Button>
      </div>
    `})};var u,i,c;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Button v-bind="args">버튼</Button>\`
  })
}`,...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,d,B;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '모든 Variant',
  render: () => ({
    components: {
      Button
    },
    template: \`
      <div class="flex flex-wrap gap-3 items-center">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>
    \`
  })
}`,...(B=(d=e.parameters)==null?void 0:d.docs)==null?void 0:B.source}}};var m,p,v;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '모든 Size',
  render: () => ({
    components: {
      Button
    },
    template: \`
      <div class="flex flex-wrap gap-3 items-end">
        <Button size="lg">Large</Button>
        <Button size="default">Default</Button>
        <Button size="sm">Small</Button>
      </div>
    \`
  })
}`,...(v=(p=a.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var f,g,L;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '아이콘 버튼',
  render: () => ({
    components: {
      Button,
      LucidePlus,
      LucideTrash2,
      LucideSearch
    },
    template: \`
      <div class="flex flex-wrap gap-3 items-end">
        <Button size="icon-lg" variant="outline"><LucidePlus /></Button>
        <Button size="icon" variant="outline"><LucideSearch /></Button>
        <Button size="icon-sm" variant="outline"><LucideTrash2 /></Button>
      </div>
    \`
  })
}`,...(L=(g=o.parameters)==null?void 0:g.docs)==null?void 0:L.source}}};var h,x,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '텍스트 + 아이콘',
  render: () => ({
    components: {
      Button,
      LucidePlus,
      LucideTrash2
    },
    template: \`
      <div class="flex flex-wrap gap-3 items-center">
        <Button variant="default"><LucidePlus />추가</Button>
        <Button variant="outline"><LucidePlus />추가</Button>
        <Button variant="destructive"><LucideTrash2 />삭제</Button>
      </div>
    \`
  })
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var z,b,D;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Disabled 상태',
  render: () => ({
    components: {
      Button
    },
    template: \`
      <div class="flex flex-wrap gap-3 items-center">
        <Button variant="default" disabled>Default</Button>
        <Button variant="outline" disabled>Outline</Button>
        <Button variant="secondary" disabled>Secondary</Button>
        <Button variant="ghost" disabled>Ghost</Button>
      </div>
    \`
  })
}`,...(D=(b=r.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};const G=["Default","AllVariants","AllSizes","IconButtons","WithIcon","Disabled"];export{a as AllSizes,e as AllVariants,n as Default,r as Disabled,o as IconButtons,s as WithIcon,G as __namedExportsOrder,A as default};
