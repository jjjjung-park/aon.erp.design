import type { Meta, StoryObj } from '@storybook/vue3'
import EmptyData from './EmptyData.vue'
import EmptyPage from './EmptyPage.vue'

const meta: Meta = {
  title: '패턴/Empty',
  tags: ['autodocs'],
}
export default meta

export const Data: StoryObj = {
  name: 'EmptyData — 테이블 빈 상태',
  render: () => ({
    components: { EmptyData },
    template: `
      <div class="border border-border rounded-sm h-60 flex items-center justify-center">
        <EmptyData />
      </div>
    `,
  }),
}

export const Page: StoryObj = {
  name: 'EmptyPage — 페이지 빈 상태',
  render: () => ({
    components: { EmptyPage },
    template: `
      <div class="h-80 flex items-center justify-center">
        <EmptyPage />
      </div>
    `,
  }),
}
