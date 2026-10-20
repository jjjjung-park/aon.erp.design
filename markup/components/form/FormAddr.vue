<template>
  <FormItem class="col-span-full h-27" :required="required" :label="label" :validate-text="validateText">
    <template #input-item>
      <div class="grid gap-1">
        <div class="flex gap-2">
          <InputBase readonly placeholder="주소를 입력해 주세요"/>
          <UiButton variant="secondary" @click="AddrOpen = true">검색</UiButton>
        </div>
        <InputBase placeholder="상세주소를 입력해 주세요" class=""/>
      </div>
    </template>
  </FormItem>

  <AddrModal v-model:open="AddrOpen"/>
</template>

<script setup lang="ts">

import FormItem from "@/markup/components/form/FormItem.vue";
import {InputBase} from "@/markup/components/inputs";
import AddrModal from "@/markup/components/modal/AddrModal.vue";
const $emit = defineEmits(['open'])
const props = withDefaults(
  defineProps<{
    label?:string,
    required?:boolean,
    validateText?:string,
  }>(),{
    label:'주소',
    required:false,
  }
)

const AddrOpen = ref<boolean>(false)
</script>

<style scoped>

</style>
