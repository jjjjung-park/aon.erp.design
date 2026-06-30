import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'UI 패턴/Collapsible',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  name: 'Collapsible — 트리형',
  render: () => ({
    template: `
      <div class="w-64 border border-border rounded-sm overflow-hidden">
        <UiCollapsible default-open>
          <UiCollapsibleTrigger class="flex w-full items-center justify-between px-4 h-10 bg-surface-muted hover:bg-subtle font-bold text-sm">
            <span>권한 관리</span>
            <LucideChevronUp class="size-4 text-muted" />
          </UiCollapsibleTrigger>
          <UiCollapsibleContent>
            <ul class="flex flex-col">
              <li class="px-6 h-9 flex items-center text-sm cursor-pointer hover:bg-surface-muted">컴포넌트 관리</li>
              <li class="px-6 h-9 flex items-center text-sm cursor-pointer hover:bg-surface-muted">메뉴 관리</li>
              <li class="px-6 h-9 flex items-center text-sm cursor-pointer hover:bg-surface-muted">권한 그룹 관리</li>
              <li class="px-6 h-9 flex items-center text-sm cursor-pointer hover:bg-surface-muted">사용자 권한 관리</li>
            </ul>
          </UiCollapsibleContent>
        </UiCollapsible>
      </div>
    `,
  }),
}
