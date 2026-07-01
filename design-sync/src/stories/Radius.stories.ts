import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Foundation/Radius',
  tags: ['autodocs', 'done'],
  parameters: { layout: 'padded' },
}
export default meta
type Story = StoryObj

export const All: Story = {
  name: 'Radius — 모서리 반경',
  render: () => ({
    template: `
      <div class="flex flex-col gap-8">
        <div class="flex gap-6">
          <div v-for="item in items" :key="item.token" class="flex flex-col gap-2 flex-1">
            <div
              class="h-24 bg-surface-muted border border-border"
              :style="'border-radius: var(' + item.token + ')'"
            ></div>
            <p class="text-sm font-bold">{{ item.label }}</p>
            <p class="caption text-muted">{{ item.token }}</p>
            <p class="caption text-muted">{{ item.value }}</p>
          </div>
        </div>
      </div>
    `,
    setup() {
      return {
        items: [
          { label: 'sm',   token: '--shape-radius-sm',   value: '4px' },
          { label: 'md',   token: '--shape-radius-md',   value: '8px' },
          { label: 'full', token: '--shape-radius-full', value: '999px' },
        ],
      }
    },
  }),
}
