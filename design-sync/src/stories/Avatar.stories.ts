import type { Meta, StoryObj } from '@storybook/vue3'
import avatarDefault from '@/assets/images/ico/avatar-default.svg'

const meta: Meta = {
  title: '기초/Avatar',
  tags: ['autodocs', 'done'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const WithImage: Story = {
  name: 'Avatar — 이미지',
  render: () => ({
    setup() { return { avatarDefault } },
    template: `
      <div class="flex items-center gap-4">
        <UiAvatar>
          <UiAvatarFallback>
            <img :src="avatarDefault" alt="avatar" class="size-full" />
          </UiAvatarFallback>
        </UiAvatar>
      </div>
    `,
  }),
}

export const Fallback: Story = {
  name: 'Avatar — 폴백 (이미지 없음)',
  render: () => ({
    template: `
      <div class="flex items-center gap-4">
        <UiAvatar>
          <UiAvatarFallback>홍길</UiAvatarFallback>
        </UiAvatar>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  name: 'Avatar — 사이즈',
  render: () => ({
    setup() { return { avatarDefault } },
    template: `
      <div class="flex items-end gap-4">
        <div class="flex flex-col items-center gap-2">
          <UiAvatar class="size-6">
            <UiAvatarFallback><img :src="avatarDefault" alt="avatar" class="size-full" /></UiAvatarFallback>
          </UiAvatar>
          <span class="caption text-muted">24px</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <UiAvatar class="size-8">
            <UiAvatarFallback><img :src="avatarDefault" alt="avatar" class="size-full" /></UiAvatarFallback>
          </UiAvatar>
          <span class="caption text-muted">32px</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <UiAvatar class="size-10">
            <UiAvatarFallback><img :src="avatarDefault" alt="avatar" class="size-full" /></UiAvatarFallback>
          </UiAvatar>
          <span class="caption text-muted">40px</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <UiAvatar class="size-12">
            <UiAvatarFallback><img :src="avatarDefault" alt="avatar" class="size-full" /></UiAvatarFallback>
          </UiAvatar>
          <span class="caption text-muted">48px</span>
        </div>
      </div>
    `,
  }),
}
