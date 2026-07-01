import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Foundation/Effect',
  tags: ['autodocs', 'done'],
  parameters: { layout: 'padded' },
}
export default meta
type Story = StoryObj

export const Border: Story = {
  name: 'Border — 테두리 두께',
  render: () => ({
    template: `
      <div class="flex gap-6">
        <div v-for="item in items" :key="item.token" class="flex flex-col gap-2 flex-1">
          <div
            class="h-16 rounded-sm bg-surface-muted"
            :style="'border: var(' + item.token + ') solid var(--border-default)'"
          ></div>
          <p class="text-sm font-bold">{{ item.label }}</p>
          <p class="caption text-muted">{{ item.token }}</p>
          <p class="caption text-muted">{{ item.value }}</p>
        </div>
      </div>
    `,
    setup() {
      return {
        items: [
          { label: 'default', token: '--shape-border-default', value: '1px' },
          { label: 'strong',  token: '--shape-border-strong',  value: '2px' },
          { label: 'heavy',   token: '--shape-border-heavy',   value: '4px' },
        ],
      }
    },
  }),
}

export const Stroke: Story = {
  name: 'Stroke — 아이콘 선 굵기',
  render: () => ({
    template: `
      <div class="flex gap-6">
        <div v-for="item in items" :key="item.token" class="flex flex-col gap-2 flex-1">
          <div class="h-16 rounded-sm bg-surface-muted border border-border flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              :stroke-width="item.value"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-default"
            >
              <circle cx="12" cy="12" r="8"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="12" x2="15" y2="15"/>
            </svg>
          </div>
          <p class="text-sm font-bold">{{ item.label }}</p>
          <p class="caption text-muted">{{ item.token }}</p>
          <p class="caption text-muted">{{ item.value }}</p>
        </div>
      </div>
    `,
    setup() {
      return {
        items: [
          { label: 'xs', token: '--shape-stroke-xs', value: '1.4' },
          { label: 'sm', token: '--shape-stroke-sm', value: '1.6' },
          { label: 'md', token: '--shape-stroke-md', value: '2' },
        ],
      }
    },
  }),
}

export const Shadow: Story = {
  name: 'Shadow — 그림자',
  render: () => ({
    template: `
      <div class="flex gap-10">
        <div v-for="item in items" :key="item.label" class="flex flex-col gap-2 flex-1">
          <div
            class="h-24 rounded-sm bg-surface-neutral"
            :style="'box-shadow: ' + item.shadow"
          ></div>
          <p class="text-sm font-bold">{{ item.label }}</p>
          <p class="caption text-muted">effects/shadow/{{ item.label }}</p>
          <p class="caption text-muted">{{ item.desc }}</p>
        </div>
      </div>
    `,
    setup() {
      return {
        items: [
          {
            label: 'left',
            shadow: '-4px 0 4px 0 rgba(187,192,199,0.2)',
            desc: 'x:-4 y:0 blur:4 #BBC0C7 20%',
          },
          {
            label: 'bottom',
            shadow: '0 6px 12px 0 rgba(220,224,229,0.5)',
            desc: 'x:0 y:6 blur:12 #DCE0E5 50%',
          },
        ],
      }
    },
  }),
}
