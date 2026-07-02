const t={title:"UI 패턴/Accordion",tags:["autodocs"],parameters:{layout:"padded"}},c={name:"Accordion — 기본",render:()=>({template:`
      <UiAccordion type="single" collapsible class="w-full">
        <UiAccordionItem value="item-1">
          <UiAccordionTrigger class="px-4 py-3">항목 1</UiAccordionTrigger>
          <UiAccordionContent class="px-4 pb-4">
            <div class="flex flex-col gap-2">
              <UiSkeleton class="h-3 w-3/4" />
              <UiSkeleton class="h-3 w-full" />
              <UiSkeleton class="h-3 w-1/2" />
            </div>
          </UiAccordionContent>
        </UiAccordionItem>
        <UiAccordionItem value="item-2">
          <UiAccordionTrigger class="px-4 py-3">항목 2</UiAccordionTrigger>
          <UiAccordionContent class="px-4 pb-4">
            <div class="flex flex-col gap-2">
              <UiSkeleton class="h-3 w-3/4" />
              <UiSkeleton class="h-3 w-full" />
              <UiSkeleton class="h-3 w-1/2" />
            </div>
          </UiAccordionContent>
        </UiAccordionItem>
        <UiAccordionItem value="item-3">
          <UiAccordionTrigger class="px-4 py-3">항목 3</UiAccordionTrigger>
          <UiAccordionContent class="px-4 pb-4">
            <div class="flex flex-col gap-2">
              <UiSkeleton class="h-3 w-3/4" />
              <UiSkeleton class="h-3 w-full" />
              <UiSkeleton class="h-3 w-1/2" />
            </div>
          </UiAccordionContent>
        </UiAccordionItem>
      </UiAccordion>
    `})},i={name:"Accordion — 다중 열기",render:()=>({template:`
      <UiAccordion type="multiple" class="w-full">
        <UiAccordionItem value="item-1">
          <UiAccordionTrigger class="px-4 py-3">항목 1</UiAccordionTrigger>
          <UiAccordionContent class="px-4 pb-4">
            <div class="flex flex-col gap-2">
              <UiSkeleton class="h-3 w-3/4" />
              <UiSkeleton class="h-3 w-full" />
            </div>
          </UiAccordionContent>
        </UiAccordionItem>
        <UiAccordionItem value="item-2">
          <UiAccordionTrigger class="px-4 py-3">항목 2</UiAccordionTrigger>
          <UiAccordionContent class="px-4 pb-4">
            <div class="flex flex-col gap-2">
              <UiSkeleton class="h-3 w-3/4" />
              <UiSkeleton class="h-3 w-full" />
            </div>
          </UiAccordionContent>
        </UiAccordionItem>
        <UiAccordionItem value="item-3">
          <UiAccordionTrigger class="px-4 py-3">항목 3</UiAccordionTrigger>
          <UiAccordionContent class="px-4 pb-4">
            <div class="flex flex-col gap-2">
              <UiSkeleton class="h-3 w-3/4" />
              <UiSkeleton class="h-3 w-full" />
            </div>
          </UiAccordionContent>
        </UiAccordionItem>
      </UiAccordion>
    `})};var o,n,e;c.parameters={...c.parameters,docs:{...(o=c.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Accordion — 기본',
  render: () => ({
    template: \`
      <UiAccordion type="single" collapsible class="w-full">
        <UiAccordionItem value="item-1">
          <UiAccordionTrigger class="px-4 py-3">항목 1</UiAccordionTrigger>
          <UiAccordionContent class="px-4 pb-4">
            <div class="flex flex-col gap-2">
              <UiSkeleton class="h-3 w-3/4" />
              <UiSkeleton class="h-3 w-full" />
              <UiSkeleton class="h-3 w-1/2" />
            </div>
          </UiAccordionContent>
        </UiAccordionItem>
        <UiAccordionItem value="item-2">
          <UiAccordionTrigger class="px-4 py-3">항목 2</UiAccordionTrigger>
          <UiAccordionContent class="px-4 pb-4">
            <div class="flex flex-col gap-2">
              <UiSkeleton class="h-3 w-3/4" />
              <UiSkeleton class="h-3 w-full" />
              <UiSkeleton class="h-3 w-1/2" />
            </div>
          </UiAccordionContent>
        </UiAccordionItem>
        <UiAccordionItem value="item-3">
          <UiAccordionTrigger class="px-4 py-3">항목 3</UiAccordionTrigger>
          <UiAccordionContent class="px-4 pb-4">
            <div class="flex flex-col gap-2">
              <UiSkeleton class="h-3 w-3/4" />
              <UiSkeleton class="h-3 w-full" />
              <UiSkeleton class="h-3 w-1/2" />
            </div>
          </UiAccordionContent>
        </UiAccordionItem>
      </UiAccordion>
    \`
  })
}`,...(e=(n=c.parameters)==null?void 0:n.docs)==null?void 0:e.source}}};var l,r,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Accordion — 다중 열기',
  render: () => ({
    template: \`
      <UiAccordion type="multiple" class="w-full">
        <UiAccordionItem value="item-1">
          <UiAccordionTrigger class="px-4 py-3">항목 1</UiAccordionTrigger>
          <UiAccordionContent class="px-4 pb-4">
            <div class="flex flex-col gap-2">
              <UiSkeleton class="h-3 w-3/4" />
              <UiSkeleton class="h-3 w-full" />
            </div>
          </UiAccordionContent>
        </UiAccordionItem>
        <UiAccordionItem value="item-2">
          <UiAccordionTrigger class="px-4 py-3">항목 2</UiAccordionTrigger>
          <UiAccordionContent class="px-4 pb-4">
            <div class="flex flex-col gap-2">
              <UiSkeleton class="h-3 w-3/4" />
              <UiSkeleton class="h-3 w-full" />
            </div>
          </UiAccordionContent>
        </UiAccordionItem>
        <UiAccordionItem value="item-3">
          <UiAccordionTrigger class="px-4 py-3">항목 3</UiAccordionTrigger>
          <UiAccordionContent class="px-4 pb-4">
            <div class="flex flex-col gap-2">
              <UiSkeleton class="h-3 w-3/4" />
              <UiSkeleton class="h-3 w-full" />
            </div>
          </UiAccordionContent>
        </UiAccordionItem>
      </UiAccordion>
    \`
  })
}`,...(s=(r=i.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const a=["Default","Multiple"];export{c as Default,i as Multiple,a as __namedExportsOrder,t as default};
