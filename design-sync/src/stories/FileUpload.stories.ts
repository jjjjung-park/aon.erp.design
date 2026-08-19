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
  name: '추가',
  render: () => ({
    components: { FileDropzone },
    template: `
      <div class="w-80 h-32 rounded-sm border-muted border-dashed border bg-surface-muted transition-colors hover:border-primary hover:bg-primary-light">
        <FileDropzone>
          <p class="flex items-center gap-1 body__bold">
            <LucidePaperclip class="size-4" />
            파일 첨부
          </p>
          <p class=" text-muted text-center px-4">드래그 또는 클릭하여 업로드<br/>(10mb 이하)</p>
        </FileDropzone>
      </div>
    `,
  }),
}


export const FileList: Story = {
  name: '파일목록 상태별',
  render: () => ({
    template: `
      <div class="w-80 flex flex-col gap-1">
        <p class="caption__bold mb-1">첨부된 파일 (4개 / 최대 5개)</p>

        <!-- 삭제 예정 -->
        <ul class="flex flex-col gap-1 list-none">
          <li class="group list-block-item  hover:bg-surface-muted text-subtle-text">
            <div class=" flex gap-2 line-through">
              <LucidePaperclip class="text-current size-4" />
              신규브랜드_품의서_2025.pdf
            </div>
            <div class="ml-auto flex items-center">
              <UiButton variant="ghost" size="icon" title="삭제 취소">
                <LucideUndo2 />
              </UiButton>
            </div>
          </li>

          <!-- 업로드 완료 -->
          <li class="group list-block-item  hover:bg-surface-muted">
            <div class=" flex gap-2">
              <LucidePaperclip class="text-muted size-4" />
              신규브랜드_품의서_2025.pdf
            </div>
            <div class="ml-auto flex items-center">
              <p class="size-8 inline-flex items-center justify-center group-hover:hidden">
                <LucideCheckCheck class="size-4 text-success" />
              </p>
              <UiButton variant="ghost" size="icon" class="hidden group-hover:inline-flex" title="파일 삭제">
                <LucideTrash2 />
              </UiButton>
            </div>
          </li>

          <!-- 업로드 실패 -->
          <li class="group list-block-item  hover:bg-surface-muted text-danger">
            <div class=" flex gap-2">
              <LucidePaperclip class="text-current size-4" />
              신규브랜드_품의서_2025.pdf
            </div>
            <div class="ml-auto flex items-center">
              <p class="size-8 inline-flex items-center justify-center group-hover:hidden">
                <LucideAlertTriangle class="size-4 text-danger" />
              </p>
              <UiButton variant="ghost" size="icon" class="hidden group-hover:inline-flex" title="파일 삭제">
                <LucideTrash2 />
              </UiButton>
            </div>
          </li>

          <!-- 신규 업로드 -->
          <li class="group list-block-item  hover:bg-surface-muted">
            <div class=" flex gap-2">
              <LucidePaperclip class="text-muted size-4" />
              신규브랜드_품의서_2025.pdf
            </div>
            <div class="ml-auto flex items-center">
              <p class="size-8 inline-flex items-center justify-center group-hover:hidden">
                <LucideCheck class="size-4 text-success" />
              </p>
              <UiButton variant="ghost" size="icon" class="hidden group-hover:inline-flex" title="파일 삭제">
                <LucideTrash2 />
              </UiButton>
            </div>
          </li>
        </ul>
      </div>
    `,
  }),
}
