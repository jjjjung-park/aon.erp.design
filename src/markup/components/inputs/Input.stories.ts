import type { Meta, StoryObj } from '@storybook/vue3'
import InputBase from './InputBase.vue'
import InputPassword from './InputPassword.vue'
import { LucideSearch, LucideUser } from 'lucide-vue-next'

const meta: Meta = {
  title: '패턴/Input',
  tags: ['autodocs'],
}
export default meta

export const Base: StoryObj = {
  name: 'InputBase — 상태별',
  render: () => ({
    components: { InputBase },
    template: `
      <div class="flex flex-col gap-3 w-80">
        <InputBase placeholder="기본" />
        <InputBase placeholder="비활성화" disabled />
        <InputBase placeholder="읽기 전용" readonly />
        <InputBase placeholder="에러" :aria-invalid="true" />
      </div>
    `,
  }),
}

export const WithAffix: StoryObj = {
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
          <template #suffix><span class="text-xs text-secondary">@aon.com</span></template>
        </InputBase>
      </div>
    `,
  }),
}

export const Password: StoryObj = {
  name: 'InputPassword',
  render: () => ({
    components: { InputPassword },
    template: `
      <div class="w-80">
        <InputPassword placeholder="비밀번호를 입력해주세요" />
      </div>
    `,
  }),
}
