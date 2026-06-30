import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: '기초/Separator',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Vertical: Story = {
  name: 'Vertical — 사이즈별',
  render: () => ({
    template: `
      <div class="flex flex-col gap-6">
        <div class="flex items-center gap-2">
          <span class="caption text-muted w-16">12px</span>
          <div class="flex h-10 items-center gap-2">
            <span>항목 A</span>
            <UiSeparator orientation="vertical" class="h-3 bg-border" />
            <span>항목 B</span>
            <UiSeparator orientation="vertical" class="h-3 bg-border" />
            <span>항목 C</span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span class="caption text-muted w-16">16px</span>
          <div class="flex h-10 items-center gap-2">
            <span>항목 A</span>
            <UiSeparator orientation="vertical" class="h-4 bg-border" />
            <span>항목 B</span>
            <UiSeparator orientation="vertical" class="h-4 bg-border" />
            <span>항목 C</span>
          </div>
        </div>
      </div>
    `,
  }),
}

export const Horizontal: Story = {
  name: 'Horizontal',
  render: () => ({
    template: `
      <div class="w-80 flex flex-col gap-3">
        <p>섹션 A</p>
        <UiSeparator class="h-8 bg-surface-muted" />
        <p>섹션 B</p>
        <UiSeparator class="h-8 bg-surface-muted" />
        <p>섹션 C</p>
      </div>
    `,
  }),
}
