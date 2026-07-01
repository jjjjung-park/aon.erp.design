import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'UI 패턴/ButtonGroup',
  tags: ['autodocs', 'unused'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Toggle: Story = {
  name: 'ButtonGroup — 토글',
  render: () => ({
    template: `
      <div class="flex flex-col gap-4">
        <UiButtonGroup>
          <UiButton variant="outline"><LucideAlignLeft /></UiButton>
          <UiButton variant="outline"><LucideAlignCenter /></UiButton>
          <UiButton variant="outline"><LucideAlignRight /></UiButton>
        </UiButtonGroup>
        <UiButtonGroup>
          <UiButton variant="outline">이전</UiButton>
          <UiButton variant="outline">다음</UiButton>
        </UiButtonGroup>
        <UiButtonGroup orientation="vertical">
          <UiButton variant="outline">항목 1</UiButton>
          <UiButton variant="outline">항목 2</UiButton>
          <UiButton variant="outline">항목 3</UiButton>
        </UiButtonGroup>
      </div>
    `,
  }),
}
