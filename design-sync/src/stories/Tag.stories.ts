import { computed } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import Tags from '@/markup/components/tag/Tags.vue'

const meta: Meta = {
  title: '기초/Tag',
  component: Tags,
  tags: ['autodocs', 'done'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['tag', 'chip'],
      description: '타입',
    },
    tagVariant: {
      control: 'select',
      options: ['default', 'secondary', 'outline', 'info'],
      description: 'variant',
      if: { arg: 'type', eq: 'tag' },
    },
    chipVariant: {
      control: 'select',
      options: ['secondary', 'outline', 'disabled'],
      description: 'variant',
      if: { arg: 'type', eq: 'chip' },
    },
    title:     { control: 'text',    description: '태그 텍스트' },
    closeable: { control: 'boolean', description: '닫기 버튼 표시', if: { arg: 'type', eq: 'chip' } },
  },
  args: {
    type: 'tag',
    tagVariant: 'default',
    chipVariant: 'secondary',
    title: '태그',
    closeable: false,
  },
}
export default meta
type Story = StoryObj<{ type: string; tagVariant: string; chipVariant: string; title: string; closeable: boolean }>

export const Default: Story = {
  name: 'Tags — 인터랙티브',
  render: (args) => ({
    components: { Tags },
    setup() {
      const variant = computed(() => args.type === 'chip' ? args.chipVariant : args.tagVariant)
      return { args, variant }
    },
    template: `<Tags :type="args.type" :variant="variant" :title="args.title" :closeable="args.closeable" />`,
  }),
}

export const AllVariants: Story = {
  name: '모든 Variant',
  render: () => ({
    components: { Tags },
    template: `
      <div class="flex flex-col gap-3">
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs text-muted w-10">tag</span>
          <Tags type="tag" variant="default"   title="Default" />
          <Tags type="tag" variant="secondary" title="Secondary" />
          <Tags type="tag" variant="outline"   title="Outline" />
          <Tags type="tag" variant="info"      title="Info" />
        </div>
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs text-muted w-10">chip</span>
          <Tags type="chip" variant="secondary" title="Secondary" />
          <Tags type="chip" variant="outline"   title="Outline" />
          <Tags type="chip" variant="disabled"  title="Disabled" />
        </div>
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
          <span class="text-xs text-muted w-10">tag</span>
          <Tags type="tag" variant="default"   title="Default" />
          <Tags type="tag" variant="secondary" title="Secondary" />
          <Tags type="tag" variant="outline"   title="Outline" />
          <Tags type="tag" variant="info"      title="Info" />
        </div>
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs text-muted w-10">chip</span>
          <Tags type="chip" variant="secondary" title="Secondary" />
          <Tags type="chip" variant="outline"   title="Outline" />
          <Tags type="chip" variant="disabled"  title="Disabled" />
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
