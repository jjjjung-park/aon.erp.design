import type { Meta, StoryObj } from '@storybook/vue3'
import TableLayout from '@/markup/components/table/TableLayout.vue'
import Th from '@/markup/components/table/Th.vue'
import Td from '@/markup/components/table/Td.vue'

const meta: Meta<typeof TableLayout> = {
  title: '레이아웃/TableLayout',
  component: TableLayout,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    pagination: { control: 'boolean', description: '하단 페이지네이션 표시' },
    filter:     { control: 'boolean', description: '키워드 검색 버튼' },
    download:   { control: 'boolean', description: '엑셀 다운로드 버튼' },
    setting:    { control: 'boolean', description: '테이블 설정 버튼' },
  },
  args: {
    pagination: true,
    filter: true,
    download: true,
    setting: true,
  },
}
export default meta
type Story = StoryObj<typeof TableLayout>

const skeletonTable = `
  <UiTable class="border-b table-fixed w-full">
    <UiTableHeader>
      <UiTableRow>
        <Th type="checkbox" />
        <Th data="이름" />
        <Th data="이메일" />
        <Th data="부서" />
        <Th data="직책" />
        <Th data="상태" />
        <Th type="function" />
      </UiTableRow>
    </UiTableHeader>
    <UiTableBody>
      <UiTableRow v-for="i in 10" :key="i">
        <Td type="checkbox" />
        <Td><UiSkeleton class="h-4 w-full" /></Td>
        <Td><UiSkeleton class="h-4 w-3/4" /></Td>
        <Td><UiSkeleton class="h-4 w-1/2" /></Td>
        <Td><UiSkeleton class="h-4 w-2/3" /></Td>
        <Td><UiSkeleton class="h-4 w-1/2" /></Td>
        <Td type="function"><UiButton variant="ghost" size="icon-sm"><LucideEllipsis /></UiButton></Td>
      </UiTableRow>
    </UiTableBody>
  </UiTable>
`

export const Default: Story = {
  name: 'TableLayout — 기본',
  render: (args) => ({
    components: { TableLayout, Th, Td },
    setup() { return { args } },
    template: `
      <div class="">
        <TableLayout v-bind="args">
          <template #table>${skeletonTable}</template>
          <template #pagination>
            <UiPagination :total="245" :sibling-count="1" show-edges :default-page="1">
              <UiPaginationContent>
                <UiPaginationItem><UiPaginationPrevious /></UiPaginationItem>
                <UiPaginationItem><UiPaginationNext /></UiPaginationItem>
              </UiPaginationContent>
            </UiPagination>
          </template>
        </TableLayout>
      </div>
    `,
  }),
}
