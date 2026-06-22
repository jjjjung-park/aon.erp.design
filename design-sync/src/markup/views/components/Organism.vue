<template>
  <div class="overflow-auto p-8">
    <h1>organism
<!--  <MyPlusIcon /> <MyPlayIcon /> <MyCloseIcon />    -->
    </h1>
    <section class="flex gap-8">
      <section>
        <h2>pushAlert</h2>
        <UiButton variant="outline" @click="open('pushAlert')">
          Open
        </UiButton>
      </section>
      <section>
        <h2>drawer</h2>
        <UiButton variant="outline" @click="drawerOpen = true">
          Open
        </UiButton>
        <SheetBase title="drawer title" description="drawer 타이틀이 있으면 이걸 사용" full-screen v-model:open="drawerOpen" :dimmed="true">
          <template #tab>
            <nav class="border-b-1 border-border px-6 bg-white">
              <LineTabs :tab-list="tabList" class="data-[state=true]:after:bg-border"/>
            </nav>
          </template>
          <template #body>
            <div class="flex flex-col [&>div:first-child]:pt-4  [&>div]:bg-background  h-[100vh]">
              <div class="p-6 grid gap-4">
                <h3 class="font-bold">contents title1</h3>
                <div class="grid">
                  <FormItem label="label" v-for="i in 5"/>
                </div>
              </div>
              <nav class="border-b-1 border-border px-6 bg-white">
                <LineTabs :tab-list="tabList"/>
              </nav>
              <div class="view-list">
                <dl class="view-list__item" v-for="i in 5">
                  <dt class="view-list__item-title">label</dt>
                  <dd class="view-list__item-cont">view list contents</dd>
                </dl>
              </div>
              <div class="p-6  mt-2">
                tab0 > Contents2
              </div>
            </div>
          </template>
          <template #footer>

            <div class=" gap-2 flex">
              <UiButton variant="outline">미사용</UiButton>
              <UiButton variant="destructive">삭제</UiButton>

              <UiButton variant="secondary">임시저장</UiButton>
              <UiSheetClose as-child>
                <UiButton variant="default">수정</UiButton>
                <UiButton variant="default">저장</UiButton>
              </UiSheetClose>
            </div>
          </template>
        </SheetBase>
      </section>
      <section>
        <h2>Dialog</h2>
        <UiButton variant="outline" @click="modalOpen = true">
          Open
        </UiButton>
        <ModalBase v-model:open="modalOpen" title="메인 타이틀 영역">
          <template #body>
            <UiDialogDescription class="mb-1">
              팝업 타이틀 설명 글 영역 입니다.
            </UiDialogDescription>
            <div>
              컨텐츠 slot
            </div>
          </template>
          <template #footer>
            <div class="mr-auto gap-2 flex">
              <UiButton variant="outline">닫기</UiButton>
            </div>
            <div class="ml-auto gap-2 flex">
              <UiButton variant="secondary">임시저장</UiButton>
              <UiDialogClose as-child>
                <UiButton variant="default">저장</UiButton>
              </UiDialogClose>
            </div>
          </template>
        </ModalBase>
      </section>
      <section>
        <h2>popOver dialog</h2>
        <UiPopover>
          <UiPopoverTrigger as-child>
            <UiButton variant="outline">
              Open popover
            </UiButton>
          </UiPopoverTrigger>
          <PopoverBase title="테이블 설정">
            <template #body>
              <div class="grid gap-4 ">
                <dl>
                  <dt class="text-secondary caption__bold">고정 항목</dt>
                  <dd class="rounded-sm px-padding-lg py-padding-6 text-secondary">고정된 항목이 없습니다.</dd>
                </dl>
              </div>
            </template>
            <template #footer>
              <UiButton size="sm" variant="outline">취소</UiButton>
              <div class="ml-auto gap-2 flex">
                <UiButton size="sm" variant="outline">초기화</UiButton>
                <UiButton size="sm">저장</UiButton>
              </div>
            </template>
          </PopoverBase>
        </UiPopover>
      </section>
    </section>
    <section class="flex gap-8">
      <section>
        <h2>삭제 모달</h2>
        <UiButton variant="outline" @click="open('delete')">
          Open
        </UiButton>
      </section>
      <section>
        <h2>컨펌 모달</h2>
        <UiButton variant="outline" @click="open('confirm')">
          Open
        </UiButton>
      </section>

      <section>
        <h2>업로드 모달</h2>
        <UiButton variant="outline" @click="fileUpload = true">
          Open
        </UiButton>
        <FileUploadModal v-model:open="fileUpload">
        <!--    필터가 있을때      -->
          <template #file-filter>
            <div class="flex flex-col gap-2">
              <div>
                <p class="font-bold mb-1">조회</p>
                <span class="caption text-secondary">미작성된 케어라벨 항목만 다운로드를 원하시면 <strong>미작성 항목</strong>을 선택 후 양식 다운로드 버튼을 클릭해주세요.</span>
              </div>
              <div class="flex flex-col gap-3 p-4 bg-light">
                <div class="flex  gap-2  [&>*]:w-1/2">
                  <ComboboxTag placeholder="발매연도" :list-item="[{label:'2026',value:'val1'},{label:'2025',value:'val2'},{label:'2024',value:'val3'}]"/>
                  <ComboboxTag placeholder="발매 시즌" :list-item="[{label:'SS',value:'val1'},{label:'FW',value:'val2'}]"/>
                </div>
                <div class="flex items-center justify-between">
                  <div class=" flex items-center space-x-2 mr-2">
                    <UiCheckbox id="Unwritten"/>
                    <UiLabel for="Unwritten" class="caption__bold">미작성 항목</UiLabel>
                  </div>
                  <UiButton variant="outline" size="sm"><LucideDownload/>양식 다운로드</UiButton>
                </div>
              </div>
            </div>
            <UiSeparator orientation="horizontal" class="!h-2 bg-light -mx-6 !w-auto"/>
          </template>
          <!--    필터가 없이 다운로드 버튼만 있을때    -->
          <template #file-action>
            <div class="flex items-center justify-between gap-6 py-4">
              <p class="caption !leading-normal text-secondary">미작성된 케어라벨 항목만 다운로드를 원하시면 미작성 항목을 선택 후 양식 다운로드 버튼을 클릭해주세요.</p>
              <UiButton variant="outline" size="sm" class="ml-auto"><LucideDownload/>양식 다운로드</UiButton>
            </div>
            <UiSeparator orientation="horizontal" class="!h-2 bg-light -mx-6 !w-auto"/>
          </template>
          <template #upload-message>
            <div class="text-secondary caption text-center px-6 !leading-normal">
              <p class="mb-4"> 양식 다운로드를 통해 내용을 작성 후<br/>
                양식 파일을 끌어올리거나, 클릭해서 추가해 주세요.</p>
              <p> 최대 첨부 파일 : N개 이하</p>
              <p>전체 용량 제한 : 100MB 이하</p>
              <p>파일 유형 : .xlsx</p>
            </div>



          </template>
          <template #file-error>
            <Alert variant="danger" class="mb-4">
              <AlertTitle>수정이 허용되지 않는 코드가 수정되었습니다. 다운로드 된 엑셀파일 가이드 참고 후 다시 업로드 해주세요.</AlertTitle>
            </Alert>
          </template>
        </FileUploadModal>

      </section>
      <section>
        <h2>주소 모달</h2>
        <UiButton variant="outline" @click="open('addr')">
          Open
        </UiButton>

      </section>
      <section>
        <h2>이미지 업로드 모달</h2>
        <UiButton variant="outline" @click="open('images')">
          Open
        </UiButton>
      </section>
      <component :is="currentComponent" v-model:open="modalCompOpen" @open="open" :loading="false"/>
    </section>
    <section>
      <h2>toast</h2>
      <div class="flex gap-2">
        <UiButton variant="outline" @click="() => toast.info('info toast')">
          info
        </UiButton>
        <UiButton variant="outline" @click="() => toast.success('success toast')">
          success
        </UiButton>
        <UiButton variant="outline" @click="() => toast.warning('warning toast')">
          warning
        </UiButton>
        <UiButton variant="outline" @click="() => toast.error('error toast')">
          error
        </UiButton>
        <UiButton variant="outline"
                  @click="() => toast('basic toast', {closeButton: true, description: 'description message'})">
          basic
        </UiButton>
      </div>
      <!--  노출 위치 통일    -->
      <Toaster :expand="true" richColors :closeButton="true" closeButtonPosition="top-right"
               position="top-right"/>

    </section>
