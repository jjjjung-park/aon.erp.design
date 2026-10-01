import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'UI 패턴/Sheet',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

// ─── Index ────────────────────────────────────────────────────────────────────

export const Index: Story = {
  name: 'Index',
  argTypes: {
    title:         { control: 'text',    description: '시트 제목' },
    footer:        { control: 'boolean', description: '하단 footer 표시' },
    fullScreen:    { control: 'boolean', description: '전체화면 버튼 표시' },
    columns:       { control: 'radio',   options: ['1단', '2단', '3단'], description: '시트 너비 단계 (1단 480px · 2단 960px · 3단 전체화면)' },
    actionLabel:   { control: 'text',    description: '우측 버튼 텍스트' },
    actionVariant: { control: 'select',  options: ['default', 'destructive', 'secondary', 'outline'], description: '우측 버튼 타입' },
  },
  args: {
    title: '시트 제목',
    footer: true,
    fullScreen: false,
    columns: '1단',
    actionLabel: '저장',
    actionVariant: 'default',
  },
  render: (args) => ({
    setup() {
      const isFullSize = ref(false)
      const widthMap: Record<string, string> = { '1단': '480px', '2단': '960px', '3단': '90vw' }
      const heightMap: Record<string, string> = { '1단': '600px', '2단': '600px', '3단': '90vh' }
      const colMap: Record<string, number> = { '1단': 1, '2단': 2, '3단': 3 }
      return { args, isFullSize, widthMap, heightMap, colMap }
    },
    template: `
      <div
        class="bg-background flex flex-col shadow-bottom"
        :style="isFullSize ? { width: '90vw', height: '90vh' } : { width: widthMap[args.columns], height: heightMap[args.columns] }"
      >
        <div class="flex justify-between items-center px-padding-lg min-h-14 shrink-0">
          <span v-if="args.title" class="font-bold text-sm">{{ args.title }}</span>
          <div class="ml-auto flex items-center gap-2 h-5">
            <template v-if="args.fullScreen">
              <UiButton variant="ghost" size="icon" @click="isFullSize = !isFullSize">
                <LucideMinimize2 v-if="isFullSize" />
                <LucideExpand v-else />
              </UiButton>
              <UiSeparator orientation="vertical" size="md" />
            </template>
            <UiButton variant="ghost" size="icon"><LucideX /></UiButton>
          </div>
        </div>
        <div class="overflow-y-auto flex-1 px-6 py-4">
          <div class="grid gap-4" :style="{ gridTemplateColumns: \`repeat(\${colMap[args.columns]}, 1fr)\` }">
            <UiSkeleton class="h-3 w-1/3" :style="{ gridColumn: \`1 / -1\` }" />
            <div class="flex flex-col gap-2" v-for="i in colMap[args.columns] * 2" :key="i">
              <UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" />
            </div>
            <UiSkeleton class="h-3 w-1/3" :style="{ gridColumn: \`1 / -1\` }" />
            <div class="flex flex-col gap-2" v-for="i in colMap[args.columns] * 2" :key="'b' + i">
              <UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" />
            </div>
          </div>
        </div>
        <div v-if="args.footer" class="flex justify-between gap-2 p-4 shrink-0">
          <UiButton variant="outline">닫기</UiButton>
          <UiButton :variant="args.actionVariant">{{ args.actionLabel }}</UiButton>
        </div>
      </div>
    `,
  }),
}

