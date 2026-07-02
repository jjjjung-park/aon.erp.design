const B={title:"UI 패턴/ButtonSet",tags:["autodocs"],parameters:{layout:"centered"}},t={name:"ButtonSet — 폼 액션",render:()=>({template:`
      <div class="flex flex-col gap-4 w-96">
        <!-- read: 닫기 | 확인 -->
        <div class="flex w-full justify-between">
          <UiButton variant="outline">닫기</UiButton>
          <UiButton>확인</UiButton>
        </div>

        <!-- create: 닫기 | 저장 -->
        <div class="flex w-full justify-between">
          <UiButton variant="outline">닫기</UiButton>
          <UiButton>저장</UiButton>
        </div>

        <!-- delete: 닫기 | 삭제 -->
        <div class="flex w-full justify-between">
          <UiButton variant="outline">닫기</UiButton>
          <UiButton variant="destructive">삭제</UiButton>
        </div>

        <!-- update: 닫기 | 삭제 + 초기화 + 저장 -->
        <div class="flex w-full justify-between">
          <UiButton variant="outline">닫기</UiButton>
          <div class="flex gap-2">
            <UiButton variant="destructive">삭제</UiButton>
            <UiButton variant="outline">초기화</UiButton>
            <UiButton>저장</UiButton>
          </div>
        </div>
      </div>
    `})},n={name:"ButtonSet — 아이콘",render:()=>({template:`
      <div class="flex items-center gap-1">
        <UiButton variant="ghost" size="icon-sm"><LucideSearch /></UiButton>
        <UiSeparator orientation="vertical" class="h-3 bg-border"/>
        <UiButton variant="ghost" size="icon-sm"><LucideFolderDown /></UiButton>
        <UiSeparator orientation="vertical" class="h-3 bg-border"/>
        <UiButton variant="ghost" size="icon-sm"><LucideSettings /></UiButton>
      </div>
    `})},e={name:"ButtonSet — 검색/필터",render:()=>({template:`
      <div class="flex items-center gap-2">
        <UiButton variant="outline" size="sm">초기화</UiButton>
        <UiButton variant="secondary" size="sm">필터 저장</UiButton>
        <UiButton size="sm">검색</UiButton>
      </div>
    `})};var i,o,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'ButtonSet — 폼 액션',
  render: () => ({
    template: \`
      <div class="flex flex-col gap-4 w-96">
        <!-- read: 닫기 | 확인 -->
        <div class="flex w-full justify-between">
          <UiButton variant="outline">닫기</UiButton>
          <UiButton>확인</UiButton>
        </div>

        <!-- create: 닫기 | 저장 -->
        <div class="flex w-full justify-between">
          <UiButton variant="outline">닫기</UiButton>
          <UiButton>저장</UiButton>
        </div>

        <!-- delete: 닫기 | 삭제 -->
        <div class="flex w-full justify-between">
          <UiButton variant="outline">닫기</UiButton>
          <UiButton variant="destructive">삭제</UiButton>
        </div>

        <!-- update: 닫기 | 삭제 + 초기화 + 저장 -->
        <div class="flex w-full justify-between">
          <UiButton variant="outline">닫기</UiButton>
          <div class="flex gap-2">
            <UiButton variant="destructive">삭제</UiButton>
            <UiButton variant="outline">초기화</UiButton>
            <UiButton>저장</UiButton>
          </div>
        </div>
      </div>
    \`
  })
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var r,s,u;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'ButtonSet — 아이콘',
  render: () => ({
    template: \`
      <div class="flex items-center gap-1">
        <UiButton variant="ghost" size="icon-sm"><LucideSearch /></UiButton>
        <UiSeparator orientation="vertical" class="h-3 bg-border"/>
        <UiButton variant="ghost" size="icon-sm"><LucideFolderDown /></UiButton>
        <UiSeparator orientation="vertical" class="h-3 bg-border"/>
        <UiButton variant="ghost" size="icon-sm"><LucideSettings /></UiButton>
      </div>
    \`
  })
}`,...(u=(s=n.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var l,c,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'ButtonSet — 검색/필터',
  render: () => ({
    template: \`
      <div class="flex items-center gap-2">
        <UiButton variant="outline" size="sm">초기화</UiButton>
        <UiButton variant="secondary" size="sm">필터 저장</UiButton>
        <UiButton size="sm">검색</UiButton>
      </div>
    \`
  })
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const U=["FormActions","IconGroup","SearchFilter"];export{t as FormActions,n as IconGroup,e as SearchFilter,U as __namedExportsOrder,B as default};
