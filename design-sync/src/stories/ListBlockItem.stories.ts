import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: '데이터 표시/ListBlockItem',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    active: {
      control: 'boolean',
      description: '활성 상태',
    },
    icon: {
      control: 'boolean',
      description: '아이콘 표시',
    },
    editButton: {
      control: 'boolean',
      description: '편집/삭제 버튼 표시 (hover 시 노출)',
    },
    label: {
      control: 'text',
      description: '아이템 텍스트',
    },
  },
  args: {
    active: false,
    icon: false,
    editButton: false,
    label: '항목 이름',
  },
}
export default meta
type Story = StoryObj<{ active: boolean; icon: boolean; editButton: boolean; label: string }>

export const Default: Story = {
  name: 'ListBlockItem',
  render: (args) => ({
    setup() {
      return { args }
    },
    template: `
      <ul class="w-64">
        <li class="list-block-item" :class="{ active: args.active }">
          <LucideFolder v-if="args.icon" class="size-4 shrink-0" />
          <p class="list-block-item__label">{{ args.label }}</p>
          <div v-if="args.editButton" class="list-block-item__edit ml-auto gap-1">
            <UiButton variant="ghost" size="icon-sm"><LucidePencil class="size-3.5" /></UiButton>
            <UiButton variant="ghost" size="icon-sm"><LucideTrash2 class="size-3.5" /></UiButton>
          </div>
        </li>
      </ul>
    `,
  }),
}

export const Collapsible: Story = {
  name: 'ListBlockItem — Collapsible',
  render: () => ({
    template: `
      <div class="w-80 flex flex-col gap-1">

        <!-- 부모 항목 (펼침) -->
        <UiCollapsible class="flex flex-col gap-1" :default-open="true">
          <div class="list-block-item">
            <div class="list-block-item__collapse-label">
              <UiCollapsibleTrigger class="size-3 justify-center" />
              <p class="list-block-item__label">부모 항목 이름</p>
            </div>
            <div class="ml-auto gap-1 list-block-item__edit">
              <UiButton variant="outline" size="icon-sm"><LucidePlus /></UiButton>
              <UiButton variant="outline" size="icon-sm"><LucideSquarePen /></UiButton>
              <UiButton variant="destructive" size="icon-sm"><LucideTrash2 /></UiButton>
            </div>
          </div>
          <UiCollapsibleContent class="flex flex-col gap-1">
            <div class="list-block-item">
              <div class="list-block-item__collapse-label pl-5">
                <p class="list-block-item__label">자식 항목 이름1</p>
              </div>
              <div class="ml-auto gap-1 list-block-item__edit">
                <UiButton variant="outline" size="icon-sm"><LucidePlus /></UiButton>
                <UiButton variant="outline" size="icon-sm"><LucideSquarePen /></UiButton>
                <UiButton variant="destructive" size="icon-sm"><LucideTrash2 /></UiButton>
              </div>
            </div>
            <div class="list-block-item">
              <div class="list-block-item__collapse-label pl-5">
                <p class="list-block-item__label">항목 이름2</p>
              </div>
              <div class="ml-auto gap-1 list-block-item__edit">
                <UiButton variant="outline" size="icon-sm"><LucidePlus /></UiButton>
                <UiButton variant="outline" size="icon-sm"><LucideSquarePen /></UiButton>
                <UiButton variant="destructive" size="icon-sm"><LucideTrash2 /></UiButton>
              </div>
            </div>
          </UiCollapsibleContent>
        </UiCollapsible>

        <!-- 부모 항목 (접힘) -->
        <UiCollapsible class="flex flex-col gap-1" :default-open="false">
          <div class="list-block-item">
            <div class="list-block-item__collapse-label">
              <UiCollapsibleTrigger class="size-3 justify-center" />
              <p class="list-block-item__label">부모 항목 이름</p>
            </div>
            <div class="ml-auto gap-1 list-block-item__edit">
              <UiButton variant="outline" size="icon-sm"><LucidePlus /></UiButton>
              <UiButton variant="outline" size="icon-sm"><LucideSquarePen /></UiButton>
              <UiButton variant="destructive" size="icon-sm"><LucideTrash2 /></UiButton>
            </div>
          </div>
          <UiCollapsibleContent class="flex flex-col gap-1">
            <div class="list-block-item">
              <div class="list-block-item__collapse-label pl-5">
                <p class="list-block-item__label">자식 항목 이름</p>
              </div>
              <div class="ml-auto gap-1 list-block-item__edit">
                <UiButton variant="outline" size="icon-sm"><LucidePlus /></UiButton>
                <UiButton variant="outline" size="icon-sm"><LucideSquarePen /></UiButton>
                <UiButton variant="destructive" size="icon-sm"><LucideTrash2 /></UiButton>
              </div>
            </div>
          </UiCollapsibleContent>
        </UiCollapsible>

        <!-- 자식 없는 항목 -->
        <div class="list-block-item">
          <div class="list-block-item__collapse-label pl-1">
            <p class="list-block-item__label">항목 이름</p>
          </div>
          <div class="ml-auto gap-1 list-block-item__edit">
            <UiButton variant="outline" size="icon-sm"><LucidePlus /></UiButton>
            <UiButton variant="outline" size="icon-sm"><LucideSquarePen /></UiButton>
            <UiButton variant="destructive" size="icon-sm"><LucideTrash2 /></UiButton>
          </div>
        </div>

      </div>
    `,
  }),
}

