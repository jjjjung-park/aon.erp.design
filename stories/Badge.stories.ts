import type { Meta, StoryObj } from '@storybook/vue3'
import { Badge } from '@/ui/badge'

const meta: Meta<typeof Badge> = {
  title: '기초/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: '개발 : variant(workflow) - 디자인 : Status Badge / 개발 : variant(active,inActive) - 디자인 : Active Badge',
      description: {
        component: 'Badge는 상태(Status Badge)·활성 여부(Active Badge)·숫자·알림(count/dot) 용도로 쓰인다.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'outline', 'process', 'accept', 'reject', 'hold', 'active', 'inActive'],
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
  name: 'Badge — status (workflow)',
  parameters: {
    docs: {
      description: {
        story: '진행 단계가 있는 워크플로우 상태 표시. 6단계 색상으로 고정, indicator(dot)는 쓰지 않는다 — Figma Status Badge 스펙.',
      },
    },
  },
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

export const ActiveVariants: Story = {
  name: 'Badge — status (active)',
  parameters: {
    docs: {
      description: {
        story: '단계 없이 두 값만 오가는 이진 상태 표시(사용/미사용 등). 배경·테두리는 항상 중립으로 고정하고, 앞에 붙는 dot 색으로만 active/inActive를 구분한다 — Figma Active Badge 스펙.',
      },
    },
  },
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-2 items-center">
        <Badge variant="active">활성 상태</Badge>
        <Badge variant="inActive">비활성 상태</Badge>
      </div>
    `,
  }),
}

export const CountVariant: Story = {
  name: 'Badge — count (알림 수)',
  parameters: {
    docs: {
      description: {
        story: '숫자 강조용. 탭·리스트 옆에 미확인 개수 등을 표시할 때 사용.',
      },
    },
  },
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
  name: 'Badge — dot (알림 표시)',
  parameters: {
    docs: {
      description: {
        story: '텍스트 없이 점 하나로만 표시하는 단순 알림 인디케이터. 아이콘 위 배지 등 공간이 좁은 곳에 사용.',
      },
    },
  },
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
