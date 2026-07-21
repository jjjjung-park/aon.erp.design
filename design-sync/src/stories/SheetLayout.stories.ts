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

export const Index: Story = {
  name: 'Sheet — 기본',
  argTypes: {
    // ── 레이아웃 ──────────────────────────────────────────────────────────────
    columns:     { control: 'radio',   options: ['1단', '2단'],   description: '시트 너비 (1단 480px · 2단 960px)', table: { category: '레이아웃' } },
    showTabs:    { control: 'boolean', description: '탭',                                                          table: { category: '레이아웃' } },
    showSection: { control: 'boolean', description: '섹션 레이어 (제목 + 구분선)',                                 table: { category: '레이아웃' } },
    showCard:    { control: 'boolean', description: '카드 레이어',                  if: { arg: 'showSection' },   table: { category: '레이아웃' } },
    showBorder:  { control: 'boolean', description: '보더 구분 (카드 내부 섹션)', if: { arg: 'showCard' },       table: { category: '레이아웃' } },

    // ── 헤더 ──────────────────────────────────────────────────────────────────
    statusVariant:  { control: 'select',  options: ['없음', 'info', 'outline', 'process', 'accept', 'reject', 'hold'], description: '상태 뱃지', table: { category: '헤더' } },
    showFullscreen: { control: 'boolean', description: '전체화면 버튼',                                                                        table: { category: '헤더' } },

    // ── 컨텐츠 ────────────────────────────────────────────────────────────────
    showCodeTag:      { control: 'boolean', description: '코드 태그 (식별 코드를 상단에 표시)',      if: { arg: 'showSection' },              table: { category: '컨텐츠' } },
    showDateTag:      { control: 'select',  options: ['없음', '플랫', '섹션', '카드'], description: '날짜 태그 위치 (각 계층 상단 우측)', if: { arg: 'showSection' }, table: { category: '컨텐츠' } },
    showSectionTitle: { control: 'boolean', description: '섹션 타이틀',                          if: { arg: 'showSection' },            table: { category: '컨텐츠' } },
    showCardTitle:    { control: 'boolean', description: '카드 타이틀',                          if: { arg: 'showCard' },               table: { category: '컨텐츠' } },
    showForm:         { control: 'boolean', description: '폼 (input, 라디오, 콤보박스, 날짜 등)',                                       table: { category: '컨텐츠' } },
    showDetail:       { control: 'boolean', description: '상세 (텍스트, 툴팁, 버튼 등)',                                               table: { category: '컨텐츠' } },
    showTable:        { control: 'boolean', description: '테이블',                                                                      table: { category: '컨텐츠' } },

    // ── 푸터 ──────────────────────────────────────────────────────────────────
    showDelete: { control: 'boolean', description: '삭제 버튼', table: { category: '푸터' } },
    showEdit:   { control: 'boolean', description: '수정 버튼', table: { category: '푸터' } },
    showSave:   { control: 'boolean', description: '저장 버튼', table: { category: '푸터' } },
  },
  args: {
    columns: '1단',
    showTabs: false,
    showSection: false,
    showCard: false,
    showBorder: false,
    statusVariant: '없음',
    showFullscreen: false,
    showCodeTag: false,
    showDateTag: '없음',
    showSectionTitle: false,
    showCardTitle: false,
    showForm: true,
    showDetail: false,
    showTable: false,
    showDelete: false,
    showEdit: false,
    showSave: true,
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
          <h2 class="flex items-center gap-2 title__bold flex-wrap">
            시트 제목
            <UiBadge v-if="args.statusVariant !== '없음'" :variant="args.statusVariant" class="shrink-0">상태</UiBadge>
          </h2>
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

          <!-- Section/Label: 코드 태그 + 플랫 날짜 태그 -->
          <div v-if="args.showCodeTag"
               class="flex items-center justify-between gap-2 px-6 py-6">
            <div class="flex flex-wrap gap-1 flex-1 min-w-0">
              <Tags title="BRD-001" />
              <Tags title="뉴발란스" />
            </div>
            <Tags v-if="args.showDateTag === '플랫'" title="생성일: 25.12.31" variant="outline" class="shrink-0" />
          </div>

          <!-- ── 계층 1: 섹션 없음 (플랫) ───────────────────────────────────── -->
          <template v-if="!args.showSection">
            <div class="list-layout--grid">
              <template v-if="args.showForm">
                <FormItem required label="이름"   placeholder="이름을 입력해 주세요" />
                <FormItem required label="이메일" placeholder="이메일을 입력해 주세요" />
                <FormItem         label="부서"   placeholder="부서를 선택해 주세요" />
                <FormItem         label="직책"   placeholder="직책을 선택해 주세요" />
              </template>
              <template v-if="args.showDetail">
                <dl class="view-list__item col-span-full"><dt class="view-list__item-title">이름</dt><dd class="view-list__item-cont">홍길동</dd></dl>
                <dl class="view-list__item col-span-full"><dt class="view-list__item-title">이메일</dt><dd class="view-list__item-cont">hong@example.com</dd></dl>
                <dl class="view-list__item col-span-full"><dt class="view-list__item-title">부서</dt><dd class="view-list__item-cont">개발팀</dd></dl>
                <dl class="view-list__item col-span-full"><dt class="view-list__item-title">직책</dt><dd class="view-list__item-cont">과장</dd></dl>
              </template>
              <template v-if="args.showTable">
                <UiTable class="col-span-full table-secondary table-fixed w-full">
                  <UiTableHeader><UiTableRow><UiTableHead>이름</UiTableHead><UiTableHead>이메일</UiTableHead><UiTableHead>부서</UiTableHead><UiTableHead>직책</UiTableHead></UiTableRow></UiTableHeader>
                  <UiTableBody>
                    <UiTableRow><UiTableCell>홍길동</UiTableCell><UiTableCell>hong@example.com</UiTableCell><UiTableCell>개발팀</UiTableCell><UiTableCell>과장</UiTableCell></UiTableRow>
                    <UiTableRow><UiTableCell>이순신</UiTableCell><UiTableCell>lee@example.com</UiTableCell><UiTableCell>디자인팀</UiTableCell><UiTableCell>차장</UiTableCell></UiTableRow>
                    <UiTableRow><UiTableCell>김철수</UiTableCell><UiTableCell>kim@example.com</UiTableCell><UiTableCell>마케팅팀</UiTableCell><UiTableCell>대리</UiTableCell></UiTableRow>
                  </UiTableBody>
                </UiTable>
              </template>
            </div>
          </template>

          <!-- ── 계층 2/3/4: 섹션 있음 ─────────────────────────────────────── -->
          <template v-else>
            <UiSeparator v-if="args.showCodeTag" orientation="horizontal" class="data-[orientation=horizontal]:h-2 bg-gray-100" />

            <!-- 섹션 1: 기본 정보 -->
            <div class="list-layout--grid">
              <div v-if="args.showSectionTitle || args.showDateTag === '섹션'" class="col-span-full flex items-center justify-between">
                <h4 v-if="args.showSectionTitle">기본 정보</h4>
                <span v-else />
                <Tags v-if="args.showDateTag === '섹션'" title="생성일: 25.12.31" variant="outline" class="shrink-0" />
              </div>

              <!-- 섹션 레벨 공통 아이템 (카드 밖) -->
              <template v-if="args.showForm">
                <FormItem required label="이름"   placeholder="이름을 입력해 주세요" />
                <FormItem required label="이메일" placeholder="이메일을 입력해 주세요" />
              </template>
              <template v-if="args.showDetail">
                <dl class="view-list__item col-span-full"><dt class="view-list__item-title">이름</dt><dd class="view-list__item-cont">홍길동</dd></dl>
                <dl class="view-list__item col-span-full"><dt class="view-list__item-title">이메일</dt><dd class="view-list__item-cont">hong@example.com</dd></dl>
              </template>

              <!-- 계층 3/4: 섹션 내 카드 서브그룹 -->
              <template v-if="args.showCard">
                <UiCard size="md" class="col-span-full">
                  <div class="list-layout--grid px-0">
                    <div v-if="args.showCardTitle || args.showDateTag === '카드'" class="col-span-full flex items-center justify-between">
                      <h4 v-if="args.showCardTitle">소속 정보</h4>
                      <span v-else />
                      <Tags v-if="args.showDateTag === '카드'" title="생성일: 25.12.31" variant="outline" class="shrink-0" />
                    </div>
                    <template v-if="args.showForm">
                      <FormItem label="소속" placeholder="소속을 선택해 주세요" />
                      <FormItem label="부서" placeholder="부서를 선택해 주세요" />
                    </template>
                    <template v-if="args.showDetail">
                      <dl class="view-list__item col-span-full"><dt class="view-list__item-title">소속</dt><dd class="view-list__item-cont">ABC Holdings</dd></dl>
                      <dl class="view-list__item col-span-full"><dt class="view-list__item-title">부서</dt><dd class="view-list__item-cont">개발팀</dd></dl>
                    </template>
                  </div>
                  <!-- 계층 4: 카드 내 보더 구분 -->
                  <template v-if="args.showBorder">
                    <UiSeparator orientation="horizontal" class="my-4 data-[orientation=horizontal]:h-px bg-border" />
                    <div class="list-layout--grid px-0">
                      <div v-if="args.showCardTitle || args.showDateTag === '카드'" class="col-span-full flex items-center justify-between">
                        <h4 v-if="args.showCardTitle">직무 정보</h4>
                        <span v-else />
                        <Tags v-if="args.showDateTag === '카드'" title="생성일: 25.12.31" variant="outline" class="shrink-0" />
                      </div>
                      <template v-if="args.showForm">
                        <FormItem label="직책" placeholder="직책을 선택해 주세요" />
                        <FormItem label="직급" placeholder="직급을 선택해 주세요" />
                      </template>
                      <template v-if="args.showDetail">
                        <dl class="view-list__item col-span-full"><dt class="view-list__item-title">직책</dt><dd class="view-list__item-cont">과장</dd></dl>
                        <dl class="view-list__item col-span-full"><dt class="view-list__item-title">직급</dt><dd class="view-list__item-cont">5급</dd></dl>
                      </template>
                    </div>
                  </template>
                  <!-- 테이블 (카드 내) -->
                  <template v-if="args.showTable">
                    <UiSeparator orientation="horizontal" class="my-4 data-[orientation=horizontal]:h-px bg-border" />
                    <UiTable class="table-secondary table-fixed w-full">
                      <UiTableHeader><UiTableRow><UiTableHead>이름</UiTableHead><UiTableHead>부서</UiTableHead><UiTableHead>직책</UiTableHead></UiTableRow></UiTableHeader>
                      <UiTableBody>
                        <UiTableRow><UiTableCell>홍길동</UiTableCell><UiTableCell>개발팀</UiTableCell><UiTableCell>과장</UiTableCell></UiTableRow>
                        <UiTableRow><UiTableCell>이순신</UiTableCell><UiTableCell>디자인팀</UiTableCell><UiTableCell>차장</UiTableCell></UiTableRow>
                      </UiTableBody>
                    </UiTable>
                  </template>
                </UiCard>
              </template>

              <!-- 테이블 (섹션 레벨, 카드 없을 때) -->
              <template v-if="!args.showCard && args.showTable">
                <UiTable class="col-span-full table-secondary table-fixed w-full">
                  <UiTableHeader><UiTableRow><UiTableHead>이름</UiTableHead><UiTableHead>이메일</UiTableHead><UiTableHead>부서</UiTableHead></UiTableRow></UiTableHeader>
                  <UiTableBody>
                    <UiTableRow><UiTableCell>홍길동</UiTableCell><UiTableCell>hong@example.com</UiTableCell><UiTableCell>개발팀</UiTableCell></UiTableRow>
                    <UiTableRow><UiTableCell>이순신</UiTableCell><UiTableCell>lee@example.com</UiTableCell><UiTableCell>디자인팀</UiTableCell></UiTableRow>
                  </UiTableBody>
                </UiTable>
              </template>
            </div>

            <UiSeparator orientation="horizontal" class="data-[orientation=horizontal]:h-2 bg-gray-100" />

            <!-- 섹션 2: 추가 정보 -->
            <div class="list-layout--grid">
              <div v-if="args.showSectionTitle || args.showDateTag === '섹션'" class="col-span-full flex items-center justify-between">
                <h4 v-if="args.showSectionTitle">추가 정보</h4>
                <span v-else />
                <Tags v-if="args.showDateTag === '섹션'" title="생성일: 25.12.31" variant="outline" class="shrink-0" />
              </div>

              <!-- 섹션 레벨 공통 아이템 (카드 밖) -->
              <template v-if="args.showForm">
                <FormItem label="입사일"    placeholder="날짜를 선택해 주세요" />
                <FormItem label="계약 유형" placeholder="유형을 선택해 주세요" />
              </template>
              <template v-if="args.showDetail">
                <dl class="view-list__item col-span-full"><dt class="view-list__item-title">입사일</dt><dd class="view-list__item-cont">2023-03-01</dd></dl>
                <dl class="view-list__item col-span-full"><dt class="view-list__item-title">계약 유형</dt><dd class="view-list__item-cont">정규직</dd></dl>
              </template>

              <!-- 계층 3/4: 섹션 내 카드 서브그룹 -->
              <template v-if="args.showCard">
                <UiCard size="md" class="col-span-full">
                  <div class="list-layout--grid px-0">
                    <div v-if="args.showCardTitle || args.showDateTag === '카드'" class="col-span-full flex items-center justify-between">
                      <h4 v-if="args.showCardTitle">계약 세부 정보</h4>
                      <span v-else />
                      <Tags v-if="args.showDateTag === '카드'" title="생성일: 25.12.31" variant="outline" class="shrink-0" />
                    </div>
                    <template v-if="args.showForm">
                      <FormItem label="급여 유형"  placeholder="급여 유형을 선택해 주세요" />
                      <FormItem label="근무 형태"  placeholder="근무 형태를 선택해 주세요" />
                    </template>
                    <template v-if="args.showDetail">
                      <dl class="view-list__item col-span-full"><dt class="view-list__item-title">급여 유형</dt><dd class="view-list__item-cont">월급</dd></dl>
                      <dl class="view-list__item col-span-full"><dt class="view-list__item-title">근무 형태</dt><dd class="view-list__item-cont">재택</dd></dl>
                    </template>
                  </div>
                  <template v-if="args.showBorder">
                    <UiSeparator orientation="horizontal" class="my-4 data-[orientation=horizontal]:h-px bg-border" />
                    <div class="list-layout--grid px-0">
                      <div v-if="args.showCardTitle || args.showDateTag === '카드'" class="col-span-full flex items-center justify-between">
                        <h4 v-if="args.showCardTitle">비고</h4>
                        <span v-else />
                        <Tags v-if="args.showDateTag === '카드'" title="생성일: 25.12.31" variant="outline" class="shrink-0" />
                      </div>
                      <template v-if="args.showForm">
                        <FormItem label="비고" placeholder="비고를 입력해 주세요" class="col-span-full" />
                      </template>
                      <template v-if="args.showDetail">
                        <dl class="view-list__item col-span-full"><dt class="view-list__item-title">비고</dt><dd class="view-list__item-cont">—</dd></dl>
                      </template>
                    </div>
                  </template>
                  <template v-if="args.showTable">
                    <UiSeparator orientation="horizontal" class="my-4 data-[orientation=horizontal]:h-px bg-border" />
                    <UiTable class="table-secondary table-fixed w-full">
                      <UiTableHeader><UiTableRow><UiTableHead>항목</UiTableHead><UiTableHead>값</UiTableHead></UiTableRow></UiTableHeader>
                      <UiTableBody>
                        <UiTableRow><UiTableCell>급여 유형</UiTableCell><UiTableCell>월급</UiTableCell></UiTableRow>
                        <UiTableRow><UiTableCell>근무 형태</UiTableCell><UiTableCell>재택</UiTableCell></UiTableRow>
                      </UiTableBody>
                    </UiTable>
                  </template>
                </UiCard>
              </template>

              <!-- 테이블 (섹션 레벨, 카드 없을 때) -->
              <template v-if="!args.showCard && args.showTable">
                <UiTable class="col-span-full table-secondary table-fixed w-full">
                  <UiTableHeader><UiTableRow><UiTableHead>항목</UiTableHead><UiTableHead>값</UiTableHead></UiTableRow></UiTableHeader>
                  <UiTableBody>
                    <UiTableRow><UiTableCell>입사일</UiTableCell><UiTableCell>2023-03-01</UiTableCell></UiTableRow>
                    <UiTableRow><UiTableCell>계약 유형</UiTableCell><UiTableCell>정규직</UiTableCell></UiTableRow>
                  </UiTableBody>
                </UiTable>
              </template>
            </div>
          </template>

        </div>

        <!-- 푸터 -->
        <div class="flex justify-between gap-2 p-4 shrink-0">
          <UiButton variant="outline">닫기</UiButton>
          <div class="flex gap-2">
            <UiButton v-if="args.showDelete" variant="destructive">삭제</UiButton>
            <UiButton v-if="args.showEdit" variant="secondary">수정</UiButton>
            <UiButton v-if="args.showSave">저장</UiButton>
          </div>
        </div>
      </div>
    `,
  }),
}
