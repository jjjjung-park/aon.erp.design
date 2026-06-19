<template>
  <!-- 테이블 컨텐츠 기본 레이아웃  -->
  <section class="border-b-1 border-border px-8">
    <header class="contents-header">
      <div class="contents-header__title">
        <h2>페이지 최소 스펙 - 테이블 데이터 적음</h2>
        <p class="text-secondary">타이틀+버튼+탭+검색+테이블 조합 (페이지네이션 없음)</p>
      </div>
      <div class="contents-header__button justify-self-end">
        <UiSheet>
          <UiSheetTrigger as-child>
            <UiButton variant="outline">
              <LucidePlus/>
              추가
            </UiButton>
          </UiSheetTrigger>
        </UiSheet>
      </div>
    </header>
  </section>

  <!-- table -->
  <TableLayout :pagination="false">
    <template #table>
      <!--   footer 없을때만 border-b 추가   -->
      <UiTable class="w-full   right-0 ">
        <colgroup>
          <col style="width:40px"/>
        </colgroup>
        <UiTableHeader class="sticky top-0 z-10">
          <UiTableRow>
            <UiTableHead style="width:40px;">
              <div style="width:40px;" >
                <UiCheckbox/>
              </div>
            </UiTableHead>
            <UiTableHead style="width:250px;">
              <div style="width:250px;" class="text-center">
                <div class="flex items-center gap-3">
                  <p>title</p>
                  <div class="flex flex-col items-center">
                    <button class="arrow-up active" value="asc"/>
                    <button class="arrow-down" value="desc"/>
                  </div>
                </div>
              </div>
              <span  class="table-resizing__button"></span>
            </UiTableHead>
            <UiTableHead v-for="_ in 4" style="width:250px;">
              <div  class="flex items-center justify-center gap-3"  style="width:250px;">
                <p>sub text</p>
                <div class="flex flex-col items-center">
                  <button class="arrow-up active" value="asc"/>
                  <button class="arrow-down" value="desc"/>
                </div>
              </div>
              <span  class="table-resizing__button"></span>
            </UiTableHead>
          </UiTableRow>
        </UiTableHeader>
        <UiTableBody class="">
          <UiTableRow class="" v-for="(_, index) in 10" :data-state="index == 3 ? 'selected':''">
            <UiTableCell style="width:40px">
              <div style="width:40px">
                <UiCheckbox/>
              </div>
            </UiTableCell>
            <UiTableCell style="width:250px">
              <div class="text-center" style="width:250px">
                <!--     text만 두줄 : div로 한번 더 감싸야 함    -->
                <div class="flex flex-col ">
                  <p class="">테이블</p>
                  <span class="text-xs text-secondary">sub text</span>
                </div>
              </div>

            </UiTableCell>

            <UiTableCell class="" style="width:250px">
              <!--     input : div 필요없음   -->
              <div class="text-center" style="width:250px">
                <InputBase/>
              </div>
            </UiTableCell>
            <UiTableCell class="" style="width:250px">
              <div class="text-center" style="width:250px">
                <!--     텍스트형 버튼(링크) : div 필요없음   -->
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
                <!--    버튼 : div 필요없음   -->
                <UiButton variant="outline" size="sm">
                  <LucidePlus/>
                  추가
                </UiButton>
              </div>
            </UiTableCell>
          </UiTableRow>
        </UiTableBody>
        <UiTableFooter>
          <UiTableCell>
            <div>
              <UiCheckbox/>
            </div>
          </UiTableCell>
          <UiTableCell  v-for="_ in 5" style="width:250px">
            <div style="width:250px">footer</div>
          </UiTableCell>
        </UiTableFooter>
      </UiTable>

    </template>

  </TableLayout>

</template>
<script setup lang="ts">
import TableLayout from "@/markup/components/table/TableLayout.vue";
import {InputBase} from "@/markup/components/inputs";
</script>
<style scoped>

</style>

