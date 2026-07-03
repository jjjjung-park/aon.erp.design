import type { Meta, StoryObj } from '@storybook/vue3'
import SelectBase from '@/markup/components/select/SelectBase.vue'
import ComboboxTag from '@/markup/components/select/ComboboxTag.vue'

const sampleItems = [
  { label: '옵션 1', value: '1' },
  { label: '옵션 2', value: '2' },
  { label: '옵션 3', value: '3' },
  { label: '옵션 4', value: '4' },
]

const meta: Meta = {
  title: 'UI 패턴/Select',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    type: {
      control: 'radio',
      options: ['기본 셀렉트', 'comboboxTag'],
      description: '셀렉트 종류',
    },
    multiple: {
      control: 'radio',
      options: ['단일', '멀티'],
      description: '선택 모드',
      if: { arg: 'type', eq: 'comboboxTag' },
    },
    size: {
      control: 'radio',
      options: ['sm', 'default'],
      description: '사이즈',
      if: { arg: 'type', eq: '기본 셀렉트' },
    },
    placeholder: { control: 'text', description: '플레이스홀더' },
    disabled: { control: 'boolean', description: '비활성화' },
  },
  args: {
    type: 'comboboxTag',
    multiple: '단일',
    size: 'default',
    placeholder: '선택하세요',
    disabled: false,
  },
}
export default meta
type Story = StoryObj<{ type: '기본 셀렉트' | 'comboboxTag'; multiple: '단일' | '멀티'; size: 'sm' | 'default'; placeholder: string; disabled: boolean }>

export const Default: Story = {
  name: 'Select',
  render: (args) => ({
    components: { SelectBase, ComboboxTag },
    setup() { return { args, sampleItems } },
    template: `
      <div class="w-60">
        <ComboboxTag
          v-if="args.type === 'comboboxTag'"
          :list-item="sampleItems"
          :placeholder="args.placeholder"
          :multiple="args.multiple === '멀티'"
          :disabled="args.disabled"
        />
        <SelectBase
          v-else
          :list-item="sampleItems"
          :placeholder="args.placeholder"
          :disabled="args.disabled"
          :size="args.size"
        />
      </div>
    `,
  }),
}

export const Sizes: Story = {
  name: 'Select — 사이즈',
  render: () => ({
    components: { SelectBase },
    setup() { return { sampleItems } },
    template: `
      <div class="flex flex-col gap-3 w-60">
        <SelectBase size="sm"      :list-item="sampleItems" placeholder="Small" />
        <SelectBase size="default" :list-item="sampleItems" placeholder="Default" />
      </div>
    `,
  }),
}

export const States: Story = {
  name: 'Select — 상태',
  render: () => ({
    components: { SelectBase },
    setup() { return { sampleItems } },
    template: `
      <div class="flex flex-col gap-3 w-60">
        <SelectBase :list-item="sampleItems" placeholder="기본" />
        <SelectBase :list-item="sampleItems" placeholder="비활성화" :disabled="true" />
        <SelectBase :list-item="sampleItems" placeholder="읽기 전용" :readonly="true" />
      </div>
    `,
  }),
}
