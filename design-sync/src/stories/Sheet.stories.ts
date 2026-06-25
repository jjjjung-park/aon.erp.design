import type { Meta, StoryObj } from '@storybook/vue3'
import SheetBase from '@/markup/components/sheet/SheetBase.vue'
import { Button } from '@/ui/button'
// import { ref } from 'vue' // 버튼 트리거 방식 원복 시 주석 해제

const meta: Meta<typeof SheetBase> = {
  title: '오버레이/Sheet',
  component: SheetBase,
  // tags: ['autodocs'], // 항상 열린 상태 유지를 위해 비활성화 (원복 시 주석 해제)
  parameters: { layout: 'fullscreen' },
  argTypes: {
    title:       { control: 'text',    description: '시트 제목' },
    description: { control: 'text',    description: '시트 서브 타이틀' },
    fullScreen:  { control: 'boolean', description: '전체화면 여부' },
    footer:      { control: 'boolean', description: '하단 footer 표시 여부' },
    dimmed:      { control: 'boolean', description: '배경 딤 처리' },
    isLooading:  { control: 'boolean', description: '로딩 상태' },
  },
  args: {
    title: '시트 제목',
    description: '서브 타이틀',
    fullScreen: false,
    footer: true,
    dimmed: false,
    isLooading: false,
  },
}
export default meta
type Story = StoryObj<typeof SheetBase>

// 공통 스켈레톤 바디 (레이아웃 확인용)
const sampleBody = `
  <div class="list-layout--grid">
    <UiSkeleton class="h-4 w-1/4 col-span-full" />
    <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
    <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
    <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
    <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
    <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
    <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
  </div>
`

// ✅ 현재: 항상 열린 상태

// 1단 — 기본 시트 (min-w-120 ≈ 480px, container < 960px)
export const Single: Story = {
  name: '1단 — 기본 시트',
  render: (args) => ({
    components: { SheetBase, Button },
    setup() { return { args } },
    template: `
      <SheetBase :open="true" v-bind="args">
        <template #body>${sampleBody}</template>
        <template #footer><Button>저장</Button></template>
      </SheetBase>
    `,
  }),
}

// 2단 — 넓은 시트 (container ≥ 960px → grid-cols-2)
export const Double: Story = {
  name: '2단 — 넓은 시트 (≥960px)',
  render: (args) => ({
    components: { SheetBase, Button },
    setup() { return { args } },
    template: `
      <SheetBase :open="true" v-bind="args" class="!min-w-[60rem] [container-type:inline-size]">
        <template #body>${sampleBody}</template>
        <template #footer><Button>저장</Button></template>
      </SheetBase>
    `,
  }),
  args: { title: '2단 시트' },
}

// 3단 — 전체화면 시트 (full-size, container ≥ 1440px, 넓은 뷰포트에서 확인)
export const Triple: Story = {
  name: '3단 — 전체화면 (≥1440px)',
  render: (args) => ({
    components: { SheetBase, Button },
    setup() { return { args } },
    template: `
      <SheetBase :open="true" v-bind="args" class="full-size">
        <template #body>${sampleBody}</template>
        <template #footer><Button>저장</Button></template>
      </SheetBase>
    `,
  }),
  args: { title: '3단 시트', fullScreen: true },
  parameters: { viewport: { defaultViewport: 'large' } },
}

// 🔁 원복용: 버튼 트리거 방식
// export const Default: Story = {
//   name: 'SheetBase — 인터랙티브',
//   render: (args) => ({
//     components: { SheetBase, Button },
//     setup() {
//       const open = ref(false)
//       return { args, open }
//     },
//     template: `
//       <div>
//         <Button @click="open = true">시트 열기</Button>
//         <SheetBase v-model:open="open" v-bind="args">
//           <template #default>
//             <p class="text-sm text-muted">시트 본문 내용이 여기에 표시됩니다.</p>
//           </template>
//           <template #footer>
//             <Button @click="open = false">저장</Button>
//           </template>
//         </SheetBase>
//       </div>
//     `,
//   }),
// }
