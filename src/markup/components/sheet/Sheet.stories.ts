import type { Meta, StoryObj } from '@storybook/vue3'
import SheetBase from './SheetBase.vue'
import { Button } from '@/ui/button'
import { ref } from 'vue'

const meta: Meta = {
  title: '패턴/Sheet',
  tags: ['autodocs'],
}
export default meta

export const Base: StoryObj = {
  name: 'SheetBase',
  render: () => ({
    components: { SheetBase, Button },
    setup() {
      const open = ref(false)
      return { open }
    },
    template: `
      <div>
        <Button @click="open = true">시트 열기</Button>
        <SheetBase v-model:open="open" title="시트 제목">
          <template #default>
            <p class="text-sm text-secondary">시트 본문 내용이 여기에 표시됩니다.</p>
          </template>
          <template #footer>
            <Button variant="outline" @click="open = false">취소</Button>
            <Button @click="open = false">저장</Button>
          </template>
        </SheetBase>
      </div>
    `,
  }),
}

export const Sizes: StoryObj = {
  name: 'SheetBase — 사이즈별',
  render: () => ({
    components: { SheetBase, Button },
    setup() {
      const openSm = ref(false)
      const openMd = ref(false)
      const openLg = ref(false)
      const openFull = ref(false)
      return { openSm, openMd, openLg, openFull }
    },
    template: `
      <div class="flex gap-3 flex-wrap">
        <Button variant="outline" size="sm" @click="openSm = true">Small</Button>
        <Button variant="outline" @click="openMd = true">Medium</Button>
        <Button variant="outline" size="lg" @click="openLg = true">Large</Button>
        <Button @click="openFull = true">Full</Button>

        <SheetBase v-model:open="openSm" title="Small 시트" size="sm">
          <template #default><p class="text-sm text-secondary">Small 시트입니다.</p></template>
          <template #footer><Button variant="outline" @click="openSm = false">닫기</Button></template>
        </SheetBase>
        <SheetBase v-model:open="openMd" title="Medium 시트">
          <template #default><p class="text-sm text-secondary">Medium 시트입니다.</p></template>
          <template #footer><Button variant="outline" @click="openMd = false">닫기</Button></template>
        </SheetBase>
        <SheetBase v-model:open="openLg" title="Large 시트" size="lg">
          <template #default><p class="text-sm text-secondary">Large 시트입니다.</p></template>
          <template #footer><Button variant="outline" @click="openLg = false">닫기</Button></template>
        </SheetBase>
        <SheetBase v-model:open="openFull" title="Full 시트" size="full">
          <template #default><p class="text-sm text-secondary">Full 시트입니다.</p></template>
          <template #footer><Button variant="outline" @click="openFull = false">닫기</Button></template>
        </SheetBase>
      </div>
    `,
  }),
}
