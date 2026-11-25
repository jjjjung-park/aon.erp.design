<template>
  <SheetBase title="알림" :footer="false" class="top-10" v-model:open="open">
    <!--  VirtualList 적용으로 tab, body -> container 슬롯으로 변경  -->
    <template #container>
      <section class="border-b-1 border-border px-6">
        <nav class="">
          <LineTabs @change="changeTab" :tab-list="tabList"
                    class="data-[state=true]:after:bg-default">
            <template #default="{tab}">
              <span>{{ tab.label }}</span>
              <!--    뱃지 클래스 제거          -->
              <UiBadge size="count" :class="tab.active ? 'bg-danger text-neutral' : ''">99 +</UiBadge>
            </template>
          </LineTabs>
        </nav>
      </section>
      <template v-if="activeTab === 'alert'">
        <div class="pt-6 pb-3 px-6">
          <p class="font-bold">총 150건</p>
          <div class="flex justify-between pt-6">
            <div class="flex items-center space-x-2">
              <UiSwitch id="unread"/>
              <UiLabel for="unread">읽지않음 항목만 표시</UiLabel>
            </div>
            <UiButton variant="ghost" size="sm">
              <LucideCheck/> 모두 읽음
            </UiButton>
          </div>
        </div>
        <VirtualList :list-item="items" >
          <template v-slot="{item}">
            <div class="icon-list__item ">
              <div class="icon-list__icon icon-list__icon--default">
                <LucideMessagesSquare/>
                <UiBadge size="dot" class="bg-danger icon-list__notification"/>
              </div>
              <div class="icon-list__content">
                <div class="icon-list__title">
                  <p class="font-bold">알림 제목</p>
                  <span class="mt-1 caption__bold">서브타이틀 또는 @멘션 </span>
                </div>
                <div class="icon-list__body">
                  <p>박정은 님이 하위 작업을 In Progress에서 Backlog(으)로 변경했습니다
                    변경했습니다변경했습니다변경했습니다변경했습니다변경했습니다변경했습니다</p>
                  <span class="text-muted">26.03.16 11:13</span>
                </div>
                <div class="icon-list__button mt-2">
                  <UiButton variant="link" size="sm" class="justify-start text-primary">
                    <LucideDownload/>
                    <span class="truncate pb-px">
                      파일명은_최대_50글자까지_지원_가능_이지만_시트_너비_기준으로_넘치면_잘림20160316.xlsx
                    </span>
                  </UiButton>
                  <!--      바로가기 버튼에 <LucideSquareArrowOutUpRight/> 아이콘 추가            -->
                  <UiButton variant="link" size="sm" class="justify-start text-primary">
                    <span class="truncate pb-px">스타일 관리 바로가기</span> <LucideSquareArrowOutUpRight/>
                  </UiButton>
                </div>
              </div>
              <UiDropdownMenu>
                <UiDropdownMenuTrigger as-child>
                  <UiButton variant="ghost" size="icon" title="더보기" class="absolute right-2 top-3 ">
                    <LucideEllipsisVertical/>
                  </UiButton>
                </UiDropdownMenuTrigger>
                <UiDropdownMenuContent side="bottom" class="mr-6">
                  <UiDropdownMenuItem><p>읽음<span class="font-normal">으로 표시</span></p></UiDropdownMenuItem>
                </UiDropdownMenuContent>
              </UiDropdownMenu>
            </div>
            <div class="icon-list__item">
              <div class="icon-list__icon icon-list__icon--success">
                <LucideCircleCheckBig/>
              </div>
              <div class="icon-list__content">
                <div class="icon-list__title">
                  <p class="font-bold">알림 제목</p>
                </div>
                <div class="icon-list__body">
                  <p>박정은 님이 하위 작업을 In Progress에서 Backlog(으)로 변경했습니다
                    변경했습니다변경했습니다변경했습니다변경했습니다변경했습니다변경했습니다</p>
                  <span class="text-muted">26.03.16 11:13</span>
                </div>
                <div class="icon-list__button mt-2">
                  <UiButton variant="link" size="sm" class="justify-start text-primary">
                    <LucideDownload/>
                    <span class="truncate pb-px">
                      파일명은_최대_50글자까지_지원_가능_이지만_시트_너비_기준으로_넘치면_잘림20160316.xlsx
                    </span>
                  </UiButton>
                  <UiButton variant="link" size="sm" class="justify-start text-primary">
                    <span class="truncate pb-px">스타일 관리 바로가기</span> <LucideSquareArrowOutUpRight/>
                  </UiButton>
                </div>
              </div>
              <UiDropdownMenu>
                <UiDropdownMenuTrigger as-child>
                  <UiButton variant="ghost" size="icon" title="더보기" class="absolute right-2 top-3 ">
                    <LucideEllipsisVertical/>
                  </UiButton>
                </UiDropdownMenuTrigger>
                <UiDropdownMenuContent side="bottom" class="mr-6">
                  <UiDropdownMenuItem><p>읽지 않음<span class="font-normal">으로 표시</span></p></UiDropdownMenuItem>
                </UiDropdownMenuContent>
              </UiDropdownMenu>
            </div>
            <div class="icon-list__item">
              <div class="icon-list__icon icon-list__icon--warning">
                <LucideAlertTriangle/>
              </div>
              <div class="icon-list__content">
                <div class="icon-list__title">
                  <p class="font-bold">알림 제목</p>
                </div>
                <div class="icon-list__body">
                  <p>박정은 님이 하위 작업을 In Progress에서 Backlog(으)로 변경했습니다
                    변경했습니다변경했습니다변경했습니다변경했습니다변경했습니다변경했습니다</p>
                  <span class="text-muted">26.03.16 11:13</span>
                </div>
                <div class="icon-list__button mt-2">
                  <UiButton variant="link" size="sm" class="justify-start text-primary">
                    <LucideDownload/>
                    <span class="truncate pb-px">
                      파일명은_최대_50글자까지_지원_가능_이지만_시트_너비_기준으로_넘치면_잘림20160316.xlsx
                    </span>
                  </UiButton>
                  <UiButton variant="link" size="sm" class="justify-start text-primary">
                    <span class="truncate pb-px">스타일 관리 바로가기</span><LucideSquareArrowOutUpRight/>
                  </UiButton>
                </div>
              </div>
              <UiDropdownMenu>
                <UiDropdownMenuTrigger as-child>
                  <UiButton variant="ghost" size="icon" title="더보기" class="absolute right-2 top-3 ">
                    <LucideEllipsisVertical/>
                  </UiButton>
                </UiDropdownMenuTrigger>
                <UiDropdownMenuContent side="bottom" class="mr-6">
                  <UiDropdownMenuItem><p>읽지 않음<span class="font-normal">으로 표시</span></p></UiDropdownMenuItem>
                </UiDropdownMenuContent>
              </UiDropdownMenu>
            </div>
          </template>
        </VirtualList>
        <EmptyData class="!h-35 !bg-background text-center flex-none">
          <LucideInfo class="size-4"/>
          알림은 30일전 내용 까지만 확인이 가능합니다.
        </EmptyData>
        <!--  알림 내역  없을 때   -->