<!--    <section>
      <YearPicker/>
    </section>-->
    <section>
      <VirtualList :list-item="items" :scroll-height="'160px'" >
        <template v-slot="{item}">
          <div class="data-list__item hover:bg-gray-100 cursor-pointer border-b-0" :class="item.active?'bg-primary-light':''">
            {{item.styleCode}}<br/>
            {{item.barcodeLength}}<br/>
          </div>

        </template>
      </VirtualList>
    </section>
    <section>
      <h2>card</h2>
      <div class="flex gap-8">
        <section>
          <h2>size-lg</h2>
          <UiCard size="lg" class="gap-5 w-110">
        <UiCardHeader class="flex items-center justify-between">
          <div class="flex flex-col gap-0">
            <p class="title__bold">메뉴 타이틀 영역</p>
            <span>서브 타이블 영역</span>
          </div>
          <div>
            <UiButton variant="outline" size="icon">
              <LucidePlus/>
            </UiButton>
          </div>
        </UiCardHeader>
        <UiCardContent class="gap-2 flex flex-col">
          <p class="font-bold">contents 영역</p>
          박정은님이 필드를 업데이트 했습니다.박정은님이 필드를 업데이트 했습니다.박정은님이 필드를 업데이트 했습니다.박정은님이 필드를 업데이트 했습니다.
        </UiCardContent>
      </UiCard>
        </section>
        <section>
          <h2 class="">size-md</h2>
          <UiCard size="md" class="w-80 min-h-[64px]">
        <UiCardHeader class="flex items-center gap-2">
          <div class="rounded-md bg-gray-200 size-12"></div>
          <div class="flex flex-col gap-0">
            <p class="title__bold">메뉴 타이틀 영역</p>
            <p>서브 타이블 영역</p>
          </div>
        </UiCardHeader>
      </UiCard>
        </section>
        <section>
          <h2>size-sm</h2>
          <UiCard size="sm" class="gap-1 w-60">
        <UiCardHeader class="flex items-center justify-between">
          <div class="">
            <p>서브 타이블 영역</p>
            <UiBadge variant="process">진행</UiBadge>
          </div>
        </UiCardHeader>
        <UiCardFooter class="mt-2 justify-between items-start">
          <p>sample text</p>
          <div class="rounded-full bg-gray-200 w-6 h-6"></div>
        </UiCardFooter>
      </UiCard>
        </section>
      </div>
    </section>

    <section>
      <h2>검색용 아코디언</h2>
      <PageSearch/>
    </section>

    <section>
      <h2>table</h2>
      <TableLayout>
        <template #table>
          <UiTable class="border-b table-fixed w-full ">
            <colgroup>
              <col style="width:40px"/>
              <col style="width:250px"/>
              <col style="width:250px"/>
              <col style="width:250px"/>
              <col style="width:250px"/>
              <col style="width:250px"/>
              <col style="width:250px"/>
              <col style="width:250px"/>
              <col style="width:250px"/>
              <col style="width:250px"/>
            </colgroup>
            <UiTableHeader class="">
              <UiTableRow class="">
                <UiTableHead style="width:40px;">
                  <div style="width:40px;">
                    <UiCheckbox/>
                  </div>

                </UiTableHead>
                <UiTableHead class="text-center" style="width:40px;">
                  <div style="width:40px;">
                    <p></p>
                  </div>

                </UiTableHead>
                <UiTableHead v-for="_ in 8" style="width:250px;">
                  <div style="width:250px;">
                    <div class="flex items-center justify-center gap-3">
                      <p>title</p>
                      <div class="flex flex-col items-center">
                        <button class="arrow-up active" value="asc"/>
                        <button class="arrow-down" value="desc"/>
                      </div>
                    </div>
                  </div>
                  <span  class="table-resizing__button"></span>
                </UiTableHead>
              </UiTableRow>
            </UiTableHeader>

            <UiTableBody>
              <UiTableRow data-state="selected">

                <UiTableCell style="width:40px">
                  <div style="width:40px">
                    <UiCheckbox/>
                  </div>
                </UiTableCell>
                <UiTableCell class="text-center" style="width:250px">
                  <div style="width:40px;">
                    <UiButton variant="ghost" size="icon" @click="expanded = !expanded">
                      <LucideChevronUp :class="[expanded?'rotate-180':'rotate-0', 'transition duration-100']"/>
                    </UiButton>
                  </div>
                </UiTableCell>

                <UiTableCell style="width:250px">
                  <div class="text-center" style="width:250px">
                    <div class="flex items-center justify-center gap-1 [&_svg:not([class*='size-'])]:size-4">
                      <p class="">
                        <LucideClock/>
                      </p>
                      <div class="flex flex-col justify-center  ">
                        <p class="">테이블</p>
                        <span class="text-xs text-secondary">sub text</span>
                      </div>
                    </div>
                  </div>
                </UiTableCell>
                <UiTableCell style="width:250px">
                  <div class="text-right" style="width:250px">
                    xpdlqmf
                  </div>
                </UiTableCell>
                <UiTableCell class="" style="width:250px">
                  <div class="text-center" style="width:250px">
                    <InputBase class="bg-background"/>
                  </div>
                </UiTableCell>
                <UiTableCell class="" style="width:250px">
                  <div class="text-center" style="width:250px">
                    <ComboboxTag :list-item="[{label:'v1',value:'v1'}]"/>
                  </div>
                </UiTableCell>
                <UiTableCell class="" style="width:250px">
                  <div class="text-center" style="width:250px">
                    <UiButton variant="link" size="sm">
                      <LucidePlus/>
                      추가
                    </UiButton>
                  </div>
                </UiTableCell>
                <UiTableCell style="width:250px">
                  <div class="" style="width:250px">
                    <!--     상태 뱃지 : div 필요없음   -->
                    <UiBadge variant="accept">승인</UiBadge>
                  </div>
                </UiTableCell>
                <UiTableCell style="width:250px">
                  <div class="text-center" style="width:250px">
                    <UiButton variant="outline" size="sm">
                      <LucidePlus/>
                      추가
                    </UiButton>
                  </div>
                </UiTableCell>
                <UiTableCell style="width:250px">
                  <div class="text-center" style="width:250px">
                    <UiButton variant="secondary" size="icon-sm">
                      <LucidePlus/>
                    </UiButton>
                  </div>
                </UiTableCell>
              </UiTableRow>
              <UiTableRow data-state="disabled" @click="() => toast.warning('조회 권한이 없습니다')">

                <UiTableCell style="width:40px">
                  <div style="width:40px">
                    <UiCheckbox/>
                  </div>
                </UiTableCell>
                <UiTableCell class="text-center" style="width:250px">
                  <div style="width:40px;">
                    <UiButton variant="ghost" size="icon" @click="expanded = !expanded">
                      <LucideChevronUp :class="[expanded?'rotate-180':'rotate-0', 'transition duration-100']"/>
                    </UiButton>
                  </div>
                </UiTableCell>

                <UiTableCell style="width:250px">
                  <div class="text-center" style="width:250px">
                    <div class="flex items-center justify-center gap-1 [&_svg:not([class*='size-'])]:size-4">
                      <p class="">
                        <LucideClock/>
                      </p>
                      <div class="flex flex-col justify-center  ">
                        <p class="">테이블</p>
                        <span class="text-xs text-secondary">sub text</span>
                      </div>
                    </div>
                  </div>
                </UiTableCell>
                <UiTableCell style="width:250px">
                  <div class="text-right" style="width:250px">
                    xpdlqmf
                  </div>
                </UiTableCell>
                <UiTableCell class="" style="width:250px">
                  <div class="text-center" style="width:250px">
                    <InputBase class="bg-background"/>
                  </div>
                </UiTableCell>
                <UiTableCell class="" style="width:250px">
                  <div class="text-center" style="width:250px">
                    <ComboboxTag :list-item="[{label:'v1',value:'v1'}]"/>
                  </div>
                </UiTableCell>
                <UiTableCell class="" style="width:250px">
                  <div class="text-center" style="width:250px">
                    <UiButton variant="link" size="sm">
                      <LucidePlus/>
                      추가
                    </UiButton>
                  </div>
                </UiTableCell>
                <UiTableCell style="width:250px">
                  <div class="" style="width:250px">
                    <!--     상태 뱃지 : div 필요없음   -->
                    <UiBadge variant="accept">승인</UiBadge>
                  </div>
                </UiTableCell>
                <UiTableCell style="width:250px">
                  <div class="text-center" style="width:250px">
                    <UiButton variant="outline" size="sm">
                      <LucidePlus/>
                      추가
                    </UiButton>
                  </div>
                </UiTableCell>
                <UiTableCell style="width:250px">
                  <div class="text-center" style="width:250px">
                    <UiButton variant="secondary" size="icon-sm">
                      <LucidePlus/>
                    </UiButton>
                  </div>
                </UiTableCell>
              </UiTableRow>
              <UiTableRow v-for="(_, index) in 10" :key="index" class=""  >

                <UiTableCell style="width:40px">
                  <div style="width:40px">
                    <UiCheckbox/>
                  </div>
                </UiTableCell>
                <UiTableCell class="text-center" style="width:250px">
                  <div style="width:40px;">
                    <UiButton variant="ghost" size="icon" @click="expanded = !expanded">
                      <LucideChevronUp :class="[expanded?'rotate-180':'rotate-0', 'transition duration-100']"/>
                    </UiButton>
                  </div>
                </UiTableCell>

                <UiTableCell style="width:250px">
                  <div class="text-center" style="width:250px">
                    <div class="flex items-center justify-center gap-1 [&_svg:not([class*='size-'])]:size-4">
                      <p class="">
                        <LucideClock/>
                      </p>
                      <div class="flex flex-col justify-center  ">
                        <p class="">테이블</p>
                        <span class="text-xs text-secondary">sub text</span>
                      </div>
                    </div>
                  </div>
                </UiTableCell>
                <UiTableCell style="width:250px">
                  <div class="text-right" style="width:250px">
                    xpdlqmf
                  </div>
                </UiTableCell>
                <UiTableCell class="" style="width:250px">
                  <div class="text-center" style="width:250px">
                    <InputBase class="bg-background"/>
                  </div>
                </UiTableCell>
                <UiTableCell class="" style="width:250px">
                  <div class="text-center" style="width:250px">
                    <ComboboxTag :list-item="[{label:'v1',value:'v1'}]"/>
                  </div>
                </UiTableCell>
                <UiTableCell class="" style="width:250px">
                  <div class="text-center" style="width:250px">
                    <UiButton variant="link" size="sm">
                      <LucidePlus/>
                      추가
                    </UiButton>
                  </div>
                </UiTableCell>
                <UiTableCell style="width:250px">
                  <div class="" style="width:250px">
                    <!--     상태 뱃지 : div 필요없음   -->
                    <UiBadge variant="accept">승인</UiBadge>
                  </div>
                </UiTableCell>
                <UiTableCell style="width:250px">
                  <div class="text-center" style="width:250px">
                    <UiButton variant="outline" size="sm">
                      <LucidePlus/>
                      추가
                    </UiButton>
                  </div>
                </UiTableCell>
                <UiTableCell style="width:250px">
                  <div class="text-center" style="width:250px">
                    <UiButton variant="secondary" size="icon-sm">
                      <LucidePlus/>
                    </UiButton>
                  </div>
                </UiTableCell>
              </UiTableRow>

            </UiTableBody>

          </UiTable>
        </template>
      </TableLayout>

    </section>

    <section>
      <h2>pagination</h2>
      <h2>data-table 용</h2>
      <TablePagination/>

      <h2>dot</h2>
      <DotPagination :total="10"/>

      <h2 class="mt-5">input</h2>
      <InputPagination :total="10"/>
    </section>

    <section>
      <h2>table select list</h2>
      <!--  modal 안에서 TableLayout 아래쪽에 위치   -->
      <div class="sticky left-0 bottom-0 right-0 z-1  py-4 px-8 border-t-1 border-border bg-white flex-none max-h-30 overflow-y-auto">
        <section class="grid gap-3">
          <p>선택된 항목 <span class="font-bold">총 00건</span></p>
          <div class="flex flex-wrap gap-1">
            <Tags title="홍길동" type="chip" variant="outline" closeable v-for="_ in 20"/>
          </div>
        </section>
      </div>
    </section>
    <section>
      <h2>table : no-data</h2>
      <TableLayout :pagination="false" >
        <template #table>
          <UiTable class="border-b table-fixed w-full">
            <colgroup>
              <col style="width:40px"/>
              <col style="width:250px"/>
              <col style="width:250px"/>
              <col style="width:250px"/>
              <col style="width:250px"/>
              <col style="width:250px"/>
              <col style="width:250px"/>
              <col style="width:250px"/>
              <col style="width:250px"/>
              <col style="width:250px"/>
            </colgroup>
            <UiTableHeader>
              <UiTableRow>
                <UiTableHead style="width:40px;">
                  <div style="width:40px;">
                    <UiCheckbox/>
                  </div>
                </UiTableHead>
                <UiTableHead style="width:250px;">
                  <div style="width:250px;">
                    <div class="flex items-center justify-center gap-3">
                      <p>title</p>
                      <div class="flex flex-col items-center">
                        <button class="arrow-up active" value="asc"/>
                        <button class="arrow-down" value="desc"/>
                      </div>
                    </div>
                  </div>
                  <span  class="table-resizing__button"></span>
                </UiTableHead>
                <UiTableHead v-for="_ in 8" style="width:250px;">
                  <div style="width:250px;">
                    <div class="flex items-center justify-center gap-3">
                      <p>title</p>
                      <div class="flex flex-col items-center">
                        <button class="arrow-up active" value="asc"/>
                        <button class="arrow-down" value="desc"/>
                      </div>
                    </div>
                  </div>
                  <span  class="table-resizing__button"></span>
                </UiTableHead>
              </UiTableRow>
            </UiTableHeader>
          </UiTable>
        </template>
        <template #empty>
          <!--   TODO 테이블 내 empty는 직접 스타일링 X, h-[250px]은 픽스       -->
          <div class="w-full h-[250px] -mt-6">
            <EmptyData/>
          </div>
        </template>
      </TableLayout>
    </section>

    <section class="w-[600px]">
      <h2>form</h2>
      <h2>form - 1col</h2>
      <form action="" class="grid gap-2">
        <FormItem class=""/>
        <FormItem class="">
          <template #input-item>
            <div class="flex gap-2">
              <InputBase :aria-invalid="false"/>
              <InputBase :aria-invalid="true"/>
            </div>
          </template>
        </FormItem>

      </form>
      <h2>form - 2col</h2>
      <form action="" class="grid grid-cols-2 gap-2">
        <FormItem class=""/>
        <FormItem class=""/>
        <FormItem class="col-span-full h-full">
          <template #input-item>
            <div class="grid gap-1">
              <div class="flex gap-2">
                <InputBase/>
                <UiButton>검색</UiButton>
              </div>
              <InputBase/>
            </div>
          </template>
        </FormItem>
      </form>
    </section>

    <section>
      <h2>image thumbnail</h2>
      <div class="w-full sm:w-auto">
        <UiCarousel
          class="relative w-full max-w-xs"
          @init-api="(val) => emblaMainApi = val"
        >
          <UiCarouselContent>
            <UiCarouselItem v-for="(_, index) in 10" :key="index">
              <div class="p-1">
                <UiCard>
                  <UiCardContent class="flex aspect-square items-center justify-center p-6">
                    <span class="text-4xl font-semibold">{{ index + 1 }}</span>
                  </UiCardContent>
                </UiCard>
              </div>
            </UiCarouselItem>
          </UiCarouselContent>
          <UiCarouselPrevious class="absolute top-1/2  -translate-y-1/2 left-3"/>
          <UiCarouselNext class="absolute top-1/2 -translate-y-1/2 right-3"/>
        </UiCarousel>

        <UiCarousel
          class="relative w-full max-w-xs"
          @init-api="(val) => emblaThumbnailApi = val"
        >
          <UiCarouselContent class="flex gap-1 ml-0">
            <UiCarouselItem v-for="(_, index) in 10" :key="index"
                            class="pl-0 basis-1/4 cursor-pointer" @click="onThumbClick(index)">
              <div class="p-1" :class="index === selectedIndex ? '' : 'opacity-50'">
                <UiCard>
                  <UiCardContent class="flex aspect-square items-center justify-center p-6">
                    <span class="text-4xl font-semibold">{{ index + 1 }}</span>
                  </UiCardContent>
                </UiCard>
              </div>
            </UiCarouselItem>
          </UiCarouselContent>
        </UiCarousel>
      </div>

    </section>



  </div>

