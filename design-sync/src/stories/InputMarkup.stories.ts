import type { Meta, StoryObj } from '@storybook/vue3'
import InputBase from '@/markup/components/inputs/InputBase.vue'
import InputPassword from '@/markup/components/inputs/InputPassword.vue'
import { LucideSearch, LucideUser } from 'lucide-vue-next'
import { ref } from 'vue'

const meta: Meta<typeof InputBase> = {
  title: '기초/Input',
  component: InputBase,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text', description: '플레이스홀더' },
    disabled:    { control: 'boolean', description: '비활성화' },
    readonly:    { control: 'boolean', description: '읽기 전용' },
    ariaInvalid: { control: 'boolean', description: '에러 상태' },
    type: {
      control: 'select',
      options: ['text', 'email', 'number', 'tel', 'url', 'search'],
      description: 'input type',
    },
    size: {
      control: 'select',
      options: [undefined, 'sm'],
      description: '크기',
    },
  },
  args: {
    placeholder: '내용을 입력해 주세요',
    disabled: false,
    readonly: false,
    ariaInvalid: false,
    type: 'text',
  },
}
export default meta
type Story = StoryObj<typeof InputBase>

export const Default: Story = {
  name: 'InputBase — 인터랙티브',
  render: (args) => ({
    components: { InputBase },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: `<div class="w-80"><InputBase v-model="value" v-bind="args" /></div>`,
  }),
}

export const States: Story = {
  name: 'InputBase — 상태별',
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

export const WithAffix: Story = {
  name: 'InputBase — prefix / suffix',
  render: () => ({
    components: { InputBase, LucideSearch, LucideUser },
    template: `
      <div class="flex flex-col gap-3 w-80">
        <InputBase placeholder="검색어 입력">
          <template #prefix><LucideSearch class="size-3 stroke-3" /></template>
        </InputBase>
        <InputBase placeholder="사용자명">
          <template #prefix><LucideUser class="size-3 stroke-3" /></template>
          <template #suffix><span class="text-xs text-muted">@aon.com</span></template>
        </InputBase>
      </div>
    `,
  }),
}


export const Password: StoryObj<typeof InputPassword> = {
  name: 'InputPassword — 인터랙티브',
  argTypes: {
    placeholder: { control: 'text', description: '플레이스홀더' },
    disabled:    { control: 'boolean', description: '비활성화' },
    ariaInvalid: { control: 'boolean', description: '에러 상태' },
  },
  args: {
    placeholder: '비밀번호를 입력해 주세요',
    disabled: false,
    ariaInvalid: false,
  },
  render: (args) => ({
    components: { InputPassword },
    setup() { return { args } },
    template: `<div class="w-80"><InputPassword v-bind="args" /></div>`,
  }),
}
