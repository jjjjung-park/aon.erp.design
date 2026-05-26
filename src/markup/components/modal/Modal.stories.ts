import type { Meta, StoryObj } from '@storybook/vue3'
import ModalBase from './ModalBase.vue'
import { Button } from '@/ui/button'
import { ref } from 'vue'

const meta: Meta = {
  title: '패턴/Modal',
  tags: ['autodocs'],
}
export default meta

export const Base: StoryObj = {
  name: 'ModalBase',
  render: () => ({
    components: { ModalBase, Button },
    setup() {
      const open = ref(false)
      return { open }
    },
    template: `
      <div>
        <Button @click="open = true">모달 열기</Button>
        <ModalBase v-model:open="open" title="모달 제목">
          <template #default>
            <p class="text-sm text-secondary">모달 본문 내용이 여기에 표시됩니다.</p>
          </template>
          <template #footer>
            <Button variant="outline" @click="open = false">취소</Button>
            <Button @click="open = false">확인</Button>
          </template>
        </ModalBase>
      </div>
    `,
  }),
}

export const Sizes: StoryObj = {
  name: 'ModalBase — 사이즈별',
  render: () => ({
    components: { ModalBase, Button },
    setup() {
      const openSm = ref(false)
      const openMd = ref(false)
      const openLg = ref(false)
      return { openSm, openMd, openLg }
    },
    template: `
      <div class="flex gap-3">
        <Button variant="outline" size="sm" @click="openSm = true">Small</Button>
        <Button variant="outline" @click="openMd = true">Medium</Button>
        <Button variant="outline" size="lg" @click="openLg = true">Large</Button>

        <ModalBase v-model:open="openSm" title="Small 모달" size="sm">
          <template #default><p class="text-sm text-secondary">Small 사이즈 모달입니다.</p></template>
          <template #footer>
            <Button variant="outline" @click="openSm = false">닫기</Button>
          </template>
        </ModalBase>
        <ModalBase v-model:open="openMd" title="Medium 모달">
          <template #default><p class="text-sm text-secondary">Medium 사이즈 모달입니다.</p></template>
          <template #footer>
            <Button variant="outline" @click="openMd = false">닫기</Button>
          </template>
        </ModalBase>
        <ModalBase v-model:open="openLg" title="Large 모달" size="lg">
          <template #default><p class="text-sm text-secondary">Large 사이즈 모달입니다.</p></template>
          <template #footer>
            <Button variant="outline" @click="openLg = false">닫기</Button>
          </template>
        </ModalBase>
      </div>
    `,
  }),
}
