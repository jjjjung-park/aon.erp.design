import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import ComboboxBase from '@/markup/components/select/ComboboxBase.vue'
import ComboboxTag from '@/markup/components/select/ComboboxTag.vue'

const sampleItems = [
  { label: '서울특별시', value: 'seoul' },
  { label: '부산광역시', value: 'busan' },
  { label: '대구광역시', value: 'daegu' },
  { label: '인천광역시', value: 'incheon' },
  { label: '광주광역시', value: 'gwangju' },
]

const meta: Meta = {
  title: 'UI 패턴/Combobox',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Base: Story = {
  name: 'ComboboxBase — 검색형',
  render: () => ({
    components: { ComboboxBase },
    setup() {
      return { sampleItems }
    },
    template: `
      <div class="w-72">
        <ComboboxBase :list-item="sampleItems" placeholder="지역을 검색하세요" />
      </div>
    `,
  }),
}

export const Tag: Story = {
  name: 'ComboboxTag — 태그 선택형',
  render: () => ({
    components: { ComboboxTag },
    setup() {
      return { sampleItems }
    },
    template: `
      <div class="w-72">
        <ComboboxTag :list-item="sampleItems" placeholder="지역을 선택하세요" :multiple="true" />
      </div>
    `,
  }),
}
