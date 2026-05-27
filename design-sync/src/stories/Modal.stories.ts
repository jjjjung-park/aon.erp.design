import type { Meta, StoryObj } from '@storybook/vue3'
import ModalBase from '@/markup/components/modal/ModalBase.vue'
import { Button } from '@/ui/button'
// import { ref } from 'vue' // 버튼 트리거 방식 원복 시 주석 해제

const meta: Meta<typeof ModalBase> = {
  title: '오버레이/Modal',
  component: ModalBase,
  // tags: ['autodocs'], // 항상 열린 상태 유지를 위해 비활성화 (원복 시 주석 해제)
  parameters: { layout: 'fullscreen' },
  argTypes: {
    title:      { control: 'text',    description: '모달 제목' },
    fullScreen: { control: 'boolean', description: '전체화면 여부' },
    footer:     { control: 'boolean', description: '하단 footer 표시 여부' },
    isLoading:  { control: 'boolean', description: '로딩 상태' },
  },
  args: {
    title: '모달 제목',
    fullScreen: false,
    footer: true,
    isLoading: false,
  },
}
export default meta
type Story = StoryObj<typeof ModalBase>

// ✅ 현재: 항상 열린 상태
export const Default: Story = {
  name: 'ModalBase — 인터랙티브',
  render: (args) => ({
    components: { ModalBase, Button },
    setup() { return { args } },
    template: `
      <ModalBase :open="true" v-bind="args">
        <template #body>
          <div class="flex flex-col gap-3 py-2">
            <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
            <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
            <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
          </div>
        </template>
        <template #footer>
          <Button>확인</Button>
        </template>
      </ModalBase>
    `,
  }),
}

// 🔁 원복용: 버튼 트리거 방식
// export const Default: Story = {
//   name: 'ModalBase — 인터랙티브',
//   render: (args) => ({
//     components: { ModalBase, Button },
//     setup() {
//       const open = ref(false)
//       return { args, open }
//     },
//     template: `
//       <div>
//         <Button @click="open = true">모달 열기</Button>
//         <ModalBase v-model:open="open" v-bind="args">
//           <template #default>
//             <p class="text-sm text-secondary">모달 본문 내용이 여기에 표시됩니다.</p>
//           </template>
//           <template #footer>
//             <Button @click="open = false">확인</Button>
//           </template>
//         </ModalBase>
//       </div>
//     `,
//   }),
// }

// 추후 size prop 추가 시 주석 해제
// export const Sizes: Story = {
//   name: 'ModalBase — 사이즈별',
//   render: () => ({
//     components: { ModalBase, Button },
//     template: ``,
//   }),
// }

// 🔁 원복용: 버튼 트리거 방식 (사이즈별)
// export const Sizes: Story = {
//   name: 'ModalBase — 사이즈별',
//   render: () => ({
//     components: { ModalBase, Button },
//     setup() {
//       const openSm = ref(false)
//       const openMd = ref(false)
//       const openLg = ref(false)
//       return { openSm, openMd, openLg }
//     },
//     template: `
//       <div class="flex gap-3">
//         <Button variant="outline" size="sm" @click="openSm = true">Small</Button>
//         <Button variant="outline" @click="openMd = true">Medium</Button>
//         <Button variant="outline" size="lg" @click="openLg = true">Large</Button>
//         <ModalBase v-model:open="openSm" title="Small 모달">
//           <template #default><p class="text-sm text-secondary">Small 사이즈 모달입니다.</p></template>
//           <template #footer><Button @click="openSm = false">닫기</Button></template>
//         </ModalBase>
//         <ModalBase v-model:open="openMd" title="Medium 모달">
//           <template #default><p class="text-sm text-secondary">Medium 사이즈 모달입니다.</p></template>
//           <template #footer><Button @click="openMd = false">닫기</Button></template>
//         </ModalBase>
//         <ModalBase v-model:open="openLg" title="Large 모달">
//           <template #default><p class="text-sm text-secondary">Large 사이즈 모달입니다.</p></template>
//           <template #footer><Button @click="openLg = false">닫기</Button></template>
//         </ModalBase>
//       </div>
//     `,
//   }),
// }
