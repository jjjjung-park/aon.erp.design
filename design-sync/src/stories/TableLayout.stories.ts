import type { Meta, StoryObj } from '@storybook/vue3'
import TableLayout from '@/markup/components/table/TableLayout.vue'
import TablePagination from '@/markup/components/pagination/TablePagination.vue'
import Th from '@/markup/components/table/Th.vue'
import Td from '@/markup/components/table/Td.vue'
import { ref } from 'vue'

const meta: Meta<typeof TableLayout> = {
  title: '레이아웃/TableLayout',
  component: TableLayout,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', docs: { story: { height: '400px' } } },
  argTypes: {
    tableTop:    { control: 'boolean', description: '상단 액션 영역 표시',   table: { category: '테이블 레이아웃' } },
    dataAction:  { control: 'boolean', description: '데이터 건수 영역',      table: { category: '테이블 레이아웃' } },
    tableAction: { control: 'boolean', description: '테이블 액션 버튼 영역', table: { category: '테이블 레이아웃' } },
    filter:      { control: 'boolean', description: '키워드 검색 버튼',      table: { category: '테이블 레이아웃' } },
    download:    { control: 'boolean', description: '엑셀 다운로드 버튼',    table: { category: '테이블 레이아웃' } },
    setting:     { control: 'boolean', description: '테이블 설정 버튼',      table: { category: '테이블 레이아웃' } },
    pagination:  { control: 'boolean', description: '하단 페이지네이션',     table: { category: '테이블 레이아웃' } },
    sheetTable:  { control: 'boolean', description: '세컨더리 테이블',       table: { category: '전체 테이블' } },
    checkbox:    { control: 'boolean', description: '체크박스 컬럼',         table: { category: '전체 테이블' }, if: { arg: 'rowHeader', truthy: false } },
    rowHeader:   { control: 'boolean', description: 'row-header (첫 번째 컬럼)', table: { category: '전체 테이블' } },
    groupHeader: { control: 'boolean', description: '그룹 헤더',             table: { category: '헤더' } },
    sort:        { control: 'boolean', description: '정렬 버튼',             table: { category: '헤더' } },
    resizing:    { control: 'boolean', description: '리사이징 핸들',         table: { category: '헤더' } },
    pinned:      { control: 'boolean', description: '컬럼 고정 (체크박스 + 이름)', table: { category: '셀' } },
    editable:    { control: 'boolean', description: '에디터블 (td → FormItem)',    table: { category: '셀' } },
  },
  args: {
    tableTop: true,
    dataAction: true,
    tableAction: true,
    filter: true,
    download: true,
    setting: true,
    pagination: true,
    sheetTable: false,
    checkbox: true,
    rowHeader: false,
    groupHeader: false,
    sort: false,
    resizing: true,
    pinned: false,
    editable: false,
  },
}
export default meta
type Story = StoryObj<typeof TableLayout>

const tableRows = [
  { name: '홍길동', email: 'hong@example.com',  dept: '개발팀',   role: '과장', status: '재직' },
  { name: '이순신', email: 'lee@example.com',   dept: '디자인팀', role: '차장', status: '재직' },
  { name: '김철수', email: 'kim@example.com',   dept: '마케팅팀', role: '대리', status: '휴직' },
  { name: '박영희', email: 'park@example.com',  dept: '인사팀',   role: '부장', status: '재직' },
  { name: '최민준', email: 'choi@example.com',  dept: '개발팀',   role: '사원', status: '재직' },
  { name: '정수연', email: 'jung@example.com',  dept: '기획팀',   role: '과장', status: '재직' },
  { name: '강동원', email: 'kang@example.com',  dept: '영업팀',   role: '차장', status: '퇴사' },
  { name: '윤아름', email: 'yoon@example.com',  dept: '개발팀',   role: '대리', status: '재직' },
  { name: '임지훈', email: 'lim@example.com',   dept: '디자인팀', role: '사원', status: '재직' },
  { name: '오세진', email: 'oh@example.com',    dept: '마케팅팀', role: '과장', status: '휴직' },
]

export const Default: Story = {
  name: 'TableLayout — 기본',
  render: (args) => ({
    components: { TableLayout, TablePagination, Th, Td },
    setup() {
      const page = ref(1)
      return { args, page, tableRows }
    },
    template: `
      <TableLayout v-bind="args">
        <template #table>
          <UiTable :class="['border-b table-fixed w-full', args.sheetTable ? 'table-secondary' : '', args.groupHeader ? 'table--group-header' : '']">
            <UiTableHeader>

              <!-- 그룹 헤더 행 -->
              <UiTableRow v-if="args.groupHeader">
                <Th v-if="args.checkbox && !args.rowHeader" />
                <Th data="인적사항" colspan="2" />
                <Th data="소속" colspan="2" />
                <Th data="상태" />
                <Th type="function" />
              </UiTableRow>

              <!-- 일반 헤더 행 -->
              <UiTableRow>
                <Th v-if="args.checkbox && !args.rowHeader" type="checkbox" :class="args.pinned && !args.groupHeader ? 'pinned--left' : ''" />
                <Th data="이름" :sort="args.sort" :resizing="args.resizing" :class="[args.rowHeader ? 'table__row-header' : '', args.pinned && !args.groupHeader ? 'pinned--left' : '']" />
                <Th data="이메일" :sort="args.sort" :resizing="args.resizing" />
                <Th data="부서"   :sort="args.sort" :resizing="args.resizing" />
                <Th data="직책"   :sort="args.sort" :resizing="args.resizing" />
                <Th data="상태"   :sort="args.sort" :resizing="args.resizing" />
                <Th type="function" />
              </UiTableRow>

            </UiTableHeader>
            <UiTableBody>
              <UiTableRow v-for="row in tableRows" :key="row.email">
                <Td v-if="args.checkbox && !args.rowHeader" type="checkbox" :class="args.pinned && !args.groupHeader ? 'pinned--left' : ''" />
                <Td :data="args.editable ? undefined : row.name" :class="[args.rowHeader ? 'table__row-header' : '', args.pinned && !args.groupHeader ? 'pinned--left' : '', 'text-center']">
                  <FormItem v-if="args.editable" class="h-auto" :placeholder="row.name" />
                </Td>
                <Td :data="args.editable ? undefined : row.email" class="text-center">
                  <FormItem v-if="args.editable" class="h-auto" :placeholder="row.email" />
                </Td>
                <Td :data="args.editable ? undefined : row.dept" class="text-center">
                  <FormItem v-if="args.editable" class="h-auto" :placeholder="row.dept" />
                </Td>
                <Td :data="args.editable ? undefined : row.role" class="text-center">
                  <FormItem v-if="args.editable" class="h-auto" :placeholder="row.role" />
                </Td>
                <Td :data="args.editable ? undefined : row.status" class="text-center">
                  <FormItem v-if="args.editable" class="h-auto" :placeholder="row.status" />
                </Td>
                <Td type="function"><UiButton variant="ghost" size="icon-sm"><LucideEllipsis /></UiButton></Td>
              </UiTableRow>
            </UiTableBody>
          </UiTable>
        </template>
        <template #pagination>
          <TablePagination v-model:page="page" :total="10" />
        </template>
      </TableLayout>
    `,
  }),
}
