import{z as p,O as T,Q as s,V as d,W as g}from"./iframe-CGZVOpYz.js";import"./preload-helper-FI0fEOG2.js";const m={title:"오버레이/Tooltip",tags:["autodocs"],argTypes:{variant:{control:"select",options:["light","dark","primary"]}}},o={name:"모든 Variant",render:()=>({components:{Tooltip:g,TooltipContent:d,TooltipProvider:s,TooltipTrigger:T,Button:p},template:`
      <TooltipProvider>
        <div class="flex gap-6 items-center p-10">
          <Tooltip :default-open="true">
            <TooltipTrigger as-child>
              <Button variant="outline">Light</Button>
            </TooltipTrigger>
            <TooltipContent variant="light">
              라이트 툴팁입니다.
            </TooltipContent>
          </Tooltip>

          <Tooltip :default-open="true">
            <TooltipTrigger as-child>
              <Button variant="outline">Dark</Button>
            </TooltipTrigger>
            <TooltipContent variant="dark">
              다크 툴팁입니다.
            </TooltipContent>
          </Tooltip>

          <Tooltip :default-open="true">
            <TooltipTrigger as-child>
              <Button variant="default">Primary</Button>
            </TooltipTrigger>
            <TooltipContent variant="primary">
              프라이머리 툴팁입니다.
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    `})},t={name:"인터랙티브",render:()=>({components:{Tooltip:g,TooltipContent:d,TooltipProvider:s,TooltipTrigger:T,Button:p},template:`
      <TooltipProvider>
        <div class="flex gap-4 p-10">
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline">호버해보세요</Button>
            </TooltipTrigger>
            <TooltipContent>
              툴팁 내용이 여기 표시됩니다.
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    `})};var n,i,r;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '모든 Variant',
  render: () => ({
    components: {
      Tooltip,
      TooltipContent,
      TooltipProvider,
      TooltipTrigger,
      Button
    },
    template: \`
      <TooltipProvider>
        <div class="flex gap-6 items-center p-10">
          <Tooltip :default-open="true">
            <TooltipTrigger as-child>
              <Button variant="outline">Light</Button>
            </TooltipTrigger>
            <TooltipContent variant="light">
              라이트 툴팁입니다.
            </TooltipContent>
          </Tooltip>

          <Tooltip :default-open="true">
            <TooltipTrigger as-child>
              <Button variant="outline">Dark</Button>
            </TooltipTrigger>
            <TooltipContent variant="dark">
              다크 툴팁입니다.
            </TooltipContent>
          </Tooltip>

          <Tooltip :default-open="true">
            <TooltipTrigger as-child>
              <Button variant="default">Primary</Button>
            </TooltipTrigger>
            <TooltipContent variant="primary">
              프라이머리 툴팁입니다.
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    \`
  })
}`,...(r=(i=o.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};var e,l,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  name: '인터랙티브',
  render: () => ({
    components: {
      Tooltip,
      TooltipContent,
      TooltipProvider,
      TooltipTrigger,
      Button
    },
    template: \`
      <TooltipProvider>
        <div class="flex gap-4 p-10">
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline">호버해보세요</Button>
            </TooltipTrigger>
            <TooltipContent>
              툴팁 내용이 여기 표시됩니다.
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    \`
  })
}`,...(a=(l=t.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const v=["AllVariants","Interactive"];export{o as AllVariants,t as Interactive,v as __namedExportsOrder,m as default};
