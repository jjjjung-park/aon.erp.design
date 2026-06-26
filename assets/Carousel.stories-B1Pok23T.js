const s={title:"데이터 표시/Carousel",tags:["autodocs"],parameters:{layout:"centered"}},e={name:"Carousel — 기본",render:()=>({template:`
      <UiCarousel class="w-72">
        <UiCarouselContent>
          <UiCarouselItem v-for="i in 5" :key="i">
            <UiCard>
              <UiCardContent class="flex items-center justify-center h-40">
                <span class="text-3xl font-bold text-muted">{{ i }}</span>
              </UiCardContent>
            </UiCard>
          </UiCarouselItem>
        </UiCarouselContent>
        <UiCarouselPrevious />
        <UiCarouselNext />
      </UiCarousel>
    `})};var t,a,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Carousel — 기본',
  render: () => ({
    template: \`
      <UiCarousel class="w-72">
        <UiCarouselContent>
          <UiCarouselItem v-for="i in 5" :key="i">
            <UiCard>
              <UiCardContent class="flex items-center justify-center h-40">
                <span class="text-3xl font-bold text-muted">{{ i }}</span>
              </UiCardContent>
            </UiCard>
          </UiCarouselItem>
        </UiCarouselContent>
        <UiCarouselPrevious />
        <UiCarouselNext />
      </UiCarousel>
    \`
  })
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const n=["Default"];export{e as Default,n as __namedExportsOrder,s as default};
