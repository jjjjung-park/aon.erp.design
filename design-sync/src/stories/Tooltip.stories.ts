import type { Meta, StoryObj } from '@storybook/vue3'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/ui/tooltip'
import { Button } from '@/ui/button'

const meta: Meta = {
  title: 'UI 패턴/Tooltip',
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj

export const Variants: Story = {
  name: 'Variants — 스타일',
  render: () => ({
    components: { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, Button },
    template: `
      <TooltipProvider>
        <div class="flex gap-10 items-center p-10">
          <Tooltip :default-open="true">
            <TooltipTrigger as-child>
              <Button variant="outline">Light</Button>
            </TooltipTrigger>
            <TooltipContent variant="light">라이트 툴팁입니다.</TooltipContent>
          </Tooltip>

          <Tooltip :default-open="true">
            <TooltipTrigger as-child>
              <Button variant="outline">Dark</Button>
            </TooltipTrigger>
            <TooltipContent variant="dark">다크 툴팁입니다.</TooltipContent>
          </Tooltip>

          <Tooltip :default-open="true">
            <TooltipTrigger as-child>
              <Button variant="default">Primary</Button>
            </TooltipTrigger>
            <TooltipContent variant="primary">프라이머리 툴팁입니다.</TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    `,
  }),
}

export const TriggerCount: Story = {
  name: 'Trigger — 카운트',
  render: () => ({
    components: { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger },
    template: `
      <TooltipProvider>
        <div class="flex gap-12 items-center p-10">
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
