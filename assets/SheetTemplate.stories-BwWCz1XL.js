import{A as U,bM as o}from"./iframe-RcI2tPm4.js";import{a as b}from"./PageTabs-DEPATQl7.js";import{E as x}from"./EmptyData-CpBZOKlK.js";import{_ as g}from"./TableLayout-gLcolzbX.js";import{_ as v,a as u}from"./Td-AShIOJI0.js";import"./preload-helper-FI0fEOG2.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const B={title:"레이아웃/Sheet/템플릿",tags:["autodocs"],parameters:{layout:"centered"}},t={name:"Sheet — 푸시알림",render:()=>({components:{LineTabs:b,EmptyData:x},setup(){const a=o([{label:"알림",value:"alert",active:!0},{label:"작업",value:"work",active:!1}]),i=o("alert");return{tabList:a,activeTab:i,onTabChange:l=>{a.value.forEach(s=>{s.active=s.value===l}),i.value=l}}},template:`
      <div class="bg-background flex flex-col shadow-bottom" style="width:480px; height:640px">

        <!-- 헤더 -->
        <div class="flex justify-between items-center px-6 min-h-14 shrink-0">
          <h2 class="title__bold">알림</h2>
          <div class="ml-auto flex items-center gap-2 h-5">
            <UiButton variant="ghost" size="icon"><LucideX /></UiButton>
          </div>
        </div>

        <!-- 탭 -->
        <section class="border-b-1 border-border px-6 shrink-0">
          <LineTabs :tab-list="tabList" @change="onTabChange">
            <template #default="{ tab }">
              <span>{{ tab.label }}</span>
              <UiBadge size="count" :class="tab.active ? 'bg-danger text-neutral' : ''">99+</UiBadge>
            </template>
          </LineTabs>
        </section>

        <!-- 알림 탭 -->
        <template v-if="activeTab === 'alert'">
          <div class="pt-6 pb-3 px-6 shrink-0">
            <p class="font-bold">총 150건</p>
            <div class="flex justify-between pt-6">
              <div class="flex items-center space-x-2">
                <UiSwitch id="unread" />
                <UiLabel for="unread">읽지않음 항목만 표시</UiLabel>
              </div>
              <UiButton variant="ghost" size="sm"><LucideCheck /> 모두 읽음</UiButton>
            </div>
          </div>
          <div class="overflow-y-auto flex-1 flex flex-col">
            <!-- 읽지 않음 -->
            <div class="icon-list__item">
              <div class="icon-list__icon icon-list__icon--default">
                <LucideMessagesSquare />
                <UiBadge size="dot" class="bg-danger icon-list__notification" />
              </div>
              <div class="icon-list__content">
                <div class="icon-list__title">
                  <p class="font-bold">알림 제목</p>
                  <span class="mt-1 caption__bold">서브타이틀 또는 @멘션</span>
                </div>
                <div class="icon-list__body">
                  <p>박정은 님이 하위 작업을 In Progress에서 Backlog(으)로 변경했습니다</p>
                  <span class="text-muted">26.03.16 11:13</span>
                </div>
                <div class="icon-list__button mt-2">
                  <UiButton variant="link" size="sm" class="justify-start text-primary">
                    <LucideDownload /><span class="truncate pb-px">파일명은_최대_50글자까지_지원_가능_이지만_시트_너비_기준으로_넘치면_잘림20160316.xlsx</span>
                  </UiButton>
                  <UiButton variant="link" size="sm" class="justify-start text-primary">
                    <span class="truncate pb-px">스타일 관리 바로가기</span><LucideSquareArrowOutUpRight />
                  </UiButton>
                </div>
              </div>
              <UiDropdownMenu>
                <UiDropdownMenuTrigger as-child>
                  <UiButton variant="ghost" size="icon" title="더보기" class="absolute right-2 top-3"><LucideEllipsisVertical /></UiButton>
                </UiDropdownMenuTrigger>
                <UiDropdownMenuContent side="bottom" class="mr-6">
                  <UiDropdownMenuItem><p>읽음<span class="font-normal">으로 표시</span></p></UiDropdownMenuItem>
                </UiDropdownMenuContent>
              </UiDropdownMenu>
            </div>
            <!-- 성공 -->
            <div class="icon-list__item">
              <div class="icon-list__icon icon-list__icon--success"><LucideCircleCheckBig /></div>
              <div class="icon-list__content">
                <div class="icon-list__title"><p class="font-bold">알림 제목</p></div>
                <div class="icon-list__body">
                  <p>박정은 님이 하위 작업을 In Progress에서 Backlog(으)로 변경했습니다</p>
                  <span class="text-muted">26.03.16 11:13</span>
                </div>
              </div>
              <UiDropdownMenu>
                <UiDropdownMenuTrigger as-child>
                  <UiButton variant="ghost" size="icon" title="더보기" class="absolute right-2 top-3"><LucideEllipsisVertical /></UiButton>
                </UiDropdownMenuTrigger>
                <UiDropdownMenuContent side="bottom" class="mr-6">
                  <UiDropdownMenuItem><p>읽지 않음<span class="font-normal">으로 표시</span></p></UiDropdownMenuItem>
                </UiDropdownMenuContent>
              </UiDropdownMenu>
            </div>
            <!-- 경고 -->
            <div class="icon-list__item">
              <div class="icon-list__icon icon-list__icon--warning"><LucideAlertTriangle /></div>
              <div class="icon-list__content">
                <div class="icon-list__title"><p class="font-bold">알림 제목</p></div>
                <div class="icon-list__body">
                  <p>박정은 님이 하위 작업을 In Progress에서 Backlog(으)로 변경했습니다</p>
                  <span class="text-muted">26.03.16 11:13</span>
                </div>
              </div>
              <UiDropdownMenu>
                <UiDropdownMenuTrigger as-child>
                  <UiButton variant="ghost" size="icon" title="더보기" class="absolute right-2 top-3"><LucideEllipsisVertical /></UiButton>
                </UiDropdownMenuTrigger>
                <UiDropdownMenuContent side="bottom" class="mr-6">
                  <UiDropdownMenuItem><p>읽지 않음<span class="font-normal">으로 표시</span></p></UiDropdownMenuItem>
                </UiDropdownMenuContent>
              </UiDropdownMenu>
            </div>
            <EmptyData class="!h-35 !bg-background text-center flex-none mt-auto">
              <LucideInfo class="size-4" />
              알림은 30일전 내용 까지만 확인이 가능합니다.
            </EmptyData>
          </div>
        </template>

        <!-- 작업 탭 -->
        <template v-else>
          <div class="pt-6 pb-3 px-6 shrink-0">
            <p class="font-bold">총 150건</p>
          </div>
          <div class="overflow-y-auto flex-1 flex flex-col">
            <!-- 업로드 진행중 -->
            <div class="icon-list__item">
              <div class="icon-list__icon icon-list__icon--default"><LucideMessagesSquare /></div>
              <div class="icon-list__content w-full">
                <div class="icon-list__title"><p class="font-bold">업로드 진행중</p></div>
                <div class="icon-list__body mt-3">
                  <UiProgress :model-value="20" />
                  <div class="flex items-center justify-between gap-4">
                    <span class="mt-1 caption__bold truncate">2025-fw-style-upload-list..xlsx</span>
                    <span class="text-muted">20%</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- 완료 -->
            <div class="icon-list__item">
              <div class="icon-list__icon icon-list__icon--success"><LucideCircleCheckBig /></div>
              <div class="icon-list__content">
                <div class="icon-list__title"><p class="font-bold">알림 제목</p></div>
                <div class="icon-list__body">
                  <p>박정은 님이 하위 작업을 In Progress에서 Backlog(으)로 변경했습니다</p>
                  <span class="text-muted">26.03.16 11:13</span>
                </div>
                <div class="icon-list__button mt-2">
                  <UiButton variant="link" size="sm" class="justify-start text-primary">
                    <span class="truncate pb-px">스타일 관리 바로가기</span><LucideSquareArrowOutUpRight />
                  </UiButton>
                </div>
              </div>
              <UiButton variant="ghost" size="icon" class="absolute right-2 top-3 hover:text-danger hover:bg-transparent" title="작업 삭제">
                <LucideTrash2 />
              </UiButton>
            </div>
            <EmptyData class="!h-35 !bg-background text-center flex-none mt-auto">
              <LucideInfo class="size-4" />
              작업 알림은 최대 50개 까지만 확인이 가능하며<br/>오래된 작업순으로 제외됩니다.
            </EmptyData>
          </div>
        </template>

      </div>
    `})},e={name:"Sheet — 전체시트 (BOM)",render:()=>({components:{TableLayout:g,Th:u,Td:v,Tags:U},template:`
      <div class="bg-background flex flex-col shadow-lg rounded-md" style="width:90vw; height:90vh">

        <!-- 헤더 -->
        <div class="flex justify-between items-center px-6 min-h-14 shrink-0">
          <div class="flex items-center gap-2 flex-wrap">
            <p class="title__bold">BOM(원가 견적서)</p>
            <UiBadge variant="outline">제출 완료</UiBadge>
            <UiBadge variant="process">수정 제안</UiBadge>
            <UiBadge variant="process">대사 완료</UiBadge>
            <UiBadge variant="reject">재검토</UiBadge>
            <UiBadge variant="accept">대사 확정</UiBadge>
          </div>
          <div class="ml-auto flex items-center gap-2 h-5">
            <UiButton variant="ghost" size="icon"><LucideX /></UiButton>
          </div>
        </div>

        <!-- 바디 -->
        <div class="overflow-y-auto flex-1 container-type--inline relative">

          <div class="pl-6 mr-6 pb-4 flex sticky top-0 bg-background z-20">
            <UiButton variant="outline" size="sm" class="ml-auto">
              <LucideClock/>
              이력 조회
            </UiButton>
          </div>

          <!-- 재검토 사유 (재검토 상태에서만 노출) -->
          <div class="flex flex-col gap-4 px-6 pb-4">
            <UiAlert variant="danger">
              <div class="grid">
                <UiAlertTitle>
                  재검토 상태에서만 노출되는 영역입니다. 재검토 사유가 출력됩니다.
                </UiAlertTitle>
                <UiAlertDescription></UiAlertDescription>
              </div>
            </UiAlert>
          </div>
          <UiSeparator orientation="horizontal" class="data-[orientation=horizontal]:h-2 bg-surface-muted"/>

          <!-- 기본정보 -->
          <div class="list-layout--grid">
            <UiCard class="p-5 gap-4 relative">
              <h4>스타일 정보</h4>
              <UiButton variant="outline" size="icon" class="absolute top-3 right-3" title="생산 담당자 수정"><LucideSquarePen/></UiButton>

              <dl class="view-list__item">
                <dt class="view-list__item-title">스타일 코드</dt>
                <dd class="view-list__item-cont">TNCOOOOWHS01</dd>
              </dl>
              <dl class="view-list__item">
                <dt class="view-list__item-title">기획 수량</dt>
                <dd class="view-list__item-cont">500</dd>
              </dl>
              <dl class="view-list__item">
                <dt class="view-list__item-title">최초가</dt>
                <dd class="view-list__item-cont">4,000</dd>
              </dl>
              <dl class="view-list__item">
                <dt class="view-list__item-title">결판가</dt>
                <dd class="view-list__item-cont">4,000</dd>
              </dl>
              <dl class="view-list__item">
                <dt class="view-list__item-title">컬러 정보</dt>
                <dd class="view-list__item-cont gap-2 flex-wrap">
                  <Tags variant="secondary">
                    <LucideCheck class="size-3"/>Deep Wine Red
                  </Tags>
                  <Tags variant="secondary">
                    <LucideCheck class="size-3"/>Deep Wine Red
                  </Tags>
                  <Tags variant="secondary">
                    <LucideCheck class="size-3"/>Deep Wine Red
                  </Tags>
                  <Tags variant="outline" title="Dusty Pink" class="text-muted"/>
                  <Tags variant="outline" title="Red" class="text-muted"/>
                  <Tags variant="outline" title="Blue" class="text-muted"/>
                  <Tags variant="outline" title="Strawberry Orange" class="text-muted"/>
                </dd>
              </dl>
              <dl class="view-list__item">
                <dt class="view-list__item-title">업체 담당자</dt>
                <dd class="view-list__item-cont">홍길순</dd>
              </dl>
              <dl class="view-list__item">
                <dt class="view-list__item-title">생산 담당자</dt>
                <dd class="view-list__item-cont">
                  <UiTooltipProvider>
                    <UiTooltip>
                      <UiTooltipTrigger as-child>
                        <UiButton variant="link" class="!p-0">김생산 외 2명</UiButton>
                      </UiTooltipTrigger>
                      <UiTooltipContent class="tooltip--dark">
                        <ul>
                          <li class="py-0.5">최예솔</li>
                          <li class="py-0.5">홍길동</li>
                        </ul>
                      </UiTooltipContent>
                    </UiTooltip>
                  </UiTooltipProvider>
                </dd>
              </dl>
            </UiCard>
            <div class="col-span-2 flex flex-col gap-6">
              <UiCard class="p-5">
                <div class="flex gap-1 mb-4">
                  <h4>환율 정보</h4>
                  <UiTooltipProvider>
                    <UiTooltip>
                      <UiTooltipTrigger>
                        <LucideCircleAlert class="size-3"/>
                      </UiTooltipTrigger>
                      <UiTooltipContent class="tooltip--dark w-auto" side="right">
                        <span>환율 환산 금액은 기본 정보관리 &gt; 생산 환율 관리 메뉴에서<br/>등록된 값을 호출합니다</span>
                      </UiTooltipContent>
                    </UiTooltip>
                  </UiTooltipProvider>
                </div>
                <div class="bg-surface-muted p-2 rounded-md items-center flex-wrap grid grid-cols-3 gap-y-3 gap-x-12">
                  <div v-for="i in 3" :key="i" :class="[i % 3 !== 0 ? \`before:content-[''] before:absolute before:w-px before:bg-border before:h-12 before:-left-6\` : '', 'flex items-center justify-between h-16 px-3 relative']">
                    <p class="font-bold w-1/2">USD(달러)</p>
                    <div class="w-1/2 text-right">
                      <div class="flex gap-1 items-end justify-end">
                        <p class="font-bold text-xs mb-0.5"><span class="text-sm">102,500 </span>KRW</p>
                        <UiTooltipProvider>
                          <UiTooltip>
                            <UiTooltipTrigger class="self-center mb-0.5 text-warning">
                              <LucideCircleAlert class="size-3"/>
                            </UiTooltipTrigger>
                            <UiTooltipContent class="tooltip--dark max-w-90" side="right">
                              업체에서 수정한 환율 기준가입니다.
                            </UiTooltipContent>
                          </UiTooltip>
                        </UiTooltipProvider>
                      </div>
                      <span class="text-muted text-xs">1달러 당 환율금액</span>
                    </div>
                  </div>
                </div>
              </UiCard>
              <UiCard class="p-5">
                <h4>합계</h4>
                <TableLayout class="!px-0 !h-auto" :pagination="false">
                  <template #data-action></template>
                  <template #table-action></template>
                  <template #table>
                    <UiTable class="table-secondary table-fixed w-full">
                      <colgroup>
                        <col style="width:400px"/>
                        <col/>
                        <col/>
                      </colgroup>
                      <UiTableHeader>
                        <UiTableRow>
                          <Th data="항목"/>
                          <Th data="업체 합계"/>
                          <Th data="본사 합계"/>
                        </UiTableRow>
                      </UiTableHeader>
                      <UiTableBody>
                        <UiTableRow>
                          <Td class="table__row-header text-left">
                            <div class="flex gap-1 text-xs">
                              <p>원가 및 협력 업체 마진 합계</p>
                              <UiTooltipProvider>
                                <UiTooltip>
                                  <UiTooltipTrigger>
                                    <LucideCircleAlert class="size-3"/>
                                  </UiTooltipTrigger>
                                  <UiTooltipContent class="tooltip--dark max-w-90" side="right">
                                    원가 및 협력업체 마진 합계는(원자재+부자재+외주가공+임가공료) + 원부자재 수출 및 수입 비용+CMT Handling Charge로 계산됩니다.
                                  </UiTooltipContent>
                                </UiTooltip>
                              </UiTooltipProvider>
                            </div>
                          </Td>
                          <Td data="100,000" class="text-right"/>
                          <Td class="text-right"><span class="text-primary font-bold">100,000</span></Td>
                        </UiTableRow>
                        <UiTableRow>
                          <Td class="table__row-header text-left">
                            <div class="flex gap-1 text-xs"><p>원가 합계 (VAT 제외)</p></div>
                          </Td>
                          <Td data="100,000" class="text-right"/>
                          <Td class="text-right"><span class="text-primary font-bold">100,000</span></Td>
                        </UiTableRow>
                        <UiTableRow>
                          <Td class="table__row-header text-left">
                            <div class="flex gap-1 text-xs"><p>원가 합계 (VAT 포함)</p></div>
                          </Td>
                          <Td data="100,000" class="text-right"/>
                          <Td class="text-right"><span class="text-primary font-bold">100,000</span></Td>
                        </UiTableRow>
                        <UiTableRow>
                          <Td class="table__row-header text-left text-xs">
                            <div class="flex gap-1">
                              <p>최종금액 (VAT 제외)</p>
                              <UiTooltipProvider>
                                <UiTooltip>
                                  <UiTooltipTrigger>
                                    <LucideCircleAlert class="size-3"/>
                                  </UiTooltipTrigger>
                                  <UiTooltipContent class="tooltip--dark max-w-90" side="right">
                                    최종금액은 100원 미만 금액은 절삭됩니다.
                                  </UiTooltipContent>
                                </UiTooltip>
                              </UiTooltipProvider>
                            </div>
                          </Td>
                          <Td data="100,000" class="text-right"/>
                          <Td class="text-right"><span class="text-primary font-bold">100,000</span></Td>
                        </UiTableRow>
                      </UiTableBody>
                    </UiTable>
                  </template>
                </TableLayout>
              </UiCard>
            </div>
          </div>
          <UiSeparator orientation="horizontal" class="data-[orientation=horizontal]:h-2 bg-surface-muted"/>

          <!-- 견적서 정보 -->
          <div class="flex flex-col gap-6 p-6">
            <div class="bg-background mb-2 sticky right-0 left-0 top-6 z-20">
              <h4 class="font-bold mb-4">최종 금액 (VAT 제외)</h4>
              <div class="rounded-md bg-background border-primary border-2 py-4 px-6 flex gap-8 items-center justify-between shadow-bottom">
                <div class="flex items-center justify-between w-full">
                  <span>업체 합계</span>
                  <p class="title__bold">100,000 KRW</p>
                </div>
                <UiSeparator orientation="vertical" class="data-[orientation=vertical]:h-6 bg-border"/>
                <div class="flex items-center justify-between w-full">
                  <span>본사 합계</span>
                  <p class="title__bold text-primary">100,000 KRW</p>
                </div>
              </div>
            </div>

            <div class="flex items-center">
              <div class="flex gap-2 ml-auto">
                <UiButton variant="outline" size="sm">
                  <LucideImages/>
                  미니마카 이미지 보기
                </UiButton>
              </div>
            </div>

            <UiAccordion class="w-full flex flex-col gap-6" type="multiple" collapsible :default-value="['item-1','item-2','item-3','item-4']">

              <!-- 원자재 (제출 완료: 분할 X) -->
              <UiAccordionItem value="item-1" class="rounded-md border-1 border-border !border-b-1">
                <UiAccordionTrigger class="text-sm px-5 py-4 flex items-center gap-2 w-full">
                  <p>원자재</p>
                  <div class="flex items-center gap-2 ml-auto">
                    <span class="font-normal">합계</span>
                    <UiSeparator orientation="vertical" class="data-[orientation=vertical]:h-4 bg-border"/>
                    <p class="title__bold">100,000 원</p>
                  </div>
                </UiAccordionTrigger>
                <UiAccordionContent class="flex flex-col gap-6 px-5 py-4 border-t-1 border-border">
                  <TableLayout class="!px-0 !h-auto !gap-2" :pagination="false">
                    <template #data-action><p class="caption__bold">겉감</p></template>
                    <template #table-action></template>
                    <template #table>
                      <UiTable class="table-secondary table-fixed w-full">
                        <colgroup>
                          <col style="width:180px"/><col style="width:160px"/><col style="width:80px"/>
                          <col style="width:120px"/><col style="width:80px"/><col style="width:100px"/>
                          <col style="width:120px"/><col style="width:130px"/><col style="width:150px"/>
                          <col style="width:150px"/><col style="width:150px"/>
                        </colgroup>
                        <UiTableHeader>
                          <UiTableRow>
                            <Th data="소요자재내역"/><Th data="규격(아이템넘버)"/><Th data="규격단위"/>
                            <Th data="요척"/><Th data="요척단위"/><Th data="통화"/><Th data="단가"/>
                            <Th data="금액"/><Th data="공급업체"/><Th data="사용부위"/><Th data="NOTICE"/>
                          </UiTableRow>
                        </UiTableHeader>
                        <UiTableBody>
                          <UiTableRow v-for="i in 3" :key="i">
                            <Td data="Gore 3L FPL70MT"/>
                            <Td data="144" class="text-center"/>
                            <Td data="cm" class="text-center"/>
                            <Td data="1.55" class="text-center"/>
                            <Td data="YD" class="text-center"/>
                            <Td data="KRW" class="text-center"/>
                            <Td data="24,097" class="text-right"/>
                            <Td data="34,390" class="text-right"/>
                            <Td data="GORE-TEX" class="text-center"/>
                            <Td data="겉감" class="text-center"/>
                            <Td data="-"/>
                          </UiTableRow>
                        </UiTableBody>
                      </UiTable>
                    </template>
                  </TableLayout>
                </UiAccordionContent>
              </UiAccordionItem>

              <!-- 기타 (제출 완료: 분할 X) -->
              <UiAccordionItem value="item-2" class="rounded-md border-1 !border-b-1 border-border">
                <UiAccordionTrigger class="text-sm px-5 py-4 flex items-center gap-2 w-full">
                  <p>기타</p>
                  <div class="flex items-center gap-2 ml-auto">
                    <span class="font-normal">합계</span>
                    <UiSeparator orientation="vertical" class="data-[orientation=vertical]:h-4 bg-border"/>
                    <p class="title__bold">100,000 원</p>
                  </div>
                </UiAccordionTrigger>
                <UiAccordionContent class="flex flex-col gap-6 px-5 py-4 border-t-1 border-border">
                  <TableLayout class="!px-0 !h-auto !gap-2" :pagination="false">
                    <template #data-action></template>
                    <template #table-action></template>
                    <template #table>
                      <UiTable class="table-secondary table-fixed w-full">
                        <colgroup>
                          <col style="width:300px"/><col style="width:140px"/><col style="width:100px"/>
                          <col style="width:140px"/><col style="width:140px"/><col style="width:300px"/>
                        </colgroup>
                        <UiTableHeader>
                          <UiTableRow>
                            <Th data="항목"/><Th data="수량"/><Th data="통화"/><Th data="단가"/><Th data="금액"/><Th data="NOTICE"/>
                          </UiTableRow>
                        </UiTableHeader>
                        <UiTableBody>
                          <UiTableRow>
                            <Td class="table__row-header text-left">
                              <div class="flex gap-1 text-default">
                                <p>임가공료 (봉재료)</p>
                                <UiTooltipProvider>
                                  <UiTooltip>
                                    <UiTooltipTrigger><LucideCircleAlert class="size-3"/></UiTooltipTrigger>
                                    <UiTooltipContent class="tooltip--dark max-w-fit" side="right">
                                      임가공료는 "선택된 통화 X 생산 환율 관리에 등록된 환율"이 계산됩니다.
                                    </UiTooltipContent>
                                  </UiTooltip>
                                </UiTooltipProvider>
                              </div>
                            </Td>
                            <Td data="100" class="text-center"/>
                            <Td data="KRW" class="text-center"/>
                            <Td data="10,000" class="text-right"/>
                            <Td data="1,000,000" class="text-right"/>
                            <Td data="-"/>
                          </UiTableRow>
                          <UiTableRow>
                            <Td class="table__row-header text-left">
                              <div class="flex gap-1 text-default">
                                <p>원부자재 수출 및 수입 비용 등 (5%)</p>
                                <UiTooltipProvider>
                                  <UiTooltip>
                                    <UiTooltipTrigger><LucideCircleAlert class="size-3"/></UiTooltipTrigger>
                                    <UiTooltipContent class="tooltip--dark max-w-fit" side="right">
                                      원부자재 수출 및 수입 비용은 "(원자재+부자재+외주가공 합계) X 0.5"로 계산됩니다.
                                    </UiTooltipContent>
                                  </UiTooltip>
                                </UiTooltipProvider>
                              </div>
                            </Td>
                            <Td data="100" class="text-center"/>
                            <Td data="KRW" class="text-center"/>
                            <Td data="10,000" class="text-right"/>
                            <Td data="1,000,000" class="text-right"/>
                            <Td data="-"/>
                          </UiTableRow>
                          <UiTableRow>
                            <Td class="table__row-header text-left">
                              <div class="flex gap-1 text-default">
                                <p>CMT Handing Charge (11%)</p>
                                <UiTooltipProvider>
                                  <UiTooltip>
                                    <UiTooltipTrigger><LucideCircleAlert class="size-3"/></UiTooltipTrigger>
                                    <UiTooltipContent class="tooltip--dark max-w-fit" side="right">
                                      CMT Handing Charge는 "(원자재+부자재+외주가공+임가공료 합계) X 0.11"로 계산됩니다.
                                    </UiTooltipContent>
                                  </UiTooltip>
                                </UiTooltipProvider>
                              </div>
                            </Td>
                            <Td data="100" class="text-center"/>
                            <Td data="KRW" class="text-center"/>
                            <Td data="10,000" class="text-right"/>
                            <Td data="1,000,000" class="text-right"/>
                            <Td data="-"/>
                          </UiTableRow>
                          <UiTableRow>
                            <Td class="table__row-header text-left">
                              <div class="flex gap-1 text-default"><p>KOTITI 완제품 검사 비용</p></div>
                            </Td>
                            <Td data="100" class="text-center"/>
                            <Td data="KRW" class="text-center"/>
                            <Td data="10,000" class="text-right"/>
                            <Td data="1,000,000" class="text-right"/>
                            <Td data="-"/>
                          </UiTableRow>
                          <UiTableRow>
                            <Td class="table__row-header text-left">
                              <div class="flex gap-1 text-default">
                                <p>수입 관세</p>
                                <UiTooltipProvider>
                                  <UiTooltip>
                                    <UiTooltipTrigger><LucideCircleAlert class="size-3"/></UiTooltipTrigger>
                                    <UiTooltipContent class="tooltip--dark max-w-fit" side="right">
                                      수입관세는 수입처에 따라 부과되는 관세가 다르므로 관세가 계산된 금액을 입력합니다.
                                    </UiTooltipContent>
                                  </UiTooltip>
                                </UiTooltipProvider>
                              </div>
                            </Td>
                            <Td data="100" class="text-center"/>
                            <Td data="KRW" class="text-center"/>
                            <Td data="10,000" class="text-right"/>
                            <Td data="1,000,000" class="text-right"/>
                            <Td data="-"/>
                          </UiTableRow>
                        </UiTableBody>
                      </UiTable>
                    </template>
                  </TableLayout>
                </UiAccordionContent>
              </UiAccordionItem>

              <!-- 원자재 (제출 완료 이후: 분할) -->
              <UiAccordionItem value="item-3" class="rounded-md border-1 border-border !border-b-1">
                <UiAccordionTrigger class="text-sm px-5 py-4 flex items-center gap-2 w-full">
                  <p>원자재</p>
                </UiAccordionTrigger>
                <UiAccordionContent class="flex flex-col gap-6 border-t-1 border-border">
                  <UiResizablePanelGroup direction="horizontal" class="gap-6">
                    <UiResizablePanel :default-size="50" :min-size="15" :max-size="85" class="pl-5 py-4">
                      <div class="flex items-center justify-between bg-surface-muted p-4 rounded-sm">
                        <p class="font-bold">업체</p>
                        <div class="flex gap-2 items-center">
                          <span>합계</span>
                          <UiSeparator orientation="vertical" class="data-[orientation=vertical]:h-4 bg-border"/>
                          <p class="title__bold">360,000원</p>
                        </div>
                      </div>
                      <TableLayout class="!px-0 !h-auto !gap-2" :pagination="false">
                        <template #data-action><p class="caption__bold">겉감</p></template>
                        <template #table-action></template>
                        <template #table>
                          <UiTable class="table-secondary table-fixed w-full">
                            <colgroup>
                              <col style="width:180px"/><col style="width:120px"/><col style="width:80px"/>
                              <col style="width:100px"/><col style="width:120px"/><col style="width:130px"/><col style="width:150px"/>
                            </colgroup>
                            <UiTableHeader>
                              <UiTableRow>
                                <Th data="소요자재내역"/><Th data="요척"/><Th data="요척단위"/><Th data="통화"/><Th data="단가"/><Th data="금액"/><Th data="NOTICE"/>
                              </UiTableRow>
                            </UiTableHeader>
                            <UiTableBody>
                              <UiTableRow v-for="i in 3" :key="i">
                                <Td data="Gore 3L FPL70MT"/>
                                <Td data="1.55" class="text-center"/>
                                <Td data="YD" class="text-center"/>
                                <Td data="KRW" class="text-center"/>
                                <Td data="24,097" class="text-right"/>
                                <Td data="34,390" class="text-right"/>
                                <Td data="-"/>
                              </UiTableRow>
                            </UiTableBody>
                          </UiTable>
                        </template>
                      </TableLayout>
                    </UiResizablePanel>
                    <UiResizableHandle/>
                    <UiResizablePanel :default-size="50" :min-size="15" :max-size="85" class="pr-5 py-4">
                      <div class="flex items-center justify-between bg-surface-muted p-4 rounded-sm">
                        <p class="font-bold">본사</p>
                        <div class="flex gap-2 items-center">
                          <span>합계</span>
                          <UiSeparator orientation="vertical" class="data-[orientation=vertical]:h-4 bg-border"/>
                          <p class="title__bold">360,000원</p>
                        </div>
                      </div>
                      <TableLayout class="!px-0 !h-auto !gap-2" :pagination="false">
                        <template #data-action><p class="caption__bold">겉감</p></template>
                        <template #table-action></template>
                        <template #table>
                          <UiTable class="table-secondary table-fixed w-full">
                            <colgroup>
                              <col style="width:180px"/><col style="width:120px"/><col style="width:80px"/>
                              <col style="width:100px"/><col style="width:120px"/><col style="width:150px"/>
                              <col style="width:100px"/><col style="width:150px"/>
                            </colgroup>
                            <UiTableHeader>
                              <UiTableRow>
                                <Th data="소요자재내역"/><Th data="요척"/><Th data="요척단위"/><Th data="통화"/>
                                <Th data="단가"/><Th data="금액"/><Th data="원가비율"/><Th data="NOTICE"/>
                              </UiTableRow>
                            </UiTableHeader>
                            <UiTableBody>
                              <UiTableRow v-for="i in 3" :key="i">
                                <Td data="Gore 3L FPL70MT"/>
                                <Td data="1.55" class="text-center"/>
                                <Td data="YD" class="text-center"/>
                                <Td data="KRW" class="text-center"/>
                                <Td data="24,097" class="text-right"/>
                                <Td data="겉감" class="text-center"/>
                                <Td data="0%" class="text-center"/>
                                <Td data="-"/>
                              </UiTableRow>
                            </UiTableBody>
                          </UiTable>
                        </template>
                      </TableLayout>
                    </UiResizablePanel>
                  </UiResizablePanelGroup>
                </UiAccordionContent>
              </UiAccordionItem>

              <!-- 기타 (제출 완료 이후: 분할) -->
              <UiAccordionItem value="item-4" class="rounded-md border-1 !border-b-1 border-border">
                <UiAccordionTrigger class="text-sm px-5 py-4 flex items-center gap-2 w-full">
                  <p>기타</p>
                </UiAccordionTrigger>
                <UiAccordionContent class="flex flex-col gap-6 border-t-1 border-border">
                  <UiResizablePanelGroup direction="horizontal" class="gap-6">
                    <UiResizablePanel :default-size="50" :min-size="15" :max-size="85" class="pl-5 py-4">
                      <div class="flex items-center justify-between bg-surface-muted p-4 rounded-sm">
                        <p class="font-bold">업체</p>
                        <div class="flex gap-2 items-center">
                          <span>합계</span>
                          <UiSeparator orientation="vertical" class="data-[orientation=vertical]:h-4 bg-border"/>
                          <p class="title__bold">360,000원</p>
                        </div>
                      </div>
                      <TableLayout class="!px-0 !h-auto !gap-2" :pagination="false">
                        <template #data-action></template>
                        <template #table-action></template>
                        <template #table>
                          <UiTable class="table-secondary table-fixed w-full">
                            <colgroup>
                              <col style="width:300px"/><col style="width:140px"/><col style="width:100px"/>
                              <col style="width:140px"/><col style="width:140px"/><col style="width:300px"/>
                            </colgroup>
                            <UiTableHeader>
                              <UiTableRow>
                                <Th data="항목"/><Th data="수량"/><Th data="통화"/><Th data="단가"/><Th data="금액"/><Th data="NOTICE"/>
                              </UiTableRow>
                            </UiTableHeader>
                            <UiTableBody>
                              <UiTableRow>
                                <Td class="table__row-header text-left">
                                  <div class="flex gap-1 text-default">
                                    <p>임가공료 (봉재료)</p>
                                    <UiTooltipProvider>
                                      <UiTooltip>
                                        <UiTooltipTrigger><LucideCircleAlert class="size-3"/></UiTooltipTrigger>
                                        <UiTooltipContent class="tooltip--dark max-w-fit" side="right">
                                          임가공료는 "선택된 통화 X 생산 환율 관리에 등록된 환율"이 계산됩니다.
                                        </UiTooltipContent>
                                      </UiTooltip>
                                    </UiTooltipProvider>
                                  </div>
                                </Td>
                                <Td data="100" class="text-center"/>
                                <Td data="KRW" class="text-center"/>
                                <Td data="10,000" class="text-right"/>
                                <Td data="1,000,000" class="text-right"/>
                                <Td data="-"/>
                              </UiTableRow>
                              <UiTableRow>
                                <Td class="table__row-header text-left">
                                  <div class="flex gap-1 text-default">
                                    <p>원부자재 수출 및 수입 비용 등 (5%)</p>
                                    <UiTooltipProvider>
                                      <UiTooltip>
                                        <UiTooltipTrigger><LucideCircleAlert class="size-3"/></UiTooltipTrigger>
                                        <UiTooltipContent class="tooltip--dark max-w-fit" side="right">
                                          원부자재 수출 및 수입 비용은 "(원자재+부자재+외주가공 합계) X 0.5"로 계산됩니다.
                                        </UiTooltipContent>
                                      </UiTooltip>
                                    </UiTooltipProvider>
                                  </div>
                                </Td>
                                <Td data="100" class="text-center"/>
                                <Td data="KRW" class="text-center"/>
                                <Td data="10,000" class="text-right"/>
                                <Td data="1,000,000" class="text-right"/>
                                <Td data="-"/>
                              </UiTableRow>
                              <UiTableRow>
                                <Td class="table__row-header text-left">
                                  <div class="flex gap-1 text-default">
                                    <p>CMT Handing Charge (11%)</p>
                                    <UiTooltipProvider>
                                      <UiTooltip>
                                        <UiTooltipTrigger><LucideCircleAlert class="size-3"/></UiTooltipTrigger>
                                        <UiTooltipContent class="tooltip--dark max-w-fit" side="right">
                                          CMT Handing Charge는 "(원자재+부자재+외주가공+임가공료 합계) X 0.11"로 계산됩니다.
                                        </UiTooltipContent>
                                      </UiTooltip>
                                    </UiTooltipProvider>
                                  </div>
                                </Td>
                                <Td data="100" class="text-center"/>
                                <Td data="KRW" class="text-center"/>
                                <Td data="10,000" class="text-right"/>
                                <Td data="1,000,000" class="text-right"/>
                                <Td data="-"/>
                              </UiTableRow>
                              <UiTableRow>
                                <Td class="table__row-header text-left">
                                  <div class="flex gap-1 text-default"><p>KOTITI 완제품 검사 비용</p></div>
                                </Td>
                                <Td data="100" class="text-center"/>
                                <Td data="KRW" class="text-center"/>
                                <Td data="10,000" class="text-right"/>
                                <Td data="1,000,000" class="text-right"/>
                                <Td data="-"/>
                              </UiTableRow>
                              <UiTableRow>
                                <Td class="table__row-header text-left">
                                  <div class="flex gap-1 text-default">
                                    <p>수입 관세</p>
                                    <UiTooltipProvider>
                                      <UiTooltip>
                                        <UiTooltipTrigger><LucideCircleAlert class="size-3"/></UiTooltipTrigger>
                                        <UiTooltipContent class="tooltip--dark max-w-fit" side="right">
                                          수입관세는 수입처에 따라 부과되는 관세가 다르므로 관세가 계산된 금액을 입력합니다.
                                        </UiTooltipContent>
                                      </UiTooltip>
                                    </UiTooltipProvider>
                                  </div>
                                </Td>
                                <Td data="100" class="text-center"/>
                                <Td data="KRW" class="text-center"/>
                                <Td data="10,000" class="text-right"/>
                                <Td data="1,000,000" class="text-right"/>
                                <Td data="-"/>
                              </UiTableRow>
                            </UiTableBody>
                          </UiTable>
                        </template>
                      </TableLayout>
                    </UiResizablePanel>
                    <UiResizableHandle/>
                    <UiResizablePanel :default-size="50" :min-size="15" :max-size="85" class="pr-5 py-4">
                      <div class="flex items-center justify-between bg-surface-muted p-4 rounded-sm">
                        <p class="font-bold">본사</p>
                        <div class="flex gap-2 items-center">
                          <span>합계</span>
                          <UiSeparator orientation="vertical" class="data-[orientation=vertical]:h-4 bg-border"/>
                          <p class="title__bold">360,000원</p>
                        </div>
                      </div>
                      <TableLayout class="!px-0 !h-auto !gap-2" :pagination="false">
                        <template #data-action></template>
                        <template #table-action></template>
                        <template #table>
                          <UiTable class="table-secondary table-fixed w-full">
                            <colgroup>
                              <col style="width:300px"/><col style="width:140px"/><col style="width:100px"/>
                              <col style="width:140px"/><col style="width:140px"/><col style="width:100px"/><col style="width:300px"/>
                            </colgroup>
                            <UiTableHeader>
                              <UiTableRow>
                                <Th data="항목"/><Th data="수량"/><Th data="통화"/><Th data="단가"/>
                                <Th data="금액"/><Th data="원가비율"/><Th data="NOTICE"/>
                              </UiTableRow>
                            </UiTableHeader>
                            <UiTableBody>
                              <UiTableRow>
                                <Td class="table__row-header text-left">
                                  <div class="flex gap-1 text-default">
                                    <p>임가공료 (봉재료)</p>
                                    <UiTooltipProvider>
                                      <UiTooltip>
                                        <UiTooltipTrigger><LucideCircleAlert class="size-3"/></UiTooltipTrigger>
                                        <UiTooltipContent class="tooltip--dark max-w-fit" side="right">
                                          임가공료는 "선택된 통화 X 생산 환율 관리에 등록된 환율"이 계산됩니다.
                                        </UiTooltipContent>
                                      </UiTooltip>
                                    </UiTooltipProvider>
                                  </div>
                                </Td>
                                <Td data="100" class="text-center"/>
                                <Td data="KRW" class="text-center"/>
                                <Td data="10,000" class="text-right"/>
                                <Td data="1,000,000" class="text-right"/>
                                <Td data="0%" class="text-center"/>
                                <Td data="-"/>
                              </UiTableRow>
                              <UiTableRow>
                                <Td class="table__row-header text-left">
                                  <div class="flex gap-1 text-default">
                                    <p>원부자재 수출 및 수입 비용 등 (5%)</p>
                                    <UiTooltipProvider>
                                      <UiTooltip>
                                        <UiTooltipTrigger><LucideCircleAlert class="size-3"/></UiTooltipTrigger>
                                        <UiTooltipContent class="tooltip--dark max-w-fit" side="right">
                                          원부자재 수출 및 수입 비용은 "(원자재+부자재+외주가공 합계) X 0.5"로 계산됩니다.
                                        </UiTooltipContent>
                                      </UiTooltip>
                                    </UiTooltipProvider>
                                  </div>
                                </Td>
                                <Td data="100" class="text-center"/>
                                <Td data="KRW" class="text-center"/>
                                <Td data="10,000" class="text-right"/>
                                <Td data="1,000,000" class="text-right"/>
                                <Td data="0%" class="text-center"/>
                                <Td data="-"/>
                              </UiTableRow>
                              <UiTableRow>
                                <Td class="table__row-header text-left">
                                  <div class="flex gap-1 text-default">
                                    <p>CMT Handing Charge (11%)</p>
                                    <UiTooltipProvider>
                                      <UiTooltip>
                                        <UiTooltipTrigger><LucideCircleAlert class="size-3"/></UiTooltipTrigger>
                                        <UiTooltipContent class="tooltip--dark max-w-fit" side="right">
                                          CMT Handing Charge는 "(원자재+부자재+외주가공+임가공료 합계) X 0.11"로 계산됩니다.
                                        </UiTooltipContent>
                                      </UiTooltip>
                                    </UiTooltipProvider>
                                  </div>
                                </Td>
                                <Td data="100" class="text-center"/>
                                <Td data="KRW" class="text-center"/>
                                <Td data="10,000" class="text-right"/>
                                <Td data="1,000,000" class="text-right"/>
                                <Td data="0%" class="text-center"/>
                                <Td data="-"/>
                              </UiTableRow>
                              <UiTableRow>
                                <Td class="table__row-header text-left">
                                  <div class="flex gap-1 text-default"><p>KOTITI 완제품 검사 비용</p></div>
                                </Td>
                                <Td data="100" class="text-center"/>
                                <Td data="KRW" class="text-center"/>
                                <Td data="10,000" class="text-right"/>
                                <Td data="1,000,000" class="text-right"/>
                                <Td data="0%" class="text-center"/>
                                <Td data="-"/>
                              </UiTableRow>
                              <UiTableRow>
                                <Td class="table__row-header text-left">
                                  <div class="flex gap-1 text-default">
                                    <p>수입 관세</p>
                                    <UiTooltipProvider>
                                      <UiTooltip>
                                        <UiTooltipTrigger><LucideCircleAlert class="size-3"/></UiTooltipTrigger>
                                        <UiTooltipContent class="tooltip--dark max-w-fit" side="right">
                                          수입관세는 수입처에 따라 부과되는 관세가 다르므로 관세가 계산된 금액을 입력합니다.
                                        </UiTooltipContent>
                                      </UiTooltip>
                                    </UiTooltipProvider>
                                  </div>
                                </Td>
                                <Td data="100" class="text-center"/>
                                <Td data="KRW" class="text-center"/>
                                <Td data="10,000" class="text-right"/>
                                <Td data="1,000,000" class="text-right"/>
                                <Td data="0%" class="text-center"/>
                                <Td data="-"/>
                              </UiTableRow>
                            </UiTableBody>
                          </UiTable>
                        </template>
                      </TableLayout>
                    </UiResizablePanel>
                  </UiResizablePanelGroup>
                </UiAccordionContent>
              </UiAccordionItem>

            </UiAccordion>
          </div>
        </div>

        <!-- 푸터 -->
        <div class="flex justify-between gap-2 p-4 shrink-0">
          <div class="ml-auto flex gap-2">
            <UiButton variant="destructive">재작성 요청</UiButton>
            <UiButton variant="destructive">재검토</UiButton>
            <UiButton>대사 진행</UiButton>
            <UiButton>대사 확정</UiButton>
          </div>
        </div>

      </div>
    `})};var d,r,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Sheet — 푸시알림',
  render: () => ({
    components: {
      LineTabs,
      EmptyData
    },
    setup() {
      const tabList = ref([{
        label: '알림',
        value: 'alert',
        active: true
      }, {
        label: '작업',
        value: 'work',
        active: false
      }]);
      const activeTab = ref('alert');
      const onTabChange = (val: string) => {
        tabList.value.forEach(t => {
          t.active = t.value === val;
        });
        activeTab.value = val;
      };
      return {
        tabList,
        activeTab,
        onTabChange
      };
    },
    template: \`
      <div class="bg-background flex flex-col shadow-bottom" style="width:480px; height:640px">

        <!-- 헤더 -->
        <div class="flex justify-between items-center px-6 min-h-14 shrink-0">
          <h2 class="title__bold">알림</h2>
          <div class="ml-auto flex items-center gap-2 h-5">
            <UiButton variant="ghost" size="icon"><LucideX /></UiButton>
          </div>
        </div>

        <!-- 탭 -->
        <section class="border-b-1 border-border px-6 shrink-0">
          <LineTabs :tab-list="tabList" @change="onTabChange">
            <template #default="{ tab }">
              <span>{{ tab.label }}</span>
              <UiBadge size="count" :class="tab.active ? 'bg-danger text-neutral' : ''">99+</UiBadge>
            </template>
          </LineTabs>
        </section>

        <!-- 알림 탭 -->
        <template v-if="activeTab === 'alert'">
          <div class="pt-6 pb-3 px-6 shrink-0">
            <p class="font-bold">총 150건</p>
            <div class="flex justify-between pt-6">
              <div class="flex items-center space-x-2">
                <UiSwitch id="unread" />
                <UiLabel for="unread">읽지않음 항목만 표시</UiLabel>
              </div>
              <UiButton variant="ghost" size="sm"><LucideCheck /> 모두 읽음</UiButton>
            </div>
          </div>
          <div class="overflow-y-auto flex-1 flex flex-col">
            <!-- 읽지 않음 -->
            <div class="icon-list__item">
              <div class="icon-list__icon icon-list__icon--default">
                <LucideMessagesSquare />
                <UiBadge size="dot" class="bg-danger icon-list__notification" />
              </div>
              <div class="icon-list__content">
                <div class="icon-list__title">
                  <p class="font-bold">알림 제목</p>
                  <span class="mt-1 caption__bold">서브타이틀 또는 @멘션</span>
                </div>
                <div class="icon-list__body">
                  <p>박정은 님이 하위 작업을 In Progress에서 Backlog(으)로 변경했습니다</p>
                  <span class="text-muted">26.03.16 11:13</span>
                </div>
                <div class="icon-list__button mt-2">
                  <UiButton variant="link" size="sm" class="justify-start text-primary">
                    <LucideDownload /><span class="truncate pb-px">파일명은_최대_50글자까지_지원_가능_이지만_시트_너비_기준으로_넘치면_잘림20160316.xlsx</span>
                  </UiButton>
                  <UiButton variant="link" size="sm" class="justify-start text-primary">
                    <span class="truncate pb-px">스타일 관리 바로가기</span><LucideSquareArrowOutUpRight />
                  </UiButton>
                </div>
              </div>
              <UiDropdownMenu>
                <UiDropdownMenuTrigger as-child>
                  <UiButton variant="ghost" size="icon" title="더보기" class="absolute right-2 top-3"><LucideEllipsisVertical /></UiButton>
                </UiDropdownMenuTrigger>
                <UiDropdownMenuContent side="bottom" class="mr-6">
                  <UiDropdownMenuItem><p>읽음<span class="font-normal">으로 표시</span></p></UiDropdownMenuItem>
                </UiDropdownMenuContent>
              </UiDropdownMenu>
            </div>
            <!-- 성공 -->
            <div class="icon-list__item">
              <div class="icon-list__icon icon-list__icon--success"><LucideCircleCheckBig /></div>
              <div class="icon-list__content">
                <div class="icon-list__title"><p class="font-bold">알림 제목</p></div>
                <div class="icon-list__body">
                  <p>박정은 님이 하위 작업을 In Progress에서 Backlog(으)로 변경했습니다</p>
                  <span class="text-muted">26.03.16 11:13</span>
                </div>
              </div>
              <UiDropdownMenu>
                <UiDropdownMenuTrigger as-child>
                  <UiButton variant="ghost" size="icon" title="더보기" class="absolute right-2 top-3"><LucideEllipsisVertical /></UiButton>
                </UiDropdownMenuTrigger>
                <UiDropdownMenuContent side="bottom" class="mr-6">
                  <UiDropdownMenuItem><p>읽지 않음<span class="font-normal">으로 표시</span></p></UiDropdownMenuItem>
                </UiDropdownMenuContent>
              </UiDropdownMenu>
            </div>
            <!-- 경고 -->
            <div class="icon-list__item">
              <div class="icon-list__icon icon-list__icon--warning"><LucideAlertTriangle /></div>
              <div class="icon-list__content">
                <div class="icon-list__title"><p class="font-bold">알림 제목</p></div>
                <div class="icon-list__body">
                  <p>박정은 님이 하위 작업을 In Progress에서 Backlog(으)로 변경했습니다</p>
                  <span class="text-muted">26.03.16 11:13</span>
                </div>
              </div>
              <UiDropdownMenu>
                <UiDropdownMenuTrigger as-child>
                  <UiButton variant="ghost" size="icon" title="더보기" class="absolute right-2 top-3"><LucideEllipsisVertical /></UiButton>
                </UiDropdownMenuTrigger>
                <UiDropdownMenuContent side="bottom" class="mr-6">
                  <UiDropdownMenuItem><p>읽지 않음<span class="font-normal">으로 표시</span></p></UiDropdownMenuItem>
                </UiDropdownMenuContent>
              </UiDropdownMenu>
            </div>
            <EmptyData class="!h-35 !bg-background text-center flex-none mt-auto">
              <LucideInfo class="size-4" />
              알림은 30일전 내용 까지만 확인이 가능합니다.
            </EmptyData>
          </div>
        </template>

        <!-- 작업 탭 -->
        <template v-else>
          <div class="pt-6 pb-3 px-6 shrink-0">
            <p class="font-bold">총 150건</p>
          </div>
          <div class="overflow-y-auto flex-1 flex flex-col">
            <!-- 업로드 진행중 -->
            <div class="icon-list__item">
              <div class="icon-list__icon icon-list__icon--default"><LucideMessagesSquare /></div>
              <div class="icon-list__content w-full">
                <div class="icon-list__title"><p class="font-bold">업로드 진행중</p></div>
                <div class="icon-list__body mt-3">
                  <UiProgress :model-value="20" />
                  <div class="flex items-center justify-between gap-4">
                    <span class="mt-1 caption__bold truncate">2025-fw-style-upload-list..xlsx</span>
                    <span class="text-muted">20%</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- 완료 -->
            <div class="icon-list__item">
              <div class="icon-list__icon icon-list__icon--success"><LucideCircleCheckBig /></div>
              <div class="icon-list__content">
                <div class="icon-list__title"><p class="font-bold">알림 제목</p></div>
                <div class="icon-list__body">
                  <p>박정은 님이 하위 작업을 In Progress에서 Backlog(으)로 변경했습니다</p>
                  <span class="text-muted">26.03.16 11:13</span>
                </div>
                <div class="icon-list__button mt-2">
                  <UiButton variant="link" size="sm" class="justify-start text-primary">
                    <span class="truncate pb-px">스타일 관리 바로가기</span><LucideSquareArrowOutUpRight />
                  </UiButton>
                </div>
              </div>
              <UiButton variant="ghost" size="icon" class="absolute right-2 top-3 hover:text-danger hover:bg-transparent" title="작업 삭제">
                <LucideTrash2 />
              </UiButton>
            </div>
            <EmptyData class="!h-35 !bg-background text-center flex-none mt-auto">
              <LucideInfo class="size-4" />
              작업 알림은 최대 50개 까지만 확인이 가능하며<br/>오래된 작업순으로 제외됩니다.
            </EmptyData>
          </div>
        </template>

      </div>
    \`
  })
}`,...(c=(r=t.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var n,p,T;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Sheet — 전체시트 (BOM)',
  render: () => ({
    components: {
      TableLayout,
      Th,
      Td,
      Tags
    },
    template: \`
      <div class="bg-background flex flex-col shadow-lg rounded-md" style="width:90vw; height:90vh">

        <!-- 헤더 -->
        <div class="flex justify-between items-center px-6 min-h-14 shrink-0">
          <div class="flex items-center gap-2 flex-wrap">
            <p class="title__bold">BOM(원가 견적서)</p>
            <UiBadge variant="outline">제출 완료</UiBadge>
            <UiBadge variant="process">수정 제안</UiBadge>
            <UiBadge variant="process">대사 완료</UiBadge>
            <UiBadge variant="reject">재검토</UiBadge>
            <UiBadge variant="accept">대사 확정</UiBadge>
          </div>
          <div class="ml-auto flex items-center gap-2 h-5">
            <UiButton variant="ghost" size="icon"><LucideX /></UiButton>
          </div>
        </div>

        <!-- 바디 -->
        <div class="overflow-y-auto flex-1 container-type--inline relative">

          <div class="pl-6 mr-6 pb-4 flex sticky top-0 bg-background z-20">
            <UiButton variant="outline" size="sm" class="ml-auto">
              <LucideClock/>
              이력 조회
            </UiButton>
          </div>

          <!-- 재검토 사유 (재검토 상태에서만 노출) -->
          <div class="flex flex-col gap-4 px-6 pb-4">
            <UiAlert variant="danger">
              <div class="grid">
                <UiAlertTitle>
                  재검토 상태에서만 노출되는 영역입니다. 재검토 사유가 출력됩니다.
                </UiAlertTitle>
                <UiAlertDescription></UiAlertDescription>
              </div>
            </UiAlert>
          </div>
          <UiSeparator orientation="horizontal" class="data-[orientation=horizontal]:h-2 bg-surface-muted"/>

          <!-- 기본정보 -->
          <div class="list-layout--grid">
            <UiCard class="p-5 gap-4 relative">
              <h4>스타일 정보</h4>
              <UiButton variant="outline" size="icon" class="absolute top-3 right-3" title="생산 담당자 수정"><LucideSquarePen/></UiButton>

              <dl class="view-list__item">
                <dt class="view-list__item-title">스타일 코드</dt>
                <dd class="view-list__item-cont">TNCOOOOWHS01</dd>
              </dl>
              <dl class="view-list__item">
                <dt class="view-list__item-title">기획 수량</dt>
                <dd class="view-list__item-cont">500</dd>
              </dl>
              <dl class="view-list__item">
                <dt class="view-list__item-title">최초가</dt>
                <dd class="view-list__item-cont">4,000</dd>
              </dl>
              <dl class="view-list__item">
                <dt class="view-list__item-title">결판가</dt>
                <dd class="view-list__item-cont">4,000</dd>
              </dl>
              <dl class="view-list__item">
                <dt class="view-list__item-title">컬러 정보</dt>
                <dd class="view-list__item-cont gap-2 flex-wrap">
                  <Tags variant="secondary">
                    <LucideCheck class="size-3"/>Deep Wine Red
                  </Tags>
                  <Tags variant="secondary">
                    <LucideCheck class="size-3"/>Deep Wine Red
                  </Tags>
                  <Tags variant="secondary">
                    <LucideCheck class="size-3"/>Deep Wine Red
                  </Tags>
                  <Tags variant="outline" title="Dusty Pink" class="text-muted"/>
                  <Tags variant="outline" title="Red" class="text-muted"/>
                  <Tags variant="outline" title="Blue" class="text-muted"/>
                  <Tags variant="outline" title="Strawberry Orange" class="text-muted"/>
                </dd>
              </dl>
              <dl class="view-list__item">
                <dt class="view-list__item-title">업체 담당자</dt>
                <dd class="view-list__item-cont">홍길순</dd>
              </dl>
              <dl class="view-list__item">
                <dt class="view-list__item-title">생산 담당자</dt>
                <dd class="view-list__item-cont">
                  <UiTooltipProvider>
                    <UiTooltip>
                      <UiTooltipTrigger as-child>
                        <UiButton variant="link" class="!p-0">김생산 외 2명</UiButton>
                      </UiTooltipTrigger>
                      <UiTooltipContent class="tooltip--dark">
                        <ul>
                          <li class="py-0.5">최예솔</li>
                          <li class="py-0.5">홍길동</li>
                        </ul>
                      </UiTooltipContent>
                    </UiTooltip>
                  </UiTooltipProvider>
                </dd>
              </dl>
            </UiCard>
            <div class="col-span-2 flex flex-col gap-6">
              <UiCard class="p-5">
                <div class="flex gap-1 mb-4">
                  <h4>환율 정보</h4>
                  <UiTooltipProvider>
                    <UiTooltip>
                      <UiTooltipTrigger>
                        <LucideCircleAlert class="size-3"/>
                      </UiTooltipTrigger>
                      <UiTooltipContent class="tooltip--dark w-auto" side="right">
                        <span>환율 환산 금액은 기본 정보관리 &gt; 생산 환율 관리 메뉴에서<br/>등록된 값을 호출합니다</span>
                      </UiTooltipContent>
                    </UiTooltip>
                  </UiTooltipProvider>
                </div>
                <div class="bg-surface-muted p-2 rounded-md items-center flex-wrap grid grid-cols-3 gap-y-3 gap-x-12">
                  <div v-for="i in 3" :key="i" :class="[i % 3 !== 0 ? \\\`before:content-[''] before:absolute before:w-px before:bg-border before:h-12 before:-left-6\\\` : '', 'flex items-center justify-between h-16 px-3 relative']">
                    <p class="font-bold w-1/2">USD(달러)</p>
                    <div class="w-1/2 text-right">
                      <div class="flex gap-1 items-end justify-end">
                        <p class="font-bold text-xs mb-0.5"><span class="text-sm">102,500 </span>KRW</p>
                        <UiTooltipProvider>
                          <UiTooltip>
                            <UiTooltipTrigger class="self-center mb-0.5 text-warning">
                              <LucideCircleAlert class="size-3"/>
                            </UiTooltipTrigger>
                            <UiTooltipContent class="tooltip--dark max-w-90" side="right">
                              업체에서 수정한 환율 기준가입니다.
                            </UiTooltipContent>
                          </UiTooltip>
                        </UiTooltipProvider>
                      </div>
                      <span class="text-muted text-xs">1달러 당 환율금액</span>
                    </div>
                  </div>
                </div>
              </UiCard>
              <UiCard class="p-5">
                <h4>합계</h4>
                <TableLayout class="!px-0 !h-auto" :pagination="false">
                  <template #data-action></template>
                  <template #table-action></template>
                  <template #table>
                    <UiTable class="table-secondary table-fixed w-full">
                      <colgroup>
                        <col style="width:400px"/>
                        <col/>
                        <col/>
                      </colgroup>
                      <UiTableHeader>
                        <UiTableRow>
                          <Th data="항목"/>
                          <Th data="업체 합계"/>
                          <Th data="본사 합계"/>
                        </UiTableRow>
                      </UiTableHeader>
                      <UiTableBody>
                        <UiTableRow>
                          <Td class="table__row-header text-left">
                            <div class="flex gap-1 text-xs">
                              <p>원가 및 협력 업체 마진 합계</p>
                              <UiTooltipProvider>
                                <UiTooltip>
                                  <UiTooltipTrigger>
                                    <LucideCircleAlert class="size-3"/>
                                  </UiTooltipTrigger>
                                  <UiTooltipContent class="tooltip--dark max-w-90" side="right">
                                    원가 및 협력업체 마진 합계는(원자재+부자재+외주가공+임가공료) + 원부자재 수출 및 수입 비용+CMT Handling Charge로 계산됩니다.
                                  </UiTooltipContent>
                                </UiTooltip>
                              </UiTooltipProvider>
                            </div>
                          </Td>
                          <Td data="100,000" class="text-right"/>
                          <Td class="text-right"><span class="text-primary font-bold">100,000</span></Td>
                        </UiTableRow>
                        <UiTableRow>
                          <Td class="table__row-header text-left">
                            <div class="flex gap-1 text-xs"><p>원가 합계 (VAT 제외)</p></div>
                          </Td>
                          <Td data="100,000" class="text-right"/>
                          <Td class="text-right"><span class="text-primary font-bold">100,000</span></Td>
                        </UiTableRow>
                        <UiTableRow>
                          <Td class="table__row-header text-left">
                            <div class="flex gap-1 text-xs"><p>원가 합계 (VAT 포함)</p></div>
                          </Td>
                          <Td data="100,000" class="text-right"/>
                          <Td class="text-right"><span class="text-primary font-bold">100,000</span></Td>
                        </UiTableRow>
                        <UiTableRow>
                          <Td class="table__row-header text-left text-xs">
                            <div class="flex gap-1">
                              <p>최종금액 (VAT 제외)</p>
                              <UiTooltipProvider>
                                <UiTooltip>
                                  <UiTooltipTrigger>
                                    <LucideCircleAlert class="size-3"/>
                                  </UiTooltipTrigger>
                                  <UiTooltipContent class="tooltip--dark max-w-90" side="right">
                                    최종금액은 100원 미만 금액은 절삭됩니다.
                                  </UiTooltipContent>
                                </UiTooltip>
                              </UiTooltipProvider>
                            </div>
                          </Td>
                          <Td data="100,000" class="text-right"/>
                          <Td class="text-right"><span class="text-primary font-bold">100,000</span></Td>
                        </UiTableRow>
                      </UiTableBody>
                    </UiTable>
                  </template>
                </TableLayout>
              </UiCard>
            </div>
          </div>
          <UiSeparator orientation="horizontal" class="data-[orientation=horizontal]:h-2 bg-surface-muted"/>

          <!-- 견적서 정보 -->
          <div class="flex flex-col gap-6 p-6">
            <div class="bg-background mb-2 sticky right-0 left-0 top-6 z-20">
              <h4 class="font-bold mb-4">최종 금액 (VAT 제외)</h4>
              <div class="rounded-md bg-background border-primary border-2 py-4 px-6 flex gap-8 items-center justify-between shadow-bottom">
                <div class="flex items-center justify-between w-full">
                  <span>업체 합계</span>
                  <p class="title__bold">100,000 KRW</p>
                </div>
                <UiSeparator orientation="vertical" class="data-[orientation=vertical]:h-6 bg-border"/>
                <div class="flex items-center justify-between w-full">
                  <span>본사 합계</span>
                  <p class="title__bold text-primary">100,000 KRW</p>
                </div>
              </div>
            </div>

            <div class="flex items-center">
              <div class="flex gap-2 ml-auto">
                <UiButton variant="outline" size="sm">
                  <LucideImages/>
                  미니마카 이미지 보기
                </UiButton>
              </div>
            </div>

            <UiAccordion class="w-full flex flex-col gap-6" type="multiple" collapsible :default-value="['item-1','item-2','item-3','item-4']">

              <!-- 원자재 (제출 완료: 분할 X) -->
              <UiAccordionItem value="item-1" class="rounded-md border-1 border-border !border-b-1">
                <UiAccordionTrigger class="text-sm px-5 py-4 flex items-center gap-2 w-full">
                  <p>원자재</p>
                  <div class="flex items-center gap-2 ml-auto">
                    <span class="font-normal">합계</span>
                    <UiSeparator orientation="vertical" class="data-[orientation=vertical]:h-4 bg-border"/>
                    <p class="title__bold">100,000 원</p>
                  </div>
                </UiAccordionTrigger>
                <UiAccordionContent class="flex flex-col gap-6 px-5 py-4 border-t-1 border-border">
                  <TableLayout class="!px-0 !h-auto !gap-2" :pagination="false">
                    <template #data-action><p class="caption__bold">겉감</p></template>
                    <template #table-action></template>
                    <template #table>
                      <UiTable class="table-secondary table-fixed w-full">
                        <colgroup>
                          <col style="width:180px"/><col style="width:160px"/><col style="width:80px"/>
                          <col style="width:120px"/><col style="width:80px"/><col style="width:100px"/>
                          <col style="width:120px"/><col style="width:130px"/><col style="width:150px"/>
                          <col style="width:150px"/><col style="width:150px"/>
                        </colgroup>
                        <UiTableHeader>
                          <UiTableRow>
                            <Th data="소요자재내역"/><Th data="규격(아이템넘버)"/><Th data="규격단위"/>
                            <Th data="요척"/><Th data="요척단위"/><Th data="통화"/><Th data="단가"/>
                            <Th data="금액"/><Th data="공급업체"/><Th data="사용부위"/><Th data="NOTICE"/>
                          </UiTableRow>
                        </UiTableHeader>
                        <UiTableBody>
                          <UiTableRow v-for="i in 3" :key="i">
                            <Td data="Gore 3L FPL70MT"/>
                            <Td data="144" class="text-center"/>
                            <Td data="cm" class="text-center"/>
                            <Td data="1.55" class="text-center"/>
                            <Td data="YD" class="text-center"/>
                            <Td data="KRW" class="text-center"/>
                            <Td data="24,097" class="text-right"/>
                            <Td data="34,390" class="text-right"/>
                            <Td data="GORE-TEX" class="text-center"/>
                            <Td data="겉감" class="text-center"/>
                            <Td data="-"/>
                          </UiTableRow>
                        </UiTableBody>
                      </UiTable>
                    </template>
                  </TableLayout>
                </UiAccordionContent>
              </UiAccordionItem>

              <!-- 기타 (제출 완료: 분할 X) -->
              <UiAccordionItem value="item-2" class="rounded-md border-1 !border-b-1 border-border">
                <UiAccordionTrigger class="text-sm px-5 py-4 flex items-center gap-2 w-full">
                  <p>기타</p>
                  <div class="flex items-center gap-2 ml-auto">
                    <span class="font-normal">합계</span>
                    <UiSeparator orientation="vertical" class="data-[orientation=vertical]:h-4 bg-border"/>
                    <p class="title__bold">100,000 원</p>
                  </div>
                </UiAccordionTrigger>
                <UiAccordionContent class="flex flex-col gap-6 px-5 py-4 border-t-1 border-border">
                  <TableLayout class="!px-0 !h-auto !gap-2" :pagination="false">
                    <template #data-action></template>
                    <template #table-action></template>
                    <template #table>
                      <UiTable class="table-secondary table-fixed w-full">
                        <colgroup>
                          <col style="width:300px"/><col style="width:140px"/><col style="width:100px"/>
                          <col style="width:140px"/><col style="width:140px"/><col style="width:300px"/>
                        </colgroup>
                        <UiTableHeader>
                          <UiTableRow>
                            <Th data="항목"/><Th data="수량"/><Th data="통화"/><Th data="단가"/><Th data="금액"/><Th data="NOTICE"/>
                          </UiTableRow>
                        </UiTableHeader>
                        <UiTableBody>
                          <UiTableRow>
                            <Td class="table__row-header text-left">
                              <div class="flex gap-1 text-default">
                                <p>임가공료 (봉재료)</p>
                                <UiTooltipProvider>
                                  <UiTooltip>
                                    <UiTooltipTrigger><LucideCircleAlert class="size-3"/></UiTooltipTrigger>
                                    <UiTooltipContent class="tooltip--dark max-w-fit" side="right">
                                      임가공료는 "선택된 통화 X 생산 환율 관리에 등록된 환율"이 계산됩니다.
                                    </UiTooltipContent>
                                  </UiTooltip>
                                </UiTooltipProvider>
                              </div>
                            </Td>
                            <Td data="100" class="text-center"/>
                            <Td data="KRW" class="text-center"/>
                            <Td data="10,000" class="text-right"/>
                            <Td data="1,000,000" class="text-right"/>
                            <Td data="-"/>
                          </UiTableRow>
                          <UiTableRow>
                            <Td class="table__row-header text-left">
                              <div class="flex gap-1 text-default">
                                <p>원부자재 수출 및 수입 비용 등 (5%)</p>
                                <UiTooltipProvider>
                                  <UiTooltip>
                                    <UiTooltipTrigger><LucideCircleAlert class="size-3"/></UiTooltipTrigger>
                                    <UiTooltipContent class="tooltip--dark max-w-fit" side="right">
                                      원부자재 수출 및 수입 비용은 "(원자재+부자재+외주가공 합계) X 0.5"로 계산됩니다.
                                    </UiTooltipContent>
                                  </UiTooltip>
                                </UiTooltipProvider>
                              </div>
                            </Td>
                            <Td data="100" class="text-center"/>
                            <Td data="KRW" class="text-center"/>
                            <Td data="10,000" class="text-right"/>
                            <Td data="1,000,000" class="text-right"/>
                            <Td data="-"/>
                          </UiTableRow>
                          <UiTableRow>
                            <Td class="table__row-header text-left">
                              <div class="flex gap-1 text-default">
                                <p>CMT Handing Charge (11%)</p>
                                <UiTooltipProvider>
                                  <UiTooltip>
                                    <UiTooltipTrigger><LucideCircleAlert class="size-3"/></UiTooltipTrigger>
                                    <UiTooltipContent class="tooltip--dark max-w-fit" side="right">
                                      CMT Handing Charge는 "(원자재+부자재+외주가공+임가공료 합계) X 0.11"로 계산됩니다.
                                    </UiTooltipContent>
                                  </UiTooltip>
                                </UiTooltipProvider>
                              </div>
                            </Td>
                            <Td data="100" class="text-center"/>
                            <Td data="KRW" class="text-center"/>
                            <Td data="10,000" class="text-right"/>
                            <Td data="1,000,000" class="text-right"/>
                            <Td data="-"/>
                          </UiTableRow>
                          <UiTableRow>
                            <Td class="table__row-header text-left">
                              <div class="flex gap-1 text-default"><p>KOTITI 완제품 검사 비용</p></div>
                            </Td>
                            <Td data="100" class="text-center"/>
                            <Td data="KRW" class="text-center"/>
                            <Td data="10,000" class="text-right"/>
                            <Td data="1,000,000" class="text-right"/>
                            <Td data="-"/>
                          </UiTableRow>
                          <UiTableRow>
                            <Td class="table__row-header text-left">
                              <div class="flex gap-1 text-default">
                                <p>수입 관세</p>
                                <UiTooltipProvider>
                                  <UiTooltip>
                                    <UiTooltipTrigger><LucideCircleAlert class="size-3"/></UiTooltipTrigger>
                                    <UiTooltipContent class="tooltip--dark max-w-fit" side="right">
                                      수입관세는 수입처에 따라 부과되는 관세가 다르므로 관세가 계산된 금액을 입력합니다.
                                    </UiTooltipContent>
                                  </UiTooltip>
                                </UiTooltipProvider>
                              </div>
                            </Td>
                            <Td data="100" class="text-center"/>
                            <Td data="KRW" class="text-center"/>
                            <Td data="10,000" class="text-right"/>
                            <Td data="1,000,000" class="text-right"/>
                            <Td data="-"/>
                          </UiTableRow>
                        </UiTableBody>
                      </UiTable>
                    </template>
                  </TableLayout>
                </UiAccordionContent>
              </UiAccordionItem>

              <!-- 원자재 (제출 완료 이후: 분할) -->
              <UiAccordionItem value="item-3" class="rounded-md border-1 border-border !border-b-1">
                <UiAccordionTrigger class="text-sm px-5 py-4 flex items-center gap-2 w-full">
                  <p>원자재</p>
                </UiAccordionTrigger>
                <UiAccordionContent class="flex flex-col gap-6 border-t-1 border-border">
                  <UiResizablePanelGroup direction="horizontal" class="gap-6">
                    <UiResizablePanel :default-size="50" :min-size="15" :max-size="85" class="pl-5 py-4">
                      <div class="flex items-center justify-between bg-surface-muted p-4 rounded-sm">
                        <p class="font-bold">업체</p>
                        <div class="flex gap-2 items-center">
                          <span>합계</span>
                          <UiSeparator orientation="vertical" class="data-[orientation=vertical]:h-4 bg-border"/>
                          <p class="title__bold">360,000원</p>
                        </div>
                      </div>
                      <TableLayout class="!px-0 !h-auto !gap-2" :pagination="false">
                        <template #data-action><p class="caption__bold">겉감</p></template>
                        <template #table-action></template>
                        <template #table>
                          <UiTable class="table-secondary table-fixed w-full">
                            <colgroup>
                              <col style="width:180px"/><col style="width:120px"/><col style="width:80px"/>
                              <col style="width:100px"/><col style="width:120px"/><col style="width:130px"/><col style="width:150px"/>
                            </colgroup>
                            <UiTableHeader>
                              <UiTableRow>
                                <Th data="소요자재내역"/><Th data="요척"/><Th data="요척단위"/><Th data="통화"/><Th data="단가"/><Th data="금액"/><Th data="NOTICE"/>
                              </UiTableRow>
                            </UiTableHeader>
                            <UiTableBody>
                              <UiTableRow v-for="i in 3" :key="i">
                                <Td data="Gore 3L FPL70MT"/>
                                <Td data="1.55" class="text-center"/>
                                <Td data="YD" class="text-center"/>
                                <Td data="KRW" class="text-center"/>
                                <Td data="24,097" class="text-right"/>
                                <Td data="34,390" class="text-right"/>
                                <Td data="-"/>
                              </UiTableRow>
                            </UiTableBody>
                          </UiTable>
                        </template>
                      </TableLayout>
                    </UiResizablePanel>
                    <UiResizableHandle/>
                    <UiResizablePanel :default-size="50" :min-size="15" :max-size="85" class="pr-5 py-4">
                      <div class="flex items-center justify-between bg-surface-muted p-4 rounded-sm">
                        <p class="font-bold">본사</p>
                        <div class="flex gap-2 items-center">
                          <span>합계</span>
                          <UiSeparator orientation="vertical" class="data-[orientation=vertical]:h-4 bg-border"/>
                          <p class="title__bold">360,000원</p>
                        </div>
                      </div>
                      <TableLayout class="!px-0 !h-auto !gap-2" :pagination="false">
                        <template #data-action><p class="caption__bold">겉감</p></template>
                        <template #table-action></template>
                        <template #table>
                          <UiTable class="table-secondary table-fixed w-full">
                            <colgroup>
                              <col style="width:180px"/><col style="width:120px"/><col style="width:80px"/>
                              <col style="width:100px"/><col style="width:120px"/><col style="width:150px"/>
                              <col style="width:100px"/><col style="width:150px"/>
                            </colgroup>
                            <UiTableHeader>
                              <UiTableRow>
                                <Th data="소요자재내역"/><Th data="요척"/><Th data="요척단위"/><Th data="통화"/>
                                <Th data="단가"/><Th data="금액"/><Th data="원가비율"/><Th data="NOTICE"/>
                              </UiTableRow>
                            </UiTableHeader>
                            <UiTableBody>
                              <UiTableRow v-for="i in 3" :key="i">
                                <Td data="Gore 3L FPL70MT"/>
                                <Td data="1.55" class="text-center"/>
                                <Td data="YD" class="text-center"/>
                                <Td data="KRW" class="text-center"/>
                                <Td data="24,097" class="text-right"/>
                                <Td data="겉감" class="text-center"/>
                                <Td data="0%" class="text-center"/>
                                <Td data="-"/>
                              </UiTableRow>
                            </UiTableBody>
                          </UiTable>
                        </template>
                      </TableLayout>
                    </UiResizablePanel>
                  </UiResizablePanelGroup>
                </UiAccordionContent>
              </UiAccordionItem>

              <!-- 기타 (제출 완료 이후: 분할) -->
              <UiAccordionItem value="item-4" class="rounded-md border-1 !border-b-1 border-border">
                <UiAccordionTrigger class="text-sm px-5 py-4 flex items-center gap-2 w-full">
                  <p>기타</p>
                </UiAccordionTrigger>
                <UiAccordionContent class="flex flex-col gap-6 border-t-1 border-border">
                  <UiResizablePanelGroup direction="horizontal" class="gap-6">
                    <UiResizablePanel :default-size="50" :min-size="15" :max-size="85" class="pl-5 py-4">
                      <div class="flex items-center justify-between bg-surface-muted p-4 rounded-sm">
                        <p class="font-bold">업체</p>
                        <div class="flex gap-2 items-center">
                          <span>합계</span>
                          <UiSeparator orientation="vertical" class="data-[orientation=vertical]:h-4 bg-border"/>
                          <p class="title__bold">360,000원</p>
                        </div>
                      </div>
                      <TableLayout class="!px-0 !h-auto !gap-2" :pagination="false">
                        <template #data-action></template>
                        <template #table-action></template>
                        <template #table>
                          <UiTable class="table-secondary table-fixed w-full">
                            <colgroup>
                              <col style="width:300px"/><col style="width:140px"/><col style="width:100px"/>
                              <col style="width:140px"/><col style="width:140px"/><col style="width:300px"/>
                            </colgroup>
                            <UiTableHeader>
                              <UiTableRow>
                                <Th data="항목"/><Th data="수량"/><Th data="통화"/><Th data="단가"/><Th data="금액"/><Th data="NOTICE"/>
                              </UiTableRow>
                            </UiTableHeader>
                            <UiTableBody>
                              <UiTableRow>
                                <Td class="table__row-header text-left">
                                  <div class="flex gap-1 text-default">
                                    <p>임가공료 (봉재료)</p>
                                    <UiTooltipProvider>
                                      <UiTooltip>
                                        <UiTooltipTrigger><LucideCircleAlert class="size-3"/></UiTooltipTrigger>
                                        <UiTooltipContent class="tooltip--dark max-w-fit" side="right">
                                          임가공료는 "선택된 통화 X 생산 환율 관리에 등록된 환율"이 계산됩니다.
                                        </UiTooltipContent>
                                      </UiTooltip>
                                    </UiTooltipProvider>
                                  </div>
                                </Td>
                                <Td data="100" class="text-center"/>
                                <Td data="KRW" class="text-center"/>
                                <Td data="10,000" class="text-right"/>
                                <Td data="1,000,000" class="text-right"/>
                                <Td data="-"/>
                              </UiTableRow>
                              <UiTableRow>
                                <Td class="table__row-header text-left">
                                  <div class="flex gap-1 text-default">
                                    <p>원부자재 수출 및 수입 비용 등 (5%)</p>
                                    <UiTooltipProvider>
                                      <UiTooltip>
                                        <UiTooltipTrigger><LucideCircleAlert class="size-3"/></UiTooltipTrigger>
                                        <UiTooltipContent class="tooltip--dark max-w-fit" side="right">
                                          원부자재 수출 및 수입 비용은 "(원자재+부자재+외주가공 합계) X 0.5"로 계산됩니다.
                                        </UiTooltipContent>
                                      </UiTooltip>
                                    </UiTooltipProvider>
                                  </div>
                                </Td>
                                <Td data="100" class="text-center"/>
                                <Td data="KRW" class="text-center"/>
                                <Td data="10,000" class="text-right"/>
                                <Td data="1,000,000" class="text-right"/>
                                <Td data="-"/>
                              </UiTableRow>
                              <UiTableRow>
                                <Td class="table__row-header text-left">
                                  <div class="flex gap-1 text-default">
                                    <p>CMT Handing Charge (11%)</p>
                                    <UiTooltipProvider>
                                      <UiTooltip>
                                        <UiTooltipTrigger><LucideCircleAlert class="size-3"/></UiTooltipTrigger>
                                        <UiTooltipContent class="tooltip--dark max-w-fit" side="right">
                                          CMT Handing Charge는 "(원자재+부자재+외주가공+임가공료 합계) X 0.11"로 계산됩니다.
                                        </UiTooltipContent>
                                      </UiTooltip>
                                    </UiTooltipProvider>
                                  </div>
                                </Td>
                                <Td data="100" class="text-center"/>
                                <Td data="KRW" class="text-center"/>
                                <Td data="10,000" class="text-right"/>
                                <Td data="1,000,000" class="text-right"/>
                                <Td data="-"/>
                              </UiTableRow>
                              <UiTableRow>
                                <Td class="table__row-header text-left">
                                  <div class="flex gap-1 text-default"><p>KOTITI 완제품 검사 비용</p></div>
                                </Td>
                                <Td data="100" class="text-center"/>
                                <Td data="KRW" class="text-center"/>
                                <Td data="10,000" class="text-right"/>
                                <Td data="1,000,000" class="text-right"/>
                                <Td data="-"/>
                              </UiTableRow>
                              <UiTableRow>
                                <Td class="table__row-header text-left">
                                  <div class="flex gap-1 text-default">
                                    <p>수입 관세</p>
                                    <UiTooltipProvider>
                                      <UiTooltip>
                                        <UiTooltipTrigger><LucideCircleAlert class="size-3"/></UiTooltipTrigger>
                                        <UiTooltipContent class="tooltip--dark max-w-fit" side="right">
                                          수입관세는 수입처에 따라 부과되는 관세가 다르므로 관세가 계산된 금액을 입력합니다.
                                        </UiTooltipContent>
                                      </UiTooltip>
                                    </UiTooltipProvider>
                                  </div>
                                </Td>
                                <Td data="100" class="text-center"/>
                                <Td data="KRW" class="text-center"/>
                                <Td data="10,000" class="text-right"/>
                                <Td data="1,000,000" class="text-right"/>
                                <Td data="-"/>
                              </UiTableRow>
                            </UiTableBody>
                          </UiTable>
                        </template>
                      </TableLayout>
                    </UiResizablePanel>
                    <UiResizableHandle/>
                    <UiResizablePanel :default-size="50" :min-size="15" :max-size="85" class="pr-5 py-4">
                      <div class="flex items-center justify-between bg-surface-muted p-4 rounded-sm">
                        <p class="font-bold">본사</p>
                        <div class="flex gap-2 items-center">
                          <span>합계</span>
                          <UiSeparator orientation="vertical" class="data-[orientation=vertical]:h-4 bg-border"/>
                          <p class="title__bold">360,000원</p>
                        </div>
                      </div>
                      <TableLayout class="!px-0 !h-auto !gap-2" :pagination="false">
                        <template #data-action></template>
                        <template #table-action></template>
                        <template #table>
                          <UiTable class="table-secondary table-fixed w-full">
                            <colgroup>
                              <col style="width:300px"/><col style="width:140px"/><col style="width:100px"/>
                              <col style="width:140px"/><col style="width:140px"/><col style="width:100px"/><col style="width:300px"/>
                            </colgroup>
                            <UiTableHeader>
                              <UiTableRow>
                                <Th data="항목"/><Th data="수량"/><Th data="통화"/><Th data="단가"/>
                                <Th data="금액"/><Th data="원가비율"/><Th data="NOTICE"/>
                              </UiTableRow>
                            </UiTableHeader>
                            <UiTableBody>
                              <UiTableRow>
                                <Td class="table__row-header text-left">
                                  <div class="flex gap-1 text-default">
                                    <p>임가공료 (봉재료)</p>
                                    <UiTooltipProvider>
                                      <UiTooltip>
                                        <UiTooltipTrigger><LucideCircleAlert class="size-3"/></UiTooltipTrigger>
                                        <UiTooltipContent class="tooltip--dark max-w-fit" side="right">
                                          임가공료는 "선택된 통화 X 생산 환율 관리에 등록된 환율"이 계산됩니다.
                                        </UiTooltipContent>
                                      </UiTooltip>
                                    </UiTooltipProvider>
                                  </div>
                                </Td>
                                <Td data="100" class="text-center"/>
                                <Td data="KRW" class="text-center"/>
                                <Td data="10,000" class="text-right"/>
                                <Td data="1,000,000" class="text-right"/>
                                <Td data="0%" class="text-center"/>
                                <Td data="-"/>
                              </UiTableRow>
                              <UiTableRow>
                                <Td class="table__row-header text-left">
                                  <div class="flex gap-1 text-default">
                                    <p>원부자재 수출 및 수입 비용 등 (5%)</p>
                                    <UiTooltipProvider>
                                      <UiTooltip>
                                        <UiTooltipTrigger><LucideCircleAlert class="size-3"/></UiTooltipTrigger>
                                        <UiTooltipContent class="tooltip--dark max-w-fit" side="right">
                                          원부자재 수출 및 수입 비용은 "(원자재+부자재+외주가공 합계) X 0.5"로 계산됩니다.
                                        </UiTooltipContent>
                                      </UiTooltip>
                                    </UiTooltipProvider>
                                  </div>
                                </Td>
                                <Td data="100" class="text-center"/>
                                <Td data="KRW" class="text-center"/>
                                <Td data="10,000" class="text-right"/>
                                <Td data="1,000,000" class="text-right"/>
                                <Td data="0%" class="text-center"/>
                                <Td data="-"/>
                              </UiTableRow>
                              <UiTableRow>
                                <Td class="table__row-header text-left">
                                  <div class="flex gap-1 text-default">
                                    <p>CMT Handing Charge (11%)</p>
                                    <UiTooltipProvider>
                                      <UiTooltip>
                                        <UiTooltipTrigger><LucideCircleAlert class="size-3"/></UiTooltipTrigger>
                                        <UiTooltipContent class="tooltip--dark max-w-fit" side="right">
                                          CMT Handing Charge는 "(원자재+부자재+외주가공+임가공료 합계) X 0.11"로 계산됩니다.
                                        </UiTooltipContent>
                                      </UiTooltip>
                                    </UiTooltipProvider>
                                  </div>
                                </Td>
                                <Td data="100" class="text-center"/>
                                <Td data="KRW" class="text-center"/>
                                <Td data="10,000" class="text-right"/>
                                <Td data="1,000,000" class="text-right"/>
                                <Td data="0%" class="text-center"/>
                                <Td data="-"/>
                              </UiTableRow>
                              <UiTableRow>
                                <Td class="table__row-header text-left">
                                  <div class="flex gap-1 text-default"><p>KOTITI 완제품 검사 비용</p></div>
                                </Td>
                                <Td data="100" class="text-center"/>
                                <Td data="KRW" class="text-center"/>
                                <Td data="10,000" class="text-right"/>
                                <Td data="1,000,000" class="text-right"/>
                                <Td data="0%" class="text-center"/>
                                <Td data="-"/>
                              </UiTableRow>
                              <UiTableRow>
                                <Td class="table__row-header text-left">
                                  <div class="flex gap-1 text-default">
                                    <p>수입 관세</p>
                                    <UiTooltipProvider>
                                      <UiTooltip>
                                        <UiTooltipTrigger><LucideCircleAlert class="size-3"/></UiTooltipTrigger>
                                        <UiTooltipContent class="tooltip--dark max-w-fit" side="right">
                                          수입관세는 수입처에 따라 부과되는 관세가 다르므로 관세가 계산된 금액을 입력합니다.
                                        </UiTooltipContent>
                                      </UiTooltip>
                                    </UiTooltipProvider>
                                  </div>
                                </Td>
                                <Td data="100" class="text-center"/>
                                <Td data="KRW" class="text-center"/>
                                <Td data="10,000" class="text-right"/>
                                <Td data="1,000,000" class="text-right"/>
                                <Td data="0%" class="text-center"/>
                                <Td data="-"/>
                              </UiTableRow>
                            </UiTableBody>
                          </UiTable>
                        </template>
                      </TableLayout>
                    </UiResizablePanel>
                  </UiResizablePanelGroup>
                </UiAccordionContent>
              </UiAccordionItem>

            </UiAccordion>
          </div>
        </div>

        <!-- 푸터 -->
        <div class="flex justify-between gap-2 p-4 shrink-0">
          <div class="ml-auto flex gap-2">
            <UiButton variant="destructive">재작성 요청</UiButton>
            <UiButton variant="destructive">재검토</UiButton>
            <UiButton>대사 진행</UiButton>
            <UiButton>대사 확정</UiButton>
          </div>
        </div>

      </div>
    \`
  })
}`,...(T=(p=e.parameters)==null?void 0:p.docs)==null?void 0:T.source}}};const z=["PushAlertStory","FullSheetStory"];export{e as FullSheetStory,t as PushAlertStory,z as __namedExportsOrder,B as default};
