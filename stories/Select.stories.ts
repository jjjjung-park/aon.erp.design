import type { Meta, StoryObj } from '@storybook/vue3'
import SelectBase from '@/markup/components/select/SelectBase.vue'
import ComboboxTag from '@/markup/components/select/ComboboxTag.vue'

const sampleItems = [
  { label: '옵션 1', value: '1' },
  { label: '옵션 2', value: '2' },
  { label: '옵션 3', value: '3' },
  { label: '옵션 4', value: '4' },
]

const meta: Meta<typeof SelectBase> = {
  title: '데이터 입력/Select',
  component: SelectBase,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    placeholder: { control: 'text',   description: '플레이스홀더' },
    disabled:    { control: 'boolean', description: '비활성화' },
    readonly:    { control: 'boolean', description: '읽기 전용' },
    size:        { control: 'select', options: ['sm', 'default', 'lg'], description: '사이즈' },
  },
  args: {
    placeholder: '선택하세요',
    disabled: false,
    readonly: false,
    size: 'default',
  },
}
export default meta
type Story = StoryObj<typeof SelectBase>

export const Default: Story = {
  name: 'Select — 인터랙티브',
  render: (args) => ({
    components: { SelectBase },
    setup() { return { args, sampleItems } },
    template: `<div class="w-60"><SelectBase v-bind="args" :list-item="sampleItems" /></div>`,
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
        <SelectBase size="lg"      :list-item="sampleItems" placeholder="Large" />
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

export const ComboboxTagSingle: Story = {
  name: 'ComboboxTag — 단일 선택',
  render: () => ({
    components: { ComboboxTag },
    setup() { return { sampleItems } },
    template: `
      <div class="w-60">
        <ComboboxTag :list-item="sampleItems" placeholder="선택하세요" :multiple="false" />
      </div>
    `,
  }),
}

export const ComboboxTagMultiple: Story = {
  name: 'ComboboxTag — 다중 선택',
  render: () => ({
    components: { ComboboxTag },
    setup() { return { sampleItems } },
    template: `
      <div class="w-60">
        <ComboboxTag :list-item="sampleItems" placeholder="선택하세요" :multiple="true" :disabled="false" />
      </div>
    `,
  }),
}
