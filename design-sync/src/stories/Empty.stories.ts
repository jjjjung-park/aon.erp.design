import type { Meta, StoryObj } from '@storybook/vue3'
import EmptyData from '@/markup/components/empty/EmptyData.vue'
import EmptyPage from '@/markup/components/empty/EmptyPage.vue'

// EmptyData / EmptyPage 모두 외부 props 없음
const meta: Meta = {
  title: '피드백/Empty',
  tags: ['autodocs'],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
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
