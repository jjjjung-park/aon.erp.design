import type { Meta, StoryObj } from '@storybook/vue3'

const iconOptions = [
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

const sizeStrokeMap: Record<string, number> = {
  'size-3':   3,
  'size-3.5': 2,
  'size-4':   2,
  'size-5':   2,
  'size-6':   2,
}

const meta: Meta = {
  title: '기초/Icons',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    icon: {
      control: 'select',
      options: iconOptions,
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

export const Default: Story = {
  name: 'Icons',
  render: (args) => ({
    setup() {
      return { args, sizeStrokeMap }
    },
    template: `<component :is="args.icon" :class="args.size" :stroke-width="sizeStrokeMap[args.size]" />`,
  }),
}
