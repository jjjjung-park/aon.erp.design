import type { Meta, StoryObj } from '@storybook/vue3'
import Tags from '@/markup/components/tag/Tags.vue'

const meta: Meta<typeof Tags> = {
  title: '데이터 표시/Tag',
  component: Tags,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'outline', 'info'],
      description: 'variant',
    },
    type: {
      control: 'select',
      options: ['tag', 'chip'],
      description: '크기 타입 (tag: border-transparent / chip: rounded-full)',
    },
    title:     { control: 'text',    description: '태그 텍스트' },
    closeable: { control: 'boolean', description: '닫기 버튼 표시' },
  },
  args: {
    variant: 'default',
    type: 'tag',
    title: '태그',
    closeable: false,
  },
}
export default meta
type Story = StoryObj<typeof Tags>

export const Default: Story = {
  name: 'Tags — 인터랙티브',
  render: (args) => ({
    components: { Tags },
    setup() { return { args } },
    template: `<Tags v-bind="args" />`,
  }),
}

export const AllVariants: Story = {
  name: '모든 Variant',
  render: () => ({
    components: { Tags },
    template: `
      <div class="flex flex-wrap gap-2 items-center">
        <Tags variant="default"   title="Default" />
        <Tags variant="secondary" title="Secondary" />
        <Tags variant="outline"   title="Outline" />
        <Tags variant="info"      title="Info" />
      </div>
    `,
  }),
}

export const Types: Story = {
  name: 'Tag vs Chip',
  render: () => ({
    components: { Tags },
    template: `
      <div class="flex flex-col gap-3">
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs text-secondary w-10">tag</span>
          <Tags type="tag" variant="default"   title="Default" />
          <Tags type="tag" variant="secondary" title="Secondary" />
          <Tags type="tag" variant="outline"   title="Outline" />
          <Tags type="tag" variant="info"      title="Info" />
        </div>
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs text-secondary w-10">chip</span>
          <Tags type="chip" variant="default"   title="Default" />
          <Tags type="chip" variant="secondary" title="Secondary" />
          <Tags type="chip" variant="outline"   title="Outline" />
          <Tags type="chip" variant="info"      title="Info" />
        </div>
      </div>
    `,
  }),
}

export const Closeable: Story = {
  name: '닫기 버튼',
  render: () => ({
    components: { Tags },
    template: `
      <div class="flex flex-wrap gap-2 items-center">
        <Tags variant="default"   title="삭제 가능" :closeable="true" />
        <Tags variant="secondary" title="삭제 가능" :closeable="true" />
        <Tags variant="outline"   title="삭제 가능" :closeable="true" />
      </div>
    `,
  }),
}
