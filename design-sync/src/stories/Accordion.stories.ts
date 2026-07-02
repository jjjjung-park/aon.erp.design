import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'UI 패턴/Accordion',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  name: 'Accordion — 기본',
  render: () => ({
    template: `
      <UiAccordion type="single" collapsible class="w-full">
        <UiAccordionItem value="item-1">
          <UiAccordionTrigger class="px-4 py-3">항목 1</UiAccordionTrigger>
          <UiAccordionContent class="px-4 pb-4">
            <div class="flex flex-col gap-2">
              <UiSkeleton class="h-3 w-3/4" />
              <UiSkeleton class="h-3 w-full" />
              <UiSkeleton class="h-3 w-1/2" />
            </div>
          </UiAccordionContent>
        </UiAccordionItem>
        <UiAccordionItem value="item-2">
          <UiAccordionTrigger class="px-4 py-3">항목 2</UiAccordionTrigger>
          <UiAccordionContent class="px-4 pb-4">
            <div class="flex flex-col gap-2">
              <UiSkeleton class="h-3 w-3/4" />
              <UiSkeleton class="h-3 w-full" />
              <UiSkeleton class="h-3 w-1/2" />
            </div>
          </UiAccordionContent>
        </UiAccordionItem>
        <UiAccordionItem value="item-3">
          <UiAccordionTrigger class="px-4 py-3">항목 3</UiAccordionTrigger>
          <UiAccordionContent class="px-4 pb-4">
            <div class="flex flex-col gap-2">
              <UiSkeleton class="h-3 w-3/4" />
              <UiSkeleton class="h-3 w-full" />
              <UiSkeleton class="h-3 w-1/2" />
            </div>
          </UiAccordionContent>
        </UiAccordionItem>
      </UiAccordion>
    `,
  }),
}

export const Multiple: Story = {
  name: 'Accordion — 다중 열기',
  render: () => ({
    template: `
      <UiAccordion type="multiple" class="w-full">
        <UiAccordionItem value="item-1">
          <UiAccordionTrigger class="px-4 py-3">항목 1</UiAccordionTrigger>
          <UiAccordionContent class="px-4 pb-4">
            <div class="flex flex-col gap-2">
              <UiSkeleton class="h-3 w-3/4" />
              <UiSkeleton class="h-3 w-full" />
            </div>
          </UiAccordionContent>
        </UiAccordionItem>
        <UiAccordionItem value="item-2">
          <UiAccordionTrigger class="px-4 py-3">항목 2</UiAccordionTrigger>
          <UiAccordionContent class="px-4 pb-4">
            <div class="flex flex-col gap-2">
              <UiSkeleton class="h-3 w-3/4" />
              <UiSkeleton class="h-3 w-full" />
            </div>
          </UiAccordionContent>
        </UiAccordionItem>
        <UiAccordionItem value="item-3">
          <UiAccordionTrigger class="px-4 py-3">항목 3</UiAccordionTrigger>
          <UiAccordionContent class="px-4 pb-4">
            <div class="flex flex-col gap-2">
              <UiSkeleton class="h-3 w-3/4" />
              <UiSkeleton class="h-3 w-full" />
            </div>
          </UiAccordionContent>
        </UiAccordionItem>
      </UiAccordion>
    `,
  }),
}
