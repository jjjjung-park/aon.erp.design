import type { Meta, StoryObj } from '@storybook/vue3'
import InputPagination from '@/markup/components/pagination/InputPagination.vue'
import DotPagination from '@/markup/components/pagination/DotPagination.vue'

const meta: Meta = {
  title: 'UI 패턴/Pagination',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Input: Story = {
  name: 'Pagination — 입력형',
  render: () => ({
    components: { InputPagination },
    template: `<InputPagination :total="20" />`,
  }),
}

export const Dot: Story = {
  name: 'Pagination — 점형',
  render: () => ({
    components: { DotPagination },
    template: `<DotPagination :total="5" />`,
  }),
}
