import{_ as s}from"./SheetBase-DRTMl3PM.js";import{z as l}from"./iframe-4xPXPRuq.js";import"./preload-helper-FI0fEOG2.js";const v={title:"UI 패턴/Sheet",component:s,parameters:{layout:"fullscreen"},argTypes:{title:{control:"text",description:"시트 제목"},description:{control:"text",description:"시트 서브 타이틀"},fullScreen:{control:"boolean",description:"전체화면 여부"},footer:{control:"boolean",description:"하단 footer 표시 여부"},dimmed:{control:"boolean",description:"배경 딤 처리"},isLooading:{control:"boolean",description:"로딩 상태"}},args:{title:"시트 제목",description:"서브 타이틀",fullScreen:!1,footer:!0,dimmed:!1,isLooading:!1}},n=`
  <div class="list-layout--grid">
    <UiSkeleton class="h-4 w-1/4 col-span-full" />
    <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
    <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
    <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
    <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
    <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
    <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
  </div>
`,t={name:"1단 — 기본 시트",render:e=>({components:{SheetBase:s,Button:l},setup(){return{args:e}},template:`
      <SheetBase :open="true" v-bind="args">
        <template #body>${n}</template>
        <template #footer><Button>저장</Button></template>
      </SheetBase>
    `})},a={name:"2단 — 넓은 시트 (≥960px)",render:e=>({components:{SheetBase:s,Button:l},setup(){return{args:e}},template:`
      <SheetBase :open="true" v-bind="args" class="!min-w-[60rem] [container-type:inline-size]">
        <template #body>${n}</template>
        <template #footer><Button>저장</Button></template>
      </SheetBase>
    `}),args:{title:"2단 시트"}},o={name:"3단 — 전체화면 (≥1440px)",render:e=>({components:{SheetBase:s,Button:l},setup(){return{args:e}},template:`
      <SheetBase :open="true" v-bind="args" class="full-size">
        <template #body>${n}</template>
        <template #footer><Button>저장</Button></template>
      </SheetBase>
    `}),args:{title:"3단 시트",fullScreen:!0},parameters:{viewport:{defaultViewport:"large"}}};var r,p,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: '1단 — 기본 시트',
  render: args => ({
    components: {
      SheetBase,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <SheetBase :open="true" v-bind="args">
        <template #body>\${sampleBody}</template>
        <template #footer><Button>저장</Button></template>
      </SheetBase>
    \`
  })
}`,...(i=(p=t.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var c,m,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '2단 — 넓은 시트 (≥960px)',
  render: args => ({
    components: {
      SheetBase,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <SheetBase :open="true" v-bind="args" class="!min-w-[60rem] [container-type:inline-size]">
        <template #body>\${sampleBody}</template>
        <template #footer><Button>저장</Button></template>
      </SheetBase>
    \`
  }),
  args: {
    title: '2단 시트'
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,f,S;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '3단 — 전체화면 (≥1440px)',
  render: args => ({
    components: {
      SheetBase,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <SheetBase :open="true" v-bind="args" class="full-size">
        <template #body>\${sampleBody}</template>
        <template #footer><Button>저장</Button></template>
      </SheetBase>
    \`
  }),
  args: {
    title: '3단 시트',
    fullScreen: true
  },
  parameters: {
    viewport: {
      defaultViewport: 'large'
    }
  }
}`,...(S=(f=o.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const x=["Single","Double","Triple"];export{a as Double,t as Single,o as Triple,x as __namedExportsOrder,v as default};
