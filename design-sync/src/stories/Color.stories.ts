import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Foundation/Color',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}
export default meta
type Story = StoryObj

const colorRow = (label: string, bgClass: string, textClass: string, token: string, hex: string) =>
  `<div class="flex items-center gap-4 py-2 border-b border-border last:border-0">
    <div class="w-10 h-10 rounded-sm shrink-0 border border-border ${bgClass}"></div>
    <div class="flex-1">
      <p class="font-bold text-sm">${label}</p>
      <p class="caption text-muted">${token}</p>
    </div>
    <p class="caption text-muted">${hex}</p>
  </div>`

export const Surface: Story = {
  name: 'Surface — 배경색',
  render: () => ({
    template: `
      <div class="flex flex-col max-w-xl">
        ${colorRow('neutral', 'bg-background border-border', '', '--surface-neutral', '#FFFFFF')}
        ${colorRow('muted', 'bg-surface-muted', '', '--surface-muted', '#FAFAFA')}
        ${colorRow('disabled', 'bg-disabled', '', '--surface-disabled', '#EBECEE')}
        ${colorRow('brand', 'bg-primary', '', '--surface-brand', '#007BFF')}
        ${colorRow('brand-subtle', 'bg-primary-light', '', '--surface-brand-subtle', '#EFF7FF')}
        ${colorRow('danger', 'bg-danger', '', '--surface-danger', '#F13C31')}
        ${colorRow('danger-subtle', 'bg-danger-light', '', '--surface-danger-subtle', '#FFEFEF')}
        ${colorRow('success', 'bg-success', '', '--surface-success', '#00A035')}
        ${colorRow('success-subtle', 'bg-success-light', '', '--surface-success-subtle', '#F0FFEF')}
        ${colorRow('warning', 'bg-warning', '', '--surface-warning', '#F36D00')}
        ${colorRow('warning-subtle', 'bg-warning-light', '', '--surface-warning-subtle', '#FFF6E8')}
      </div>
    `,
  }),
}

export const Text: Story = {
  name: 'Text — 텍스트색',
  render: () => ({
    template: `
      <div class="flex flex-col max-w-xl">
        <div class="flex items-center gap-4 py-2 border-b border-border">
          <div class="w-10 h-10 rounded-sm shrink-0 bg-default flex items-center justify-center">
            <span class="text-sm font-bold" style="color: var(--text-neutral)">Aa</span>
          </div>
          <div class="flex-1"><p class="font-bold text-sm">neutral</p><p class="caption text-muted">--text-neutral</p></div>
          <p class="caption text-muted">#FFFFFF</p>
        </div>
        <div v-for="item in items" :key="item.token" class="flex items-center gap-4 py-2 border-b border-border last:border-0">
          <div class="w-10 h-10 rounded-sm shrink-0 bg-surface-muted flex items-center justify-center">
            <span class="text-sm font-bold" :style="'color: var(' + item.token + ')'">Aa</span>
          </div>
          <div class="flex-1"><p class="font-bold text-sm">{{ item.label }}</p><p class="caption text-muted">{{ item.token }}</p></div>
          <p class="caption text-muted">{{ item.hex }}</p>
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
      <div class="flex flex-col max-w-xl">
        <div v-for="item in items" :key="item.token" class="flex items-center gap-4 py-2 border-b border-border last:border-0">
          <div class="w-10 h-10 rounded-sm shrink-0 border-2" :style="'border-color: var(' + item.token + ')'"></div>
          <div class="flex-1"><p class="font-bold text-sm">{{ item.label }}</p><p class="caption text-muted">{{ item.token }}</p></div>
          <p class="caption text-muted">{{ item.hex }}</p>
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
