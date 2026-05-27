import type { Meta, StoryObj } from '@storybook/vue3'
import LeftSidebar from '@/markup/components/layout/sideMenu/LeftSidebar.vue'
import Header from '@/markup/components/layout/Header.vue'

const meta: Meta = {
  title: '레이아웃/Layout',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
}
export default meta
type Story = StoryObj

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
