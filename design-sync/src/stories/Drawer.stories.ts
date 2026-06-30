import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'UI 패턴/Drawer',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Bottom: Story = {
  name: 'Drawer — 하단',
  render: () => ({
    template: `
      <UiDrawer>
        <UiDrawerTrigger as-child>
          <UiButton variant="outline">하단 Drawer 열기</UiButton>
        </UiDrawerTrigger>
        <UiDrawerContent>
          <UiDrawerHeader>
            <UiDrawerTitle>Drawer 제목</UiDrawerTitle>
            <UiDrawerDescription>하단에서 올라오는 패널입니다.</UiDrawerDescription>
          </UiDrawerHeader>
          <div class="px-4 pb-4 flex flex-col gap-3">
            <UiSkeleton class="h-4 w-full" />
            <UiSkeleton class="h-4 w-4/5" />
            <UiSkeleton class="h-4 w-3/5" />
          </div>
          <UiDrawerFooter>
            <UiDrawerClose as-child>
              <UiButton variant="outline">닫기</UiButton>
            </UiDrawerClose>
            <UiButton>확인</UiButton>
          </UiDrawerFooter>
        </UiDrawerContent>
      </UiDrawer>
    `,
  }),
}
