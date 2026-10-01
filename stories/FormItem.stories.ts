import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import ComboboxTag from '@/markup/components/select/ComboboxTag.vue'
import DatePicker from '@/markup/components/datePicker/DatePicker.vue'
import FormAddr from '@/markup/components/form/FormAddr.vue'
import { InputBase } from '@/markup/components/inputs'

const sampleItems = [
  { label: '옵션 1', value: '1' },
  { label: '옵션 2', value: '2' },
  { label: '옵션 3', value: '3' },
  { label: '옵션 4', value: '4' },
]

const meta: Meta = {
  title: 'UI 패턴/FormItem',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    label: { control: 'text', description: '라벨 텍스트' },
    showLabel: { control: 'boolean', description: '라벨 표시' },
    required: { control: 'boolean', description: '필수 표시 (*)' },
    placeholder: { control: 'text', description: '플레이스홀더' },
    validateText: { control: 'text', description: '안내/오류 메시지' },
    ariaInvalid: { control: 'boolean', description: '에러 상태' },
    disabled: { control: 'boolean', description: '비활성화' },
    readonly: { control: 'boolean', description: '읽기 전용' },
    type: {
      control: 'select',
      options: ['text', 'comboboxTag', 'Checkbox', 'RadioGroup', 'DatePicker'],
      description: '입력 컴포넌트 타입',
    },
  },
  args: {
    label: '항목명',
    showLabel: true,
    required: false,
    placeholder: '내용을 입력해 주세요',
    validateText: '',
    ariaInvalid: false,
    disabled: false,
    readonly: false,
    type: 'text',
  },
}
export default meta
type Story = StoryObj<{
  label: string
  showLabel: boolean
  required: boolean
  placeholder: string
  validateText: string
  ariaInvalid: boolean
  disabled: boolean
  readonly: boolean
  type: string
}>

export const Default: Story = {
  name: '기본',
  render: (args) => ({
    components: { ComboboxTag, DatePicker },
    setup() {
      const value = ref('')
      return { args, value, sampleItems }
    },
    template: `
      <div class="w-80">
        <FormItem
          v-if="args.type === 'text'"
          v-model="value"
          :label="args.showLabel ? args.label : undefined"
          :required="args.required"
          :placeholder="args.placeholder"
          :validate-text="args.validateText"
          :aria-invalid="args.ariaInvalid"
          :disabled="args.disabled"
          :readonly="args.readonly"
        />
        <FormItem
          v-else
          :label="args.showLabel ? args.label : undefined"
          :required="args.required"
          :validate-text="args.validateText"
          :aria-invalid="args.ariaInvalid"
        >
          <template #input-item>
            <ComboboxTag
              v-if="args.type === 'comboboxTag'"
              :list-item="sampleItems"
              :placeholder="args.placeholder"
              :disabled="args.disabled"
            />
            <UiCheckbox
              v-else-if="args.type === 'Checkbox'"
              :disabled="args.disabled"
            />
            <UiRadioGroup
              v-else-if="args.type === 'RadioGroup'"
              class="flex flex-col gap-2"
              :disabled="args.disabled"
            >
              <div v-for="item in sampleItems" :key="item.value" class="flex items-center gap-2">
                <UiRadioGroupItem :id="'r' + item.value" :value="item.value" />
                <UiLabel :for="'r' + item.value">{{ item.label }}</UiLabel>
              </div>
            </UiRadioGroup>
            <DatePicker
              v-else-if="args.type === 'DatePicker'"
              :placeholder="args.placeholder"
              :disabled="args.disabled"
            />
          </template>
        </FormItem>
      </div>
    `,
  }),
}

export const FrequentCombobox: Story = {
  name: '콤보박스',
  render: () => ({
    components: { ComboboxTag },
    setup() {
      const category = ref('')
      return { sampleItems, category }
    },
    template: `
      <div class="w-80">
        <FormItem label="콤보박스">
          <template #input-item>
            <ComboboxTag :list-item="sampleItems" placeholder="옵션을 선택하세요" v-model:selectValueSingle="category" />
          </template>
        </FormItem>
      </div>
    `,
  }),
}

export const FrequentAddress: Story = {
  name: '주소검색',
  render: () => ({
    components: { FormAddr },
    template: `
      <div class="w-160">
        <FormAddr />
      </div>
    `,
  }),
}

export const FrequentInputButton: Story = {
  name: '인풋+버튼형',
  render: () => ({
    components: { InputBase },
    setup() {
      const userId = ref('')
      return { userId }
    },
    template: `
      <div class="w-80">
        <FormItem label="인풋+버튼형">
          <template #input-item>
            <div class="flex gap-2">
              <InputBase v-model="userId" placeholder="아이디를 입력해 주세요" />
              <UiButton variant="secondary">중복확인</UiButton>
            </div>
          </template>
        </FormItem>
      </div>
    `,
  }),
}
