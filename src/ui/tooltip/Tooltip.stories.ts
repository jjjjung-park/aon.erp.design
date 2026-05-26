import type { Meta, StoryObj } from '@storybook/vue3'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '.'
import { Button } from '@/ui/button'

const meta: Meta = {
  title: '코어/Tooltip',
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
