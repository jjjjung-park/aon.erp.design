import type { Meta, StoryObj } from '@storybook/vue3'
import LineTabs from '@/markup/components/tabs/LineTabs.vue'
import BoxTabs from '@/markup/components/tabs/BoxTabs.vue'
import PageTabs from '@/markup/components/tabs/PageTabs.vue'
import { ref } from 'vue'

const meta: Meta<typeof LineTabs> = {
  title: '내비게이션/Tabs',
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
      { label: '전체',   value: 'all',      active: true,  disabled: false },
      { label: '진행중', value: 'process',  active: false, disabled: false },
      { label: '완료',   value: 'done',     active: false, disabled: false },
      { label: '비활성', value: 'disabled', active: false, disabled: true  },
    ],
  },
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
      return { tabs, onChange }
    },
    template: `
      <div class="border-b border-border">
        <LineTabs :tab-list="tabs" type="primary" @change="onChange" />
      </div>
    `,
  }),
}

export const LineDefault: Story = {
  name: 'LineTabs — default',
  render: (args) => ({
    components: { LineTabs },
    setup() {
      const tabs = ref(args.tabList.map((t: any, i: number) => ({ ...t, active: i === 0 })))
      const onChange = (val: string) => {
        tabs.value = tabs.value.map((t: any) => ({ ...t, active: t.value === val }))
      }
      return { tabs, onChange }
    },
    template: `
      <div class="border-b border-border">
        <LineTabs :tab-list="tabs" type="default" @change="onChange" />
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