export const DnDState: Story = {
  name: 'ListBlockItem — DnD',
  render: () => ({
    template: `
      <div class="flex flex-col gap-6">
        <div>
          <p class="text-xs text-muted mb-2">item--dragging (드래그 중인 아이템)</p>
          <ul class="w-64 flex flex-col gap-1">
            <li class="list-block-item">
              <UiButton variant="ghost" size="icon-sm" class="hover:bg-transparent hover:cursor-grab text-secondary"><LucideEqual /></UiButton>
              <p>항목 1</p>
            </li>
            <li class="list-block-item item--dragging">
              <UiButton variant="ghost" size="icon-sm" class="hover:bg-transparent hover:cursor-grab text-secondary"><LucideEqual /></UiButton>
              <p>항목 2 (dragging)</p>
            </li>
            <li class="list-block-item">
              <UiButton variant="ghost" size="icon-sm" class="hover:bg-transparent hover:cursor-grab text-secondary"><LucideEqual /></UiButton>
              <p>항목 3</p>
            </li>
          </ul>
        </div>
        <div>
          <p class="text-xs text-muted mb-2">item--drag-base (원래 위치 플레이스홀더)</p>
          <ul class="w-64 flex flex-col gap-1">
            <li class="list-block-item">
              <UiButton variant="ghost" size="icon-sm" class="hover:bg-transparent hover:cursor-grab text-secondary"><LucideEqual /></UiButton>
              <p>항목 1</p>
            </li>
            <li class="list-block-item item--drag-base">
              <UiButton variant="ghost" size="icon-sm" class="hover:bg-transparent hover:cursor-grab text-secondary"><LucideEqual /></UiButton>
              <p>항목 2 (drag-base)</p>
            </li>
            <li class="list-block-item">
              <UiButton variant="ghost" size="icon-sm" class="hover:bg-transparent hover:cursor-grab text-secondary"><LucideEqual /></UiButton>
              <p>항목 3</p>
            </li>
          </ul>
        </div>
        <div>
          <p class="text-xs text-muted mb-2">item--drag-target (드롭 대상)</p>
          <ul class="w-64 flex flex-col gap-1">
            <li class="list-block-item">
              <UiButton variant="ghost" size="icon-sm" class="hover:bg-transparent hover:cursor-grab text-secondary"><LucideEqual /></UiButton>
              <p>항목 1</p>
            </li>
            <li class="list-block-item item--drag-target">
              <UiButton variant="ghost" size="icon-sm" class="hover:bg-transparent hover:cursor-grab text-secondary"><LucideEqual /></UiButton>
              <p>항목 2 (drag-target)</p>
            </li>
            <li class="list-block-item">
              <UiButton variant="ghost" size="icon-sm" class="hover:bg-transparent hover:cursor-grab text-secondary"><LucideEqual /></UiButton>
              <p>항목 3</p>
            </li>
          </ul>
        </div>
      </div>
    `,
  }),
}
