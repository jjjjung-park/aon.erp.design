import type { Meta, StoryObj } from '@storybook/vue3'
import LeftSidebar from '@/markup/components/layout/sideMenu/LeftSidebar.vue'
import PageTabs from '@/markup/components/tabs/PageTabs.vue'
import TablePagination from '@/markup/components/pagination/TablePagination.vue'
import { ref } from 'vue'
import {LineTabs} from "@/markup/components/tabs";

const meta: Meta = {
  component: LineTabs,
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
    // 헤더
    sidebarOpen:      { control: 'boolean', description: '좌측 메뉴 열림 여부' },
    showPageTabs:     { control: 'boolean', description: '페이지탭 표시 여부' },
    multiBrand:       { control: 'boolean', description: '브랜드 선택 셀렉트' },
    showAlarm:        { control: 'boolean', description: '알람 버튼' },
    showSettings:     { control: 'boolean', description: '설정 버튼' },
    showAvatar:       { control: 'boolean', description: '아바타 영역' },
    // 콘텐츠
    layout:           { control: 'radio', options: ['기본', '분할화면', '빈화면'], description: '레이아웃 타입' },
    showContentTab:   { control: 'boolean', description: '콘텐츠 탭 영역' },
    showMainBtn:      { control: 'boolean', description: '메인버튼' },
    showSubTitleArea: { control: 'boolean', description: '탭 타이틀 영역' },
    showSubTitle:     { control: 'boolean', description: '타이틀명' },
    showSubBtn:       { control: 'boolean', description: '서브버튼' },
    showSearch:       { control: 'boolean', description: '검색 영역' },
    showPagination:   { control: 'boolean', description: '페이지네이션' },
    showSplitTab:     { control: 'boolean', description: '분할화면 탭 (분할화면 전용)' },
  },
  args: {
    sidebarOpen: true,
    showPageTabs: true,
    multiBrand: true,
    showAlarm: true,
    showSettings: true,
    showAvatar: true,
    layout: '기본',
    showContentTab: true,
    showMainBtn: true,
    showSubTitleArea: true,
    showSubTitle: true,
    showSubBtn: true,
    showSearch: true,
    showPagination: true,
    showSplitTab: false,
  },
  render: (args) => ({
    components: { LeftSidebar, PageTabs, TablePagination, LineTabs },
    setup() {
      const page = ref(1)
      const tabs = ref([
        { label: '전체', value: 'all', active: true },
        { label: '진행중', value: 'progress', active: false },
        { label: '완료', value: 'done', active: false },
        { label: '취소', value: 'cancel', active: false },
      ])
      const splitTabs = ref([
        { label: '기본정보', value: 'info', active: true },
        { label: '상세내역', value: 'detail', active: false },
      ])
      const onTabChange = (value: string) => {
        tabs.value = tabs.value.map(t => ({ ...t, active: t.value === value }))
      }
      const onSplitTabChange = (value: string) => {
        splitTabs.value = splitTabs.value.map(t => ({ ...t, active: t.value === value }))
      }
      return { args, page, tabs, splitTabs, onTabChange, onSplitTabChange }
    },
    template: `
      <UiSidebarProvider :key="args.sidebarOpen" :defaultOpen="args.sidebarOpen">
        <LeftSidebar />
        <UiSidebarInset class="overflow-hidden h-screen">

          <!-- 헤더 -->
          <header class="flex h-10 shrink-0 items-center w-full px-5 gap-3 bg-background border-b-1 border-border">
            <UiSidebarTrigger variant="outline" size="icon-sm" />
            <div class="flex items-center justify-between w-full">
              <div v-if="!args.multiBrand" class="flex gap-2 items-center">
                <span class="truncate">THISISNEVERTHAT</span>
              </div>
              <UiSelect v-else>
                <UiSelectTrigger class="w-60"><UiSelectValue placeholder="브랜드를 선택해 주세요" /></UiSelectTrigger>
                <UiSelectContent>
                  <UiSelectItem value="thisisneverthat">THISISNEVERTHAT</UiSelectItem>
                  <UiSelectItem value="yeseyesee">YESEYESEE</UiSelectItem>
                  <UiSelectItem value="khakis">KHAKIS</UiSelectItem>
                </UiSelectContent>
              </UiSelect>
              <div class="flex items-center gap-2 ml-auto">
                <div class="gap-2 flex items-center">
                  <template v-if="args.showAlarm">
                    <UiButton class="text-muted relative" variant="ghost" size="icon">
                      <LucideBell /><UiBadge size="dot" class="bg-danger absolute top-1 right-1" />
                    </UiButton>
                    <UiSeparator orientation="vertical" class="h-4" />
                  </template>
                  <template v-if="args.showSettings">
                    <UiButton class="text-muted relative" variant="ghost" size="icon">
                      <LucideSettings /><UiBadge size="dot" class="bg-success absolute top-1 right-1" />
                    </UiButton>
                    <UiSeparator orientation="vertical" class="h-4" />
                  </template>
                </div>
                <UiDropdownMenu v-if="args.showAvatar">
                  <UiDropdownMenuTrigger class="flex items-center text-left gap-2 hover:cursor-pointer">
                    <div class="size-6 rounded-full bg-subtle flex items-center justify-center caption__bold shrink-0">홍</div>
                    <div class="h-8 flex flex-col">
                      <p class="caption__bold">홍길동님</p>
                      <span class="caption text-muted">안녕하시와요</span>
                    </div>
                  </UiDropdownMenuTrigger>
                  <UiDropdownMenuContent>
                    <UiDropdownMenuLabel>My Account</UiDropdownMenuLabel>
                    <UiDropdownMenuSeparator />
                    <UiDropdownMenuItem><LucideUser />Profile</UiDropdownMenuItem>
                    <UiDropdownMenuItem>Billing</UiDropdownMenuItem>
                  </UiDropdownMenuContent>
                </UiDropdownMenu>
              </div>
            </div>
          </header>

          <PageTabs v-if="args.showPageTabs" />

          <!-- 콘텐츠 -->
          <div class="flex flex-col flex-1 min-h-0 overflow-hidden">

            <!-- 타이틀 -->
            <section class="border-b border-border px-8 flex-none">
              <header class="contents-header">
                <div class="contents-header__title">
                  <h2>화면 명</h2>
                  <span>화면 설명이 들어갑니다</span>
                </div>
                <div v-if="args.showMainBtn" class="contents-header__button">
                  <UiButton variant="outline"><LucidePlus />메인버튼</UiButton>
                </div>
              </header>
              <nav>
                <LineTabs v-if="args.showContentTab" :tab-list="tabs" @change="onTabChange" />
              </nav>
            </section>

            <!-- 빈화면 -->
            <div v-if="args.layout === '빈화면'" class="flex-1" />

            <!-- 기본 -->
            <template v-else-if="args.layout === '기본'">
              <section v-if="args.showSubTitleArea" class="px-8 py-6 flex items-center justify-between flex-none">
                <span v-if="args.showSubTitle" class="body__bold">타이틀명</span>
                <div v-if="args.showSubBtn" class="ml-auto">
                  <UiButton variant="outline">서브버튼</UiButton>
                </div>
              </section>
              <section v-if="args.showSearch" class="border-b border-border px-8 py-3 flex-none">
                <div class="flex flex-wrap gap-2 items-center">
                  <span class="body__bold shrink-0">조회조건 :</span>
                  <UiInput class="w-48 h-8" placeholder="내용 입력" />
                  <UiInput class="w-48 h-8" placeholder="내용 입력" />
                  <UiButton size="sm">조회</UiButton>
                </div>
              </section>
              <section class="border-b border-border px-8 h-[53px] flex items-center justify-between flex-none">
                <span class="body__bold">총 225건</span>
                <div class="flex gap-2">
                  <UiButton variant="outline" size="sm">키워드 검색</UiButton>
                  <UiButton variant="outline" size="sm">엑셀 다운로드</UiButton>
                </div>
              </section>
              <div class="flex-1 overflow-y-auto">
                <div class="px-8 py-4 flex flex-col gap-2">
                  <UiSkeleton class="h-10 w-full" v-for="n in 10" :key="n" />
                </div>
              </div>
              <div v-if="args.showPagination" class="border-t border-border px-8 h-14 flex items-center justify-center flex-none">
                <TablePagination v-model:page="page" :total="10" />
              </div>
            </template>

            <!-- 분할화면 -->
            <template v-else>
              <div v-if="args.showContentTab" class="border-b border-border px-6 flex-none">
                <LineTabs :tab-list="tabs" @change="onTabChange" />
              </div>
              <UiResizablePanelGroup direction="horizontal" class="flex-1 min-h-0">
                <UiResizablePanel :default-size="25" :min-size="20" :max-size="50" class="flex flex-col overflow-hidden p-6 gap-3">
                  <UiSkeleton class="h-8 w-full" v-for="n in 8" :key="n" />
                </UiResizablePanel>
                <UiResizableHandle />
                <UiResizablePanel class="flex flex-col overflow-hidden">
                  <div v-if="args.showSplitTab" class="border-b border-border px-6 flex-none flex items-end">
                    <button class="h-8 px-3 body__bold border-b-2 border-default">tab1</button>
                    <button class="h-8 px-3 body text-muted">tab2</button>
                  </div>
                  <section v-if="args.showSubTitleArea" class="border-b border-border px-8 h-15 flex items-center justify-between flex-none">
                    <span v-if="args.showSubTitle" class="body__bold">타이틀명</span>
                    <div v-if="args.showSubBtn" class="ml-auto">
                      <UiButton variant="outline" size="sm">서브버튼</UiButton>
                    </div>
                  </section>
                  <section v-if="args.showSearch" class="border-b border-border px-8 py-3 flex-none">
                    <div class="flex flex-wrap gap-2 items-center">
                      <span class="body__bold shrink-0">조회조건 :</span>
                      <UiInput class="w-48 h-8" placeholder="내용 입력" />
                      <UiButton size="sm">조회</UiButton>
                    </div>
                  </section>
                  <section class="border-b border-border px-8 h-[53px] flex items-center justify-between flex-none">
                    <span class="body__bold">총 225건</span>
                    <div class="flex gap-2">
                      <UiButton variant="outline" size="sm">키워드 검색</UiButton>
                    </div>
                  </section>
                  <div class="flex-1 overflow-y-auto">
                    <div class="px-8 py-4 flex flex-col gap-2">
                      <UiSkeleton class="h-10 w-full" v-for="n in 8" :key="n" />
                    </div>
                  </div>
                  <div v-if="args.showPagination" class="border-t border-border px-8 h-14 flex items-center justify-center flex-none">
                    <TablePagination v-model:page="page" :total="10" />
                  </div>
                </UiResizablePanel>
              </UiResizablePanelGroup>
            </template>

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

