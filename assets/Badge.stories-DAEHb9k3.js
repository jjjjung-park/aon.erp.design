import{w as e}from"./iframe-RcI2tPm4.js";import"./preload-helper-FI0fEOG2.js";const z={title:"기초/Badge",component:e,tags:["autodocs"],argTypes:{variant:{control:"select",options:["info","outline","process","accept","reject","hold"]},size:{control:"select",options:["count","default","dot"]}},args:{variant:"info",size:"default"}},a={render:f=>({components:{Badge:e},setup(){return{args:f}},template:'<Badge v-bind="args" >뱃지</Badge>'})},n={name:"상태 배지",render:()=>({components:{Badge:e},template:`
      <div class="flex flex-wrap gap-2 items-center">
        <Badge variant="outline">시작/미진행</Badge>
        <Badge variant="process">처리중/진행중</Badge>
        <Badge variant="accept">승인/완료</Badge>
        <Badge variant="reject">반려</Badge>
        <Badge variant="hold">보류</Badge>
        <Badge variant="info">정보</Badge>
      </div>
    `})},t={name:"Count (알림 수)",render:()=>({components:{Badge:e},template:`
      <div class="flex gap-3 items-center">
        <Badge size="count">3</Badge>
        <Badge size="count" class="bg-danger text-neutral">12</Badge>
        <Badge size="count" class="bg-danger text-neutral"><LucideThumbsDown />999+</Badge>
      </div>
    `})},s={name:"Dot (알림 표시)",render:()=>({components:{Badge:e},template:`
      <div class="flex gap-3 items-center">
        <Badge size="dot" class="bg-danger" />
        <Badge size="dot" class="bg-success" />
        <Badge size="dot" class="bg-primary" />
      </div>
    `})};var r,d,o;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Badge v-bind="args" >뱃지</Badge>\`
  })
}`,...(o=(d=a.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};var c,g,i;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '상태 배지',
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div class="flex flex-wrap gap-2 items-center">
        <Badge variant="outline">시작/미진행</Badge>
        <Badge variant="process">처리중/진행중</Badge>
        <Badge variant="accept">승인/완료</Badge>
        <Badge variant="reject">반려</Badge>
        <Badge variant="hold">보류</Badge>
        <Badge variant="info">정보</Badge>
      </div>
    \`
  })
}`,...(i=(g=n.parameters)==null?void 0:g.docs)==null?void 0:i.source}}};var p,l,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Count (알림 수)',
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div class="flex gap-3 items-center">
        <Badge size="count">3</Badge>
        <Badge size="count" class="bg-danger text-neutral">12</Badge>
        <Badge size="count" class="bg-danger text-neutral"><LucideThumbsDown />999+</Badge>
      </div>
    \`
  })
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var B,u,v;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Dot (알림 표시)',
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div class="flex gap-3 items-center">
        <Badge size="dot" class="bg-danger" />
        <Badge size="dot" class="bg-success" />
        <Badge size="dot" class="bg-primary" />
      </div>
    \`
  })
}`,...(v=(u=s.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const D=["Default","StatusVariants","CountVariant","DotVariant"];export{t as CountVariant,a as Default,s as DotVariant,n as StatusVariants,D as __namedExportsOrder,z as default};
