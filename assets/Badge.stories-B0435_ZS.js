import{K as e}from"./iframe-CGZVOpYz.js";import"./preload-helper-FI0fEOG2.js";const w={title:"데이터 표시/Badge",component:e,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","secondary","destructive","info","outline","process","accept","reject","hold","count"]},size:{control:"select",options:["sm","default","dot"]}},args:{variant:"default",size:"default"}},a={render:V=>({components:{Badge:e},setup(){return{args:V}},template:'<Badge v-bind="args">뱃지</Badge>'})},n={name:"상태 Variant",render:()=>({components:{Badge:e},template:`
      <div class="flex flex-wrap gap-2 items-center">
        <Badge variant="process">처리중</Badge>
        <Badge variant="accept">승인</Badge>
        <Badge variant="reject">반려</Badge>
        <Badge variant="hold">보류</Badge>
        <Badge variant="info">정보</Badge>
      </div>
    `})},t={name:"모든 Variant",render:()=>({components:{Badge:e},template:`
      <div class="flex flex-wrap gap-2 items-center">
        <Badge variant="default">Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="process">Process</Badge>
        <Badge variant="accept">Accept</Badge>
        <Badge variant="reject">Reject</Badge>
        <Badge variant="hold">Hold</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="count">12</Badge>
      </div>
    `})},r={name:"모든 Size",render:()=>({components:{Badge:e},template:`
      <div class="flex flex-wrap gap-3 items-center">
        <Badge size="default">Default</Badge>
        <Badge size="sm">Small</Badge>
        <Badge size="dot" variant="destructive" />
      </div>
    `})},d={name:"Count (알림 수)",render:()=>({components:{Badge:e},template:`
      <div class="flex gap-3 items-center">
        <Badge variant="count" tone="default">3</Badge>
        <Badge variant="count" tone="important">12</Badge>
      </div>
    `})};var s,o,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Badge v-bind="args">뱃지</Badge>\`
  })
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var c,g,B;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '상태 Variant',
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div class="flex flex-wrap gap-2 items-center">
        <Badge variant="process">처리중</Badge>
        <Badge variant="accept">승인</Badge>
        <Badge variant="reject">반려</Badge>
        <Badge variant="hold">보류</Badge>
        <Badge variant="info">정보</Badge>
      </div>
    \`
  })
}`,...(B=(g=n.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};var l,p,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '모든 Variant',
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div class="flex flex-wrap gap-2 items-center">
        <Badge variant="default">Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="process">Process</Badge>
        <Badge variant="accept">Accept</Badge>
        <Badge variant="reject">Reject</Badge>
        <Badge variant="hold">Hold</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="count">12</Badge>
      </div>
    \`
  })
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var v,u,f;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '모든 Size',
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div class="flex flex-wrap gap-3 items-center">
        <Badge size="default">Default</Badge>
        <Badge size="sm">Small</Badge>
        <Badge size="dot" variant="destructive" />
      </div>
    \`
  })
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var x,S,z;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Count (알림 수)',
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div class="flex gap-3 items-center">
        <Badge variant="count" tone="default">3</Badge>
        <Badge variant="count" tone="important">12</Badge>
      </div>
    \`
  })
}`,...(z=(S=d.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};const y=["Default","StatusVariants","AllVariants","AllSizes","CountVariant"];export{r as AllSizes,t as AllVariants,d as CountVariant,a as Default,n as StatusVariants,y as __namedExportsOrder,w as default};
