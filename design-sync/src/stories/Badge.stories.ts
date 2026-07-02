import type { Meta, StoryObj } from '@storybook/vue3'
import { Badge } from '@/ui/badge'

const meta: Meta<typeof Badge> = {
  title: '기초/Badge',
  component: Badge,
  tags: ['autodocs', 'done'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'outline', 'process', 'accept', 'reject', 'hold'],
    },
    size: {
      control: 'select',
      options: ['count', 'default', 'dot'],
    },
  },
  args: {
    variant: 'info',
    size: 'default',
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  render: (args) => ({
    components: { Badge },
    setup() { return { args } },
    template: `<Badge v-bind="args" >뱃지</Badge>`,
  }),
}

export const StatusVariants: Story = {
  name: '상태 배지',
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-2 items-center">
        <Badge variant="outline">시작/미진행</Badge>
        <Badge variant="process">처리중/진행중</Badge>
        <Badge variant="accept">승인/완료</Badge>
        <Badge variant="reject">반려</Badge>
        <Badge variant="hold">보류</Badge>
        <Badge variant="info">정보</Badge>
      </div>
    `,
  }),
}

export const CountVariant: Story = {
  name: 'Count (알림 수)',
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex gap-3 items-center">
        <Badge size="count">3</Badge>
        <Badge size="count" class="bg-danger text-neutral">12</Badge>
        <Badge size="count" class="bg-danger text-neutral"><LucideThumbsDown />999+</Badge>
      </div>
    `,
  }),
}

export const DotVariant: Story = {
  name: 'Dot (알림 표시)',
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex gap-3 items-center">
        <Badge size="dot" class="bg-danger" />
        <Badge size="dot" class="bg-success" />
        <Badge size="dot" class="bg-primary" />
      </div>
    `,
  }),
}
