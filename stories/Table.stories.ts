import type { Meta, StoryObj } from '@storybook/vue3'
import Th from '@/markup/components/table/Th.vue'
import Td from '@/markup/components/table/Td.vue'

const meta: Meta = {
  title: 'UI 패턴/Table',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}
export default meta
type Story = StoryObj

// ─── Full ─────────────────────────────────────────────────────────────────────

export const FullTable: Story = {
  name: 'Table — 전체 조합',
  render: (args) => ({
    components: { Th, Td },
    setup() { return { args } },
    template: `
      <UiTable :class="['table-fixed w-full', args.secondary ? 'table-secondary' : 'border-b']">
        <UiTableHeader>
          <UiTableRow>
            <Th type="checkbox" />
            <Th data="이름" />
            <Th data="이메일" />
            <Th data="부서" />
            <Th data="상태" />
            <Th type="function" />
          </UiTableRow>
        </UiTableHeader>
        <UiTableBody>
          <UiTableRow v-for="i in 5" :key="i">
            <Td type="checkbox" />
            <Td><UiSkeleton class="h-4 w-full" /></Td>
            <Td><UiSkeleton class="h-4 w-3/4" /></Td>
            <Td><UiSkeleton class="h-4 w-1/2" /></Td>
            <Td><UiBadge variant="secondary">처리중</UiBadge></Td>
            <Td type="function">
              <UiButton variant="ghost" size="icon-sm"><LucideEllipsis /></UiButton>
            </Td>
          </UiTableRow>
        </UiTableBody>
      </UiTable>
    `,
  }),
  argTypes: {
    secondary: { control: 'boolean', description: 'table-secondary 클래스 적용' },
  },
  args: {
    secondary: false,
  },
}

// ─── Th ───────────────────────────────────────────────────────────────────────

export const ThInteractive: Story = {
  name: 'Th — 인터랙티브',
  render: (args) => ({
    components: { Th },
    setup() { return { args } },
    template: `
      <UiTable :class="args.secondary ? 'table-secondary' : ''">
        <UiTableHeader>
          <UiTableRow>
            <Th v-bind="args" />
          </UiTableRow>
        </UiTableHeader>
      </UiTable>
    `,
  }),
  argTypes: {
    data:          { control: 'text',    description: '헤더 텍스트' },
    type:          { control: 'select',  options: ['default', 'checkbox', 'function'], description: '셀 타입' },
    sort:          { control: 'boolean', description: '정렬 버튼 표시' },
    resizing:      { control: 'boolean', description: '컬럼 리사이징 핸들' },
    checkDisabled: { control: 'boolean', description: '체크박스 비활성화 (type=checkbox)' },
    style:         { control: 'text',    description: '인라인 스타일 (width 등)' },
    secondary:     { control: 'boolean', description: 'table-secondary 클래스 적용' },
  },
  args: {
    data: '컬럼명',
    type: 'default',
    sort: false,
    resizing: true,
    checkDisabled: false,
    secondary: false,
  },
}

export const ThTypes: Story = {
  name: 'Th — 타입별',
  render: () => ({
    components: { Th },
    template: `
      <UiTable>
        <UiTableHeader>
          <UiTableRow>
            <Th type="checkbox" />
            <Th data="기본 컬럼" />
            <Th data="정렬 컬럼" :sort="true" />
            <Th data="리사이즈 없음" :resizing="false" />
            <Th type="function" />
          </UiTableRow>
        </UiTableHeader>
      </UiTable>
    `,
  }),
}

// ─── Td ───────────────────────────────────────────────────────────────────────

export const TdInteractive: Story = {
  name: 'Td — 인터랙티브',
  render: (args) => ({
    components: { Th, Td },
    setup() { return { args } },
    template: `
      <UiTable :class="args.secondary ? 'table-secondary' : ''">
        <UiTableHeader>
          <UiTableRow>
            <Th :type="args.type === 'checkbox' || args.type === 'function' ? args.type : 'default'"
                :data="args.type === 'default' ? '컬럼' : ''" />
          </UiTableRow>
        </UiTableHeader>
        <UiTableBody>
          <UiTableRow>
            <Td v-bind="args" />
          </UiTableRow>
        </UiTableBody>
      </UiTable>
    `,
  }),
  argTypes: {
    data:          { control: 'text',    description: '셀 텍스트 (슬롯 미사용 시)' },
    type:          { control: 'select',  options: ['default', 'checkbox', 'function'], description: '셀 타입' },
    checkDisabled: { control: 'boolean', description: '체크박스 비활성화 (type=checkbox)' },
    style:         { control: 'text',    description: '인라인 스타일 (width 등)' },
    secondary:     { control: 'boolean', description: 'table-secondary 클래스 적용' },
  },
  args: {
    data: '셀 내용',
    type: 'default',
    checkDisabled: false,
    secondary: false,
  },
}

export const TdTypes: Story = {
  name: 'Td — 타입별',
  render: () => ({
    components: { Th, Td },
    template: `
      <UiTable>
        <UiTableHeader>
          <UiTableRow>
            <Th type="checkbox" />
            <Th data="기본 텍스트" />
            <Th data="슬롯 콘텐츠" />
            <Th type="function" />
          </UiTableRow>
        </UiTableHeader>
        <UiTableBody>
          <UiTableRow v-for="i in 3" :key="i">
            <Td type="checkbox" />
            <Td data="텍스트 데이터" />
            <Td><UiBadge variant="secondary">처리중</UiBadge></Td>
            <Td type="function">
              <UiButton variant="ghost" size="icon-sm"><LucideEllipsis /></UiButton>
            </Td>
          </UiTableRow>
        </UiTableBody>
      </UiTable>
    `,
  }),
}
