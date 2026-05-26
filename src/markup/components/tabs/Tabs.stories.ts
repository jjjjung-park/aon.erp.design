import type { Meta, StoryObj } from '@storybook/vue3'
import LineTabs from './LineTabs.vue'
import BoxTabs from './BoxTabs.vue'
import PageTabs from './PageTabs.vue'
import { ref } from 'vue'

const meta: Meta = {
  title: '패턴/Tabs',
  tags: ['autodocs'],
}
export default meta

const sampleTabs = [
  { label: '전체', value: 'all', active: true, disabled: false },
  { label: '진행중', value: 'process', active: false, disabled: false },
  { label: '완료', value: 'done', active: false, disabled: false },
  { label: '비활성', value: 'disabled', active: false, disabled: true },
]

export const Line: StoryObj = {
  name: 'LineTabs',
  render: () => ({
    components: { LineTabs },
    setup() {
      const tabs = ref(sampleTabs.map((t, i) => ({ ...t, active: i === 0 })))
      const onChange = (val: string) => {
        tabs.value = tabs.value.map(t => ({ ...t, active: t.value === val }))
      }
      return { tabs, onChange }
    },
    template: `
      <div class="border-b border-border">
        <LineTabs :tab-list="tabs" @change="onChange" />
      </div>
    `,
  }),
}

export const Box: StoryObj = {
  name: 'BoxTabs',
  render: () => ({
    components: { BoxTabs },
    setup() {
      const tabs = ref(sampleTabs.map((t, i) => ({ ...t, active: i === 0 })))
      const onChange = (val: string) => {
        tabs.value = tabs.value.map(t => ({ ...t, active: t.value === val }))
      }
      return { tabs, onChange }
    },
    template: `<BoxTabs :tab-list="tabs" @change="onChange" />`,
  }),
}

export const Page: StoryObj = {
  name: 'PageTabs',
  render: () => ({
    components: { PageTabs },
    setup() {
      const tabs = ref(sampleTabs.map((t, i) => ({ ...t, active: i === 0 })))
      const onChange = (val: string) => {
        tabs.value = tabs.value.map(t => ({ ...t, active: t.value === val }))
      }
      return { tabs, onChange }
    },
    template: `<PageTabs :tab-list="tabs" @change="onChange" />`,
  }),
}
