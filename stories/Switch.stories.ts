import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: '기초/Switch',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    disabled: { control: 'boolean', description: '비활성화' },
    showLabel: { control: 'boolean', description: '라벨 표시' },
    label: { control: 'text', description: '라벨 텍스트' },
    labelPosition: {
      control: 'radio',
      options: ['left', 'right'],
      description: '라벨 위치',
    },
  },
  args: {
    disabled: false,
    showLabel: true,
    label: 'label text',
    labelPosition: 'right',
  },
}
export default meta
type Story = StoryObj<{
  disabled: boolean
  showLabel: boolean
  label: string
  labelPosition: 'left' | 'right'
}>

export const Default: Story = {
  name: 'Switch',
  render: (args) => ({
    setup() { return { args } },
    template: `
      <div class="flex items-center gap-2">
        <UiLabel v-if="args.showLabel && args.labelPosition === 'left'" for="switch" :class="{ 'text-disabled-text': args.disabled }">{{ args.label }}</UiLabel>
        <UiSwitch
          id="switch"
          :disabled="args.disabled"
        />
        <UiLabel v-if="args.showLabel && args.labelPosition === 'right'" for="switch" :class="{ 'text-disabled-text': args.disabled }">{{ args.label }}</UiLabel>
      </div>
    `,
  }),
}
