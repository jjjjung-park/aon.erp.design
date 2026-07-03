import type { Meta, StoryObj } from '@storybook/vue3'
import InputBase from '@/markup/components/inputs/InputBase.vue'
import InputPassword from '@/markup/components/inputs/InputPassword.vue'
import { LucideSearch, LucideUser } from 'lucide-vue-next'
import { ref, computed } from 'vue'

const meta: Meta = {
  title: '기초/Input',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['text', 'password'],
      description: '입력 타입',
    },
    size: {
      control: 'radio',
      options: ['default', 'sm'],
      description: '사이즈',
    },
    placeholder: { control: 'text', description: '플레이스홀더' },
    disabled:    { control: 'boolean', description: '비활성화' },
    ariaInvalid: { control: 'boolean', description: '에러 상태' },
    readonly: {
      control: 'boolean',
      description: '읽기 전용 (text 전용)',
      if: { arg: 'type', eq: 'text' },
    },
    prefix: {
      control: 'boolean',
      description: '프리픽스 아이콘',
      if: { arg: 'type', eq: 'text' },
    },
    suffix: {
      control: 'boolean',
      description: '서픽스 텍스트',
      if: { arg: 'type', eq: 'text' },
    },
  },
  args: {
    type: 'text',
    size: 'default',
    placeholder: '내용을 입력해 주세요',
    disabled: false,
    readonly: false,
    ariaInvalid: false,
    prefix: false,
    suffix: false,
  },
}
export default meta
type Story = StoryObj<{ type: string; size: 'default' | 'sm'; placeholder: string; disabled: boolean; readonly: boolean; ariaInvalid: boolean; prefix: boolean; suffix: boolean }>

export const Default: Story = {
  name: 'Input — 인터랙티브',
  render: (args) => ({
    components: { InputBase, InputPassword, LucideSearch },
    setup() {
      const value = ref('')
      const isPassword = computed(() => args.type === 'password')
      return { args, value, isPassword }
    },
    template: `
      <div class="w-80">
        <InputPassword
          v-if="isPassword"
          v-model="value"
          :placeholder="args.placeholder"
          :disabled="args.disabled"
          :aria-invalid="args.ariaInvalid"
        />
        <InputBase
          v-else
          v-model="value"
          :size="args.size"
          :placeholder="args.placeholder"
          :disabled="args.disabled"
          :readonly="args.readonly"
          :aria-invalid="args.ariaInvalid"
        >
          <template v-if="args.prefix" #prefix><LucideSearch class="size-4" /></template>
          <template v-if="args.suffix" #suffix><span class="text-muted">@aon.com</span></template>
        </InputBase>
      </div>
    `,
  }),
}

