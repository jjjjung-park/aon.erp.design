import type { Meta, StoryObj } from '@storybook/vue3'
import Tags from './Tags.vue'

const meta: Meta = {
  title: '패턴/Tag',
  tags: ['autodocs'],
}
export default meta

export const AllVariants: StoryObj = {
  name: '모든 Variant',
  render: () => ({
    components: { Tags },
    template: `
      <div class="flex flex-wrap gap-2 items-center">
        <Tags variant="default" title="Default" />
        <Tags variant="secondary" title="Secondary" />
        <Tags variant="outline" title="Outline" />
        <Tags variant="process" title="처리중" />
        <Tags variant="accept" title="승인" />
        <Tags variant="reject" title="반려" />
        <Tags variant="hold" title="보류" />
        <Tags variant="info" title="정보" />
      </div>
    `,
  }),
}

export const Closeable: StoryObj = {
  name: '닫기 버튼',
  render: () => ({
    components: { Tags },
    template: `
      <div class="flex flex-wrap gap-2 items-center">
        <Tags variant="default" title="삭제 가능" :closeable="true" />
        <Tags variant="secondary" title="삭제 가능" :closeable="true" />
        <Tags variant="outline" title="삭제 가능" :closeable="true" />
      </div>
    `,
  }),
}
