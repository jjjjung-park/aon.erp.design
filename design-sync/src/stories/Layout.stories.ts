import type { Meta, StoryObj } from '@storybook/vue3'
import LeftSidebar from '@/markup/components/layout/sideMenu/LeftSidebar.vue'
import Header from '@/markup/components/layout/Header.vue'
import PageTabs from '@/markup/components/tabs/PageTabs.vue'
import { ref } from 'vue'

const meta: Meta = {
  title: '레이아웃/Layout',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
}
export default meta
type Story = StoryObj

export const MainLayout: Story = {
  name: 'Index',
  parameters: { layout: 'fullscreen' },
  argTypes: {
    sidebarOpen: {
      control: 'boolean',
      description: '좌측 메뉴 열림 여부',
    },
    showPageTabs: {
      control: 'boolean',
      description: '페이지탭 표시 여부',
    },
    contentLayout: {
      control: 'radio',
      options: ['2단', '1단'],
      description: '내부 컨텐츠 레이아웃',
    },
  },
  args: {
    sidebarOpen: true,
    showPageTabs: true,
    contentLayout: '2단',
  },
  render: (args) => ({
    components: { LeftSidebar, Header, PageTabs },
    setup() {
      return { args }
    },
    template: `
      <UiSidebarProvider :key="args.sidebarOpen" :defaultOpen="args.sidebarOpen">
        <LeftSidebar />
        <UiSidebarInset class="overflow-hidden h-screen">
          <Header />
          <PageTabs v-if="args.showPageTabs" />

          <div class="flex flex-col flex-1 min-h-0 overflow-hidden">
            <section class="border-b-1 border-border px-8 flex-none">
              <header class="contents-header">
                <div class="contents-header__title">
                  <UiSkeleton class="h-5 w-32" />
                  <UiSkeleton class="h-3 w-56 mt-1" />
                </div>
              </header>
            </section>

            <!-- 2단 -->
            <UiResizablePanelGroup v-if="args.contentLayout === '2단'" direction="horizontal" class="flex-1 min-h-0">
              <UiResizablePanel :default-size="25" :min-size="20" :max-size="50" class="flex flex-col p-6 gap-4 min-w-72">
                <div class="flex flex-col gap-1">
                  <UiSkeleton class="h-4 w-24" />
                  <UiSkeleton class="h-3 w-40" />
                </div>
                <div class="flex flex-col gap-3 p-4 bg-surface-muted rounded-lg">
                  <UiSkeleton class="h-8 w-full" />
                  <UiSkeleton class="h-8 w-full" />
                  <UiSkeleton class="h-9 w-full" />
                </div>
                <UiSkeleton class="h-3 w-16" />
                <div class="overflow-y-auto min-h-0 data-list">
                  <div class="data-list__item" v-for="n in 12" :key="n">
                    <div class="data-list__cont w-[75%] gap-2">
                      <UiSkeleton class="h-4 w-full" />
                      <UiSkeleton class="h-3 w-2/3" />
                    </div>
                  </div>
                </div>
              </UiResizablePanel>
              <UiResizableHandle />
              <UiResizablePanel class="flex flex-col overflow-hidden">
                <div class="flex items-center justify-between px-8 pt-6 pb-4 flex-none">
                  <UiSkeleton class="h-5 w-40" />
                  <div class="flex gap-2">
                    <UiSkeleton class="h-8 w-24" />
                    <UiSkeleton class="h-8 w-16" />
                  </div>
                </div>
                <div class="px-8 overflow-y-auto flex-1">
                  <UiSkeleton class="h-10 w-full mb-4" />
                  <div class="data-list">
                    <div class="data-list__item" v-for="n in 8" :key="n">
                      <div class="data-list__cont data-list__cont-left gap-2">
                        <UiSkeleton class="h-4 w-32" />
                        <UiSkeleton class="h-3 w-24" />
                      </div>
                      <div class="data-list__cont data-list__cont-right gap-2">
                        <UiSkeleton class="h-4 w-28" />
                        <UiSkeleton class="h-3 w-16" />
                      </div>
                    </div>
                  </div>
                </div>
              </UiResizablePanel>
            </UiResizablePanelGroup>

            <!-- 1단 -->
            <div v-else class="flex-1 overflow-y-auto p-8 flex flex-col gap-4">
              <div class="flex items-center justify-between">
                <UiSkeleton class="h-5 w-40" />
                <div class="flex gap-2">
                  <UiSkeleton class="h-8 w-24" />
                  <UiSkeleton class="h-8 w-16" />
                </div>
              </div>
              <UiSkeleton class="h-10 w-full" />
              <div class="flex flex-col gap-2">
                <UiSkeleton class="h-10 w-full" v-for="n in 10" :key="n" />
              </div>
            </div>

          </div>
        </UiSidebarInset>
      </UiSidebarProvider>
    `,
  }),
}

export const SidebarStory: Story = {
  name: 'Sidebar',
  render: () => ({
    components: { LeftSidebar },
    template: `
      <div class="h-screen flex">
        <UiSidebarProvider>
          <LeftSidebar />
        </UiSidebarProvider>
      </div>
    `,
  }),
}

export const HeaderStory: Story = {
  name: 'Header',
  render: () => ({
    components: { Header },
    template: `
      <UiSidebarProvider>
        <div class="flex flex-col w-full">
          <Header />
        </div>
      </UiSidebarProvider>
    `,
  }),
}
