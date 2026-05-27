import type { Meta, StoryObj } from '@storybook/vue3'
import { Toaster } from '@/ui/sonner'
import { toast } from 'vue-sonner'

const meta: Meta = {
  title: '피드백/Toast',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'info', 'warning', 'error', 'loading'],
      description: '토스트 타입',
    },
  },
  args: {
    type: 'success',
  },
}
export default meta
type Story = StoryObj<{ type: 'success' | 'info' | 'warning' | 'error' | 'loading' }>

export const Default: Story = {
  name: 'Toast',
  render: (args) => ({
    components: { Toaster },
    setup() {
      function show() {
        const type = args.type
        if (type === 'success') toast.success('요청이 정상 처리되었습니다.')
        else if (type === 'info') toast.info('참고할 정보가 있습니다.')
        else if (type === 'warning') toast.warning('주의가 필요합니다.')
        else if (type === 'error') toast.error('오류가 발생했습니다.')
        else if (type === 'loading') toast.loading('처리 중입니다...')
      }
      return { show }
    },
    template: `
      <div>
        <Toaster :rich-colors="true" :expand="true" :close-button="true" />
        <UiButton @click="show">토스트 실행</UiButton>
      </div>
    `,
  }),
}
