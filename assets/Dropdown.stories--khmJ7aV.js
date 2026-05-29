import{x as r}from"./iframe-DooHc6g7.js";import"./preload-helper-FI0fEOG2.js";const m={title:"액션/Dropdown",tags:["autodocs"],parameters:{layout:"centered"}},n={name:"Dropdown — 기본",render:()=>({components:{Button:r},template:`
      <UiDropdownMenu>
        <UiDropdownMenuTrigger as-child>
          <Button variant="outline">메뉴 열기 <LucideChevronDown class="ml-1 size-4" /></Button>
        </UiDropdownMenuTrigger>
        <UiDropdownMenuContent class="w-40">
          <UiDropdownMenuItem>항목 1</UiDropdownMenuItem>
          <UiDropdownMenuItem>항목 2</UiDropdownMenuItem>
          <UiDropdownMenuSeparator />
          <UiDropdownMenuItem>항목 3</UiDropdownMenuItem>
        </UiDropdownMenuContent>
      </UiDropdownMenu>
    `})},e={name:"Dropdown — 그룹 라벨",render:()=>({components:{Button:r},template:`
      <UiDropdownMenu>
        <UiDropdownMenuTrigger as-child>
          <Button variant="outline">그룹 메뉴 <LucideChevronDown class="ml-1 size-4" /></Button>
        </UiDropdownMenuTrigger>
        <UiDropdownMenuContent class="w-48">
          <UiDropdownMenuLabel>계정</UiDropdownMenuLabel>
          <UiDropdownMenuSeparator />
          <UiDropdownMenuGroup>
            <UiDropdownMenuItem><LucideUser class="mr-2 size-4" />프로필</UiDropdownMenuItem>
            <UiDropdownMenuItem><LucideSettings class="mr-2 size-4" />설정</UiDropdownMenuItem>
          </UiDropdownMenuGroup>
          <UiDropdownMenuSeparator />
          <UiDropdownMenuItem class="text-destructive"><LucideLogOut class="mr-2 size-4" />로그아웃</UiDropdownMenuItem>
        </UiDropdownMenuContent>
      </UiDropdownMenu>
    `})},o={name:"Dropdown — 아이콘 트리거",render:()=>({components:{Button:r},template:`
      <UiDropdownMenu>
        <UiDropdownMenuTrigger as-child>
          <Button variant="ghost" size="icon"><LucideEllipsis /></Button>
        </UiDropdownMenuTrigger>
        <UiDropdownMenuContent class="w-36">
          <UiDropdownMenuItem><LucidePencil class="mr-2 size-4" />수정</UiDropdownMenuItem>
          <UiDropdownMenuItem><LucideCopy class="mr-2 size-4" />복사</UiDropdownMenuItem>
          <UiDropdownMenuSeparator />
          <UiDropdownMenuItem class="text-destructive"><LucideTrash2 class="mr-2 size-4" />삭제</UiDropdownMenuItem>
        </UiDropdownMenuContent>
      </UiDropdownMenu>
    `})};var t,i,u;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Dropdown — 기본',
  render: () => ({
    components: {
      Button
    },
    template: \`
      <UiDropdownMenu>
        <UiDropdownMenuTrigger as-child>
          <Button variant="outline">메뉴 열기 <LucideChevronDown class="ml-1 size-4" /></Button>
        </UiDropdownMenuTrigger>
        <UiDropdownMenuContent class="w-40">
          <UiDropdownMenuItem>항목 1</UiDropdownMenuItem>
          <UiDropdownMenuItem>항목 2</UiDropdownMenuItem>
          <UiDropdownMenuSeparator />
          <UiDropdownMenuItem>항목 3</UiDropdownMenuItem>
        </UiDropdownMenuContent>
      </UiDropdownMenu>
    \`
  })
}`,...(u=(i=n.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var d,p,s;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Dropdown — 그룹 라벨',
  render: () => ({
    components: {
      Button
    },
    template: \`
      <UiDropdownMenu>
        <UiDropdownMenuTrigger as-child>
          <Button variant="outline">그룹 메뉴 <LucideChevronDown class="ml-1 size-4" /></Button>
        </UiDropdownMenuTrigger>
        <UiDropdownMenuContent class="w-48">
          <UiDropdownMenuLabel>계정</UiDropdownMenuLabel>
          <UiDropdownMenuSeparator />
          <UiDropdownMenuGroup>
            <UiDropdownMenuItem><LucideUser class="mr-2 size-4" />프로필</UiDropdownMenuItem>
            <UiDropdownMenuItem><LucideSettings class="mr-2 size-4" />설정</UiDropdownMenuItem>
          </UiDropdownMenuGroup>
          <UiDropdownMenuSeparator />
          <UiDropdownMenuItem class="text-destructive"><LucideLogOut class="mr-2 size-4" />로그아웃</UiDropdownMenuItem>
        </UiDropdownMenuContent>
      </UiDropdownMenu>
    \`
  })
}`,...(s=(p=e.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};var a,w,D;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Dropdown — 아이콘 트리거',
  render: () => ({
    components: {
      Button
    },
    template: \`
      <UiDropdownMenu>
        <UiDropdownMenuTrigger as-child>
          <Button variant="ghost" size="icon"><LucideEllipsis /></Button>
        </UiDropdownMenuTrigger>
        <UiDropdownMenuContent class="w-36">
          <UiDropdownMenuItem><LucidePencil class="mr-2 size-4" />수정</UiDropdownMenuItem>
          <UiDropdownMenuItem><LucideCopy class="mr-2 size-4" />복사</UiDropdownMenuItem>
          <UiDropdownMenuSeparator />
          <UiDropdownMenuItem class="text-destructive"><LucideTrash2 class="mr-2 size-4" />삭제</UiDropdownMenuItem>
        </UiDropdownMenuContent>
      </UiDropdownMenu>
    \`
  })
}`,...(D=(w=o.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const M=["Default","WithLabel","IconTrigger"];export{n as Default,o as IconTrigger,e as WithLabel,M as __namedExportsOrder,m as default};
