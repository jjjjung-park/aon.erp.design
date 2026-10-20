import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: '기초/Progress',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    modelValue: { control: { type: 'range', min: 0, max: 100 }, description: '진행률 (0~100)' },
  },
  args: {
    modelValue: 40,
  },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  name: 'Progress — 인터랙티브',
  render: (args) => ({
    setup() { return { args } },
    template: `<UiProgress :model-value="args.modelValue" class="w-80" />`,
  }),
}

export const Steps: Story = {
  name: 'Progress — 단계별',
  render: () => ({
    template: `
      <div class="flex flex-col gap-4 w-80">
        <div class="flex flex-col gap-1"><span class="text-xs text-muted">0%</span><UiProgress :model-value="0" /></div>
        <div class="flex flex-col gap-1"><span class="text-xs text-muted">25%</span><UiProgress :model-value="25" /></div>
        <div class="flex flex-col gap-1"><span class="text-xs text-muted">50%</span><UiProgress :model-value="50" /></div>
        <div class="flex flex-col gap-1"><span class="text-xs text-muted">75%</span><UiProgress :model-value="75" /></div>
        <div class="flex flex-col gap-1"><span class="text-xs text-muted">100%</span><UiProgress :model-value="100" /></div>
      </div>
    `,
  }),
}
