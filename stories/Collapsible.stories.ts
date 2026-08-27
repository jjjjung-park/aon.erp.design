import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'UI 패턴/Collapsible',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

const menuData = {
  title: '메뉴',
  subItems: [
    {
      title: '하위 메뉴 1',
      childItem: [
        { title: '세부 항목 1', isActive: true },
        { title: '세부 항목 2', isActive: false },
        { title: '세부 항목 3', isActive: false },
      ],
    },
    { title: '하위 메뉴 2', childItem: null },
    { title: '하위 메뉴 3', childItem: null },
  ],
}

export const SideMenu: Story = {
  name: '사이드 메뉴',
  render: () => ({
    setup() { return { menuData } },
    template: `
      <UiSidebarProvider style="min-height: unset; width: 240px;">
        <UiSidebar collapsible="none" class="border-r border-border">
          <UiSidebarContent>
            <UiSidebarGroup class="px-3">
              <UiSidebarGroupLabel class="title__bold h-10">{{ menuData.title }}</UiSidebarGroupLabel>
              <UiSidebarMenu>
                <UiSidebarMenuItem v-for="item in menuData.subItems" :key="item.title" class="gap-1">
                  <template v-if="item.childItem">
                    <UiCollapsible class="group/collapsible">
                      <UiCollapsibleTrigger as-child>
                        <UiSidebarMenuButton :tooltip="false" class="pl-6 h-10 hover:bg-surface-muted mb-1">
                          <span>{{ item.title }}</span>
                          <LucideChevronDown class="ml-auto text-muted transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180 size-4" />
                        </UiSidebarMenuButton>
                      </UiCollapsibleTrigger>
                      <UiCollapsibleContent>
                        <UiSidebarMenuSub class="border-0">
                          <UiSidebarMenuSubItem
                            v-for="child in item.childItem"
                            :key="child.title"
                            class="h-10 flex items-center pl-8 hover:bg-surface-muted rounded-sm has-[span[data-active=true]]:bg-primary-light"
                          >
                            <UiSidebarMenuSubButton :is-active="child.isActive">
                              <span>{{ child.title }}</span>
                            </UiSidebarMenuSubButton>
                          </UiSidebarMenuSubItem>
                        </UiSidebarMenuSub>
                      </UiCollapsibleContent>
                    </UiCollapsible>
                  </template>
                  <template v-else>
                    <UiSidebarMenuButton :tooltip="false" class="pl-6 h-10 hover:bg-surface-muted">
                      <span>{{ item.title }}</span>
                    </UiSidebarMenuButton>
                  </template>
                </UiSidebarMenuItem>
              </UiSidebarMenu>
            </UiSidebarGroup>
          </UiSidebarContent>
        </UiSidebar>
      </UiSidebarProvider>
    `,
  }),
}

export const Default: Story = {
  name: '트리형',
  render: () => ({
    template: `
      <div class="w-[360px] flex flex-col gap-1">
        <UiCollapsible :default-open="true">
          <UiCollapsibleContent class="flex flex-col gap-2">

            <!-- 자식 있는 항목 -->
            <UiCollapsible class="flex flex-col gap-1">
              <div class="list-block-item">
                <div class="list-block-item__collapse-label">
                  <UiCollapsibleTrigger class="size-3 justify-center" />
                  <p class="list-block-item__label">자식 있는 항목</p>
                </div>
              </div>
              <UiCollapsibleContent class="flex flex-col gap-1">
                <div class="list-block-item" v-for="n in 3" :key="n">
                  <div class="list-block-item__collapse-label pl-5">
                    <p class="list-block-item__label">자식 항목 {{ n }}</p>
                  </div>
                </div>
              </UiCollapsibleContent>
            </UiCollapsible>

            <!-- 자식 없는 항목 -->
            <UiCollapsible class="flex flex-col gap-1">
              <div class="list-block-item">
                <div class="list-block-item__collapse-label pl-1">
                  <p class="list-block-item__label">자식 없는 항목</p>
                </div>
              </div>
            </UiCollapsible>

          </UiCollapsibleContent>
        </UiCollapsible>
      </div>
    `,
  }),
}
