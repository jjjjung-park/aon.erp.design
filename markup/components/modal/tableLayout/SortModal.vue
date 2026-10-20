
<template>
  <ModalBase v-model:open="open" title="테이블 정렬" class="w-modal-md">
    <template #body>
      <div class="flex gap-8 pb-4">
        <div class="flex flex-col gap-2 w-1/2">
          <p class="text-muted caption__bold flex items-center justify-between">
            정렬 항목
            <span class="font-normal flex items-center gap-1 "><LucideCircleAlert class="size-3"/> 정렬은 최대 n개까지 가능합니다.</span>
          </p>
          <div class=" rounded-sm px-padding-sm py-6 text-muted bg-surface-muted text-center">
            정렬 설정된 항목이 없습니다.
          </div>
          <UiCollapsible :default-open="true">
            <UiCollapsibleContent class="grid gap-2">
              <UiCollapsible class="grid gap-2" >
                <div class="list-block-item">
                  <UiCollapsibleTrigger>
                    <p>컬럼명</p>
                  </UiCollapsibleTrigger>
                  <div class="flex items-center gap-2 ml-auto">
                    <div class="flex flex-col items-center ">
                      <button class="arrow-up " value="asc"/>
                      <button class="arrow-down active" value="desc"/>
                    </div>
                    <UiButton variant="ghost" size="icon" class="" title="정렬 취소">
                      <LucideX/>
                    </UiButton>
                  </div>
                </div>
              </UiCollapsible>
              <UiCollapsible class="grid gap-2" >
                <div class="list-block-item">
                  <UiCollapsibleTrigger>
                    <p>컬럼명</p>
                  </UiCollapsibleTrigger>
                  <div class="flex items-center gap-2 ml-auto">
                    <div class="flex flex-col items-center ">
                      <button class="arrow-up " value="asc"/>
                      <button class="arrow-down active" value="desc"/>
                    </div>
                    <UiButton variant="ghost" size="icon" class="" title="정렬 취소">
                      <LucideX/>
                    </UiButton>
                  </div>
                </div>
              </UiCollapsible>
            </UiCollapsibleContent>
          </UiCollapsible>

        </div>
        <div class="flex flex-col gap-2 w-1/2">
          <p class="text-muted caption__bold">일반 항목</p>
          <UiCollapsible :default-open="true">
            <UiCollapsibleContent class="grid gap-2">
              <UiCollapsible class="grid gap-2" v-for="i in 5" :key="i">
                <div class="list-block-item">
                  <UiCollapsibleTrigger>
                    <p>컬럼명</p>
                  </UiCollapsibleTrigger>
                  <div class="flex items-center gap-2 ml-auto">
                    <div class="flex flex-col items-center ">
                      <button class="arrow-up " value="asc"/>
                      <button class="arrow-down " value="desc"/>
                    </div>
                  </div>
                </div>
              </UiCollapsible>
            </UiCollapsibleContent>
          </UiCollapsible>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="ml-auto gap-2 flex">
        <UiButton variant="outline">초기화</UiButton>
      </div>
    </template>
  </ModalBase>
</template>
<script setup lang="ts">
import ModalBase from "@/markup/components/modal/ModalBase.vue";

const open = defineModel<boolean>('open', { default: false })
</script>

<style scoped>

</style>
