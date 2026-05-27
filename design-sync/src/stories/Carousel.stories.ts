import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: '데이터 표시/Carousel',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  name: 'Carousel — 기본',
  render: () => ({
    template: `
      <UiCarousel class="w-72">
        <UiCarouselContent>
          <UiCarouselItem v-for="i in 5" :key="i">
            <UiCard>
              <UiCardContent class="flex items-center justify-center h-40">
                <span class="text-3xl font-bold text-secondary">{{ i }}</span>
              </UiCardContent>
            </UiCard>
          </UiCarouselItem>
        </UiCarouselContent>
        <UiCarouselPrevious />
        <UiCarouselNext />
      </UiCarousel>
    `,
  }),
}
