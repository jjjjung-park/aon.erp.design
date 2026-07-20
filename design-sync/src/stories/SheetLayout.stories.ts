import type { Meta, StoryObj } from '@storybook/vue3'
import { ref, watch } from 'vue'
import { LineTabs } from '@/markup/components/tabs'

const meta: Meta = {
  title: '레이아웃/Sheet',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

// ─── 기본 (계층 구조) ─────────────────────────────────────────────────────────

export const Index: Story = {
  name: 'Sheet — 기본',
  argTypes: {
    columns:      { control: 'radio',   options: ['1단', '2단'], description: '시트 너비 (1단 480px · 2단 960px)' },
    showFullscreen: { control: 'boolean', description: '전체화면 버튼 표시' },
    sheetType:    { control: 'radio',   options: ['기본', '폼', '상세'], description: '시트 타입' },
    showTabs:     { control: 'boolean', description: '탭 레이어 표시' },
    showSection:  { control: 'boolean', description: '섹션 레이어 표시', if: { arg: 'sheetType', eq: '기본' } },
    showGroup:    { control: 'boolean', description: '그룹 레이어 표시', if: { arg: 'showSection' } },
    cardLayout:   { control: 'radio',   options: ['가로', '세로'], description: '카드 내부 레이아웃 (가로: 보더 구분 · 세로: 리사이징)', if: { arg: 'showGroup' } },
  },
  args: {
    columns: '1단',
    showFullscreen: false,
    sheetType: '기본',
    showTabs: true,
    showSection: true,
    showGroup: true,
    cardLayout: '가로',
  },
  render: (args) => ({
    components: { LineTabs },
    setup() {
      const widthMap: Record<string, string> = { '1단': '480px', '2단': '960px' }
      const isFullSize = ref(false)
      watch(() => args.columns, () => { isFullSize.value = false })
      const tabList = ref([
        { label: '기본 정보', value: 'basic',   active: true  },
        { label: '추가 정보', value: 'extra',   active: false },
        { label: '이력',      value: 'history', active: false },
      ])
      const onTabChange = (val: string) => {
        tabList.value.forEach(t => { t.active = t.value === val })
      }
      return { args, widthMap, isFullSize, tabList, onTabChange }
    },
    template: `
      <div class="bg-background flex flex-col shadow-bottom" :style="isFullSize ? { width: '90vw', height: '90vh' } : { width: widthMap[args.columns], height: '640px' }">

        <!-- 헤더 -->
        <div class="flex justify-between items-center px-6 min-h-14 shrink-0">
          <h2 class="flex items-center gap-2 title__bold flex-wrap">시트 제목</h2>
          <div class="ml-auto flex items-center gap-2 h-5">
            <template v-if="args.showFullscreen">
              <UiButton variant="ghost" size="icon" @click="isFullSize = !isFullSize">
                <LucideMinimize2 v-if="isFullSize" /><LucideExpand v-else />
              </UiButton>
              <UiSeparator orientation="vertical" size="md" />
            </template>
            <UiButton variant="ghost" size="icon"><LucideX /></UiButton>
          </div>
        </div>

        <!-- 탭 -->
        <section v-if="args.showTabs" class="border-b border-border px-6 shrink-0">
          <LineTabs :tab-list="tabList" @change="onTabChange" />
        </section>

        <!-- 바디 -->
        <div class="overflow-y-auto flex-1 container-type--inline">

          <!-- 기본 시트 -->
          <template v-if="args.sheetType === '기본'">
            <div class="list-layout--grid">
              <h4 v-if="args.showSection" class="col-span-full">기본 정보</h4>
              <template v-if="args.showSection && args.showGroup">
                <UiCard size="md" class="col-span-full">
                  <template v-if="args.cardLayout === '가로'">
                    <div class="list-layout--grid px-0">
                      <h4>소속 정보</h4>
                      <FormItem label="소속" placeholder="소속을 선택해 주세요" />
                      <FormItem label="부서" placeholder="부서를 선택해 주세요" />
                    </div>
                    <UiSeparator orientation="horizontal" class="my-4 data-[orientation=horizontal]:h-px bg-border" />
                    <div class="list-layout--grid px-0">
                      <h4>개인 정보</h4>
                      <FormItem required label="이름" placeholder="이름을 입력해 주세요" />
                      <FormItem required label="이메일" placeholder="이메일을 입력해 주세요" />
                    </div>
                  </template>
                  <template v-else>
                    <UiResizablePanelGroup direction="horizontal" class="min-h-[180px]">
                      <UiResizablePanel :default-size="50" class="container-type--inline">
                        <div class="list-layout--grid px-0 pr-4 h-full">
                          <h4>소속 정보</h4>
                          <FormItem label="소속" placeholder="소속을 선택해 주세요" class="col-span-full" />
                          <FormItem label="부서" placeholder="부서를 선택해 주세요" class="col-span-full" />
                        </div>
                      </UiResizablePanel>
                      <UiResizableHandle />
                      <UiResizablePanel :default-size="50" class="container-type--inline">
                        <div class="list-layout--grid px-0 pl-4 h-full">
                          <h4>개인 정보</h4>
                          <FormItem required label="이름" placeholder="이름을 입력해 주세요" class="col-span-full" />
                          <FormItem required label="이메일" placeholder="이메일을 입력해 주세요" class="col-span-full" />
                        </div>
                      </UiResizablePanel>
                    </UiResizablePanelGroup>
                  </template>
                </UiCard>
              </template>
              <template v-else>
                <FormItem label="소속" placeholder="소속을 선택해 주세요" />
                <FormItem label="부서" placeholder="부서를 선택해 주세요" />
                <FormItem required label="이름" placeholder="이름을 입력해 주세요" />
                <FormItem required label="이메일" placeholder="이메일을 입력해 주세요" />
              </template>
            </div>
            <template v-if="args.showSection">
              <UiSeparator orientation="horizontal" class="data-[orientation=horizontal]:h-2 bg-gray-100" />
              <div class="list-layout--grid">
                <h4 class="col-span-full">추가 정보</h4>
                <template v-if="args.showGroup">
                  <UiCard size="md" class="col-span-full">
                    <template v-if="args.cardLayout === '가로'">
                      <div class="list-layout--grid px-0">
                        <h4>계약 정보</h4>
                        <FormItem label="입사일" placeholder="날짜를 선택해 주세요" />
                        <FormItem label="계약 유형" placeholder="유형을 선택해 주세요" />
                      </div>
                      <UiSeparator orientation="horizontal" class="my-4 data-[orientation=horizontal]:h-px bg-border" />
                      <div class="list-layout--grid px-0">
                        <h4>비고</h4>
                        <FormItem label="비고" placeholder="비고를 입력해 주세요" class="col-span-full" />
                      </div>
                    </template>
                    <template v-else>
                      <UiResizablePanelGroup direction="horizontal" class="min-h-[160px]">
                        <UiResizablePanel :default-size="50" class="container-type--inline">
                          <div class="list-layout--grid px-0 pr-4 h-full">
                            <h4>계약 정보</h4>
                            <FormItem label="입사일" placeholder="날짜를 선택해 주세요" class="col-span-full" />
                            <FormItem label="계약 유형" placeholder="유형을 선택해 주세요" class="col-span-full" />
                          </div>
                        </UiResizablePanel>
                        <UiResizableHandle />
                        <UiResizablePanel :default-size="50" class="container-type--inline">
                          <div class="list-layout--grid px-0 pl-4">
                            <h4>비고</h4>
                            <FormItem label="비고" placeholder="비고를 입력해 주세요" class="col-span-full" />
                          </div>
                        </UiResizablePanel>
                      </UiResizablePanelGroup>
                    </template>
                  </UiCard>
                </template>
                <template v-else>
                  <FormItem label="입사일" placeholder="날짜를 선택해 주세요" />
                  <FormItem label="계약 유형" placeholder="유형을 선택해 주세요" />
                  <FormItem label="비고" placeholder="비고를 입력해 주세요" class="col-span-full" />
                </template>
              </div>
            </template>
          </template>

          <!-- 폼 시트 -->
          <template v-else-if="args.sheetType === '폼'">
            <div class="list-layout--grid">
              <h4>기본 정보</h4>
              <FormItem required label="소속" placeholder="소속을 선택해 주세요" />
              <FormItem required label="브랜드코드" placeholder="브랜드코드를 입력해 주세요" />
              <FormItem required label="브랜드명" placeholder="브랜드명을 입력해 주세요" />
              <FormItem label="브랜드 약칭" placeholder="약칭을 입력해 주세요" />
            </div>
            <UiSeparator orientation="horizontal" class="data-[orientation=horizontal]:h-2 bg-gray-100" />
            <div class="list-layout--grid">
              <h4>추가 정보</h4>
              <FormItem label="시즌 코드" placeholder="시즌 코드를 입력해 주세요" />
              <FormItem label="사용 여부" placeholder="사용 여부를 선택해 주세요" />
              <FormItem label="정렬 순서" placeholder="숫자를 입력해 주세요" />
              <FormItem label="비고" placeholder="비고를 입력해 주세요" class="col-span-full" />
            </div>
          </template>

          <!-- 상세 시트 -->
          <template v-else>
            <div class="view-list">
              <h4>기본 정보</h4>
              <dl class="view-list__item"><dt class="view-list__item-title">소속</dt><dd class="view-list__item-cont">ABC Holdings</dd></dl>
              <dl class="view-list__item"><dt class="view-list__item-title">브랜드코드</dt><dd class="view-list__item-cont">BRD-001</dd></dl>
              <dl class="view-list__item"><dt class="view-list__item-title">브랜드명</dt><dd class="view-list__item-cont">뉴발란스</dd></dl>
              <dl class="view-list__item"><dt class="view-list__item-title">브랜드 약칭</dt><dd class="view-list__item-cont">NB</dd></dl>
            </div>
            <UiSeparator orientation="horizontal" class="data-[orientation=horizontal]:h-2 bg-gray-100" />
            <div class="view-list">
              <h4>추가 정보</h4>
              <dl class="view-list__item"><dt class="view-list__item-title">시즌 코드</dt><dd class="view-list__item-cont">SS25</dd></dl>
              <dl class="view-list__item view-list__item--row"><dt class="view-list__item-title">사용 여부</dt><dd class="view-list__item-cont"><UiBadge variant="process">사용</UiBadge></dd></dl>
              <dl class="view-list__item"><dt class="view-list__item-title">정렬 순서</dt><dd class="view-list__item-cont">1</dd></dl>
              <dl class="view-list__item"><dt class="view-list__item-title">비고</dt><dd class="view-list__item-cont">—</dd></dl>
              <dl class="view-list__item"><dt class="view-list__item-title">등록일</dt><dd class="view-list__item-cont">2025-01-15</dd></dl>
              <dl class="view-list__item"><dt class="view-list__item-title">수정일</dt><dd class="view-list__item-cont">2025-06-20</dd></dl>
            </div>
          </template>

        </div>

        <!-- 푸터 -->
        <div class="flex justify-between gap-2 p-4 shrink-0">
          <UiButton variant="outline">닫기</UiButton>
          <div v-if="args.sheetType === '상세'" class="flex gap-2">
            <UiButton variant="destructive">삭제</UiButton>
            <UiButton>수정</UiButton>
          </div>
          <UiButton v-else>저장</UiButton>
        </div>
      </div>
    `,
  }),
}

