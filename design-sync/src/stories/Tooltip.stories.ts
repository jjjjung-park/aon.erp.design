import type { Meta, StoryObj } from '@storybook/vue3'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/ui/tooltip'
import { Button } from '@/ui/button'

const meta: Meta = {
  title: 'UI 패턴/Tooltip',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['light', 'dark', 'primary'],
    },
  },
}

export default meta
type Story = StoryObj

export const AllVariants: Story = {
  name: '모든 Variant',
  render: () => ({
    components: { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, Button },
    template: `
      <TooltipProvider>
        <div class="flex gap-6 items-center p-10">
          <Tooltip :default-open="true">
            <TooltipTrigger as-child>
              <Button variant="outline">Light</Button>
            </TooltipTrigger>
            <TooltipContent variant="light">
              라이트 툴팁입니다.
            </TooltipContent>
          </Tooltip>

          <Tooltip :default-open="true">
            <TooltipTrigger as-child>
              <Button variant="outline">Dark</Button>
            </TooltipTrigger>
            <TooltipContent variant="dark">
              다크 툴팁입니다.
            </TooltipContent>
          </Tooltip>

          <Tooltip :default-open="true">
            <TooltipTrigger as-child>
              <Button variant="default">Primary</Button>
            </TooltipTrigger>
            <TooltipContent variant="primary">
              프라이머리 툴팁입니다.
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    `,
  }),
}

export const CountTooltip: Story = {
  name: 'CountTooltip — 카운트 툴팁',
  render: () => ({
    components: { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger },
    template: `
      <TooltipProvider>
        <div class="flex gap-8 items-center p-10">
          <Tooltip :default-open="true">
            <TooltipTrigger class="flex items-center gap-1">
              <span class="text-sm font-bold truncate max-w-32">홍길동</span>
              <UiBadge variant="outline" class="!px-2">+3</UiBadge>
            </TooltipTrigger>
            <TooltipContent variant="light" side="top">
              <div class="flex flex-col gap-1 text-sm">
                <p>이순신</p>
                <p>강감찬</p>
                <p>유관순</p>
              </div>
            </TooltipContent>
          </Tooltip>

          <Tooltip :default-open="true">
            <TooltipTrigger class="flex items-center gap-1">
              <span class="text-sm font-bold truncate max-w-32">기획팀</span>
              <UiBadge variant="outline" class="!px-2">+5</UiBadge>
            </TooltipTrigger>
            <TooltipContent variant="dark" side="top">
              <div class="flex flex-col gap-1 text-sm">
                <p>영업팀</p>
                <p>개발팀</p>
                <p>디자인팀</p>
                <p>마케팅팀</p>
                <p>운영팀</p>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    `,
  }),
}

export const Interactive: Story = {
  name: '인터랙티브',
  render: () => ({
    components: { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, Button },
    template: `
      <TooltipProvider>
        <div class="flex gap-4 p-10">
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline">호버해보세요</Button>
            </TooltipTrigger>
            <TooltipContent>
              툴팁 내용이 여기 표시됩니다.
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    `,
  }),
}
