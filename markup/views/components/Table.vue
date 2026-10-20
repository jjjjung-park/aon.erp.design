<template>
  <div class="overflow-auto">
    <section class=" px-8">
      <h2 class="mb-4">editable table</h2>
    </section>
    <section>
      <div>
        <TableLayout class="">
          <template #table>
            <UiTable class="table-fixed w-full">
              <colgroup>
                <col style="width:80px" v-for="i in 32"/>
              </colgroup>
              <UiTableHeader>
                <UiTableRow>
                  <template v-for="(v, i) in 32">
                    <Th :edit="i === 5 ">header</Th>
                  </template>
                </UiTableRow>
              </UiTableHeader>
              <UiTableBody>
                <UiTableRow v-for="(v, i) in 5" :data-state="(i == 2 || i === 3) ? 'disabled' : ''">
                  <Td data="cell" v-for="(val, idx) in 32" :class="idx === 5 ? 'table__cell--editable' : ''"/>
                </UiTableRow>
              </UiTableBody>
            </UiTable>
          </template>
        </TableLayout>
      </div>
    </section>


    <section class=" px-8">
      <h2 class="mb-4">table group header</h2>
    </section>
    <section>
      <div>
        <TableLayout class="">
          <template #table>
            <UiTable class="table-fixed w-full table--group-header">
              <colgroup>
                <col style="width:80px" v-for="i in 32"/>
              </colgroup>
              <UiTableHeader>
                <UiTableRow>
                  <Th colspan="16">레벨1</Th>
                  <Th colspan="16">레벨1</Th>
                </UiTableRow>
                <UiTableRow>
                  <Th colspan="8">레벨2</Th>
                  <Th colspan="8">레벨2</Th>

                  <Th colspan="8">레벨2</Th>
                  <Th colspan="8">레벨2</Th>
                </UiTableRow>
                <UiTableRow>
                  <template v-for="i in 8">
                    <Th colspan="4">레벨3</Th>
                  </template>
                </UiTableRow>
                <UiTableRow>
                  <template v-for="i in 16">
                    <Th colspan="2">레벨4</Th>
                  </template>
                </UiTableRow>
                <UiTableRow>
                  <template v-for="i in 32">
                    <Th>레벨5</Th>
                  </template>
                </UiTableRow>
              </UiTableHeader>
              <UiTableBody>
                <UiTableRow v-for="i in 5">
                  <Td data="cell" v-for="(v, i) in 32" :class="i === 5 ? 'table__cell--disabled' : 'table__cell--editable'"/>
                </UiTableRow>
              </UiTableBody>
            </UiTable>
          </template>
        </TableLayout>
      </div>
    </section>


    <section class=" px-8">
      <h2 class="mb-4">table row header</h2>
    </section>
    <section>
      <TableLayout class="">
        <template #table>
          <UiTable class="table-fixed w-full ">
            <colgroup>
              <col/>
            </colgroup>
            <UiTableHeader>
              <UiTableRow>
                <Th data="col header" class="table__row-header"/>
                <Th data="col header"/>
                <Th data="col header"/>
                <Th data="col header"/>
              </UiTableRow>
            </UiTableHeader>
            <UiTableBody>
              <UiTableRow v-for="i in 5" :class="i === 5 ? 'table-row__disabled' : 'table-row__editable'">
                <Td data="cell" v-for="(v, i) in 4" :class="i === 0 ? 'table__cell--disabled table__row-header' : 'table__cell--editable'"/>
              </UiTableRow>
            </UiTableBody>
            <UiTableFooter>
              <UiTableRow>
                <Td data="row header" class="table__row-header text-center"/>
                <Td data="footer cell"/>
                <Td data="footer cell"/>
                <Td data="footer cell"/>
              </UiTableRow>
            </UiTableFooter>
          </UiTable>
        </template>
      </TableLayout>
    </section>

    <section class="px-8">
      <h2 class="">secondary table group header</h2>
    </section>
    <section>
      <TableLayout class="">
        <template #table>
          <UiTable class="table-fixed w-full table--group-header table-secondary">
            <colgroup>
              <col style="width:80px" v-for="i in 32"/>
            </colgroup>
            <UiTableHeader>
              <UiTableRow>
                <Th colspan="16">레벨1</Th>
                <Th colspan="16">레벨1</Th>
              </UiTableRow>
              <UiTableRow>
                <Th colspan="8">레벨2</Th>
                <Th colspan="8">레벨2</Th>

                <Th colspan="8">레벨2</Th>
                <Th colspan="8">레벨2</Th>
              </UiTableRow>
              <UiTableRow>
                <template v-for="i in 8">
                  <Th colspan="4">레벨3</Th>
                </template>
              </UiTableRow>
              <UiTableRow>
                <template v-for="i in 16">
                  <Th colspan="2">레벨4</Th>
                </template>
              </UiTableRow>
              <UiTableRow>
                <template v-for="i in 32">
                  <Th>레벨5</Th>
                </template>
              </UiTableRow>
            </UiTableHeader>
          </UiTable>
        </template>
      </TableLayout>
    </section>

    <section class="px-8">
      <h2 class="">secondary table row header</h2>
    </section>
    <section>
      <TableLayout class="">
        <template #table>
          <UiTable class="table-fixed w-full  table-secondary">
            <colgroup>
              <col/>
            </colgroup>
            <UiTableHeader>
              <UiTableRow>
                <Th data="col header" class="table__row-header"/>
                <Th data="col header"/>
                <Th data="col header"/>
                <Th data="col header"/>
              </UiTableRow>
            </UiTableHeader>
            <UiTableBody>
              <UiTableRow v-for="i in 5" :class="i === 5 ? 'table-row__disabled' : 'table-row__editable'">
                <Td data="cell" v-for="(v, i) in 4" :class="i === 0 ? 'table__row-header' : i === 1 ? 'table__cell--disabled' : 'table__cell--editable'"/>
              </UiTableRow>
            </UiTableBody>
            <UiTableFooter>
              <UiTableRow>
                <Td data="row header" class="table__row-header text-center"/>
                <Td data="footer cell"/>
                <Td data="footer cell"/>
                <Td data="footer cell"/>
              </UiTableRow>
            </UiTableFooter>
          </UiTable>
        </template>
      </TableLayout>
    </section>
  </div>




</template>

<script setup lang="ts">

import TableLayout from "@/markup/components/table/TableLayout.vue";
import Th from "@/markup/components/table/Th.vue";
import Td from "@/markup/components/table/Td.vue";
</script>

<style scoped>

</style>

