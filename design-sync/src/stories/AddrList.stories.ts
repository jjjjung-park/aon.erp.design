import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: '데이터 표시/리스트/AddrList',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  name: '기본',
  render: () => ({
    template: `
      <div class="w-80 px-6">
        <div class="addr-list flex items-center gap-2 px-6 py-2">
          <div class="addr-list__type">
            <UiBadge variant="outline">회사</UiBadge>
          </div>
          <p class="addr-list__item">서울특별시 강남구 테헤란로 123, 456호</p>
        </div>
        <div class="addr-list flex items-center gap-2 px-6 py-2">
          <div class="addr-list__type">
            <UiBadge variant="outline">자택</UiBadge>
          </div>
          <p class="addr-list__item">경기도 성남시 분당구 판교로 789</p>
        </div>
        <div class="addr-list flex items-center gap-2 px-6 py-2">
          <div class="addr-list__type">
            <UiBadge variant="outline">기타</UiBadge>
          </div>
          <p class="addr-list__item">부산광역시 해운대구 해운대해변로 101</p>
        </div>
      </div>
    `,
  }),
}