</template>
<script setup lang="ts">
import {InputBase} from "@/markup/components/inputs";
import SheetBase from "@/markup/components/sheet/SheetBase.vue";
import ModalBase from "@/markup/components/modal/ModalBase.vue";
import TablePagination from "@/markup/components/pagination/TablePagination.vue";
import DotPagination from "@/markup/components/pagination/DotPagination.vue";
import InputPagination from "@/markup/components/pagination/InputPagination.vue";
import TableLayout from "@/markup/components/table/TableLayout.vue";
import type {CarouselApi} from "@/components/ui/carousel"
import {watchOnce} from "@vueuse/core";
import {ref} from "vue";
import FormItem from "@/markup/components/form/FormItem.vue";
import {LineTabs} from "@/markup/components/tabs";
import PopoverBase from "@/markup/components/popover/PopoverBase.vue";
import {toast} from 'vue-sonner'
import {Toaster} from "@/components/ui/sonner";
import EmptyData from "@/markup/components/empty/EmptyData.vue";
import PageSearch from "@/markup/components/accordion/PageSearch.vue";
import ComboboxTag from "@/markup/components/select/ComboboxTag.vue";
import Tags from "@/markup/components/tag/Tags.vue";
import VirtualList from "@/markup/components/list/VirtualList.vue";
import FileUploadModal from "@/markup/components/modal/FileUploadModal.vue";
import {Alert, AlertTitle} from "@/components/ui/alert";


