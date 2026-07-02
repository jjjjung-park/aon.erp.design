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
      options: ['default', 'secondary', 'outline', 'disabled'],
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

export const Chip: Story = {
  name: 'Chip — 선택 상태',
  render: () => ({
    components: { Tags },
    template: `
      <div class="flex flex-wrap gap-2 items-center">
        <Tags type="chip" variant="default"   title="선택완료된 태그" :closeable="true">
          <template #default><LucideCheck class="size-3 shrink-0"/><p class="truncate">선택완료된 태그</p></template>
        </Tags>
        <Tags type="chip" variant="secondary" title="선택한 태그" :closeable="true">
          <template #default><LucideCheck class="size-3 shrink-0"/><p class="truncate">선택한 태그</p></template>
        </Tags>
        <Tags type="chip" variant="outline"   title="미선택 태그"  :closeable="true"/>
        <Tags type="chip" variant="disabled"  title="비활성 태그" :closeable="true">
          <template #default><LucideCheck class="size-3 shrink-0"/><p class="truncate">비활성 태그</p></template>
        </Tags>
      </div>
    `,
  }),
}

export const TagLevel: Story = {
  name: 'Tag — 레벨',
  render: () => ({
    components: { Tags },
    template: `
      <div class="flex flex-wrap gap-2 items-center">
        <Tags type="tag" variant="outline"   title="Low Level" />
        <Tags type="tag" variant="info"      title="Middle level" />
        <Tags type="tag" variant="default"   title="High Level" />
        <Tags type="tag" variant="secondary">
          <template #default><LucideCheck class="size-3 shrink-0"/><p class="truncate">Checked</p></template>
        </Tags>
      </div>
    `,
  }),
}
