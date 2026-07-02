import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'UI 패턴/ButtonSet',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const FormActions: Story = {
  name: 'ButtonSet — 폼 액션',
  render: () => ({
    template: `
      <div class="flex flex-col gap-4 w-96">
        <!-- read: 닫기 | 확인 -->
        <div class="flex w-full justify-between">
          <UiButton variant="outline">닫기</UiButton>
          <UiButton>확인</UiButton>
        </div>

        <!-- create: 닫기 | 저장 -->
        <div class="flex w-full justify-between">
          <UiButton variant="outline">닫기</UiButton>
          <UiButton>저장</UiButton>
        </div>

        <!-- delete: 닫기 | 삭제 -->
        <div class="flex w-full justify-between">
          <UiButton variant="outline">닫기</UiButton>
          <UiButton variant="destructive">삭제</UiButton>
        </div>

        <!-- update: 닫기 | 삭제 + 초기화 + 저장 -->
        <div class="flex w-full justify-between">
          <UiButton variant="outline">닫기</UiButton>
          <div class="flex gap-2">
            <UiButton variant="destructive">삭제</UiButton>
            <UiButton variant="outline">초기화</UiButton>
            <UiButton>저장</UiButton>
          </div>
        </div>
      </div>
    `,
  }),
}

export const IconGroup: Story = {
  name: 'ButtonSet — 아이콘',
  render: () => ({
    template: `
      <div class="flex items-center gap-1">
        <UiButton variant="ghost" size="icon-sm"><LucideSearch /></UiButton>
        <UiSeparator orientation="vertical" class="h-3 bg-border"/>
        <UiButton variant="ghost" size="icon-sm"><LucideFolderDown /></UiButton>
        <UiSeparator orientation="vertical" class="h-3 bg-border"/>
        <UiButton variant="ghost" size="icon-sm"><LucideSettings /></UiButton>
      </div>
    `,
  }),
}

export const SearchFilter: Story = {
  name: 'ButtonSet — 검색/필터',
  render: () => ({
    template: `
      <div class="flex items-center gap-2">
        <UiButton variant="outline" size="sm">초기화</UiButton>
        <UiButton variant="secondary" size="sm">필터 저장</UiButton>
        <UiButton size="sm">검색</UiButton>
      </div>
    `,
  }),
}
