import{_ as m}from"./PageSearch-CWXdKZYZ.js";import"./iframe-RcI2tPm4.js";import"./preload-helper-FI0fEOG2.js";import"./ModalBase-zATy2rHv.js";const A={title:"UI 패턴/Accordion",tags:["autodocs"],parameters:{layout:"padded"}},e={name:"검색",render:()=>({components:{PageSearch:m},template:`
      <PageSearch>
        <template #search-body>
          <div class="flex flex-wrap flex-row gap-2">
            <UiSkeleton class="h-10 w-1/5" v-for="n in 11" :key="n" />
          </div>
        </template>
      </PageSearch>`})},o={name:"시트 아코디언",render:()=>({template:`
      <UiAccordion class="w-full border-1 border-border rounded-md" collapsible type="single" default-value="style">
        <UiAccordionItem value="style">
          <UiAccordionTrigger class="text-sm px-5 py-3">아코디언 타이틀</UiAccordionTrigger>
          <UiAccordionContent class="list-layout--grid px-5 pb-3">
            <UiSkeleton class="h-4 w-full" v-for="n in 4" :key="n" />
          </UiAccordionContent>
        </UiAccordionItem>
      </UiAccordion>
    `})},r={name:"모달 아코디언",render:()=>({template:`
      <UiAccordion class="w-full rounded-sm bg-surface-muted px-3 py-2" collapsible type="single" :default-value="'sku1'">
        <UiAccordionItem value="sku1" class="grid gap-3" >
          <UiAccordionTrigger class="caption text-muted" icon-class="size-4">
            <p class="text-default flex items-center  gap-2">
              <span>아코디언 타이틀</span>
              <UiSeparator orientation="vertical" class="h-4 bg-border"/>
              <span>5건</span>
            </p>
          </UiAccordionTrigger>
          <UiAccordionContent>
            <div class="flex flex-col gap-2 pb-2">
              <UiSkeleton class="h-4 w-full" v-for="n in 4" :key="n" />
            </div>
          </UiAccordionContent>
        </UiAccordionItem>
      </UiAccordion>
    `})};var n,c,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '검색',
  render: () => ({
    components: {
      PageSearch
    },
    template: \`
      <PageSearch>
        <template #search-body>
          <div class="flex flex-wrap flex-row gap-2">
            <UiSkeleton class="h-10 w-1/5" v-for="n in 11" :key="n" />
          </div>
        </template>
      </PageSearch>\`
  })
}`,...(a=(c=e.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};var i,s,t;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '시트 아코디언',
  render: () => ({
    template: \`
      <UiAccordion class="w-full border-1 border-border rounded-md" collapsible type="single" default-value="style">
        <UiAccordionItem value="style">
          <UiAccordionTrigger class="text-sm px-5 py-3">아코디언 타이틀</UiAccordionTrigger>
          <UiAccordionContent class="list-layout--grid px-5 pb-3">
            <UiSkeleton class="h-4 w-full" v-for="n in 4" :key="n" />
          </UiAccordionContent>
        </UiAccordionItem>
      </UiAccordion>
    \`
  })
}`,...(t=(s=o.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '모달 아코디언',
  render: () => ({
    template: \`
      <UiAccordion class="w-full rounded-sm bg-surface-muted px-3 py-2" collapsible type="single" :default-value="'sku1'">
        <UiAccordionItem value="sku1" class="grid gap-3" >
          <UiAccordionTrigger class="caption text-muted" icon-class="size-4">
            <p class="text-default flex items-center  gap-2">
              <span>아코디언 타이틀</span>
              <UiSeparator orientation="vertical" class="h-4 bg-border"/>
              <span>5건</span>
            </p>
          </UiAccordionTrigger>
          <UiAccordionContent>
            <div class="flex flex-col gap-2 pb-2">
              <UiSkeleton class="h-4 w-full" v-for="n in 4" :key="n" />
            </div>
          </UiAccordionContent>
        </UiAccordionItem>
      </UiAccordion>
    \`
  })
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const x=["Search","SheetAccordion","ModalAccordion"];export{r as ModalAccordion,e as Search,o as SheetAccordion,x as __namedExportsOrder,A as default};