<!--        <EmptyData class="!h-[calc(100vh-134px)] !bg-background">
          <LucideInfo class="size-4"/>
          확인할 알림 내역이 없습니다.
        </EmptyData>-->
      </template>
      <template v-else>
        <div class="pt-6 pb-3 px-6">
          <p class="font-bold">총 150건</p>
        </div>

        <!--    VirtualList 적용  -->
        <VirtualList :list-item="items" >
          <template v-slot="{item}">
          <!--     TODO 업로드 진행상황 : 항상 위에 보이는지? 노출 내용 파악 필요 - 파일명, 진행률만 보이면 되는지?       -->
            <div class="icon-list__item ">
              <div class="icon-list__icon icon-list__icon--default">
                <LucideMessagesSquare/>
              </div>
              <div class="icon-list__content w-full">
                <div class="icon-list__title">
                  <p class="font-bold">업로드 진행중</p>
                </div>
                <div class="icon-list__body mt-3">
                  <UiProgress :model-value="progress"/>
                  <div class="flex items-center justify-between gap-4">
                    <span class="mt-1 caption__bold truncate">2025-fw-style-upload-list..xlsx</span>
                    <span class="text-muted">20%</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="icon-list__item ">
              <div class="icon-list__icon icon-list__icon--default">
                <LucideMessagesSquare/>
              </div>
              <div class="icon-list__content">
                <div class="icon-list__title">
                  <p class="font-bold">알림 제목</p>
                  <span class="mt-1 caption__bold">서브타이틀 또는 @멘션 </span>
                </div>
                <div class="icon-list__body">
                  <p>박정은 님이 하위 작업을 In Progress에서 Backlog(으)로 변경했습니다
                    변경했습니다변경했습니다변경했습니다변경했습니다변경했습니다변경했습니다</p>
                  <span class="text-muted">26.03.16 11:13</span>
                </div>
                <div class="icon-list__button mt-2">
                  <UiButton variant="link" size="sm" class="justify-start text-primary">
                    <LucideDownload/>
                    <span class="truncate pb-px">
                      파일명은_최대_50글자까지_지원_가능_이지만_시트_너비_기준으로_넘치면_잘림20160316.xlsx
                    </span>
                  </UiButton>
                  <UiButton variant="link" size="sm" class="justify-start text-primary">
                    <span class="truncate pb-px">스타일 관리 바로가기</span> <LucideSquareArrowOutUpRight/>
                  </UiButton>
                </div>
              </div>
              <UiButton variant="ghost" size="icon"
                        class="absolute right-2 top-3 hover:text-danger hover:bg-transparent"
                        title="작업 삭제">
                <LucideTrash2/>
              </UiButton>
            </div>
            <div class="icon-list__item">
              <div class="icon-list__icon icon-list__icon--success">
                <LucideCircleCheckBig/>
              </div>
              <div class="icon-list__content">
                <div class="icon-list__title">
                  <p class="font-bold">알림 제목</p>
                </div>
                <div class="icon-list__body">
                  <p>박정은 님이 하위 작업을 In Progress에서 Backlog(으)로 변경했습니다
                    변경했습니다변경했습니다변경했습니다변경했습니다변경했습니다변경했습니다</p>
                  <span class="text-muted">26.03.16 11:13</span>
                </div>
                <div class="icon-list__button mt-2">
                  <UiButton variant="link" size="sm" class="justify-start text-primary">
                    <LucideDownload/>
                    <span class="truncate pb-px">
                      파일명은_최대_50글자까지_지원_가능_이지만_시트_너비_기준으로_넘치면_잘림20160316.xlsx
                    </span>
                  </UiButton>
                  <UiButton variant="link" size="sm" class="justify-start text-primary">
                    <span class="truncate pb-px">스타일 관리 바로가기</span> <LucideSquareArrowOutUpRight/>
                  </UiButton>
                </div>
              </div>
              <UiButton variant="ghost" size="icon"
                        class="absolute right-2 top-3 hover:text-danger hover:bg-transparent"
                        title="작업 삭제">
                <LucideTrash2/>
              </UiButton>
            </div>
            <div class="icon-list__item">
              <div class="icon-list__icon icon-list__icon--warning">
                <LucideAlertTriangle/>
              </div>
              <div class="icon-list__content">
                <div class="icon-list__title">
                  <p class="font-bold">알림 제목</p>
                </div>
                <div class="icon-list__body">
                  <p>박정은 님이 하위 작업을 In Progress에서 Backlog(으)로 변경했습니다
                    변경했습니다변경했습니다변경했습니다변경했습니다변경했습니다변경했습니다</p>
                  <span class="text-muted">26.03.16 11:13</span>
                </div>
                <div class="icon-list__button mt-2">
                  <UiButton variant="link" size="sm" class="justify-start text-primary">
                    <LucideDownload/>
                    <span class="truncate pb-px">
                      파일명은_최대_50글자까지_지원_가능_이지만_시트_너비_기준으로_넘치면_잘림20160316.xlsx
                    </span>
                  </UiButton>
                  <UiButton variant="link" size="sm" class="justify-start text-primary">
                    <span class="truncate pb-px">스타일 관리 바로가기</span> <LucideSquareArrowOutUpRight/>
                  </UiButton>
                </div>
              </div>
              <UiButton variant="ghost" size="icon"
                        class="absolute right-2 top-3 hover:text-danger hover:bg-transparent"
                        title="작업 삭제">
                <LucideTrash2/>
              </UiButton>
            </div>
          </template>
        </VirtualList>
        <!--  flex-none 추가     -->
        <EmptyData class="!h-35 !bg-background text-center flex-none">
          <LucideInfo class="size-4"/>
          작업 알림은 최대 50개 까지만 확인이 가능하며<br/>
          오래된 작업순으로 제외됩니다.
        </EmptyData>

        <!--    작업내역 없을 때    -->
<!--        <EmptyData class="!h-[calc(100vh-134px)] !bg-background">
          <LucideInfo class="size-4"/>
          작업 내역이 없습니다.
        </EmptyData>-->

      </template>
    </template>
  </SheetBase>
</template>

<script setup lang="ts">
import SheetBase from "@/markup/components/sheet/SheetBase.vue";
import {LineTabs} from "@/markup/components/tabs";
import EmptyData from "@/markup/components/empty/EmptyData.vue";
import VirtualList from "@/markup/components/list/VirtualList.vue";
import {ref} from "vue";

const open = defineModel<boolean>('open', { default: false })

type tab = 'alert' | 'work'
type tabItem = {
  label: string,
  value: string,
  active: boolean
}

const activeTab = ref<string>('alert')
const tabList = ref<tabItem[]>([
  {label: '알림', value: 'alert', active: true},
  {label: '작업', value: 'work', active: false},
])

const changeTab = (tab: tab) => {
  tabList.value.forEach(item => item.active = item.value === tab);
  activeTab.value = tab;
}
const items = Array.from({ length: 100 });

const progress = ref(13)
</script>

<style scoped>

</style>
