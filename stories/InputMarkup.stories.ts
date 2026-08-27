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

type StoryBase = StoryObj

export const Default: Story = {
  name: 'Input — Default',
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

export const States: StoryBase = {
  name: '상태별',
  render: () => ({
    components: { InputBase },
    template: `
      <div class="flex flex-col gap-3 w-80">
        <InputBase placeholder="기본" />
        <InputBase placeholder="비활성화" :disabled="true" />
        <InputBase placeholder="읽기 전용" :readonly="true" />
        <InputBase placeholder="에러" :aria-invalid="true" />
      </div>
    `,
  }),
}

export const Sizes: StoryBase = {
  name: '사이즈',
  render: () => ({
    components: { InputBase },
    template: `
      <div class="flex flex-col gap-3 w-80">
        <InputBase placeholder="Default (32px)" size="default" />
        <InputBase placeholder="Small (24px)" size="sm" />
      </div>
    `,
  }),
}

export const WithAffix: StoryBase = {
  name: 'Prefix / Suffix',
  render: () => ({
    components: { InputBase, LucideSearch, LucideUser },
    template: `
      <div class="flex flex-col gap-3 w-80">
        <InputBase placeholder="검색어 입력">
          <template #prefix><LucideSearch class="size-4" /></template>
        </InputBase>
        <InputBase placeholder="사용자명">
          <template #prefix><LucideUser class="size-4" /></template>
          <template #suffix><span class="text-muted">@aon.com</span></template>
        </InputBase>
      </div>
    `,
  }),
}

export const Password: StoryBase = {
  name: 'Password',
  render: () => ({
    components: { InputPassword },
    template: `
      <div class="w-80">
        <InputPassword placeholder="비밀번호를 입력해 주세요" />
      </div>
    `,
  }),
}
