import{X as x,y,z as F,ca as R,bM as e}from"./iframe-RcI2tPm4.js";import{a as I}from"./PageTabs-DEPATQl7.js";import{_ as z}from"./ComboboxTag-D3Kuh4rs.js";import{_ as S}from"./ComboboxBase-OvtvW4Ug.js";import{_ as D}from"./SelectBase-DJQhvxQp.js";import{_ as H}from"./DatePicker-LW2os617.js";import"./preload-helper-FI0fEOG2.js";import"./EmptyData-CpBZOKlK.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const B=[{label:"옵션 1",value:"1"},{label:"옵션 2",value:"2"},{label:"옵션 3",value:"3"},{label:"옵션 4",value:"4"}],A={title:"레이아웃/Sheet",tags:["autodocs"],parameters:{layout:"centered"},argTypes:{columns:{control:"radio",options:["1단","2단","3단"],description:"시트 너비 (1단 480px · 2단 960px · 3단 1440px)",table:{category:"레이아웃"}},showTabs:{control:"boolean",description:"탭",table:{category:"레이아웃"}},showSection:{control:"boolean",description:"섹션 레이어 (제목 + 구분선)",table:{category:"레이아웃"}},showCard:{control:"boolean",description:"카드 레이어",if:{arg:"showSection"},table:{category:"레이아웃"}},showBorder:{control:"boolean",description:"보더 구분 (카드 내부 섹션)",if:{arg:"showCard"},table:{category:"레이아웃"}},showResize:{control:"boolean",description:"리사이즈 패널 (2단 · 카드)",if:{arg:"showCard"},table:{category:"레이아웃"}},statusVariant:{control:"select",options:["없음","info","outline","process","accept","reject","hold"],description:"상태 뱃지",table:{category:"헤더"}},showFullscreen:{control:"boolean",description:"전체화면 버튼",table:{category:"헤더"}},showCodeTag:{control:"boolean",description:"코드 태그 (식별 코드를 상단에 표시)",if:{arg:"showSection"},table:{category:"컨텐츠"}},showDateTag:{control:"select",options:["없음","플랫","섹션","카드"],description:"날짜 태그 위치 (각 계층 상단 우측)",if:{arg:"showSection"},table:{category:"컨텐츠"}},showSectionTitle:{control:"boolean",description:"섹션 타이틀",if:{arg:"showSection"},table:{category:"컨텐츠"}},showCardTitle:{control:"boolean",description:"카드 타이틀",if:{arg:"showCard"},table:{category:"컨텐츠"}},showForm:{control:"boolean",description:"폼 (input, 라디오, 콤보박스, 날짜 등)",table:{category:"컨텐츠"}},showDetail:{control:"boolean",description:"상세 (텍스트, 툴팁, 버튼 등)",table:{category:"컨텐츠"}},showTable:{control:"boolean",description:"테이블",table:{category:"컨텐츠"}},showDelete:{control:"boolean",description:"삭제 버튼",table:{category:"푸터"}},showEdit:{control:"boolean",description:"수정 버튼",table:{category:"푸터"}},showSave:{control:"boolean",description:"저장 버튼",table:{category:"푸터"}}},render:l=>({components:{LineTabs:I},setup(){const d={"1단":"480px","2단":"960px","3단":"1440px"},a=e(!1);R(()=>l.columns,()=>{a.value=!1});const t=e([{label:"기본 정보",value:"basic",active:!0},{label:"추가 정보",value:"extra",active:!1},{label:"이력",value:"history",active:!1}]);return{args:l,widthMap:d,isFullSize:a,tabList:t,onTabChange:C=>{t.value.forEach(c=>{c.active=c.value===C})}}},template:`
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

              <!-- 리사이즈: 2단 + 카드일 때 아이템 | 카드 가로 분할 -->
              <template v-if="args.showCard && args.showResize && args.columns === '2단'">
                <UiResizablePanelGroup direction="horizontal" class="col-span-full min-h-64">
                  <UiResizablePanel :default-size="50">
                    <div class="overflow-y-auto h-full flex flex-col gap-4 pr-4">
                      <template v-if="args.showForm">
                        <FormItem required label="이름"   placeholder="이름을 입력해 주세요" />
                        <FormItem required label="이메일" placeholder="이메일을 입력해 주세요" />
                      </template>
                      <template v-if="args.showDetail">
                        <dl class="view-list__item"><dt class="view-list__item-title">이름</dt><dd class="view-list__item-cont">홍길동</dd></dl>
                        <dl class="view-list__item"><dt class="view-list__item-title">이메일</dt><dd class="view-list__item-cont">hong@example.com</dd></dl>
                      </template>
                    </div>
                  </UiResizablePanel>
                  <UiResizableHandle with-handle />
                  <UiResizablePanel :default-size="50">
                    <div class="overflow-y-auto h-full pl-4">
                      <UiCard size="md" class="w-full">
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
                    </div>
                  </UiResizablePanel>
                </UiResizablePanelGroup>
              </template>

              <!-- 일반: 기존 아이템 + 카드 구조 -->
              <template v-else>
                <template v-if="args.showForm">
                  <FormItem required label="이름"   placeholder="이름을 입력해 주세요" />
                  <FormItem required label="이메일" placeholder="이메일을 입력해 주세요" />
                </template>
                <template v-if="args.showDetail">
                  <dl class="view-list__item col-span-full"><dt class="view-list__item-title">이름</dt><dd class="view-list__item-cont">홍길동</dd></dl>
                  <dl class="view-list__item col-span-full"><dt class="view-list__item-title">이메일</dt><dd class="view-list__item-cont">hong@example.com</dd></dl>
                </template>
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
                <template v-if="!args.showCard && args.showTable">
                  <UiTable class="col-span-full table-secondary table-fixed w-full">
                    <UiTableHeader><UiTableRow><UiTableHead>이름</UiTableHead><UiTableHead>이메일</UiTableHead><UiTableHead>부서</UiTableHead></UiTableRow></UiTableHeader>
                    <UiTableBody>
                      <UiTableRow><UiTableCell>홍길동</UiTableCell><UiTableCell>hong@example.com</UiTableCell><UiTableCell>개발팀</UiTableCell></UiTableRow>
                      <UiTableRow><UiTableCell>이순신</UiTableCell><UiTableCell>lee@example.com</UiTableCell><UiTableCell>디자인팀</UiTableCell></UiTableRow>
                    </UiTableBody>
                  </UiTable>
                </template>
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

              <!-- 리사이즈: 2단 + 카드일 때 아이템 | 카드 가로 분할 -->
              <template v-if="args.showCard && args.showResize && args.columns === '2단'">
                <UiResizablePanelGroup direction="horizontal" class="col-span-full min-h-64">
                  <UiResizablePanel :default-size="50">
                    <div class="overflow-y-auto h-full flex flex-col gap-4 pr-4">
                      <template v-if="args.showForm">
                        <FormItem label="입사일"    placeholder="날짜를 선택해 주세요" />
                        <FormItem label="계약 유형" placeholder="유형을 선택해 주세요" />
                      </template>
                      <template v-if="args.showDetail">
                        <dl class="view-list__item"><dt class="view-list__item-title">입사일</dt><dd class="view-list__item-cont">2023-03-01</dd></dl>
                        <dl class="view-list__item"><dt class="view-list__item-title">계약 유형</dt><dd class="view-list__item-cont">정규직</dd></dl>
                      </template>
                    </div>
                  </UiResizablePanel>
                  <UiResizableHandle with-handle />
                  <UiResizablePanel :default-size="50">
                    <div class="overflow-y-auto h-full pl-4">
                      <UiCard size="md" class="w-full">
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
                    </div>
                  </UiResizablePanel>
                </UiResizablePanelGroup>
              </template>

              <!-- 일반: 기존 아이템 + 카드 구조 -->
              <template v-else>
                <template v-if="args.showForm">
                  <FormItem label="입사일"    placeholder="날짜를 선택해 주세요" />
                  <FormItem label="계약 유형" placeholder="유형을 선택해 주세요" />
                </template>
                <template v-if="args.showDetail">
                  <dl class="view-list__item col-span-full"><dt class="view-list__item-title">입사일</dt><dd class="view-list__item-cont">2023-03-01</dd></dl>
                  <dl class="view-list__item col-span-full"><dt class="view-list__item-title">계약 유형</dt><dd class="view-list__item-cont">정규직</dd></dl>
                </template>
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
                <template v-if="!args.showCard && args.showTable">
                  <UiTable class="col-span-full table-secondary table-fixed w-full">
                    <UiTableHeader><UiTableRow><UiTableHead>항목</UiTableHead><UiTableHead>값</UiTableHead></UiTableRow></UiTableHeader>
                    <UiTableBody>
                      <UiTableRow><UiTableCell>입사일</UiTableCell><UiTableCell>2023-03-01</UiTableCell></UiTableRow>
                      <UiTableRow><UiTableCell>계약 유형</UiTableCell><UiTableCell>정규직</UiTableCell></UiTableRow>
                    </UiTableBody>
                  </UiTable>
                </template>
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
    `})},i={name:"Sheet — 기본",args:{columns:"1단",showTabs:!1,showSection:!1,showCard:!1,showBorder:!1,showResize:!1,statusVariant:"없음",showFullscreen:!1,showCodeTag:!1,showDateTag:"없음",showSectionTitle:!1,showCardTitle:!1,showForm:!0,showDetail:!1,showTable:!1,showDelete:!1,showEdit:!1,showSave:!0}},s={name:"Sheet — 최소 사양",args:{columns:"1단",showTabs:!1,showSection:!1,showCard:!1,showBorder:!1,showResize:!1,statusVariant:"없음",showFullscreen:!1,showCodeTag:!1,showDateTag:"없음",showSectionTitle:!1,showCardTitle:!1,showForm:!0,showDetail:!1,showTable:!1,showDelete:!1,showEdit:!1,showSave:!0}},o={name:"Sheet — 최대 사양",args:{columns:"2단",showTabs:!0,showSection:!0,showCard:!0,showBorder:!0,showResize:!0,statusVariant:"process",showFullscreen:!0,showCodeTag:!0,showDateTag:"카드",showSectionTitle:!0,showCardTitle:!0,showForm:!0,showDetail:!1,showTable:!0,showDelete:!0,showEdit:!0,showSave:!0}},k={"1단":"480px","2단":"960px","3단":"1440px"},j=l=>({components:{ComboboxTag:z,ComboboxBase:S,SelectBase:D,DatePicker:H,InputBase:F,InputPassword:y,UiTextarea:x},setup(){const d=e(""),a=e(""),t=e(""),n=e("");return{args:l,widthMap:k,sampleItems:B,text:d,password:a,textarea:t,dateValue:n}},template:`
    <div class="bg-background flex flex-col shadow-bottom" :style="{ width: widthMap[args.columns], height: '640px' }">

      <!-- 헤더 -->
      <div class="flex justify-between items-center px-6 min-h-14 shrink-0">
        <h2 class="flex items-center gap-2 title__bold flex-wrap">입력폼 모음</h2>
        <div class="ml-auto flex items-center gap-2 h-5">
          <UiButton variant="ghost" size="icon"><LucideX /></UiButton>
        </div>
      </div>

      <!-- 바디 -->
      <div class="overflow-y-auto flex-1 container-type--inline">
        <div class="list-layout--grid">
          <FormItem label="텍스트" v-model="text" placeholder="내용을 입력해 주세요" />

          <FormItem label="비밀번호">
            <template #input-item>
              <InputPassword v-model="password" />
            </template>
          </FormItem>

          <FormItem label="텍스트에어리어">
            <template #input-item>
              <UiTextarea v-model="textarea" placeholder="내용을 입력해 주세요" />
            </template>
          </FormItem>

          <FormItem label="셀렉트">
            <template #input-item>
              <SelectBase :list-item="sampleItems" placeholder="선택하세요" />
            </template>
          </FormItem>

          <FormItem label="콤보박스">
            <template #input-item>
              <ComboboxBase :list-item="sampleItems" placeholder="검색 후 선택하세요" />
            </template>
          </FormItem>

          <FormItem label="콤보박스 (태그/다중선택)">
            <template #input-item>
              <ComboboxTag :list-item="sampleItems" multiple placeholder="옵션을 선택하세요" />
            </template>
          </FormItem>

          <FormItem label="날짜 선택">
            <template #input-item>
              <DatePicker v-model="dateValue" placeholder="날짜를 선택하세요" />
            </template>
          </FormItem>

          <FormItem label="체크박스">
            <template #input-item>
              <div class="flex items-center gap-2 h-8">
                <UiCheckbox id="fi-checkbox" />
                <UiLabel for="fi-checkbox">동의합니다</UiLabel>
              </div>
            </template>
          </FormItem>

          <FormItem label="라디오 그룹" class="h-auto">
            <template #input-item>
              <UiRadioGroup class="flex flex-row flex-wrap gap-4">
                <div v-for="item in sampleItems" :key="item.value" class="flex items-center gap-2">
                  <UiRadioGroupItem :id="'fi-r' + item.value" :value="item.value" />
                  <UiLabel :for="'fi-r' + item.value">{{ item.label }}</UiLabel>
                </div>
              </UiRadioGroup>
            </template>
          </FormItem>

          <FormItem label="스위치">
            <template #input-item>
              <div class="flex items-center gap-2 h-8">
                <UiSwitch id="fi-switch" />
                <UiLabel for="fi-switch">알림 받기</UiLabel>
              </div>
            </template>
          </FormItem>

          <FormItem label="에러 상태" validate-text="필수 입력 항목입니다." aria-invalid required>
            <template #input-item>
              <InputBase aria-invalid placeholder="내용을 입력해 주세요" />
            </template>
          </FormItem>

          <FormItem label="비활성화" disabled>
            <template #input-item>
              <InputBase disabled placeholder="비활성화 상태" />
            </template>
          </FormItem>
        </div>
      </div>

      <!-- 푸터 -->
      <div class="flex justify-between gap-2 p-4 shrink-0">
        <UiButton variant="outline">닫기</UiButton>
      </div>
    </div>
  `}),r={name:"입력폼 모음",args:{columns:"1단"},render:j};var m,b,w;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Sheet — 기본',
  args: {
    columns: '1단',
    showTabs: false,
    showSection: false,
    showCard: false,
    showBorder: false,
    showResize: false,
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
    showSave: true
  }
}`,...(w=(b=i.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var h,p,T;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Sheet — 최소 사양',
  args: {
    columns: '1단',
    showTabs: false,
    showSection: false,
    showCard: false,
    showBorder: false,
    showResize: false,
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
    showSave: true
  }
}`,...(T=(p=s.parameters)==null?void 0:p.docs)==null?void 0:T.source}}};var v,f,u;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Sheet — 최대 사양',
  args: {
    columns: '2단',
    showTabs: true,
    showSection: true,
    showCard: true,
    showBorder: true,
    showResize: true,
    statusVariant: 'process',
    showFullscreen: true,
    showCodeTag: true,
    showDateTag: '카드',
    showSectionTitle: true,
    showCardTitle: true,
    showForm: true,
    showDetail: false,
    showTable: true,
    showDelete: true,
    showEdit: true,
    showSave: true
  }
}`,...(u=(f=o.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var U,g,_;r.parameters={...r.parameters,docs:{...(U=r.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: '입력폼 모음',
  args: {
    columns: '1단'
  },
  render: renderInputForms
}`,...(_=(g=r.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};const O=["Index","Min","Max","InputForms"];export{i as Index,r as InputForms,o as Max,s as Min,O as __namedExportsOrder,A as default};
