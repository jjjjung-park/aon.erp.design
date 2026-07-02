import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'UI 패턴/리스트/IconList',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    iconType: {
      control: 'radio',
      options: ['default', 'success', 'warning'],
      description: '아이콘 종류',
    },
    unread: {
      control: 'boolean',
      description: '읽지 않음 상태 (notification dot)',
    },
    subtitle: {
      control: 'boolean',
      description: '서브타이틀 표시',
    },
    actionButton: {
      control: 'radio',
      options: ['더보기', '삭제'],
      description: '우측 버튼 종류',
    },
  },
  args: {
    iconType: 'default',
    unread: true,
    subtitle: true,
    actionButton: '더보기',
  },
}
export default meta
type Story = StoryObj<{ iconType: 'default' | 'success' | 'warning'; unread: boolean; subtitle: boolean; actionButton: '더보기' | '삭제' }>

export const Default: Story = {
  name: 'IconList',
  render: (args) => ({
    setup() {
      return { args }
    },
    template: `
      <div class="icon-list w-96">
        <div class="icon-list__item">
          <div class="icon-list__icon" :class="'icon-list__icon--' + args.iconType">
            <LucideMessagesSquare v-if="args.iconType === 'default'" />
            <LucideCircleCheckBig v-else-if="args.iconType === 'success'" />
            <LucideAlertTriangle v-else />
            <UiBadge v-if="args.unread" size="dot" class="bg-danger" class="icon-list__notification" />
          </div>
          <div class="icon-list__content">
            <div class="icon-list__title">
              <p class="font-bold">알림 제목</p>
              <span v-if="args.subtitle" class="mt-1 caption__bold">서브타이틀</span>
            </div>
            <div class="icon-list__body">
              <p>알림에 대한 내용이 나오는 영역</p>
              <span class="text-muted">26.03.16 11:13</span>
            </div>
            <div class="icon-list__button mt-2">
              <UiButton variant="link" size="sm" class="justify-start text-primary">
                <LucideDownload />
                <span class="truncate pb-px">다운로드 버튼</span>
              </UiButton>
              <UiButton variant="link" size="sm" class="justify-start text-primary">
                <span class="truncate pb-px">바로가기 버튼</span>
                <LucideSquareArrowOutUpRight />
              </UiButton>
            </div>
          </div>

          <!-- 더보기 -->
          <UiDropdownMenu v-if="args.actionButton === '더보기'">
            <UiDropdownMenuTrigger as-child>
              <UiButton variant="ghost" size="icon" title="더보기" class="absolute right-2 top-3">
                <LucideEllipsisVertical />
              </UiButton>
            </UiDropdownMenuTrigger>
            <UiDropdownMenuContent side="bottom" class="mr-6">
              <UiDropdownMenuItem>{{ args.unread ? '읽음' : '읽지 않음' }}<span class="font-normal">으로 표시</span></UiDropdownMenuItem>
            </UiDropdownMenuContent>
          </UiDropdownMenu>

          <!-- 삭제 -->
          <UiButton v-else-if="args.actionButton === '삭제'" variant="ghost" size="icon" class="absolute right-2 top-3 hover:text-danger hover:bg-transparent" title="삭제">
            <LucideTrash2 />
          </UiButton>
        </div>
      </div>
    `,
  }),
}
