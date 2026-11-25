import type { Meta, StoryObj } from '@storybook/vue3'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/ui/tooltip'
import { Button } from '@/ui/button'
import CountTooltip from '@/markup/components/tooltips/CountTooltip.vue'
import DefaultTooltip from '@/markup/components/tooltips/DefaultTooltip.vue'

const meta: Meta = {
  title: 'UI 패턴/Tooltip',
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: '툴팁 방향',
    },
  },
  args: {
    side: 'top',
  },
}
export default meta
type Story = StoryObj<{ side: 'top' | 'bottom' | 'left' | 'right' }>

export const Variants: Story = {
  name: 'Variants — 스타일',
  render: (args) => ({
    components: { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, Button },
    setup() { return { args } },
    template: `
      <TooltipProvider>
        <div class="flex gap-10 items-center p-20">
          <Tooltip :default-open="true">
            <TooltipTrigger as-child>
              <Button variant="outline">Light</Button>
            </TooltipTrigger>
            <TooltipContent variant="light" :side="args.side">라이트 툴팁입니다.</TooltipContent>
          </Tooltip>

          <Tooltip :default-open="true">
            <TooltipTrigger as-child>
              <Button variant="outline">Dark</Button>
            </TooltipTrigger>
            <TooltipContent variant="dark" :side="args.side">다크 툴팁입니다.</TooltipContent>
          </Tooltip>

          <Tooltip :default-open="true">
            <TooltipTrigger as-child>
              <Button variant="default">Primary</Button>
            </TooltipTrigger>
            <TooltipContent variant="primary" :side="args.side">프라이머리 툴팁입니다.</TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    `,
  }),
}

export const Default: Story = {
  name: '기본',
  render: (args) => ({
    components: { DefaultTooltip, Button },
    setup() { return { args } },
    template: `
      <div class="flex gap-10 items-center p-10">
        <DefaultTooltip variant="light" :side="args.side">
          <template #title>
            <Button variant="outline">Light</Button>
          </template>
          <template #content>라이트 툴팁입니다.</template>
        </DefaultTooltip>

        <DefaultTooltip variant="dark" :side="args.side">
          <template #title>
            <Button variant="outline">Dark</Button>
          </template>
          <template #content>다크 툴팁입니다.</template>
        </DefaultTooltip>
      </div>
    `,
  }),
}

export const TriggerCount: Story = {
  name: 'Trigger — 카운트',
  render: () => ({
    components: { CountTooltip },
    setup() {
      return {
        items1: ['이순신', '강감찬', '유관순'],
        items2: ['영업팀', '개발팀', '디자인팀', '마케팅팀', '운영팀'],
      }
    },
    template: `
      <div class="flex gap-12 items-center p-10">
        <CountTooltip title="홍길동" :count="3" variant="light" >
          <p v-for="item in items1" :key="item">{{item}}</p>
        </CountTooltip>
        <CountTooltip :count="3" variant="light" >
          <template #title>
            <UiButton variant="link">{{ items2[0] }}</UiButton>
          </template>
          <UiButton variant="link" class="!h-auto" v-for="item in items2" :key="item">{{item}}</UiButton>
        </CountTooltip>
      </div>
    `,
  }),
}

export const TriggerIcon: Story = {
  name: 'Trigger — 아이콘',
  render: () => ({
    components: { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger },
    template: `
      <TooltipProvider>
        <div class="flex gap-10 items-center p-10">
          <Tooltip :default-open="true">
            <TooltipTrigger class="text-muted hover:text-default">
              <LucideInfo :size="16" />
            </TooltipTrigger>
            <TooltipContent variant="light" side="top">항목에 대한 설명입니다.</TooltipContent>
          </Tooltip>

          <Tooltip :default-open="true">
            <TooltipTrigger class="text-muted hover:text-default">
              <LucideCircleHelp :size="16" />
            </TooltipTrigger>
            <TooltipContent variant="dark" side="top">도움말 내용이 표시됩니다.</TooltipContent>
          </Tooltip>

          <Tooltip :default-open="true">
            <TooltipTrigger class="text-muted hover:text-default">
              <LucideAlertCircle :size="16" />
            </TooltipTrigger>
            <TooltipContent variant="primary" side="top">주의사항을 안내합니다.</TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    `,
  }),
}
