import type { Meta, StoryObj } from '@storybook/vue3'
import { Input } from '.'
import { ref } from 'vue'

const meta: Meta<typeof Input> = {
  title: '코어/Input',
  component: Input,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `<div class="w-80"><Input v-model="value" placeholder="텍스트를 입력해주세요" /></div>`,
  }),
}

export const States: Story = {
  name: '상태별',
  render: () => ({
    components: { Input },
    template: `
      <div class="flex flex-col gap-3 w-80">
        <Input placeholder="기본" />
        <Input placeholder="비활성화" disabled />
        <Input placeholder="읽기 전용" readonly />
        <Input placeholder="에러 상태" aria-invalid="true" />
      </div>
    `,
  }),
}

export const Types: Story = {
  name: '타입별',
  render: () => ({
    components: { Input },
    template: `
      <div class="flex flex-col gap-3 w-80">
        <Input type="text" placeholder="text" />
        <Input type="number" placeholder="number" />
        <Input type="password" placeholder="password" />
        <Input type="email" placeholder="email" />
        <Input type="date" />
      </div>
    `,
  }),
}
