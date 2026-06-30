import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'UI 패턴/리스트/ListBlockItem',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    collapsible: {
      control: 'boolean',
      description: '접기/펼치기 구조',
    },
    dnd: {
      control: 'boolean',
      description: '드래그 앤 드롭 핸들',
    },
    dndState: {
      control: 'radio',
      options: ['기본', 'dragging', 'drag-base', 'drag-target'],
      description: 'DnD 상태 (dnd가 true일 때)',
    },
    active: {
      control: 'boolean',
      description: '활성 상태',
    },
    icon: {
      control: 'boolean',
      description: '아이콘 표시',
      if: { arg: 'collapsible', truthy: false },
    },
    editButton: {
      control: 'boolean',
      description: '편집/삭제 버튼 표시(마우스 호버)',
    },
    label: {
      control: 'text',
      description: '아이템 텍스트',
    },
  },
  args: {
    collapsible: false,
    dnd: false,
    dndState: '기본',
    active: false,
    icon: false,
    editButton: false,
    label: '항목 이름',
  },
}
export default meta
type Story = StoryObj<{
  collapsible: boolean
  dnd: boolean
  dndState: 'dragging' | 'drag-base' | 'drag-target'
  active: boolean
  icon: boolean
  editButton: boolean
  label: string
}>

export const Default: Story = {
  name: 'ListBlockItem',
  render: (args) => ({
    setup() {
      return { args }
    },
    template: `
      <!-- 기본 / DnD -->
      <template v-if="!args.collapsible">
        <p v-if="args.dnd" class="text-xs text-muted mb-2">{{ args.dndState === '기본' ? '기본 상태' : 'item--' + args.dndState }}</p>
        <ul class="w-[360px]">
          <li class="list-block-item" :class="{ active: args.active }">
            <UiButton v-if="args.dnd" variant="ghost" size="icon-sm" class="hover:bg-transparent hover:cursor-grab text-muted"><LucideEqual /></UiButton>
            <LucidePin v-if="args.icon" class="size-4 shrink-0" />
            <p class="list-block-item__label">{{ args.label }}</p>
            <div v-if="args.editButton" class="list-block-item__edit ml-auto gap-1">
              <UiButton variant="ghost" size="icon-sm"><LucidePencil class="size-3.5" /></UiButton>
              <UiButton variant="ghost" size="icon-sm"><LucideTrash2 class="size-3.5" /></UiButton>
            </div>
          </li>
          <li class="list-block-item" :class="args.dnd && args.dndState !== '기본' ? 'item--' + args.dndState : ''">
            <UiButton v-if="args.dnd" variant="ghost" size="icon-sm" class="hover:bg-transparent hover:cursor-grab text-muted"><LucideEqual /></UiButton>
            <LucidePin v-if="args.icon" class="size-4 shrink-0" />
            <p class="list-block-item__label">{{ args.label }}</p>
            <div v-if="args.editButton" class="list-block-item__edit ml-auto gap-1">
              <UiButton variant="ghost" size="icon-sm"><LucidePencil class="size-3.5" /></UiButton>
              <UiButton variant="ghost" size="icon-sm"><LucideTrash2 class="size-3.5" /></UiButton>
            </div>
          </li>
        </ul>
      </template>

      <!-- Collapsible / Collapsible + DnD -->
      <template v-else>
        <p v-if="args.dnd" class="text-xs text-muted mb-2">{{ args.dndState === '기본' ? '기본 상태' : 'item--' + args.dndState }}</p>
        <div class="w-[360px] flex flex-col gap-1">
          <UiCollapsible :default-open="true">
            <UiCollapsibleContent class="flex flex-col gap-2">
              <UiCollapsible class="flex flex-col gap-1">
                <div class="list-block-item" :class="{ active: args.active }">
                  <UiButton v-if="args.dnd" variant="ghost" size="icon-sm" class="hover:bg-transparent hover:cursor-grab text-muted"><LucideEqual /></UiButton>
                  <div class="list-block-item__collapse-label">
                    <UiCollapsibleTrigger class="size-3 justify-center" />
                    <p class="list-block-item__label">자식 있는 항목</p>
                  </div>
                  <div v-if="args.editButton" class="ml-auto gap-1 list-block-item__edit">
                    <UiButton variant="outline" size="icon-sm"><LucidePlus /></UiButton>
                    <UiButton variant="outline" size="icon-sm"><LucideSquarePen /></UiButton>
                    <UiButton variant="destructive" size="icon-sm"><LucideTrash2 /></UiButton>
                  </div>
                </div>
                <UiCollapsibleContent class="flex flex-col gap-1">
                  <UiCollapsible class="flex flex-col gap-1">
                    <div class="list-block-item" v-for="n in 3" :key="n">
                      <UiButton v-if="args.dnd" variant="ghost" size="icon-sm" class="hover:bg-transparent hover:cursor-grab text-muted"><LucideEqual /></UiButton>
                      <div class="list-block-item__collapse-label pl-5">
                        <p class="list-block-item__label">자식 항목 {{ n }}</p>
                      </div>
                      <div v-if="args.editButton" class="ml-auto gap-1 list-block-item__edit">
                        <UiButton variant="outline" size="icon-sm"><LucidePlus /></UiButton>
                        <UiButton variant="outline" size="icon-sm"><LucideSquarePen /></UiButton>
                        <UiButton variant="destructive" size="icon-sm"><LucideTrash2 /></UiButton>
                      </div>
                    </div>
                  </UiCollapsible>
                </UiCollapsibleContent>
              </UiCollapsible>
              <UiCollapsible class="flex flex-col gap-1">
                <div class="list-block-item" :class="args.dnd && args.dndState !== '기본' ? 'item--' + args.dndState : ''">
                  <UiButton v-if="args.dnd" variant="ghost" size="icon-sm" class="hover:bg-transparent hover:cursor-grab text-muted"><LucideEqual /></UiButton>
                  <div class="list-block-item__collapse-label pl-1">
                    <p class="list-block-item__label">자식 없는 항목</p>
                  </div>
                  <div v-if="args.editButton" class="ml-auto gap-1 list-block-item__edit">
                    <UiButton variant="outline" size="icon-sm"><LucidePlus /></UiButton>
                    <UiButton variant="outline" size="icon-sm"><LucideSquarePen /></UiButton>
                    <UiButton variant="destructive" size="icon-sm"><LucideTrash2 /></UiButton>
                  </div>
                </div>
              </UiCollapsible>
            </UiCollapsibleContent>
          </UiCollapsible>
        </div>
      </template>
    `,
  }),
}
