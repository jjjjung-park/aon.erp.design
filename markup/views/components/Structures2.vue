<template>
  <!-- 테이블 컨텐츠 기본 레이아웃  -->
    <section class="border-b-1 border-border px-8">
      <header class="contents-header">
        <div class="contents-header__title">
          <h2>페이지 최대 스펙 - 테이블 데이터 많음</h2>
          <p class="text-muted">타이틀+버튼+탭+검색+테이블 조합(페이지네이션 있음)</p>
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
      <nav class="">
        <LineTabs :tab-list="tabList"/>
      </nav>
    </section>
    <!--  검색  -->
    <section class="px-8 pt-6">
      <PageSearch :filter="true"/>
    </section>


    <!-- table-->
    <TableLayout :pagination="true" :sort-list="5">
      <template #table>
        <UiTable class="table-fixed w-full">
          <colgroup>
            <col style="width:40px"/>
            <col v-for="_ in 8" style="width:250px">
          </colgroup>
          <UiTableHeader class="sticky top-0 z-10">
            <UiTableRow>
              <UiTableHead>
                <div>
                  <UiCheckbox/>
                </div>
              </UiTableHead>

              <Th v-for="v in 8" resizing sort :edit="v == 2">
                title
              </Th>
            </UiTableRow>
          </UiTableHeader>

          <UiTableBody>
            <!--    일반 row      -->
            <UiTableRow class="">
              <Td type="checkbox"/>
              <Td data="일반 cell" />
              <Td data="편집 cell" class="table__cell--editable"/>
              <Td>
                <InputBase/>
              </Td>
              <Td>
                <ComboboxTag/>
              </Td>
              <Td>
                <UiButton variant="link" size="sm">
                  <LucidePlus/>
                  추가
                </UiButton>
              </Td>
              <Td>
                <UiBadge variant="accept">승인</UiBadge>
              </Td>
              <Td>
                <UiButton variant="outline" size="sm">
                  <LucidePlus/>
                  추가
                </UiButton>
              </Td>
              <Td>
                <UiButton variant="secondary" size="icon-sm">
                  <LucidePlus/>
                </UiButton>
              </Td>
            </UiTableRow>

            <!--   편집 불가  row  -->
            <UiTableRow data-state="disabled" class="">
              <Td type="checkbox"/>
              <Td data="일반 cell" />
              <Td data="편집 cell" class="table__cell--editable"/>
              <Td>
                <InputBase/>
              </Td>
              <Td>
                <ComboboxTag/>
              </Td>
              <Td>
                <UiButton variant="link" size="sm">
                  <LucidePlus/>
                  추가
                </UiButton>
              </Td>
              <Td>
                <UiBadge variant="accept">승인</UiBadge>
              </Td>
              <Td>
                <UiButton variant="outline" size="sm">
                  <LucidePlus/>
                  추가
                </UiButton>
              </Td>
              <Td>
                <UiButton variant="secondary" size="icon-sm">
                  <LucidePlus/>
                </UiButton>
              </Td>
            </UiTableRow>

            <!--    일반 row      -->
            <UiTableRow class="">
              <Td type="checkbox"/>
              <Td data="일반 cell" />
              <Td data="편집 cell" class="table__cell--editable"/>
              <Td>
                <InputBase/>
              </Td>
              <Td>
                <ComboboxTag/>
              </Td>
              <Td>
                <UiButton variant="link" size="sm">
                  <LucidePlus/>
                  추가
                </UiButton>
              </Td>
              <Td>
                <UiBadge variant="accept">승인</UiBadge>
              </Td>
              <Td>
                <UiButton variant="outline" size="sm">
                  <LucidePlus/>
                  추가
                </UiButton>
              </Td>
              <Td>
                <UiButton variant="secondary" size="icon-sm">
                  <LucidePlus/>
                </UiButton>
              </Td>
            </UiTableRow>

            <!--    일반 row      -->
            <UiTableRow class="">
              <Td type="checkbox"/>
              <Td data="일반 cell" />
              <Td data="편집 cell" class="table__cell--editable"/>
              <Td>
                <InputBase/>
              </Td>
              <Td>
                <ComboboxTag/>
              </Td>
              <Td>
                <UiButton variant="link" size="sm">
                  <LucidePlus/>
                  추가
                </UiButton>
              </Td>
              <Td>
                <UiBadge variant="accept">승인</UiBadge>
              </Td>
              <Td>
                <UiButton variant="outline" size="sm">
                  <LucidePlus/>
                  추가
                </UiButton>
              </Td>
              <Td>
                <UiButton variant="secondary" size="icon-sm">
                  <LucidePlus/>
                </UiButton>
              </Td>
            </UiTableRow>

          </UiTableBody>
          <UiTableFooter>
            <UiTableCell>
              <div>
                <UiCheckbox/>
              </div>
            </UiTableCell>
            <UiTableCell v-for="_ in 8" style="width:250px">
              <div style="width:250px">footer</div>
            </UiTableCell>
          </UiTableFooter>
        </UiTable>
      </template>
      <template #pagination>
        <div class="table-layout__bottom flex items-center justify-between">
          <TablePagination/>
          <div class="w-40">
            <ComboboxTag single :listItem="[{label:'50개씩 보기', value:50},{label:'100개씩 보기', value:100},{label:'200개씩 보기', value:200},{label:'300개씩 보기', value:300}]"/>
          </div>
        </div>
      </template>
    </TableLayout>


</template>
<script setup lang="ts">
import TableLayout from "@/markup/components/table/TableLayout.vue";
import {LineTabs} from "@/markup/components/tabs";
import {InputBase} from "@/markup/components/inputs";
import TablePagination from "@/markup/components/pagination/TablePagination.vue";
import PageSearch from "@/markup/components/accordion/PageSearch.vue";
import ComboboxTag from "@/markup/components/select/ComboboxTag.vue";
import Th from "@/markup/components/table/Th.vue";
import Td from "@/markup/components/table/Td.vue";

const tabList = ref([
  {label: 'tab1', value: 'tab1', active: true},
  {label: 'tab2', value: 'tab2', active: false},
])
</script>
<style scoped>

</style>

