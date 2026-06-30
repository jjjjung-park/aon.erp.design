import type { Meta, StoryObj } from '@storybook/vue3'
import { Badge } from '@/ui/badge'

const meta: Meta<typeof Badge> = {
  title: '기초/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'info', 'outline', 'process', 'accept', 'reject', 'hold', 'count'],
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'dot'],
    },
  },
  args: {
    variant: 'default',
    size: 'default',
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  render: (args) => ({
    components: { Badge },
    setup() { return { args } },
    template: `<Badge v-bind="args">뱃지</Badge>`,
  }),
}

export const StatusVariants: Story = {
  name: '상태 Variant',
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-2 items-center">
        <Badge variant="process">처리중</Badge>
        <Badge variant="accept">승인</Badge>
        <Badge variant="reject">반려</Badge>
        <Badge variant="hold">보류</Badge>
        <Badge variant="info">정보</Badge>
      </div>
    `,
  }),
}

export const AllVariants: Story = {
  name: '모든 Variant',
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-2 items-center">
        <Badge variant="default">Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="process">Process</Badge>
        <Badge variant="accept">Accept</Badge>
        <Badge variant="reject">Reject</Badge>
        <Badge variant="hold">Hold</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="count">12</Badge>
      </div>
    `,
  }),
}

export const AllSizes: Story = {
  name: '모든 Size',
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-3 items-center">
        <Badge size="default">Default</Badge>
        <Badge size="sm">Small</Badge>
        <Badge size="dot" variant="destructive" />
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
        <Badge variant="count" tone="default">3</Badge>
        <Badge variant="count" tone="important">12</Badge>
      </div>
    `,
  }),
}
