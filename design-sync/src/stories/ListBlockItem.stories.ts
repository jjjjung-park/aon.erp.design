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
    staticBtn: {
      control: 'boolean',
      description: '스태틱 버튼 — 고스트 (보이기, 핀), 항상 표시',
    },
    toggleBtn: {
      control: 'boolean',
      description: '토글 버튼 — 아웃라인 + destructive (편집), 호버 시 표시',
    },
    statusIcon: {
      control: 'radio',
      options: ['없음', '완료', '오류', '신규'],
      description: '상태 아이콘 — 파일업로드 상태 아이콘',
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
    staticBtn: false,
    toggleBtn: false,
    statusIcon: '없음',
    label: '항목 이름',
  },
}
export default meta
type Story = StoryObj<{
  collapsible: boolean
  dnd: boolean
  dndState: 'dragging' | 'drag-base' | 'drag-target'
  active: boolean
  staticBtn: boolean
  toggleBtn: boolean
  statusIcon: '없음' | '완료' | '오류' | '신규'
  label: string
}>

export const Default: Story = {
  name: '기본',
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
            <p class="list-block-item__label">{{ args.label }}</p>
            <div class="ml-auto flex items-center gap-1">
              <p v-if="args.statusIcon !== '없음'" class="size-8 inline-flex items-center justify-center">
                <LucideCheckCheck v-if="args.statusIcon === '완료'" class="size-4 text-success" />
                <LucideAlertTriangle v-else-if="args.statusIcon === '오류'" class="size-4 text-danger" />
                <LucideCheck v-else-if="args.statusIcon === '신규'" class="size-4 text-success" />
              </p>
              <div v-if="args.staticBtn" class="flex items-center gap-1">
                <UiButton variant="ghost" size="icon-sm"><LucideEye class="size-3.5" /></UiButton>
                <UiButton variant="ghost" size="icon-sm"><LucidePin class="size-3.5" /></UiButton>
              </div>
              <div v-if="args.toggleBtn" class="list-block-item__edit gap-1">
                <UiButton variant="outline" size="icon"><LucideSquarePen /></UiButton>
                <UiButton variant="destructive" size="icon"><LucideTrash2 /></UiButton>
              </div>
            </div>
          </li>
          <li class="list-block-item" :class="args.dnd && args.dndState !== '기본' ? 'item--' + args.dndState : ''">
            <UiButton v-if="args.dnd" variant="ghost" size="icon-sm" class="hover:bg-transparent hover:cursor-grab text-muted"><LucideEqual /></UiButton>
            <p class="list-block-item__label">{{ args.label }}</p>
            <div class="ml-auto flex items-center gap-1">
              <p v-if="args.statusIcon !== '없음'" class="size-8 inline-flex items-center justify-center">
                <LucideCheckCheck v-if="args.statusIcon === '완료'" class="size-4 text-success" />
                <LucideAlertTriangle v-else-if="args.statusIcon === '오류'" class="size-4 text-danger" />
                <LucideCheck v-else-if="args.statusIcon === '신규'" class="size-4 text-success" />
              </p>
              <div v-if="args.staticBtn" class="flex items-center gap-1">
                <UiButton variant="ghost" size="icon-sm"><LucideEye class="size-3.5" /></UiButton>
                <UiButton variant="ghost" size="icon-sm"><LucidePin class="size-3.5" /></UiButton>
              </div>
              <div v-if="args.toggleBtn" class="list-block-item__edit gap-1">
                <UiButton variant="outline" size="icon"><LucideSquarePen /></UiButton>
                <UiButton variant="destructive" size="icon"><LucideTrash2 /></UiButton>
              </div>
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
                  <div class="list-block-item__collapse-label flex-1 min-w-0">
                    <UiCollapsibleTrigger class="size-3 justify-center" />
                    <p class="list-block-item__label">자식 있는 항목</p>
                  </div>
                  <div class="flex items-center gap-1 shrink-0">
                    <p v-if="args.statusIcon !== '없음'" class="size-8 inline-flex items-center justify-center">
                      <LucideCheckCheck v-if="args.statusIcon === '완료'" class="size-4 text-success" />
                      <LucideAlertTriangle v-else-if="args.statusIcon === '오류'" class="size-4 text-danger" />
                      <LucideCheck v-else-if="args.statusIcon === '신규'" class="size-4 text-success" />
                    </p>
                    <div v-if="args.staticBtn" class="flex items-center gap-1">
                      <UiButton variant="ghost" size="icon-sm"><LucideEye class="size-3.5" /></UiButton>
                      <UiButton variant="ghost" size="icon-sm"><LucidePin class="size-3.5" /></UiButton>
                    </div>
                    <div v-if="args.toggleBtn" class="list-block-item__edit gap-1">
                      <UiButton variant="outline" size="icon"><LucideSquarePen /></UiButton>
                      <UiButton variant="destructive" size="icon"><LucideTrash2 /></UiButton>
                    </div>
                  </div>
                </div>
                <UiCollapsibleContent class="flex flex-col gap-1">
                  <UiCollapsible class="flex flex-col gap-1">
                    <div class="list-block-item" v-for="n in 3" :key="n">
                      <UiButton v-if="args.dnd" variant="ghost" size="icon-sm" class="hover:bg-transparent hover:cursor-grab text-muted"><LucideEqual /></UiButton>
                      <div class="list-block-item__collapse-label pl-5 flex-1 min-w-0">
                        <p class="list-block-item__label">자식 항목 {{ n }}</p>
                      </div>
                      <div class="flex items-center gap-1 shrink-0">
                        <p v-if="args.statusIcon !== '없음'" class="size-8 inline-flex items-center justify-center">
                          <LucideCheckCheck v-if="args.statusIcon === '완료'" class="size-4 text-success" />
                          <LucideAlertTriangle v-else-if="args.statusIcon === '오류'" class="size-4 text-danger" />
                          <LucideCheck v-else-if="args.statusIcon === '신규'" class="size-4 text-success" />
                        </p>
                        <div v-if="args.staticBtn" class="flex items-center gap-1">
                          <UiButton variant="ghost" size="icon-sm"><LucideEye class="size-3.5" /></UiButton>
                          <UiButton variant="ghost" size="icon-sm"><LucidePin class="size-3.5" /></UiButton>
                        </div>
                        <div v-if="args.toggleBtn" class="list-block-item__edit gap-1">
                          <UiButton variant="outline" size="icon"><LucideSquarePen /></UiButton>
                          <UiButton variant="destructive" size="icon"><LucideTrash2 /></UiButton>
                        </div>
                      </div>
                    </div>
                  </UiCollapsible>
                </UiCollapsibleContent>
              </UiCollapsible>
              <UiCollapsible class="flex flex-col gap-1">
                <div class="list-block-item" :class="args.dnd && args.dndState !== '기본' ? 'item--' + args.dndState : ''">
                  <UiButton v-if="args.dnd" variant="ghost" size="icon-sm" class="hover:bg-transparent hover:cursor-grab text-muted"><LucideEqual /></UiButton>
                  <div class="list-block-item__collapse-label pl-1 flex-1 min-w-0">
                    <p class="list-block-item__label">자식 없는 항목</p>
                  </div>
                  <div class="flex items-center gap-1 shrink-0">
                    <p v-if="args.statusIcon !== '없음'" class="size-8 inline-flex items-center justify-center">
                      <LucideCheckCheck v-if="args.statusIcon === '완료'" class="size-4 text-success" />
                      <LucideAlertTriangle v-else-if="args.statusIcon === '오류'" class="size-4 text-danger" />
                      <LucideCheck v-else-if="args.statusIcon === '신규'" class="size-4 text-success" />
                    </p>
                    <div v-if="args.staticBtn" class="flex items-center gap-1">
                      <UiButton variant="ghost" size="icon-sm"><LucideEye class="size-3.5" /></UiButton>
                      <UiButton variant="ghost" size="icon-sm"><LucidePin class="size-3.5" /></UiButton>
                    </div>
                    <div v-if="args.toggleBtn" class="list-block-item__edit gap-1">
                      <UiButton variant="outline" size="icon"><LucideSquarePen /></UiButton>
                      <UiButton variant="destructive" size="icon"><LucideTrash2 /></UiButton>
                    </div>
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

export const Dnd: Story = {
  name: 'DnD',
  render: () => ({
    template: `
      <ul class="w-[360px]">
        <li class="list-block-item" v-for="n in 3" :key="n">
          <UiButton variant="ghost" size="icon-sm" class="hover:bg-transparent hover:cursor-grab text-muted"><LucideEqual /></UiButton>
          <p class="list-block-item__label">항목 이름 {{ n }}</p>
        </li>
      </ul>
    `,
  }),
}

export const Collapsible: Story = {
  name: 'Collapsible',
  render: () => ({
    template: `
      <div class="w-[360px] flex flex-col gap-1">
        <UiCollapsible class="flex flex-col gap-1" :default-open="true">
          <div class="list-block-item">
            <div class="list-block-item__collapse-label">
              <UiCollapsibleTrigger class="size-3 justify-center" />
              <p class="list-block-item__label">자식 있는 항목 1</p>
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
        <UiCollapsible class="flex flex-col gap-1">
          <div class="list-block-item">
            <div class="list-block-item__collapse-label">
              <UiCollapsibleTrigger class="size-3 justify-center" />
              <p class="list-block-item__label">자식 있는 항목 2</p>
            </div>
          </div>
          <UiCollapsibleContent class="flex flex-col gap-1">
            <div class="list-block-item" v-for="n in 2" :key="n">
              <div class="list-block-item__collapse-label pl-5">
                <p class="list-block-item__label">자식 항목 {{ n }}</p>
              </div>
            </div>
          </UiCollapsibleContent>
        </UiCollapsible>
        <div class="list-block-item">
          <div class="list-block-item__collapse-label pl-1">
            <p class="list-block-item__label">자식 없는 항목</p>
          </div>
        </div>
      </div>
    `,
  }),
}

export const DndAndCollapsible: Story = {
  name: 'DnD + Collapsible',
  render: () => ({
    template: `
      <div class="w-[360px] flex flex-col gap-1">
        <UiCollapsible class="flex flex-col gap-1" :default-open="true">
          <div class="list-block-item">
            <UiButton variant="ghost" size="icon-sm" class="hover:bg-transparent hover:cursor-grab text-muted"><LucideEqual /></UiButton>
            <div class="list-block-item__collapse-label">
              <UiCollapsibleTrigger class="size-3 justify-center" />
              <p class="list-block-item__label">자식 있는 항목 1</p>
            </div>
          </div>
          <UiCollapsibleContent class="flex flex-col gap-1">
            <div class="list-block-item" v-for="n in 3" :key="n">
              <UiButton variant="ghost" size="icon-sm" class="hover:bg-transparent hover:cursor-grab text-muted"><LucideEqual /></UiButton>
              <div class="list-block-item__collapse-label pl-5">
                <p class="list-block-item__label">자식 항목 {{ n }}</p>
              </div>
            </div>
          </UiCollapsibleContent>
        </UiCollapsible>
        <UiCollapsible class="flex flex-col gap-1">
          <div class="list-block-item">
            <UiButton variant="ghost" size="icon-sm" class="hover:bg-transparent hover:cursor-grab text-muted"><LucideEqual /></UiButton>
            <div class="list-block-item__collapse-label">
              <UiCollapsibleTrigger class="size-3 justify-center" />
              <p class="list-block-item__label">자식 있는 항목 2</p>
            </div>
          </div>
          <UiCollapsibleContent class="flex flex-col gap-1">
            <div class="list-block-item" v-for="n in 2" :key="n">
              <UiButton variant="ghost" size="icon-sm" class="hover:bg-transparent hover:cursor-grab text-muted"><LucideEqual /></UiButton>
              <div class="list-block-item__collapse-label pl-5">
                <p class="list-block-item__label">자식 항목 {{ n }}</p>
              </div>
            </div>
          </UiCollapsibleContent>
        </UiCollapsible>
        <div class="list-block-item">
          <UiButton variant="ghost" size="icon-sm" class="hover:bg-transparent hover:cursor-grab text-muted"><LucideEqual /></UiButton>
          <div class="list-block-item__collapse-label pl-1">
            <p class="list-block-item__label">자식 없는 항목</p>
          </div>
        </div>
      </div>
    `,
  }),
}

export const TableSettings: Story = {
  name: '테이블 설정 (DnD + Collapsible + 스태틱 버튼)',
  render: () => ({
    template: `
      <div class="w-[360px] flex flex-col gap-1">
        <UiCollapsible class="flex flex-col gap-1" :default-open="true">
          <div class="list-block-item">
            <UiButton variant="ghost" size="icon-sm" class="hover:bg-transparent hover:cursor-grab text-muted"><LucideEqual /></UiButton>
            <div class="list-block-item__collapse-label flex-1 min-w-0">
              <UiCollapsibleTrigger class="size-3 justify-center" />
              <p class="list-block-item__label">그룹 헤더 1</p>
            </div>
            <div class="flex items-center gap-1 shrink-0">
              <UiButton variant="ghost" size="icon-sm"><LucideEye class="size-3.5" /></UiButton>
              <UiButton variant="ghost" size="icon-sm"><LucidePin class="size-3.5" /></UiButton>
            </div>
          </div>
          <UiCollapsibleContent class="flex flex-col gap-1">
            <div class="list-block-item" v-for="n in 3" :key="n">
              <UiButton variant="ghost" size="icon-sm" class="hover:bg-transparent hover:cursor-grab text-muted"><LucideEqual /></UiButton>
              <div class="list-block-item__collapse-label pl-5 flex-1 min-w-0">
                <p class="list-block-item__label">컬럼 {{ n }}</p>
              </div>
              <div class="flex items-center gap-1 shrink-0">
                <UiButton variant="ghost" size="icon-sm"><LucideEye class="size-3.5" /></UiButton>
                <UiButton variant="ghost" size="icon-sm"><LucidePin class="size-3.5" /></UiButton>
              </div>
            </div>
          </UiCollapsibleContent>
        </UiCollapsible>
        <UiCollapsible class="flex flex-col gap-1">
          <div class="list-block-item">
            <UiButton variant="ghost" size="icon-sm" class="hover:bg-transparent hover:cursor-grab text-muted"><LucideEqual /></UiButton>
            <div class="list-block-item__collapse-label flex-1 min-w-0">
              <UiCollapsibleTrigger class="size-3 justify-center" />
              <p class="list-block-item__label">그룹 헤더 2</p>
            </div>
            <div class="flex items-center gap-1 shrink-0">
              <UiButton variant="ghost" size="icon-sm"><LucideEye class="size-3.5" /></UiButton>
              <UiButton variant="ghost" size="icon-sm"><LucidePin class="size-3.5" /></UiButton>
            </div>
          </div>
          <UiCollapsibleContent class="flex flex-col gap-1">
            <div class="list-block-item" v-for="n in 2" :key="n">
              <UiButton variant="ghost" size="icon-sm" class="hover:bg-transparent hover:cursor-grab text-muted"><LucideEqual /></UiButton>
              <div class="list-block-item__collapse-label pl-5 flex-1 min-w-0">
                <p class="list-block-item__label">컬럼 {{ n }}</p>
              </div>
              <div class="flex items-center gap-1 shrink-0">
                <UiButton variant="ghost" size="icon-sm"><LucideEye class="size-3.5" /></UiButton>
                <UiButton variant="ghost" size="icon-sm"><LucidePin class="size-3.5" /></UiButton>
              </div>
            </div>
          </UiCollapsibleContent>
        </UiCollapsible>
      </div>
    `,
  }),
}

export const SplitMenuList: Story = {
  name: '분할 메뉴 리스트 (DnD + Collapsible + 토글 버튼)',
  render: () => ({
    template: `
      <div class="w-[360px] flex flex-col gap-1">
        <UiCollapsible class="flex flex-col gap-1" :default-open="true">
          <div class="list-block-item">
            <UiButton variant="ghost" size="icon-sm" class="hover:bg-transparent hover:cursor-grab text-muted"><LucideEqual /></UiButton>
            <div class="list-block-item__collapse-label flex-1 min-w-0">
              <UiCollapsibleTrigger class="size-3 justify-center" />
              <p class="list-block-item__label">카테고리 1</p>
            </div>
            <div class="list-block-item__edit gap-1 shrink-0">
              <UiButton variant="outline" size="icon"><LucideSquarePen /></UiButton>
              <UiButton variant="destructive" size="icon"><LucideTrash2 /></UiButton>
            </div>
          </div>
          <UiCollapsibleContent class="flex flex-col gap-1">
            <div class="list-block-item" v-for="n in 3" :key="n">
              <UiButton variant="ghost" size="icon-sm" class="hover:bg-transparent hover:cursor-grab text-muted"><LucideEqual /></UiButton>
              <div class="list-block-item__collapse-label pl-5 flex-1 min-w-0">
                <p class="list-block-item__label">메뉴 항목 {{ n }}</p>
              </div>
              <div class="list-block-item__edit gap-1 shrink-0">
                <UiButton variant="outline" size="icon"><LucideSquarePen /></UiButton>
                <UiButton variant="destructive" size="icon"><LucideTrash2 /></UiButton>
              </div>
            </div>
          </UiCollapsibleContent>
        </UiCollapsible>
        <UiCollapsible class="flex flex-col gap-1">
          <div class="list-block-item">
            <UiButton variant="ghost" size="icon-sm" class="hover:bg-transparent hover:cursor-grab text-muted"><LucideEqual /></UiButton>
            <div class="list-block-item__collapse-label flex-1 min-w-0">
              <UiCollapsibleTrigger class="size-3 justify-center" />
              <p class="list-block-item__label">카테고리 2</p>
            </div>
            <div class="list-block-item__edit gap-1 shrink-0">
              <UiButton variant="outline" size="icon"><LucideSquarePen /></UiButton>
              <UiButton variant="destructive" size="icon"><LucideTrash2 /></UiButton>
            </div>
          </div>
          <UiCollapsibleContent class="flex flex-col gap-1">
            <div class="list-block-item" v-for="n in 2" :key="n">
              <UiButton variant="ghost" size="icon-sm" class="hover:bg-transparent hover:cursor-grab text-muted"><LucideEqual /></UiButton>
              <div class="list-block-item__collapse-label pl-5 flex-1 min-w-0">
                <p class="list-block-item__label">메뉴 항목 {{ n }}</p>
              </div>
              <div class="list-block-item__edit gap-1 shrink-0">
                <UiButton variant="outline" size="icon"><LucideSquarePen /></UiButton>
                <UiButton variant="destructive" size="icon"><LucideTrash2 /></UiButton>
              </div>
            </div>
          </UiCollapsibleContent>
        </UiCollapsible>
        <div class="list-block-item">
          <UiButton variant="ghost" size="icon-sm" class="hover:bg-transparent hover:cursor-grab text-muted"><LucideEqual /></UiButton>
          <div class="list-block-item__collapse-label pl-1 flex-1 min-w-0">
            <p class="list-block-item__label">자식 없는 항목</p>
          </div>
          <div class="list-block-item__edit gap-1 shrink-0">
            <UiButton variant="outline" size="icon"><LucideSquarePen /></UiButton>
            <UiButton variant="destructive" size="icon"><LucideTrash2 /></UiButton>
          </div>
        </div>
      </div>
    `,
  }),
}

export const FileList: Story = {
  name: '파일 리스트 (상태 아이콘 + 호버 토글 버튼)',
  render: () => ({
    template: `
      <div class="w-[360px] flex flex-col gap-1">
        <p class="caption__bold mb-1">첨부된 파일 (3개 / 최대 5개)</p>
        <ul class="flex flex-col gap-1">
          <!-- 완료 -->
          <li class="group list-block-item">
            <LucidePaperclip class="size-4 text-muted shrink-0" />
            <p class="list-block-item__label">신규브랜드_품의서_2025.pdf</p>
            <div class="ml-auto flex items-center shrink-0">
              <p class="size-8 inline-flex items-center justify-center group-hover:hidden">
                <LucideCheckCheck class="size-4 text-success" />
              </p>
              <div class="hidden group-hover:flex gap-1">
                <UiButton variant="outline" size="icon"><LucideSquarePen /></UiButton>
                <UiButton variant="destructive" size="icon"><LucideTrash2 /></UiButton>
              </div>
            </div>
          </li>
          <!-- 오류 -->
          <li class="group list-block-item text-danger">
            <LucidePaperclip class="size-4 text-current shrink-0" />
            <p class="list-block-item__label">계약서_최종본.xlsx</p>
            <div class="ml-auto flex items-center shrink-0">
              <p class="size-8 inline-flex items-center justify-center group-hover:hidden">
                <LucideAlertTriangle class="size-4 text-danger" />
              </p>
              <div class="hidden group-hover:flex gap-1">
                <UiButton variant="outline" size="icon"><LucideSquarePen /></UiButton>
                <UiButton variant="destructive" size="icon"><LucideTrash2 /></UiButton>
              </div>
            </div>
          </li>
          <!-- 신규 -->
          <li class="group list-block-item">
            <LucidePaperclip class="size-4 text-muted shrink-0" />
            <p class="list-block-item__label">이미지_샘플.png</p>
            <div class="ml-auto flex items-center shrink-0">
              <p class="size-8 inline-flex items-center justify-center group-hover:hidden">
                <LucideCheck class="size-4 text-success" />
              </p>
              <div class="hidden group-hover:flex gap-1">
                <UiButton variant="outline" size="icon"><LucideSquarePen /></UiButton>
                <UiButton variant="destructive" size="icon"><LucideTrash2 /></UiButton>
              </div>
            </div>
          </li>
        </ul>
      </div>
    `,
  }),
}
