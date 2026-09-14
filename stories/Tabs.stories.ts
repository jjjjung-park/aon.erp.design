import type { Meta, StoryObj } from '@storybook/vue3'
import LineTabs from '@/markup/components/tabs/LineTabs.vue'
import BoxTabs from '@/markup/components/tabs/BoxTabs.vue'
import PageTabs from '@/markup/components/tabs/PageTabs.vue'
import { ref } from 'vue'

const meta: Meta<typeof LineTabs> = {
  title: 'UI 패턴/Tabs',
  component: LineTabs,
  tags: ['autodocs'],
  argTypes: {
    tabList: {
      control: 'object',
      description: '탭 목록 ({ label, value, active, disabled? }[])',
    },
  },
  args: {
    tabList: [
      { label: '전체',   value: 'all',      active: true,  disabled: false, count: 24 },
      { label: '진행중', value: 'process',  active: false, disabled: false, count: 12 },
      { label: '완료',   value: 'done',     active: false, disabled: false, count: 8  },
      { label: '비활성', value: 'disabled', active: false, disabled: true,  count: 0  },
    ],
  },
}

// 탭 카운트 뱃지 색상 — primary: 액티브(bg-primary-light text-primary) / 기본(bg-surface-muted text-muted) / disabled(opacity-50)
//                     secondary: 액티브(bg-surface-muted text-muted) / 기본·disabled(bg-subtle text-muted opacity-50)
const badgeClass = (tab: any, type: 'primary' | 'secondary') => {
  if (type === 'primary') {
    if (tab.disabled) return 'bg-surface-muted text-muted opacity-50'
    if (tab.active) return 'bg-primary-light text-primary'
    return 'bg-surface-muted text-muted'
  }
  if (tab.disabled) return 'bg-subtle text-muted opacity-50'
  if (tab.active) return 'bg-surface-muted text-muted'
  return 'bg-subtle text-muted opacity-50'
}
export default meta
type Story = StoryObj<typeof LineTabs>

export const Line: Story = {
  name: 'LineTabs — primary',
  render: (args) => ({
    components: { LineTabs },
    setup() {
      const tabs = ref(args.tabList.map((t: any, i: number) => ({ ...t, active: i === 0 })))
      const onChange = (val: string) => {
        tabs.value = tabs.value.map((t: any) => ({ ...t, active: t.value === val }))
      }
      return { tabs, onChange, badgeClass }
    },
    template: `
      <div class="border-b border-border">
        <LineTabs :tab-list="tabs" type="primary" @change="onChange">
          <template #default="{ tab }">
            <span>{{ tab.label }}</span>
            <UiBadge size="count" :class="badgeClass(tab, 'primary')">{{ tab.count }}</UiBadge>
          </template>
        </LineTabs>
      </div>
    `,
  }),
}

export const LineDefault: Story = {
  name: 'LineTabs — secondary',
  render: (args) => ({
    components: { LineTabs },
    setup() {
      const tabs = ref(args.tabList.map((t: any, i: number) => ({ ...t, active: i === 0 })))
      const onChange = (val: string) => {
        tabs.value = tabs.value.map((t: any) => ({ ...t, active: t.value === val }))
      }
      return { tabs, onChange, badgeClass }
    },
    template: `
      <div class="border-b border-border">
        <LineTabs :tab-list="tabs" type="secondary" @change="onChange">
          <template #default="{ tab }">
            <span>{{ tab.label }}</span>
            <UiBadge size="count" :class="badgeClass(tab, 'secondary')">{{ tab.count }}</UiBadge>
          </template>
        </LineTabs>
      </div>
    `,
  }),
}

export const Box: StoryObj<typeof BoxTabs> = {
  name: 'BoxTabs',
  render: () => ({
    components: { BoxTabs },
    setup() {
      const tabs = ref([
        { label: '전체',   value: 'all',      active: true,  disabled: false },
        { label: '진행중', value: 'process',  active: false, disabled: false },
        { label: '완료',   value: 'done',     active: false, disabled: false },
        { label: '비활성', value: 'disabled', active: false, disabled: true  },
      ])
      const onChange = (val: string) => {
        tabs.value = tabs.value.map(t => ({ ...t, active: t.value === val }))
      }
      return { tabs, onChange }
    },
    template: `<BoxTabs :tab-list="tabs" @change="onChange" />`,
  }),
}

export const Page: StoryObj<typeof PageTabs> = {
  name: 'PageTabs',
  render: () => ({
    components: { PageTabs },
    template: `<PageTabs />`,
  }),
}
