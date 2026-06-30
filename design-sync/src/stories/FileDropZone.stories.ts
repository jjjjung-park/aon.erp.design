import type { Meta, StoryObj } from '@storybook/vue3'
import InputFile from '@/markup/components/inputs/InputFile.vue'

const meta: Meta = {
  title: 'UI 패턴/FileDropZone',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  name: 'FileDropZone — 기본',
  render: () => ({
    components: { InputFile },
    template: `
      <div class="flex flex-col gap-4">
        <div class="w-80 h-32 rounded-sm border border-dashed border-border bg-surface-muted">
          <InputFile />
        </div>
        <div class="w-80 h-32 rounded-sm border border-dashed border-border bg-surface-muted">
          <InputFile>
            <template #default>
              <p class="flex items-center gap-1 font-bold text-sm">
                <LucidePaperclip class="size-4" style="stroke-width: var(--shape-stroke-sm)" />
                파일 첨부
              </p>
              <p class="caption text-muted text-center px-4">드래그 또는 클릭하여 업로드<br/>(10mb 이하)</p>
            </template>
          </InputFile>
        </div>
      </div>
    `,
  }),
}
