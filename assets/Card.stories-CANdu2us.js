const r={title:"데이터 표시/Card",tags:["autodocs"],parameters:{layout:"centered"}},e={name:"Card — 기본",render:()=>({template:`
      <UiCard class="w-80">
        <UiCardHeader>
          <UiCardTitle>카드 제목</UiCardTitle>
          <UiCardDescription>카드 설명 텍스트입니다.</UiCardDescription>
        </UiCardHeader>
        <UiCardContent>
          <div class="flex flex-col gap-2">
            <UiSkeleton class="h-4 w-full" />
            <UiSkeleton class="h-4 w-3/4" />
            <UiSkeleton class="h-4 w-1/2" />
          </div>
        </UiCardContent>
        <UiCardFooter class="flex justify-end gap-2">
          <UiButton variant="outline">취소</UiButton>
          <UiButton>확인</UiButton>
        </UiCardFooter>
      </UiCard>
    `})};var a,t,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Card — 기본',
  render: () => ({
    template: \`
      <UiCard class="w-80">
        <UiCardHeader>
          <UiCardTitle>카드 제목</UiCardTitle>
          <UiCardDescription>카드 설명 텍스트입니다.</UiCardDescription>
        </UiCardHeader>
        <UiCardContent>
          <div class="flex flex-col gap-2">
            <UiSkeleton class="h-4 w-full" />
            <UiSkeleton class="h-4 w-3/4" />
            <UiSkeleton class="h-4 w-1/2" />
          </div>
        </UiCardContent>
        <UiCardFooter class="flex justify-end gap-2">
          <UiButton variant="outline">취소</UiButton>
          <UiButton>확인</UiButton>
        </UiCardFooter>
      </UiCard>
    \`
  })
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const i=["Default"];export{e as Default,i as __namedExportsOrder,r as default};