const drawerOpen = ref<boolean>(false);
const modalOpen = ref<boolean>(false);
const fileUpload = ref<boolean>(false);
const fileUpload2 = ref<boolean>(false);


const emblaMainApi = ref<CarouselApi>()
const emblaThumbnailApi = ref<CarouselApi>()

const selectedIndex = ref(0)

const expanded = ref<boolean>(false)

function onSelect() {
  if (!emblaMainApi.value || !emblaThumbnailApi.value)
    return
  selectedIndex.value = emblaMainApi.value.selectedScrollSnap()
  emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap())
}

function onThumbClick(index: number) {
  if (!emblaMainApi.value || !emblaThumbnailApi.value)
    return
  emblaMainApi.value.scrollTo(index)
}

watchOnce(emblaMainApi, (emblaMainApi) => {
  if (!emblaMainApi)
    return

  onSelect()
  emblaMainApi.on("select", onSelect)
  emblaMainApi.on("reInit", onSelect)
})


const tabList = ref([
  {label: 'tab1', value: 'tab1', active: true},
  {label: 'tab2', value: 'tab2', active: false},
])

const modalCompOpen = ref<boolean>(false);
type modal = 'delete' | 'confirm' | 'file' | 'addr' | 'pushAlert' | 'images';
const type = ref<modal>('delete');

const open = (selectedMode: modal) => {
  modalCompOpen.value = true;
  type.value = selectedMode;
}

const componentsMap: Record<modal, any> = {
  delete: defineAsyncComponent(() => import('@/markup/components/modal/DeleteModal.vue')),
  confirm: defineAsyncComponent(() => import('@/markup/components/modal/ConfirmModal.vue')),
  file: defineAsyncComponent(() => import('@/markup/components/modal/FileUploadModal.vue')),
  addr: defineAsyncComponent(() => import('@/markup/components/modal/AddrModal.vue')),
  pushAlert: defineAsyncComponent(() => import('@/markup/components/sheet/PushAlert.vue')),
  images: defineAsyncComponent(() => import('@/markup/components/modal/ImageUpload.vue')),
}

const currentComponent = computed(() => componentsMap[type.value])
const items = Array.from({ length: 1000 }, (_, i) => ({
  styleCode: `W530KAL12345ddd6789K ${i + 1}`,
  barcodeLength: 3,
  priceType:'단일 판매가',
  price: 100000,
  active: i % 2 === 0 ,
}));

</script>
<style scoped>
section {
  margin-bottom: 20px
}

h2 {
  margin: 12px 0;
}
</style>

