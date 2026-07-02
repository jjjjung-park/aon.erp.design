const d={title:"레이아웃/Resizable",tags:["autodocs"],parameters:{layout:"padded"}},e={name:"Resizable — 좌우 분할",render:()=>({template:`
      <UiResizablePanelGroup direction="horizontal" class="w-full h-80 rounded-md border">
        <UiResizablePanel :default-size="50">
          <div class="flex h-full items-center justify-center p-6">
            <UiSkeleton class="h-4 w-3/4" />
          </div>
        </UiResizablePanel>
        <UiResizableHandle with-handle />
        <UiResizablePanel :default-size="50">
          <div class="flex h-full items-center justify-center p-6">
            <UiSkeleton class="h-4 w-3/4" />
          </div>
        </UiResizablePanel>
      </UiResizablePanelGroup>
    `})},l={name:"Resizable — 상하 분할",render:()=>({template:`
      <div style="height:400px">
        <UiResizablePanelGroup direction="vertical" class="w-full h-[600px] rounded-md border">
          <UiResizablePanel :default-size="50">
            <div class="flex h-full items-center justify-center p-6">
              <UiSkeleton class="h-4 w-3/4" />
            </div>
          </UiResizablePanel>
          <UiResizableHandle with-handle />
          <UiResizablePanel :default-size="50">
            <div class="flex h-full items-center justify-center p-6">
              <UiSkeleton class="h-4 w-3/4" />
            </div>
          </UiResizablePanel>
        </UiResizablePanelGroup>
      </div>
    `})};var i,a,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Resizable — 좌우 분할',
  render: () => ({
    template: \`
      <UiResizablePanelGroup direction="horizontal" class="w-full h-80 rounded-md border">
        <UiResizablePanel :default-size="50">
          <div class="flex h-full items-center justify-center p-6">
            <UiSkeleton class="h-4 w-3/4" />
          </div>
        </UiResizablePanel>
        <UiResizableHandle with-handle />
        <UiResizablePanel :default-size="50">
          <div class="flex h-full items-center justify-center p-6">
            <UiSkeleton class="h-4 w-3/4" />
          </div>
        </UiResizablePanel>
      </UiResizablePanelGroup>
    \`
  })
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var n,t,r;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Resizable — 상하 분할',
  render: () => ({
    template: \`
      <div style="height:400px">
        <UiResizablePanelGroup direction="vertical" class="w-full h-[600px] rounded-md border">
          <UiResizablePanel :default-size="50">
            <div class="flex h-full items-center justify-center p-6">
              <UiSkeleton class="h-4 w-3/4" />
            </div>
          </UiResizablePanel>
          <UiResizableHandle with-handle />
          <UiResizablePanel :default-size="50">
            <div class="flex h-full items-center justify-center p-6">
              <UiSkeleton class="h-4 w-3/4" />
            </div>
          </UiResizablePanel>
        </UiResizablePanelGroup>
      </div>
    \`
  })
}`,...(r=(t=l.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const c=["Default","Vertical"];export{e as Default,l as Vertical,c as __namedExportsOrder,d as default};
