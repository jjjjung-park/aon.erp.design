import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: '기초/Spinner',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  name: 'Spinner — 사이즈별',
  render: () => ({
    template: `
      <div class="flex items-center gap-6">
        <UiSpinner class="size-3" />
        <UiSpinner class="size-4" />
        <UiSpinner class="size-5" />
        <UiSpinner class="size-6" />
        <UiSpinner class="size-8" />
      </div>
    `,
  }),
}

export const WithText: Story = {
  name: 'Spinner — 텍스트 조합',
  render: () => ({
    template: `
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2 text-muted">
          <UiSpinner />
          <span>로딩 중...</span>
        </div>
        <UiButton disabled class="flex items-center gap-2">
          <UiSpinner class="text-neutral" />
          처리 중
        </UiButton>
      </div>
    `,
  }),
}
