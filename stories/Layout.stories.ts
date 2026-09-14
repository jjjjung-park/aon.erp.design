import type { Meta, StoryObj } from '@storybook/vue3'
import LeftSidebar from '@/markup/components/layout/sideMenu/LeftSidebar.vue'
import PageTabs from '@/markup/components/tabs/PageTabs.vue'
import TablePagination from '@/markup/components/pagination/TablePagination.vue'
import PageSearch from '@/markup/components/accordion/PageSearch.vue'
import EmptyData from '@/markup/components/empty/EmptyData.vue'
import TableLayout from '@/markup/components/table/TableLayout.vue'
import { ref } from 'vue'
import { LineTabs } from '@/markup/components/tabs'

const meta: Meta = {
  component: LineTabs,
  title: '레이아웃/PageLayout',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
}
export default meta
type Story = StoryObj

export const MainLayout: Story = {
  name: 'Index',
  parameters: { layout: 'fullscreen', docs: { story: { height: '400px' } } },
  argTypes: {
    // 사이드바
    sidebarOpen:        { control: 'boolean', description: '좌측 메뉴 열림 여부',    table: { category: '사이드바' } },
    // 헤더
    multiBrand:         { control: 'boolean', description: '브랜드 선택 셀렉트',      table: { category: '헤더' } },
    showAlarm:          { control: 'boolean', description: '알람 버튼',               table: { category: '헤더' } },
    showSettings:       { control: 'boolean', description: '설정 버튼',               table: { category: '헤더' } },
    showAvatar:         { control: 'boolean', description: '아바타 영역',             table: { category: '헤더' } },
    showPageTabs:       { control: 'boolean', description: '페이지탭 표시 여부',      table: { category: '헤더' } },
    // 콘텐츠
    layout:             { control: 'radio', options: ['기본', '분할화면', '빈화면'],  description: '레이아웃 타입',     table: { category: '콘텐츠' } },
    showSubTitle:       { control: 'boolean', description: '서브 타이틀',             table: { category: '콘텐츠' }, if: { arg: 'layout', neq: '빈화면' } },
    showMainBtn:        { control: 'boolean', description: '메인버튼',                table: { category: '콘텐츠' }, if: { arg: 'layout', neq: '빈화면' } },
    showContentTab:     { control: 'boolean', description: '콘텐츠 탭 (분할 영역 전체를 감싸는 탭)',   table: { category: '콘텐츠' }, if: { arg: 'layout', neq: '빈화면' } },
    showTabTitle:       { control: 'boolean', description: '탭 타이틀',               table: { category: '콘텐츠' }, if: { arg: 'layout', neq: '빈화면' } },
    showSubBtn:         { control: 'boolean', description: '탭 버튼',                 table: { category: '콘텐츠' }, if: { arg: 'layout', neq: '빈화면' } },
    showSplitTab:       { control: 'boolean', description: '분할 탭 (분할화면 우측 콘텐츠를 감싸는 탭)', table: { category: '콘텐츠' }, if: { arg: 'layout', eq: '분할화면' } },
    showSearch:         { control: 'boolean', description: '검색 영역 표시',           table: { category: '검색 영역' }, if: { arg: 'layout', neq: '빈화면' } },
    searchFilter:       { control: 'boolean', description: '조회 저장 필터',           table: { category: '검색 영역' }, if: { arg: 'layout', neq: '빈화면' } },
    // 테이블 영역
    showDataActionArea:  { control: 'boolean', description: '데이터 건수 영역',       table: { category: '테이블 영역' }, if: { arg: 'layout', neq: '빈화면' } },
    showTableActionArea: { control: 'boolean', description: '테이블 액션 버튼 영역',  table: { category: '테이블 영역' }, if: { arg: 'layout', neq: '빈화면' } },
    showTableFilter:     { control: 'boolean', description: '키워드 검색 버튼',       table: { category: '테이블 영역' }, if: { arg: 'layout', neq: '빈화면' } },
    showTableDownload:   { control: 'boolean', description: '엑셀 다운로드 버튼',     table: { category: '테이블 영역' }, if: { arg: 'layout', neq: '빈화면' } },
    showTableAction:     { control: 'boolean', description: '테이블 액션 버튼',       table: { category: '테이블 영역' }, if: { arg: 'layout', neq: '빈화면' } },
    showPagination:      { control: 'boolean', description: '페이지네이션',           table: { category: '테이블 영역' }, if: { arg: 'layout', neq: '빈화면' } },
    tableEmptyData:      { control: 'boolean', description: '데이터 없음 상태',        table: { category: '테이블 영역' }, if: { arg: 'layout', neq: '빈화면' } },
  },
  args: {
    sidebarOpen: false,
    multiBrand: true,
    showAlarm: true,
    showSettings: true,
    showAvatar: true,
    showPageTabs: true,
    layout: '기본',
    showTitle: true, // 항상 표시
    showSubTitle: true,
    showMainBtn: true,
    showContentTab: false,
    showTabTitle: false,
    showSubBtn: false,
    showSplitTab: false,
    showSearch: true,
    searchFilter: false,
    showDataActionArea: true,
    showTableActionArea: true,
    showTableFilter: true,
    showTableDownload: true,
    showTableAction: true,
    showPagination: true,
    tableEmptyData: false,
  },
  render: (args) => ({
    components: { LeftSidebar, PageTabs, TablePagination, PageSearch, TableLayout, EmptyData, LineTabs },
    setup() {
      const page = ref(1)
      const tabs = ref([
        { label: '전체', value: 'all', active: true },
        { label: '진행중', value: 'progress', active: false },
        { label: '완료', value: 'done', active: false },
        { label: '취소', value: 'cancel', active: false },
      ])
      const onTabChange = (value: string) => {
        tabs.value = tabs.value.map(t => ({ ...t, active: t.value === value }))
      }
      const splitTabs = ref([
        { label: '탭1', value: 'tab1', active: true },
        { label: '탭2', value: 'tab2', active: false },
        { label: '탭3', value: 'tab3', active: false },
      ])
      const onSplitTabChange = (value: string) => {
        splitTabs.value = splitTabs.value.map(t => ({ ...t, active: t.value === value }))
      }
      return { args, page, tabs, onTabChange, splitTabs, onSplitTabChange }
    },
    template: `
      <UiSidebarProvider :key="args.sidebarOpen" :defaultOpen="args.sidebarOpen" class="min-h-full">
        <LeftSidebar />
        <UiSidebarInset class="overflow-hidden">

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

          <!-- 페이지탭 -->
          <PageTabs v-if="args.showPageTabs" />

          <!-- 콘텐츠 -->
          <div class="flex flex-col flex-1 min-h-0 overflow-hidden">

            <!-- 타이틀 -->
            <section class="border-b border-border px-8 flex-none">
              <header class="contents-header">
                <div class="contents-header__title">
                  <h2>화면 명</h2>
                  <span v-if="args.showSubTitle">화면 설명이 들어갑니다</span>
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
            <div v-if="args.layout === '빈화면'" class="flex-1 flex items-center justify-center">
              <EmptyData />
            </div>

            <!-- 기본 -->
            <template v-else-if="args.layout === '기본'">
              <section v-if="args.showContentTab && (args.showTabTitle || args.showSubBtn)" class="px-8 py-6 flex items-center justify-between flex-none">
                <span v-if="args.showTabTitle" class="font-bold">타이틀명</span>
                <div v-if="args.showSubBtn" class="ml-auto">
                  <UiButton variant="outline">서브버튼</UiButton>
                </div>
              </section>
              <section v-if="args.showSearch" class="px-8 pt-6 flex-none">
                <PageSearch :filter="args.searchFilter">
                  <template #search-body>
                    <div class="flex flex-wrap gap-2 items-center">
                      <UiInput class="w-48 h-8" placeholder="내용 입력" />
                      <UiInput class="w-48 h-8" placeholder="내용 입력" />
                    </div>
                  </template>
                </PageSearch>
              </section>
              <TableLayout
                class="flex-1 min-h-0"
                :table-top="args.showDataActionArea || args.showTableActionArea"
                :data-action="args.showDataActionArea"
                :table-action="args.showTableActionArea"
                :filter="args.showTableFilter"
                :download="args.showTableDownload"
                :setting="args.showTableAction"
                :pagination="args.showPagination"
              >
                <template #table>
                  <UiTable class="table-fixed w-full">
                    <UiTableHeader class="sticky top-0 z-10">
                      <UiTableRow>
                        <UiTableHead v-for="h in ['이름', '부서', '직급', '상태', '등록일']" :key="h">{{ h }}</UiTableHead>
                      </UiTableRow>
                    </UiTableHeader>
                    <UiTableBody v-if="!args.tableEmptyData">
                      <UiTableRow v-for="n in 10" :key="n">
                        <UiTableCell v-for="h in ['이름', '부서', '직급', '상태', '등록일']" :key="h">
                          <UiSkeleton class="h-4 w-full" />
                        </UiTableCell>
                      </UiTableRow>
                    </UiTableBody>
                  </UiTable>
                  <div v-if="args.tableEmptyData" class="h-60">
                    <EmptyData />
                  </div>
                </template>
                <template #pagination>
                  <TablePagination v-model:page="page" :total="10" />
                </template>
              </TableLayout>
            </template>

            <!-- 분할화면 -->
            <template v-else>
              <UiResizablePanelGroup direction="horizontal" class="flex-1 min-h-0">
                <UiResizablePanel :default-size="30" :min-size="20" :max-size="50" class="flex flex-col overflow-y-auto gap-3 px-6 pt-6">
                  <UiSkeleton class="h-10 w-full flex-none" v-for="n in 15" :key="n" />
                </UiResizablePanel>
                <UiResizableHandle />
                <UiResizablePanel class="flex flex-col overflow-hidden">
                  <!-- 탭 타이틀 영역 -->
                  <section v-if="args.showTabTitle || args.showSubBtn" class="px-8 h-15 flex items-center justify-between flex-none">
                    <span v-if="args.showTabTitle" class="font-bold">타이틀명</span>
                    <div v-if="args.showSubBtn" class="ml-auto">
                      <UiButton variant="outline" size="sm">서브버튼</UiButton>
                    </div>
                  </section>
                  <!-- 분할 탭 -->
                  <nav v-if="args.showSplitTab" class="border-b border-border px-8 flex-none">
                    <LineTabs :tab-list="splitTabs" @change="onSplitTabChange" />
                  </nav>
                  <!-- 검색 -->
                  <section v-if="args.showSearch" class="px-8 pt-6 flex-none">
                    <PageSearch :filter="args.searchFilter">
                      <template #search-body>
                        <div class="flex flex-wrap gap-2 items-center">
                          <UiInput class="w-48 h-8" placeholder="내용 입력" />
                        </div>
                      </template>
                    </PageSearch>
                  </section>
                  <!-- 컨텐츠 컨트롤 전부 false → Empty -->
                  <div v-if="!args.showTabTitle && !args.showSubBtn && !args.showSplitTab && !args.showSearch" class="flex-1 flex items-center justify-center">
                    <EmptyData />
                  </div>
                  <TableLayout
                    v-else
                    class="flex-1 min-h-0"
                    :table-top="args.showDataActionArea || args.showTableActionArea"
                    :data-action="args.showDataActionArea"
                    :table-action="args.showTableActionArea"
                    :filter="args.showTableFilter"
                    :download="args.showTableDownload"
                    :setting="args.showTableAction"
                    :pagination="args.showPagination"
                  >
                    <template #table>
                      <UiTable class="table-fixed w-full">
                        <UiTableHeader class="sticky top-0 z-10">
                          <UiTableRow>
                            <UiTableHead v-for="h in ['이름', '부서', '상태', '등록일']" :key="h">{{ h }}</UiTableHead>
                          </UiTableRow>
                        </UiTableHeader>
                        <UiTableBody v-if="!args.tableEmptyData">
                          <UiTableRow v-for="n in 8" :key="n">
                            <UiTableCell v-for="h in ['이름', '부서', '상태', '등록일']" :key="h">
                              <UiSkeleton class="h-4 w-full" />
                            </UiTableCell>
                          </UiTableRow>
                        </UiTableBody>
                      </UiTable>
                      <div v-if="args.tableEmptyData" class="h-60">
                        <EmptyData />
                      </div>
                    </template>
                    <template #pagination>
                      <TablePagination v-model:page="page" :total="10" />
                    </template>
                  </TableLayout>
                </UiResizablePanel>
              </UiResizablePanelGroup>
            </template>

          </div>
        </UiSidebarInset>
      </UiSidebarProvider>
    `,
  }),
}
