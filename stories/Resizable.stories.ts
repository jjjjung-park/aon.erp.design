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
      <UiCard class="h-40">
      <UiResizablePanelGroup direction="horizontal">
        <UiResizablePanel :default-size="50">
           <div class=" h-full flex flex-col gap-3  p-6">
              <UiSkeleton class="h-6" />
              <UiSkeleton class="h-6" />
              <UiSkeleton class="h-6" />
              <UiSkeleton class="h-6" />
            </div>
        </UiResizablePanel>
        <UiResizableHandle with-handle />
        <UiResizablePanel :default-size="50">
           <div class=" h-full flex flex-col gap-3  p-6">
              <UiSkeleton class="h-6" />
              <UiSkeleton class="h-6" />
              <UiSkeleton class="h-6" />
              <UiSkeleton class="h-6" />
            </div>
        </UiResizablePanel>
      </UiResizablePanelGroup>
      </UiCard>
    `,
  }),
}

export const Vertical: Story = {
  name: 'Resizable — 상하 분할',
  render: () => ({
    template: `
      <UiCard class="h-100">
        <UiResizablePanelGroup direction="vertical">
          <UiResizablePanel :default-size="50">
            <div class=" h-full flex flex-col gap-3  p-6">
              <UiSkeleton class="h-6" />
              <UiSkeleton class="h-6" />
              <UiSkeleton class="h-6" />
              <UiSkeleton class="h-6" />
            </div>
          </UiResizablePanel>
          <UiResizableHandle with-handle />
          <UiResizablePanel :default-size="50">
            <div class=" h-full flex flex-col gap-3  p-6">
              <UiSkeleton class="h-6" />
              <UiSkeleton class="h-6" />
              <UiSkeleton class="h-6" />
              <UiSkeleton class="h-6" />
            </div>
          </UiResizablePanel>
        </UiResizablePanelGroup>
      </UiCard>
    `,
  }),
}

export const FullPage: Story = {
  name: 'Resizable — 전체화면 분할',
  parameters: { layout: 'fullscreen' },
  render: () => ({
    template: `
      <div class="flex flex-col h-screen overflow-hidden bg-background">

          <!-- 콘텐츠 -->
          <div class="flex flex-col flex-1 min-h-0 overflow-hidden">

            <!-- 타이틀 -->
            <section class="border-b border-border px-8 flex-none">
              <header class="contents-header">
                <div class="contents-header__title">
                  <UiSkeleton class="h-6 w-32" />
                  <UiSkeleton class="h-4 w-48" />
                </div>
                <div class="contents-header__button">
                  <UiSkeleton class="h-8 w-24" />
                </div>
              </header>
            </section>

            <!-- 분할화면 -->
            <UiResizablePanelGroup direction="horizontal" class="flex-1 min-h-0">
              <UiResizablePanel :default-size="30" :min-size="20" :max-size="50" class="flex flex-col overflow-y-auto gap-3 px-6 pt-6">
                <UiSkeleton class="h-10 w-full flex-none" v-for="n in 15" :key="n" />
              </UiResizablePanel>
              <UiResizableHandle />
              <UiResizablePanel class="flex flex-col overflow-hidden gap-3 px-6 pt-6">
                <UiSkeleton class="h-10 w-full flex-none" v-for="n in 15" :key="n" />
              </UiResizablePanel>
            </UiResizablePanelGroup>

          </div>
      </div>
    `,
  }),
}