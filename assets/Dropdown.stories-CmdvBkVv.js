import{z as u}from"./iframe-4xPXPRuq.js";import{a as d}from"./avatar-default-8NlzZuuD.js";import"./preload-helper-FI0fEOG2.js";const D={title:"UI 패턴/Dropdown",tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"radio",options:["sm","default","lg"],description:"트리거 버튼 사이즈"},withLabel:{control:"boolean",description:"그룹 라벨 표시"},iconTrigger:{control:"boolean",description:"아이콘 버튼 트리거"}},args:{size:"default",withLabel:!1,iconTrigger:!1}},e={name:"Dropdown — 인터랙티브",render:p=>({components:{Button:u},setup(){return{args:p}},template:`
      <UiDropdownMenu>
        <UiDropdownMenuTrigger v-if="args.iconTrigger" as-child>
          <Button variant="ghost" size="icon"><LucideEllipsis /></Button>
        </UiDropdownMenuTrigger>
        <UiDropdownMenuTrigger v-else as-child>
          <Button variant="outline" :size="args.size">메뉴 열기 <LucideChevronDown class="ml-1" /></Button>
        </UiDropdownMenuTrigger>
        <UiDropdownMenuContent class="w-48">
          <template v-if="args.withLabel">
            <UiDropdownMenuLabel>계정</UiDropdownMenuLabel>
            <UiDropdownMenuSeparator />
            <UiDropdownMenuGroup>
              <UiDropdownMenuItem><LucideUser class="mr-2 size-4" />프로필</UiDropdownMenuItem>
              <UiDropdownMenuItem><LucideSettings class="mr-2 size-4" />설정</UiDropdownMenuItem>
            </UiDropdownMenuGroup>
            <UiDropdownMenuSeparator />
            <UiDropdownMenuItem class="text-destructive"><LucideLogOut class="mr-2 size-4" />로그아웃</UiDropdownMenuItem>
          </template>
          <template v-else>
            <UiDropdownMenuItem>항목 1</UiDropdownMenuItem>
            <UiDropdownMenuItem>항목 2</UiDropdownMenuItem>
            <UiDropdownMenuSeparator />
            <UiDropdownMenuItem>항목 3</UiDropdownMenuItem>
          </template>
        </UiDropdownMenuContent>
      </UiDropdownMenu>
    `})},n={name:"Dropdown — 아바타 트리거",render:()=>({setup(){return{avatarDefault:d}},template:`
      <UiDropdownMenu>
        <UiDropdownMenuTrigger class="flex items-center text-left gap-2 hover:cursor-pointer">
          <UiAvatar class="size-6">
            <UiAvatarFallback>
              <img :src="avatarDefault" alt="avatar" class="size-full" />
            </UiAvatarFallback>
          </UiAvatar>
          <div class="h-8 flex flex-col">
            <p class="caption__bold">홍길동님</p>
            <span class="caption text-muted">안녕하시와요</span>
          </div>
        </UiDropdownMenuTrigger>
        <UiDropdownMenuContent>
          <UiDropdownMenuLabel>My Account</UiDropdownMenuLabel>
          <UiDropdownMenuSeparator />
          <UiDropdownMenuItem><LucideUser class="mr-2 size-4" />프로필</UiDropdownMenuItem>
          <UiDropdownMenuItem><LucideSettings class="mr-2 size-4" />설정</UiDropdownMenuItem>
          <UiDropdownMenuSeparator />
          <UiDropdownMenuItem class="text-destructive"><LucideLogOut class="mr-2 size-4" />로그아웃</UiDropdownMenuItem>
        </UiDropdownMenuContent>
      </UiDropdownMenu>
    `})};var o,r,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Dropdown — 인터랙티브',
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiDropdownMenu>
        <UiDropdownMenuTrigger v-if="args.iconTrigger" as-child>
          <Button variant="ghost" size="icon"><LucideEllipsis /></Button>
        </UiDropdownMenuTrigger>
        <UiDropdownMenuTrigger v-else as-child>
          <Button variant="outline" :size="args.size">메뉴 열기 <LucideChevronDown class="ml-1" /></Button>
        </UiDropdownMenuTrigger>
        <UiDropdownMenuContent class="w-48">
          <template v-if="args.withLabel">
            <UiDropdownMenuLabel>계정</UiDropdownMenuLabel>
            <UiDropdownMenuSeparator />
            <UiDropdownMenuGroup>
              <UiDropdownMenuItem><LucideUser class="mr-2 size-4" />프로필</UiDropdownMenuItem>
              <UiDropdownMenuItem><LucideSettings class="mr-2 size-4" />설정</UiDropdownMenuItem>
            </UiDropdownMenuGroup>
            <UiDropdownMenuSeparator />
            <UiDropdownMenuItem class="text-destructive"><LucideLogOut class="mr-2 size-4" />로그아웃</UiDropdownMenuItem>
          </template>
          <template v-else>
            <UiDropdownMenuItem>항목 1</UiDropdownMenuItem>
            <UiDropdownMenuItem>항목 2</UiDropdownMenuItem>
            <UiDropdownMenuSeparator />
            <UiDropdownMenuItem>항목 3</UiDropdownMenuItem>
          </template>
        </UiDropdownMenuContent>
      </UiDropdownMenu>
    \`
  })
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};var i,a,s;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Dropdown — 아바타 트리거',
  render: () => ({
    setup() {
      return {
        avatarDefault
      };
    },
    template: \`
      <UiDropdownMenu>
        <UiDropdownMenuTrigger class="flex items-center text-left gap-2 hover:cursor-pointer">
          <UiAvatar class="size-6">
            <UiAvatarFallback>
              <img :src="avatarDefault" alt="avatar" class="size-full" />
            </UiAvatarFallback>
          </UiAvatar>
          <div class="h-8 flex flex-col">
            <p class="caption__bold">홍길동님</p>
            <span class="caption text-muted">안녕하시와요</span>
          </div>
        </UiDropdownMenuTrigger>
        <UiDropdownMenuContent>
          <UiDropdownMenuLabel>My Account</UiDropdownMenuLabel>
          <UiDropdownMenuSeparator />
          <UiDropdownMenuItem><LucideUser class="mr-2 size-4" />프로필</UiDropdownMenuItem>
          <UiDropdownMenuItem><LucideSettings class="mr-2 size-4" />설정</UiDropdownMenuItem>
          <UiDropdownMenuSeparator />
          <UiDropdownMenuItem class="text-destructive"><LucideLogOut class="mr-2 size-4" />로그아웃</UiDropdownMenuItem>
        </UiDropdownMenuContent>
      </UiDropdownMenu>
    \`
  })
}`,...(s=(a=n.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const U=["Default","AvatarTrigger"];export{n as AvatarTrigger,e as Default,U as __namedExportsOrder,D as default};
