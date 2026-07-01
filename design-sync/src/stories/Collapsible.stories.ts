import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'UI 패턴/Collapsible',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  name: 'Collapsible — 트리형',
  render: () => ({
    template: `
      <div class="w-[360px] flex flex-col gap-1">
        <UiCollapsible :default-open="true">
          <UiCollapsibleContent class="flex flex-col gap-2">

            <!-- 자식 있는 항목 -->
            <UiCollapsible class="flex flex-col gap-1">
              <div class="list-block-item">
                <div class="list-block-item__collapse-label">
                  <UiCollapsibleTrigger class="size-3 justify-center" />
                  <p class="list-block-item__label">자식 있는 항목</p>
                </div>
              </div>
              <UiCollapsibleContent class="flex flex-col gap-1">
                <div class="list-block-item" v-for="n in 3" :key="n">
                  <div class="list-block-item__collapse-label pl-5">
                    <p class="list-block-item__label">자식 항목 {{ n }}</p>
                  </div>
                </div>
              </UiCollapsibleContent>
            </UiCollapsible>

            <!-- 자식 없는 항목 -->
            <UiCollapsible class="flex flex-col gap-1">
              <div class="list-block-item">
                <div class="list-block-item__collapse-label pl-1">
                  <p class="list-block-item__label">자식 없는 항목</p>
                </div>
              </div>
            </UiCollapsible>

          </UiCollapsibleContent>
        </UiCollapsible>
      </div>
    `,
  }),
}
