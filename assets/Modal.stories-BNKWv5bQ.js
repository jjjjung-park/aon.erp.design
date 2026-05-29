import{_ as a}from"./ModalBase-CwcyudOa.js";import{x as n}from"./iframe-DooHc6g7.js";import"./preload-helper-FI0fEOG2.js";const d={title:"오버레이/Modal",component:a,parameters:{layout:"fullscreen"},argTypes:{title:{control:"text",description:"모달 제목"},fullScreen:{control:"boolean",description:"전체화면 여부"},footer:{control:"boolean",description:"하단 footer 표시 여부"},isLoading:{control:"boolean",description:"로딩 상태"}},args:{title:"모달 제목",fullScreen:!1,footer:!0,isLoading:!1}},e={name:"ModalBase — 인터랙티브",render:s=>({components:{ModalBase:a,Button:n},setup(){return{args:s}},template:`
      <ModalBase :open="true" v-bind="args">
        <template #body>
          <div class="flex flex-col gap-3 py-2">
            <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
            <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
            <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
          </div>
        </template>
        <template #footer>
          <Button>확인</Button>
        </template>
      </ModalBase>
    `})};var l,o,t;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'ModalBase — 인터랙티브',
  render: args => ({
    components: {
      ModalBase,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <ModalBase :open="true" v-bind="args">
        <template #body>
          <div class="flex flex-col gap-3 py-2">
            <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
            <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
            <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
          </div>
        </template>
        <template #footer>
          <Button>확인</Button>
        </template>
      </ModalBase>
    \`
  })
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,d as default};
