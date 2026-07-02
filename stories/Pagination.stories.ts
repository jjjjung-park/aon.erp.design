import type { Meta, StoryObj } from '@storybook/vue3'
import TablePagination from '@/markup/components/pagination/TablePagination.vue'
import InputPagination from '@/markup/components/pagination/InputPagination.vue'
import DotPagination from '@/markup/components/pagination/DotPagination.vue'
import { ref } from 'vue'

// meta는 TablePagination 기준으로 바인딩
// (각 스토리에서 argTypes/args를 개별 override)
const meta: Meta = {
  title: 'UI 패턴/Pagination',
  tags: ['autodocs'],
}
export default meta

export const Table: StoryObj<typeof TablePagination> = {
  name: 'TablePagination',
  render: (args) => ({
    components: { TablePagination },
    setup() {
      const page = ref(1)
      return { args, page }
    },
    template: `<TablePagination v-model:page="page" v-bind="args" />`,
  }),
}

export const Input: StoryObj<typeof InputPagination> = {
  name: 'InputPagination',
  argTypes: {
    total: { control: 'number', description: '전체 페이지 수' },
  },
  args: {
    total: 20,
  },
  render: (args) => ({
    components: { InputPagination },
    setup() {
      const page = ref(1)
      return { args, page }
    },
    template: `<InputPagination v-model:page="page" v-bind="args" />`,
  }),
}

export const Dot: StoryObj<typeof DotPagination> = {
  name: 'DotPagination',
  argTypes: {
    total: { control: 'number', description: '전체 페이지 수', min: 1, max: 20 },
  },
  args: {
    total: 5,
  },
  render: (args) => ({
    components: { DotPagination },
    setup() {
      const page = ref(0)
      return { args, page }
    },
    template: `<DotPagination v-model="page" v-bind="args" />`,
  }),
}
