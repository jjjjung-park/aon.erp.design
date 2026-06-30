import type { Meta, StoryObj } from '@storybook/vue3'
import { Button } from '@/ui/button'

const meta: Meta = {
  title: 'UI 패턴/Dropdown',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  name: 'Dropdown — 기본',
  render: () => ({
    components: { Button },
    template: `
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
    `,
  }),
}

export const WithLabel: Story = {
  name: 'Dropdown — 그룹 라벨',
  render: () => ({
    components: { Button },
    template: `
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
    `,
  }),
}

export const IconTrigger: Story = {
  name: 'Dropdown — 아이콘 트리거',
  render: () => ({
    components: { Button },
    template: `
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
    `,
  }),
}
