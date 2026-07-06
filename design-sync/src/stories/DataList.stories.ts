import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'UI 패턴/리스트/DataList',
  tags: ['autodocs', 'done'],
  parameters: { layout: 'centered' },
  argTypes: {
    active: {
      control: 'boolean',
      description: '활성 상태 (첫 번째 아이템)',
    },
    clickable: {
      control: 'boolean',
      description: '호버/클릭 가능 상태',
    },
    desc: {
      control: 'boolean',
      description: '설명 텍스트 (data-list__desc)',
    },
    rightColumn: {
      control: 'radio',
      options: ['없음', '텍스트', '상태배지'],
      description: '우측 영역',
    },
    countBadge: {
      control: 'boolean',
      description: '카운터 배지',
    },
  },
  args: {
    active: false,
    clickable: false,
    desc: false,
    rightColumn: '없음',
    countBadge: false,
  },
}
export default meta
type Story = StoryObj<{ active: boolean; clickable: boolean; desc: boolean; rightColumn: '없음' | '텍스트' | '상태배지'; countBadge: boolean }>

const items = [
  { name: '홍길동', desc: '개발팀 · 사원', date: '2024-01-15', count: 5 },
  { name: '김철수', desc: '디자인팀 · 대리', date: '2024-03-22', count: 12 },
  { name: '이영희', desc: '기획팀 · 과장', date: '2023-11-08', count: 999 },
]

const renderTemplate = `
  <ul class="data-list w-80">
    <li
      v-for="(item, i) in items"
      :key="item.name"
      class="data-list__item"
      :class="[{ active: i === 0 && args.active }, args.clickable ? 'cursor-pointer hover:bg-surface-muted' : 'cursor-default']"
    >
      <div class="data-list__cont data-list__cont-left">
        <p v-if="args.countBadge" class="flex items-center gap-1">
          <strong class="truncate">{{ item.name }}</strong>
          <UiBadge size="count">{{ item.count > 99 ? '99+' : item.count }}</UiBadge>
        </p>
        <strong class="truncate" v-else>{{ item.name }}</strong>
        <span v-if="args.desc" class="data-list__desc">{{ item.desc }}</span>
      </div>
      <div v-if="args.rightColumn === '텍스트'" class="data-list__cont data-list__cont-right">
        <span>{{ item.date }}</span>
        <span v-if="args.desc" class="data-list__desc">등록일</span>
      </div>
      <UiBadge v-if="args.rightColumn === '상태배지'" variant="hold" class="self-start">예약중</UiBadge>
    </li>
  </ul>
`

export const Base: Story = {
  name: '기본',
  args: { desc: false, rightColumn: '없음', countBadge: false },
  render: (args) => ({ setup() { return { args, items } }, template: renderTemplate }),
}

export const WithDesc: Story = {
  name: '기본 + 설명',
  args: { desc: true, rightColumn: '없음', countBadge: false },
  render: (args) => ({ setup() { return { args, items } }, template: renderTemplate }),
}

export const WithRightText: Story = {
  name: '기본 + 우측텍스트',
  args: { desc: false, rightColumn: '텍스트', countBadge: false },
  render: (args) => ({ setup() { return { args, items } }, template: renderTemplate }),
}

export const WithRightBadge: Story = {
  name: '기본 + 우측상태배지',
  args: { desc: false, rightColumn: '상태배지', countBadge: false },
  render: (args) => ({ setup() { return { args, items } }, template: renderTemplate }),
}

export const WithDescAndRightText: Story = {
  name: '기본 + 설명 + 우측텍스트',
  args: { desc: true, rightColumn: '텍스트', countBadge: false },
  render: (args) => ({ setup() { return { args, items } }, template: renderTemplate }),
}

export const WithDescAndRightBadge: Story = {
  name: '기본 + 설명 + 우측상태배지',
  args: { desc: true, rightColumn: '상태배지', countBadge: false },
  render: (args) => ({ setup() { return { args, items } }, template: renderTemplate }),
}

export const WithCountBadge: Story = {
  name: '기본 + 카운트배지',
  args: { desc: false, rightColumn: '없음', countBadge: true },
  render: (args) => ({ setup() { return { args, items } }, template: renderTemplate }),
}
