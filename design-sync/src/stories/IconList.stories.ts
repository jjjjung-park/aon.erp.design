import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: '데이터 표시/리스트/IconList',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

export const Alert: Story = {
  name: '알림 (읽음/읽지않음)',
  render: () => ({
    template: `
      <div class="icon-list w-96">
        <!-- 읽지 않음 (notification dot) -->
        <div class="icon-list__item">
          <div class="icon-list__icon icon-list__icon--default">
            <LucideMessagesSquare />
            <UiBadge variant="destructive" size="dot" class="icon-list__notification" />
          </div>
          <div class="icon-list__content">
            <div class="icon-list__title">
              <p class="font-bold">알림 제목</p>
              <span class="mt-1 caption__bold">서브타이틀 또는 @멘션</span>
            </div>
            <div class="icon-list__body">
              <p>박정은 님이 하위 작업을 In Progress에서 Backlog(으)로 변경했습니다.</p>
              <span class="text-secondary">26.03.16 11:13</span>
            </div>
            <div class="icon-list__button mt-2">
              <UiButton variant="link" size="sm" class="justify-start text-primary">
                <LucideDownload />
                <span class="truncate pb-px">파일명은_최대_50글자까지_지원_가능_이지만_시트_너비_기준으로_넘치면_잘림20160316.xlsx</span>
              </UiButton>
              <UiButton variant="link" size="sm" class="justify-start text-primary">
                <span class="truncate pb-px">스타일 관리 바로가기</span>
                <LucideSquareArrowOutUpRight />
              </UiButton>
            </div>
          </div>
          <UiDropdownMenu>
            <UiDropdownMenuTrigger as-child>
              <UiButton variant="ghost" size="icon" title="더보기" class="absolute right-2 top-3">
                <LucideEllipsisVertical />
              </UiButton>
            </UiDropdownMenuTrigger>
            <UiDropdownMenuContent side="bottom" class="mr-6">
              <UiDropdownMenuItem>읽음<span class="font-normal">으로 표시</span></UiDropdownMenuItem>
            </UiDropdownMenuContent>
          </UiDropdownMenu>
        </div>

        <!-- success -->
        <div class="icon-list__item">
          <div class="icon-list__icon icon-list__icon--success">
            <LucideCircleCheckBig />
          </div>
          <div class="icon-list__content">
            <div class="icon-list__title">
              <p class="font-bold">알림 제목</p>
            </div>
            <div class="icon-list__body">
              <p>박정은 님이 하위 작업을 In Progress에서 Backlog(으)로 변경했습니다.</p>
              <span class="text-secondary">26.03.16 11:13</span>
            </div>
            <div class="icon-list__button mt-2">
              <UiButton variant="link" size="sm" class="justify-start text-primary">
                <LucideDownload />
                <span class="truncate pb-px">파일명은_최대_50글자까지_지원_가능_이지만_시트_너비_기준으로_넘치면_잘림20160316.xlsx</span>
              </UiButton>
              <UiButton variant="link" size="sm" class="justify-start text-primary">
                <span class="truncate pb-px">스타일 관리 바로가기</span>
                <LucideSquareArrowOutUpRight />
              </UiButton>
            </div>
          </div>
          <UiDropdownMenu>
            <UiDropdownMenuTrigger as-child>
              <UiButton variant="ghost" size="icon" title="더보기" class="absolute right-2 top-3">
                <LucideEllipsisVertical />
              </UiButton>
            </UiDropdownMenuTrigger>
            <UiDropdownMenuContent side="bottom" class="mr-6">
              <UiDropdownMenuItem>읽지 않음<span class="font-normal">으로 표시</span></UiDropdownMenuItem>
            </UiDropdownMenuContent>
          </UiDropdownMenu>
        </div>

        <!-- warning -->
        <div class="icon-list__item">
          <div class="icon-list__icon icon-list__icon--warning">
            <LucideAlertTriangle />
          </div>
          <div class="icon-list__content">
            <div class="icon-list__title">
              <p class="font-bold">알림 제목</p>
            </div>
            <div class="icon-list__body">
              <p>박정은 님이 하위 작업을 In Progress에서 Backlog(으)로 변경했습니다.</p>
              <span class="text-secondary">26.03.16 11:13</span>
            </div>
            <div class="icon-list__button mt-2">
              <UiButton variant="link" size="sm" class="justify-start text-primary">
                <LucideDownload />
                <span class="truncate pb-px">파일명은_최대_50글자까지_지원_가능_이지만_시트_너비_기준으로_넘치면_잘림20160316.xlsx</span>
              </UiButton>
              <UiButton variant="link" size="sm" class="justify-start text-primary">
                <span class="truncate pb-px">스타일 관리 바로가기</span>
                <LucideSquareArrowOutUpRight />
              </UiButton>
            </div>
          </div>
          <UiDropdownMenu>
            <UiDropdownMenuTrigger as-child>
              <UiButton variant="ghost" size="icon" title="더보기" class="absolute right-2 top-3">
                <LucideEllipsisVertical />
              </UiButton>
            </UiDropdownMenuTrigger>
            <UiDropdownMenuContent side="bottom" class="mr-6">
              <UiDropdownMenuItem>읽지 않음<span class="font-normal">으로 표시</span></UiDropdownMenuItem>
            </UiDropdownMenuContent>
          </UiDropdownMenu>
        </div>
      </div>
    `,
  }),
}

