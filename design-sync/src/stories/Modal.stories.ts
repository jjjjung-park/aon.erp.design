import type { Meta, StoryObj } from '@storybook/vue3'
import ModalBase from '@/markup/components/modal/ModalBase.vue'
import FormItem from '@/markup/components/form/FormItem.vue'
import { Button } from '@/ui/button'

const meta: Meta<typeof ModalBase> = {
  title: 'UI 패턴/Modal',
  component: ModalBase,
  // tags: ['autodocs'], // 항상 열린 상태 유지를 위해 비활성화 (원복 시 주석 해제)
  parameters: { layout: 'fullscreen' },
  argTypes: {
    title:      { control: 'text',    description: '모달 제목' },
    fullScreen: { control: 'boolean', description: '전체화면 여부' },
    footer:     { control: 'boolean', description: '하단 footer 표시 여부' },
    isLoading:  { control: 'boolean', description: '로딩 상태' },
  },
  args: {
    title: '모달 제목',
    fullScreen: false,
    footer: true,
    isLoading: false,
  },
}
export default meta
type Story = StoryObj<typeof ModalBase>

type StoryBase = StoryObj

// ✅ 현재: 항상 열린 상태
export const Default: Story = {
  name: 'ModalBase — 인터랙티브',
  render: (args) => ({
    components: { ModalBase, Button },
    setup() { return { args } },
    template: `
      <ModalBase :open="true" v-bind="args">
        <template #body>
          <div class="flex flex-col gap-3 px-6 py-2">
            <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
            <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
            <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
          </div>
        </template>
        <template #footer>
          <Button>확인</Button>
        </template>
      </ModalBase>
    `,
  }),
}


export const ConfirmModal: StoryBase = {
  name: '확인 모달',
  render: () => ({
    components: { ModalBase, Button },
    template: `
      <ModalBase :open="true" title="등록하시겠습니까?" :footer="true">
        <template #body>
          <p class="text-sm text-muted px-6 py-2">입력한 내용을 저장하고 등록합니다.</p>
        </template>
        <template #footer>
          <Button>확인</Button>
        </template>
      </ModalBase>
    `,
  }),
}

export const DeleteModal: StoryBase = {
  name: '삭제 모달',
  render: () => ({
    components: { ModalBase, Button },
    template: `
      <ModalBase :open="true" title="삭제하시겠습니까?" :footer="true">
        <template #body>
          <p class="text-sm text-muted px-6 py-2">삭제된 데이터는 복구할 수 없습니다.</p>
        </template>
        <template #footer>
          <Button variant="destructive">삭제</Button>
        </template>
      </ModalBase>
    `,
  }),
}
