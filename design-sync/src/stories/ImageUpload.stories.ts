import type { Meta, StoryObj } from '@storybook/vue3'
import FileDropzone from '@/markup/components/upload/FileDropzone.vue'

const meta: Meta = {
  title: 'UI 패턴/업로드/이미지 업로드',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Add: Story = {
  name: '이미지 업로드 — 추가',
  render: () => ({
    components: { FileDropzone },
    template: `
      <div class="w-40 h-40 rounded-sm border-border border-dashed border bg-surface-muted transition-colors hover:border-primary hover:bg-primary-light">
        <FileDropzone>
          <LucideImage class="size-6 text-muted" />
          <p class="caption__bold">이미지 등록</p>
          <p class="caption text-muted text-center px-2">드래그 또는 클릭<br/>(5mb 이하)</p>
        </FileDropzone>
      </div>
    `,
  }),
}

export const Uploading: Story = {
  name: '이미지 업로드 — 업로드 중',
  render: () => ({
    template: `
      <div class="w-40 h-40 rounded-sm border-border border overflow-hidden relative">
        <div class="w-full h-full bg-surface-subtle" />
        <div class="absolute inset-0 bg-default/50 flex flex-col items-center justify-center gap-2 px-4">
          <UiProgress :model-value="60" class="h-1 w-full" />
          <span class="caption text-neutral">60%</span>
        </div>
      </div>
    `,
  }),
}

export const Edit: Story = {
  name: '이미지 업로드 — 수정',
  render: () => ({
    template: `
      <div class="w-40 h-40 rounded-sm border-border border overflow-hidden relative group">
        <div class="w-full h-full bg-surface-subtle" />
        <div class="absolute inset-0 bg-default/50 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <UiButton variant="ghost" size="inline-icon" class="text-neutral hover:bg-white/20">
            <LucideRefreshCw />
          </UiButton>
          <UiButton variant="ghost" size="inline-icon" class="text-neutral hover:bg-white/20">
            <LucideTrash2 />
          </UiButton>
        </div>
      </div>
    `,
  }),
}
