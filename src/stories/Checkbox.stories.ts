import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: '데이터 입력/Checkbox',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    checked:  { control: 'boolean', description: '체크 여부' },
    disabled: { control: 'boolean', description: '비활성화' },
  },
  args: {
    checked: false,
    disabled: false,
  },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  name: 'Checkbox — 인터랙티브',
  render: (args) => ({
    setup() { return { args } },
    template: `
      <div class="flex items-center gap-2">
        <UiCheckbox id="cb" :checked="args.checked" :disabled="args.disabled" />
        <UiLabel for="cb">체크박스 라벨</UiLabel>
      </div>
    `,
  }),
}

export const States: Story = {
  name: 'Checkbox — 상태별',
  render: () => ({
    template: `
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-2"><UiCheckbox id="c1" /><UiLabel for="c1">미체크</UiLabel></div>
        <div class="flex items-center gap-2"><UiCheckbox id="c2" :checked="true" /><UiLabel for="c2">체크됨</UiLabel></div>
        <div class="flex items-center gap-2"><UiCheckbox id="c3" :disabled="true" /><UiLabel for="c3" class="text-disabled-text">비활성화</UiLabel></div>
        <div class="flex items-center gap-2"><UiCheckbox id="c4" :checked="true" :disabled="true" /><UiLabel for="c4" class="text-disabled-text">비활성화 + 체크</UiLabel></div>
      </div>
    `,
  }),
}
