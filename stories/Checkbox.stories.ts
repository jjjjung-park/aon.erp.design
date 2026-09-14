import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: '기초/Checkbox',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    disabled: { control: 'boolean', description: '비활성화' },
    showLabel: { control: 'boolean', description: '라벨 표시' },
    label: { control: 'text', description: '라벨 텍스트' },
  },
  args: {
    disabled: false,
    showLabel: true,
    label: '체크박스 라벨',
  },
}
export default meta
type Story = StoryObj<{ disabled: boolean; showLabel: boolean; label: string }>

export const Default: Story = {
  name: 'Checkbox',
  render: (args) => ({
    setup() { return { args } },
    template: `
      <div class="flex items-center gap-2">
        <UiCheckbox id="cb" :disabled="args.disabled" />
        <UiLabel v-if="args.showLabel" for="cb" :class="{ 'text-disabled-text': args.disabled }">{{ args.label }}</UiLabel>
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
