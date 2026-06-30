import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Foundation/Color',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}
export default meta
type Story = StoryObj

export const Surface: Story = {
  name: 'Surface — 배경색',
  render: () => ({
    template: `
      <div class="grid grid-cols-4 gap-4">
        <div v-for="item in items" :key="item.token" class="flex flex-col gap-2">
          <div class="h-20 rounded-sm border border-border" :style="'background: var(' + item.token + ')'"></div>
          <div>
            <p class="font-bold text-sm">{{ item.label }}</p>
            <p class="caption text-muted">{{ item.token }}</p>
            <p class="caption text-muted">{{ item.hex }}</p>
          </div>
        </div>
      </div>
    `,
    setup() {
      return {
        items: [
          { label: 'neutral',       token: '--surface-neutral',       hex: '#FFFFFF' },
          { label: 'muted',         token: '--surface-muted',         hex: '#FAFAFA' },
          { label: 'disabled',      token: '--surface-disabled',      hex: '#EBECEE' },
          { label: 'brand',         token: '--surface-brand',         hex: '#007BFF' },
          { label: 'brand-subtle',  token: '--surface-brand-subtle',  hex: '#EFF7FF' },
          { label: 'danger',        token: '--surface-danger',        hex: '#F13C31' },
          { label: 'danger-subtle', token: '--surface-danger-subtle', hex: '#FFEFEF' },
          { label: 'success',       token: '--surface-success',       hex: '#00A035' },
          { label: 'success-subtle',token: '--surface-success-subtle',hex: '#F0FFEF' },
          { label: 'warning',       token: '--surface-warning',       hex: '#F36D00' },
          { label: 'warning-subtle',token: '--surface-warning-subtle',hex: '#FFF6E8' },
        ]
      }
    },
  }),
}

export const Text: Story = {
  name: 'Text — 텍스트색',
  render: () => ({
    template: `
      <div class="grid grid-cols-4 gap-4">
        <div v-for="item in items" :key="item.token" class="flex flex-col gap-2">
          <div class="h-20 rounded-sm border border-border bg-surface-muted flex items-center justify-center">
            <span class="text-2xl font-bold" :style="'color: var(' + item.token + ')'">Aa</span>
          </div>
          <div>
            <p class="font-bold text-sm">{{ item.label }}</p>
            <p class="caption text-muted">{{ item.token }}</p>
            <p class="caption text-muted">{{ item.hex }}</p>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <div class="h-20 rounded-sm border border-border bg-default flex items-center justify-center">
            <span class="text-2xl font-bold" style="color: var(--text-neutral)">Aa</span>
          </div>
          <div>
            <p class="font-bold text-sm">neutral</p>
            <p class="caption text-muted">--text-neutral</p>
            <p class="caption text-muted">#FFFFFF</p>
          </div>
        </div>
      </div>
    `,
    setup() {
      return {
        items: [
          { label: 'default',  token: '--text-default',  hex: '#192030' },
          { label: 'muted',    token: '--text-muted',    hex: '#798089' },
          { label: 'disabled', token: '--text-disabled', hex: '#BBC0C7' },
          { label: 'brand',    token: '--text-brand',    hex: '#007BFF' },
          { label: 'danger',   token: '--text-danger',   hex: '#F13C31' },
          { label: 'success',  token: '--text-success',  hex: '#00A035' },
          { label: 'warning',  token: '--text-warning',  hex: '#F36D00' },
        ]
      }
    },
  }),
}

export const Border: Story = {
  name: 'Border — 테두리색',
  render: () => ({
    template: `
      <div class="grid grid-cols-4 gap-4">
        <div v-for="item in items" :key="item.token" class="flex flex-col gap-2">
          <div class="h-20 rounded-sm border-2" :style="'border-color: var(' + item.token + ')'"></div>
          <div>
            <p class="font-bold text-sm">{{ item.label }}</p>
            <p class="caption text-muted">{{ item.token }}</p>
            <p class="caption text-muted">{{ item.hex }}</p>
          </div>
        </div>
      </div>
    `,
    setup() {
      return {
        items: [
          { label: 'default',      token: '--border-default',      hex: '#DBDDE0' },
          { label: 'strong',       token: '--border-strong',       hex: '#192030' },
          { label: 'muted',        token: '--border-muted',        hex: '#798089' },
          { label: 'brand',        token: '--border-brand',        hex: '#007BFF' },
          { label: 'brand-subtle', token: '--border-brand-subtle', hex: '#EFF7FF' },
          { label: 'danger',       token: '--border-danger',       hex: '#F13C31' },
          { label: 'success',      token: '--border-success',      hex: '#00A035' },
          { label: 'warning',      token: '--border-warning',      hex: '#F36D00' },
        ]
      }
    },
  }),
}