export const Work: Story = {
  name: '작업 (삭제 버튼)',
  render: () => ({
    template: `
      <div class="icon-list w-96">
        <div class="icon-list__item">
          <div class="icon-list__icon icon-list__icon--default">
            <LucideMessagesSquare />
          </div>
          <div class="icon-list__content">
            <div class="icon-list__title">
              <p class="font-bold">알림 제목</p>
              <span class="mt-1 caption__bold">서브타이틀 또는 @멘션</span>
            </div>
            <div class="icon-list__body">
              <p>박정은 님이 하위 작업을 In Progress에서 Backlog(으)로 변경했습니다.</p>
              <span class="text-secondary">26.03.16 11:13</span>
            </div>
            <div class="icon-list__button mt-2">
              <UiButton variant="link" size="sm" class="justify-start text-primary">
                <LucideDownload />
                <span class="truncate pb-px">파일명은_최대_50글자까지_지원_가능_이지만_시트_너비_기준으로_넘치면_잘림20160316.xlsx</span>
              </UiButton>
              <UiButton variant="link" size="sm" class="justify-start text-primary">
                <span class="truncate pb-px">스타일 관리 바로가기</span>
                <LucideSquareArrowOutUpRight />
              </UiButton>
            </div>
          </div>
          <UiButton variant="ghost" size="icon" class="absolute right-2 top-3 hover:text-danger hover:bg-transparent" title="작업 삭제">
            <LucideTrash2 />
          </UiButton>
        </div>

        <div class="icon-list__item">
          <div class="icon-list__icon icon-list__icon--success">
            <LucideCircleCheckBig />
          </div>
          <div class="icon-list__content">
            <div class="icon-list__title">
              <p class="font-bold">알림 제목</p>
            </div>
            <div class="icon-list__body">
              <p>박정은 님이 하위 작업을 In Progress에서 Backlog(으)로 변경했습니다.</p>
              <span class="text-secondary">26.03.16 11:13</span>
            </div>
            <div class="icon-list__button mt-2">
              <UiButton variant="link" size="sm" class="justify-start text-primary">
                <span class="truncate pb-px">스타일 관리 바로가기</span>
                <LucideSquareArrowOutUpRight />
              </UiButton>
            </div>
          </div>
          <UiButton variant="ghost" size="icon" class="absolute right-2 top-3 hover:text-danger hover:bg-transparent" title="작업 삭제">
            <LucideTrash2 />
          </UiButton>
        </div>

        <div class="icon-list__item">
          <div class="icon-list__icon icon-list__icon--warning">
            <LucideAlertTriangle />
          </div>
          <div class="icon-list__content">
            <div class="icon-list__title">
              <p class="font-bold">알림 제목</p>
            </div>
            <div class="icon-list__body">
              <p>박정은 님이 하위 작업을 In Progress에서 Backlog(으)로 변경했습니다.</p>
              <span class="text-secondary">26.03.16 11:13</span>
            </div>
            <div class="icon-list__button mt-2">
              <UiButton variant="link" size="sm" class="justify-start text-primary">
                <span class="truncate pb-px">스타일 관리 바로가기</span>
                <LucideSquareArrowOutUpRight />
              </UiButton>
            </div>
          </div>
          <UiButton variant="ghost" size="icon" class="absolute right-2 top-3 hover:text-danger hover:bg-transparent" title="작업 삭제">
            <LucideTrash2 />
          </UiButton>
        </div>
      </div>
    `,
  }),
}
