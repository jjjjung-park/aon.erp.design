import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: '기초/Skeleton',
  tags: ['autodocs', 'done'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  name: 'Skeleton — 기본',
  render: () => ({
    template: `
      <div class="flex flex-col gap-3 w-80">
        <UiSkeleton class="h-5 w-1/2" />
        <UiSkeleton class="h-4 w-full" />
        <UiSkeleton class="h-4 w-5/6" />
        <UiSkeleton class="h-4 w-3/4" />
      </div>
    `,
  }),
}

export const Card: Story = {
  name: 'Skeleton — 카드형',
  render: () => ({
    template: `
      <div class="flex flex-col gap-3 w-80 p-4 border border-border rounded-sm">
        <div class="flex items-center gap-3">
          <UiSkeleton class="size-10 rounded-full" />
          <div class="flex flex-col gap-2 flex-1">
            <UiSkeleton class="h-4 w-1/2" />
            <UiSkeleton class="h-3 w-1/3" />
          </div>
        </div>
        <UiSkeleton class="h-32 w-full" />
        <UiSkeleton class="h-4 w-full" />
        <UiSkeleton class="h-4 w-4/5" />
      </div>
    `,
  }),
}
