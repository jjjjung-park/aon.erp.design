import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'

const meta: Meta = {
  title: '데이터 표시/리스트/DataList',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  name: '기본',
  render: () => ({
    setup() {
      const active = ref('kim')
      return { active }
    },
    template: `
      <ul class="data-list w-80">
        <li class="data-list__item cursor-pointer" :class="active === 'hong' && 'active'" @click="active = 'hong'">
          <div class="data-list__cont data-list__cont-left">
            <span>홍길동</span>
            <span class="data-list__desc">개발팀 · 사원</span>
          </div>
        </li>
        <li class="data-list__item cursor-pointer" :class="active === 'kim' && 'active'" @click="active = 'kim'">
          <div class="data-list__cont data-list__cont-left">
            <span>김철수</span>
            <span class="data-list__desc">디자인팀 · 대리</span>
          </div>
        </li>
        <li class="data-list__item cursor-pointer" :class="active === 'lee' && 'active'" @click="active = 'lee'">
          <div class="data-list__cont data-list__cont-left">
            <span>이영희</span>
            <span class="data-list__desc">기획팀 · 과장</span>
          </div>
        </li>
      </ul>
    `,
  }),
}

export const TwoColumn: Story = {
  name: '2단',
  render: () => ({
    setup() {
      const active = ref('kim')
      return { active }
    },
    template: `
      <ul class="data-list w-80">
        <li class="data-list__item cursor-pointer" :class="active === 'hong' && 'active'" @click="active = 'hong'">
          <div class="data-list__cont data-list__cont-left">
            <span>홍길동</span>
            <span class="data-list__desc">개발팀 · 사원</span>
          </div>
          <div class="data-list__cont data-list__cont-right">
            <span>2024-01-15</span>
            <span class="data-list__desc">등록일</span>
          </div>
        </li>
        <li class="data-list__item cursor-pointer" :class="active === 'kim' && 'active'" @click="active = 'kim'">
          <div class="data-list__cont data-list__cont-left">
            <span>김철수</span>
            <span class="data-list__desc">디자인팀 · 대리</span>
          </div>
          <div class="data-list__cont data-list__cont-right">
            <span>2024-03-22</span>
            <span class="data-list__desc">등록일</span>
          </div>
        </li>
        <li class="data-list__item cursor-pointer" :class="active === 'lee' && 'active'" @click="active = 'lee'">
          <div class="data-list__cont data-list__cont-left">
            <span>이영희</span>
            <span class="data-list__desc">기획팀 · 과장</span>
          </div>
          <div class="data-list__cont data-list__cont-right">
            <span>2023-11-08</span>
            <span class="data-list__desc">등록일</span>
          </div>
        </li>
      </ul>
    `,
  }),
}

export const WithBadge: Story = {
  name: '배지',
  render: () => ({
    setup() {
      const active = ref('a')
      return { active }
    },
    template: `
      <div class="data-list w-80">
        <div class="data-list__item cursor-pointer hover:bg-gray-100" :class="active === 'a' && 'active'" @click="active = 'a'">
          <div class="data-list__cont w-[75%]">
            <p class="flex items-center gap-1">
              <strong class="truncate">530KAL123W530KAL123W530KAL123W</strong>
              <UiBadge variant="count" tone="default" size="sm">999+</UiBadge>
            </p>
            <span class="caption text-secondary">단일 최초가 <strong>999,999,999 KRW</strong></span>
          </div>
          <UiBadge variant="hold" class="self-start">예약중</UiBadge>
        </div>
        <div class="data-list__item cursor-pointer hover:bg-gray-100" :class="active === 'b' && 'active'" @click="active = 'b'">
          <div class="data-list__cont w-[75%]">
            <p class="flex items-center gap-1">
              <strong class="truncate">530KAL456W530KAL456W</strong>
              <UiBadge variant="count" tone="default" size="sm">12</UiBadge>
            </p>
            <span class="caption text-secondary">개별 최초가</span>
          </div>
        </div>
        <div class="data-list__item cursor-pointer hover:bg-gray-100" :class="active === 'c' && 'active'" @click="active = 'c'">
          <div class="data-list__cont w-[75%]">
            <p class="flex items-center gap-1">
              <strong class="truncate">530KAL789W</strong>
              <UiBadge variant="count" tone="default" size="sm">5</UiBadge>
            </p>
            <span class="caption text-secondary">단일 최초가 <strong>88,000 KRW</strong></span>
          </div>
          <UiBadge variant="hold" class="self-start">예약중</UiBadge>
        </div>
      </div>
    `,
  }),
}
