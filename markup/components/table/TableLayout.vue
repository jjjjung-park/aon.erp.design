<template>
  <div class="flex flex-col gap-3 overflow-y-auto h-full px-8 pt-6">

    <div class="table-layout__top grid grid-cols-2 items-center  ">
      <template v-if="!$slots['data-action']">
        <div class="table-layout__data-action flex gap-3 items-center">
          <p class="text-sm text-muted font-bold ">총 245건</p>
        </div>
      </template>
      <template v-else>
        <slot name="data-action"/>
      </template>
      <div class="table-layout__table-action gap-2 flex items-center  justify-self-end">
        <template v-if="!$slots['table-action']">
          <template v-if="filter">
            <InputBase class="h-6 gap-2 text-xs sm" v-if="showFilter">
              <template #prefix>
                <LucideSearch class="size-3 stroke-3 text-default"/>
              </template>
            </InputBase>
            <UiButton variant="ghost" size="icon-sm" title="키워드 검색" @click="showFilter = !showFilter" :class="[{'bg-gray-300':showFilter}, 'relative']">
              <LucideSearch/>
              <!--   적용된 필터 있음 표시     -->
              <UiBadge  size="dot" class="absolute top-0.5 right-0.5 "/>
            </UiButton>
            <UiSeparator orientation="vertical" class="h-4"/>
          </template>
          <template v-if="download">

            <UiButton variant="ghost" size="icon-sm" title="엑셀 다운로드">
              <LucideFolderDown/>
            </UiButton>
            <UiSeparator orientation="vertical" class="h-4"/>
          </template>
          <template v-if="setting">
            <UiDropdownMenu>
              <UiDropdownMenuTrigger as-child>
                <UiButton variant="ghost" size="icon-sm" class="relative" title="테이블 설정">
                  <LucideSettings/>
                  <!--   적용된 정렬 있음 표시     -->
                  <UiBadge size="dot" class="absolute top-0.5 right-0.5 "/>
                </UiButton>
              </UiDropdownMenuTrigger>
              <UiDropdownMenuContent class="w-40 mr-2 [&>div]:justify-center">
                <UiDropdownMenuItem @click="open('Setting')">테이블 설정</UiDropdownMenuItem>
                <UiDropdownMenuItem  @click="open('Sort')" >테이블 정렬 <UiBadge variant="info" class="size-4 text-muted">30</UiBadge></UiDropdownMenuItem>
                <UiDropdownMenuItem >데이터 넓이 초기화</UiDropdownMenuItem>
              </UiDropdownMenuContent>
            </UiDropdownMenu>
          </template>

          <component :is="currentComponent" v-model:open="openValue" @open="open" />

        </template>
        <template v-else>
          <slot name="table-action"/>
        </template>
      </div>
    </div>

    <div class="table-layout__table overflow-auto w-full min-w-[calc(1200px-64px] max-h-full" :class="pagination?'':'mb-3'">
      <slot name="table"/>
    </div>

    <!--   데이터없음 영역 추가 -->
    <slot name="empty"/>

    <div class=" pb-6 bg-background pt-3 mt-auto w-full" v-if="pagination">
      <slot name="pagination"/>
    </div>


  </div>



</template>

<script setup lang="ts">
import {InputBase} from "@/markup/components/inputs";
import {ref} from "vue";
const showFilter =ref<boolean>(false)

const props = withDefaults(
  defineProps<{
    pagination?: boolean
    sortList?:any | null
    filter?:boolean
    download?:boolean
    setting?:boolean
  }>(),
  {
    pagination: true,
    filter:true,
    download:true,
    setting:true,
  }
)

const openValue = ref<boolean>(false);
type modal = 'Setting' | 'Sort';
const type = ref<modal>('Setting');

const open = (selectedMode: modal) => {
  openValue.value = true;
  type.value = selectedMode;
}

const componentsMap: Record<modal, any> = {
  Setting: defineAsyncComponent(() => import('@/markup/components/modal/tableLayout/SettingModal.vue')),
  Sort: defineAsyncComponent(() => import('@/markup/components/modal/tableLayout/SortModal.vue')),
}

const currentComponent = computed(() => componentsMap[type.value])

</script>

<style scoped>

</style>
