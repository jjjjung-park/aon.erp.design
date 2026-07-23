import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'

const meta: Meta = {
  title: '레이아웃/Modal',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

// ─── 기본 ─────────────────────────────────────────────────────────────────────

export const Index: Story = {
  name: 'Modal — 기본',
  argTypes: {
    title:         { control: 'text',    description: '모달 제목' },
    footer:        { control: 'boolean', description: '하단 footer 표시' },
    fullScreen:    { control: 'boolean', description: '전체화면 버튼 표시' },
    width:         { control: 'select',  options: ['480px', '600px', '720px', '960px'], description: '모달 너비' },
    actionLabel:   { control: 'text',    description: '우측 버튼 텍스트' },
    actionVariant: { control: 'select',  options: ['default', 'destructive', 'secondary', 'outline'], description: '우측 버튼 타입' },
  },
  args: {
    title: '모달 제목',
    footer: true,
    fullScreen: false,
    width: '480px',
    actionLabel: '확인',
    actionVariant: 'default',
  },
  render: (args) => ({
    setup() {
      const isFullSize = ref(false)
      return { args, isFullSize }
    },
    template: `
      <div
        class="bg-background rounded-md shadow-bottom flex flex-col"
        :style="isFullSize ? { width: '90vw', height: '90vh' } : { width: args.width }"
      >
        <div class="flex justify-between items-center px-4 h-14 shrink-0">
          <span class="font-bold text-sm">{{ args.title }}</span>
          <div class="ml-auto flex items-center gap-2 h-5">
            <template v-if="args.fullScreen">
              <UiButton variant="ghost" size="icon" @click="isFullSize = !isFullSize">
                <LucideMinimize2 v-if="isFullSize" /><LucideExpand v-else />
              </UiButton>
              <UiSeparator orientation="vertical" size="md" />
            </template>
            <UiButton variant="ghost" size="icon"><LucideX /></UiButton>
          </div>
        </div>
        <div :class="[isFullSize ? 'h-screen flex flex-col' : 'overflow-y-auto max-h-[calc(100vh-12rem)]', 'px-6 py-2 flex flex-col gap-3']">
          <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
          <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
          <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
        </div>
        <div v-if="args.footer" class="flex justify-between gap-2 p-4 shrink-0">
          <UiButton variant="outline">닫기</UiButton>
          <UiButton :variant="args.actionVariant">{{ args.actionLabel }}</UiButton>
        </div>
      </div>
    `,
  }),
}
