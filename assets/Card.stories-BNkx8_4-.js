const r={title:"UI 패턴/Card",tags:["autodocs","unused"],parameters:{layout:"centered"}},t={name:"Card — 사이즈",render:()=>({template:`
      <div class="flex flex-wrap gap-4 items-start">
        <!-- sm -->
        <UiCard size="sm">
          <UiCardHeader>
            <UiCardTitle>소형 카드</UiCardTitle>
            <UiCardDescription>size sm</UiCardDescription>
          </UiCardHeader>
          <UiCardContent class="py-2">
            <p class="text-muted text-xs">내용이 들어가는 영역입니다.</p>
          </UiCardContent>
          <UiCardFooter class="flex justify-end">
            <UiButton size="sm">확인</UiButton>
          </UiCardFooter>
        </UiCard>

        <!-- md -->
        <UiCard size="md">
          <UiCardHeader>
            <UiCardTitle>중형 카드</UiCardTitle>
            <UiCardDescription>size md</UiCardDescription>
          </UiCardHeader>
          <UiCardContent class="py-2">
            <p class="text-muted text-xs">내용이 들어가는 영역입니다.</p>
          </UiCardContent>
          <UiCardFooter class="flex justify-end gap-2">
            <UiButton variant="outline">취소</UiButton>
            <UiButton>확인</UiButton>
          </UiCardFooter>
        </UiCard>

        <!-- lg -->
        <UiCard size="lg">
          <UiCardHeader>
            <UiCardTitle>대형 카드</UiCardTitle>
            <UiCardDescription>size lg</UiCardDescription>
          </UiCardHeader>
          <UiCardContent class="py-2">
            <p class="text-muted text-xs">내용이 들어가는 영역입니다.</p>
          </UiCardContent>
          <UiCardFooter class="flex justify-end gap-2">
            <UiButton variant="outline">취소</UiButton>
            <UiButton>확인</UiButton>
          </UiCardFooter>
        </UiCard>
      </div>
    `})};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Card — 사이즈',
  render: () => ({
    template: \`
      <div class="flex flex-wrap gap-4 items-start">
        <!-- sm -->
        <UiCard size="sm">
          <UiCardHeader>
            <UiCardTitle>소형 카드</UiCardTitle>
            <UiCardDescription>size sm</UiCardDescription>
          </UiCardHeader>
          <UiCardContent class="py-2">
            <p class="text-muted text-xs">내용이 들어가는 영역입니다.</p>
          </UiCardContent>
          <UiCardFooter class="flex justify-end">
            <UiButton size="sm">확인</UiButton>
          </UiCardFooter>
        </UiCard>

        <!-- md -->
        <UiCard size="md">
          <UiCardHeader>
            <UiCardTitle>중형 카드</UiCardTitle>
            <UiCardDescription>size md</UiCardDescription>
          </UiCardHeader>
          <UiCardContent class="py-2">
            <p class="text-muted text-xs">내용이 들어가는 영역입니다.</p>
          </UiCardContent>
          <UiCardFooter class="flex justify-end gap-2">
            <UiButton variant="outline">취소</UiButton>
            <UiButton>확인</UiButton>
          </UiCardFooter>
        </UiCard>

        <!-- lg -->
        <UiCard size="lg">
          <UiCardHeader>
            <UiCardTitle>대형 카드</UiCardTitle>
            <UiCardDescription>size lg</UiCardDescription>
          </UiCardHeader>
          <UiCardContent class="py-2">
            <p class="text-muted text-xs">내용이 들어가는 영역입니다.</p>
          </UiCardContent>
          <UiCardFooter class="flex justify-end gap-2">
            <UiButton variant="outline">취소</UiButton>
            <UiButton>확인</UiButton>
          </UiCardFooter>
        </UiCard>
      </div>
    \`
  })
}`,...(a=(e=t.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const n=["Sizes"];export{t as Sizes,n as __namedExportsOrder,r as default};
