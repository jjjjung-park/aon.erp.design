import type { Meta, StoryObj } from '@storybook/vue3'

const iconList = [
  'LucidePlus',
  'LucideTrash2',
  'LucideCircleAlert',
  'LucideSearch',
  'LucideSquarePen',
  'LucideCalendar',
  'LucideEqual',
  'LucideInfo',
  'LucideCheck',
  'LucideDownload',
  'LucideEye',
  'LucidePaperclip',
  'LucideChevronDown',
  'LucidePin',
  'LucideSettings',
]

const sizeRules = [
  { label: '캡션',       desc: '12px 텍스트 옆 인라인', sizeClass: 'size-3', stroke: 3, px: 12 },
  { label: '바디',       desc: '16px 텍스트 옆 기본',   sizeClass: 'size-4', stroke: 2, px: 16 },
  { label: '스탠드얼론', desc: '한 줄에 아이콘만',       sizeClass: 'size-6', stroke: 2, px: 24 },
]

const sizeStrokeMap: Record<string, number> = {
  'size-3': 3,
  'size-4': 2,
  'size-6': 2,
}

const meta: Meta = {
  title: 'Foundation/Icons',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    icon: {
      control: 'select',
      options: iconList,
      description: '아이콘',
    },
    size: {
      control: 'radio',
      options: Object.keys(sizeStrokeMap),
      description: '사이즈',
    },
  },
  args: {
    icon: 'LucidePlus',
    size: 'size-4',
  },
}
export default meta
type Story = StoryObj<{ icon: string; size: string }>

export const SizeRule: Story = {
  name: '사이즈 규칙',
  render: () => ({
    setup() { return { sizeRules, iconList } },
    template: `
      <div class="flex flex-col gap-8 p-4 min-w-[560px]">
        <div v-for="rule in sizeRules" :key="rule.label" class="flex items-center gap-6 py-4 border-b border-border last:border-0">
          <div class="w-24 flex flex-col gap-1 shrink-0">
            <p class="font-bold text-sm">{{ rule.label }}</p>
            <p class="caption text-muted">{{ rule.px }}px / stroke-{{ rule.stroke }}</p>
          </div>
          <div class="flex items-center gap-1 flex-1">
            <component
              v-for="icon in iconList.slice(0, 8)"
              :key="icon"
              :is="icon"
              :class="rule.sizeClass"
              :stroke-width="rule.stroke"
              class="text-default"
            />
          </div>
          <div class="flex items-center gap-1 text-muted shrink-0">
            <component :is="'LucideInfo'" :class="rule.sizeClass" :stroke-width="rule.stroke" />
            <span :style="'font-size:' + rule.px + 'px'">텍스트 예시</span>
          </div>
        </div>
      </div>
    `,
  }),
}

export const Default: Story = {
  name: '인터랙티브',
  render: (args) => ({
    setup() { return { args, sizeStrokeMap } },
    template: `<component :is="args.icon" :class="args.size" :stroke-width="sizeStrokeMap[args.size]" />`,
  }),
}
