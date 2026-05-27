import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: '데이터 입력/DatePicker',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const YearPicker: Story = {
  name: 'DatePicker — 연도 선택',
  render: () => ({
    template: `<UiDatePicker />`,
  }),
}

export const YearRangePicker: Story = {
  name: 'DatePicker — 연도 범위 선택',
  render: () => ({
    template: `<UiYearRange />`,
  }),
}
