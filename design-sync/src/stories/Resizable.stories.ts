import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: '레이아웃/Resizable',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  name: 'Resizable — 좌우 분할',
  render: () => ({
    template: `
      <UiResizablePanelGroup direction="horizontal" class="w-full h-80 rounded-md border">
        <UiResizablePanel :default-size="50">
          <div class="flex h-full items-center justify-center p-6">
            <UiSkeleton class="h-4 w-3/4" />
          </div>
        </UiResizablePanel>
        <UiResizableHandle with-handle />
        <UiResizablePanel :default-size="50">
          <div class="flex h-full items-center justify-center p-6">
            <UiSkeleton class="h-4 w-3/4" />
          </div>
        </UiResizablePanel>
      </UiResizablePanelGroup>
    `,
  }),
}

export const Vertical: Story = {
  name: 'Resizable — 상하 분할',
  render: () => ({
    template: `
      <div style="height:400px">
        <UiResizablePanelGroup direction="vertical" class="w-full h-[600px] rounded-md border">
          <UiResizablePanel :default-size="50">
            <div class="flex h-full items-center justify-center p-6">
              <UiSkeleton class="h-4 w-3/4" />
            </div>
          </UiResizablePanel>
          <UiResizableHandle with-handle />
          <UiResizablePanel :default-size="50">
            <div class="flex h-full items-center justify-center p-6">
              <UiSkeleton class="h-4 w-3/4" />
            </div>
          </UiResizablePanel>
        </UiResizablePanelGroup>
      </div>
    `,
  }),
}
