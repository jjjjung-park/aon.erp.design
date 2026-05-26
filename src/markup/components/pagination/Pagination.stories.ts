import type { Meta, StoryObj } from '@storybook/vue3'
import TablePagination from './TablePagination.vue'
import InputPagination from './InputPagination.vue'
import DotPagination from './DotPagination.vue'
import { ref } from 'vue'

const meta: Meta = {
  title: '패턴/Pagination',
  tags: ['autodocs'],
}
export default meta

export const Table: StoryObj = {
  name: 'TablePagination',
  render: () => ({
    components: { TablePagination },
    setup() {
      const page = ref(1)
      return { page }
    },
    template: `<TablePagination v-model:page="page" :total="100" :per-page="10" />`,
  }),
}

export const Input: StoryObj = {
  name: 'InputPagination',
  render: () => ({
    components: { InputPagination },
    setup() {
      const page = ref(1)
      return { page }
    },
    template: `<InputPagination v-model:page="page" :total-page="20" />`,
  }),
}

export const Dot: StoryObj = {
  name: 'DotPagination',
  render: () => ({
    components: { DotPagination },
    setup() {
      const page = ref(0)
      return { page }
    },
    template: `<DotPagination v-model="page" :total="5" />`,
  }),
}
