import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: '기초/Avatar',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  name: 'Avatar — 기본',
  render: () => ({
    template: `
      <div class="flex items-center gap-4">
        <UiAvatar>
          <UiAvatarImage src="https://github.com/shadcn.png" alt="user" />
          <UiAvatarFallback>CN</UiAvatarFallback>
        </UiAvatar>
        <UiAvatar>
          <UiAvatarFallback>홍길</UiAvatarFallback>
        </UiAvatar>
        <UiAvatar class="size-10">
          <UiAvatarFallback class="text-md">AB</UiAvatarFallback>
        </UiAvatar>
        <UiAvatar class="size-12">
          <UiAvatarFallback class="text-lg">AB</UiAvatarFallback>
        </UiAvatar>
      </div>
    `,
  }),
}
