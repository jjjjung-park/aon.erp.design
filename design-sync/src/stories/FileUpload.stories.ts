import type { Meta, StoryObj } from '@storybook/vue3'
import FileDropzone from '@/markup/components/upload/FileDropzone.vue'

const meta: Meta = {
  title: 'UI 패턴/업로드/파일 업로드',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Add: Story = {
  name: '파일 업로드 — 추가',
  render: () => ({
    components: { FileDropzone },
    template: `
      <div class="w-80 h-32 rounded-sm border-border border-dashed border bg-surface-muted transition-colors hover:border-primary hover:bg-primary-light">
        <FileDropzone>
          <p class="flex items-center gap-1 body__bold">
            <LucidePaperclip class="size-4" />
            파일 첨부
          </p>
          <p class="caption text-muted text-center px-4">드래그 또는 클릭하여 업로드<br/>(10mb 이하)</p>
        </FileDropzone>
      </div>
    `,
  }),
}

export const Uploading: Story = {
  name: '파일 업로드 — 업로드 중',
  render: () => ({
    template: `
      <div class="w-80 rounded-sm border-border border bg-background p-3 flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <LucideFileText class="size-4 text-muted shrink-0" />
          <span class="body flex-1 truncate">보고서_2025_최종.pdf</span>
          <span class="caption text-muted shrink-0">2.4MB</span>
          <UiButton variant="ghost" size="inline-icon" class="shrink-0 text-muted hover:bg-transparent">
            <LucideX />
          </UiButton>
        </div>
        <UiProgress :model-value="60" class="h-1" />
        <span class="caption text-muted">60%</span>
      </div>
    `,
  }),
}

export const Edit: Story = {
  name: '파일 업로드 — 수정',
  render: () => ({
    components: { FileDropzone },
    template: `
      <div class="w-80 flex flex-col gap-2">
        <div class="rounded-sm border-border border bg-background p-3 flex items-center gap-2">
          <LucideFileText class="size-4 text-muted shrink-0" />
          <span class="body flex-1 truncate">보고서_2025_최종.pdf</span>
          <span class="caption text-muted shrink-0">2.4MB</span>
          <UiButton variant="ghost" size="inline-icon" class="shrink-0 text-muted hover:bg-transparent">
            <LucideX />
          </UiButton>
        </div>
        <div class="h-32 rounded-sm border-border border-dashed border bg-surface-muted transition-colors hover:border-primary hover:bg-primary-light">
          <FileDropzone>
            <p class="flex items-center gap-1 body__bold">
              <LucidePaperclip class="size-4" />
              파일 첨부
            </p>
            <p class="caption text-muted text-center px-4">드래그 또는 클릭하여 업로드<br/>(10mb 이하)</p>
          </FileDropzone>
        </div>
      </div>
    `,
  }),
}
