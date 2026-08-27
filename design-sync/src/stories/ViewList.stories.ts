import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'UI 패턴/list/ViewList',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Column: Story = {
  name: '세로',
  render: () => ({
    template: `
      <div class="view-list w-80 border border-border rounded-sm">
        <h4>기본 정보</h4>
        <div class="view-list__item">
          <span class="view-list__item-title">이름</span>
          <span class="view-list__item-cont">홍길동</span>
        </div>
        <div class="view-list__item">
          <span class="view-list__item-title">부서</span>
          <span class="view-list__item-cont">개발팀</span>
        </div>
        <div class="view-list__item">
          <span class="view-list__item-title">이메일</span>
          <span class="view-list__item-cont">hong@example.com</span>
        </div>
        <div class="view-list__item">
          <span class="view-list__item-title">등록일</span>
          <span class="view-list__item-cont">2024-01-15</span>
        </div>
      </div>
    `,
  }),
}

// export const Row: Story = {
//   name: '가로',
//   render: () => ({
//     template: `
//       <div class="view-list w-80 border border-border rounded-sm">
//         <h4>기본 정보</h4>
//         <div class="view-list__item--row">
//           <span class="view-list__item-title">이름</span>
//           <span class="view-list__item-cont">홍길동</span>
//         </div>
//         <div class="view-list__item--row">
//           <span class="view-list__item-title">부서</span>
//           <span class="view-list__item-cont">개발팀</span>
//         </div>
//         <div class="view-list__item--row">
//           <span class="view-list__item-title">이메일</span>
//           <span class="view-list__item-cont">hong@example.com</span>
//         </div>
//         <div class="view-list__item--row">
//           <span class="view-list__item-title">등록일</span>
//           <span class="view-list__item-cont">2024-01-15</span>
//         </div>
//       </div>
//     `,
//   }),
// }

export const MultiCont: Story = {
  name: '복수 값',
  render: () => ({
    template: `
      <div class="view-list w-80 border border-border rounded-sm">
        <h4>첨부 파일</h4>
        <div class="view-list__item">
          <span class="view-list__item-title">파일 목록</span>
          <span class="view-list__item-cont">보고서_최종.pdf</span>
          <span class="view-list__item-cont">첨부이미지.png</span>
          <span class="view-list__item-cont">데이터.xlsx</span>
        </div>
        <div class="view-list__item--row">
          <span class="view-list__item-title">담당자</span>
          <span class="view-list__item-cont">홍길동</span>
        </div>
      </div>
    `,
  }),
}
