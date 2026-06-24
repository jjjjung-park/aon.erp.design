<template>
  <UiAccordion class="w-full border-1 border-border rounded-lg px-6 py-3" collapsible default-value="accordion">
    <UiAccordionItem value="accordion" class="grid gap-3 ">
      <UiAccordionTrigger class="leading-[1.5]">조회 조건</UiAccordionTrigger>
      <UiAccordionContent class="grid gap-4">
        <slot name="search-body">
          content
        </slot>
        <!--   클래스 bg-surface-muted/50 -> bg-surface-muted 변경     -->
        <div class="rounded-lg bg-surface-muted px-4 py-3 flex  items-center gap-3" v-if="filter">
          <p class="flex items-center flex-none">
            <LucideBookmark class="size-4 mr-1"/>
            <span class="caption__bold">조회 저장</span>
            <UiSeparator orientation="vertical" class="h-4 ml-3"/>
          </p>
          <div class="flex flex-wrap gap-3">
            <slot name="search-filter">
              <!--     variant="ghost" => outline 변경         -->
              <Tags title="적용된 조회" variant="secondary" type="chip" closeable class="cursor-pointer"/>
              <Tags title="24s 품목 검색" variant="outline" type="chip"  closeable class="cursor-pointer"/>
              <Tags title="미적용 조건" variant="outline" type="chip"  closeable class="cursor-pointer"/>
              <Tags title="미적용 조건" variant="outline" type="chip"  closeable class="cursor-pointer"/>
            </slot>
          </div>
        </div>


        <slot name="search-footer">
          <div class="flex justify-end gap-2">
            <UiButton variant="outline" size="sm" @click="open = true">조회 저장</UiButton>
            <UiButton variant="outline" size="sm">초기화</UiButton>
            <UiButton size="sm">조회</UiButton>
          </div>
        </slot>
      </UiAccordionContent>
    </UiAccordionItem>
  </UiAccordion>

<!-- 조회 조건 저장 모달 -->
  <ModalBase v-model:open="open" title="조회 저장">
    <template #body>
      <form action="">
        <FormItem label="명칭" placeholder="명칭을 입력해 주세요" />
      </form>
    </template>
    <template #footer>
      <div class="ml-auto gap-2 flex">
        <UiDialogClose as-child>
          <UiButton variant="outline">닫기</UiButton>
        </UiDialogClose>
        <UiButton>저장</UiButton>
      </div>
    </template>
  </ModalBase>
</template>

<script setup lang="ts">
import Tags from "@/markup/components/tag/Tags.vue";
import ModalBase from "@/markup/components/modal/ModalBase.vue";
import FormItem from "@/markup/components/form/FormItem.vue";

const open = ref<boolean>(false)
const props = withDefaults(defineProps<{
  filter?:boolean
}>(),{
  filter:false
})
</script>

<style scoped>

</style>
