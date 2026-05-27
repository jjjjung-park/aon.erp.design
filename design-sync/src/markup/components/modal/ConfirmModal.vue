<template>
<!-- 삭제,컨펌 전용 사이즈  -->
  <ModalBase class="w-90" >
    <template #body>
      <div class="flex gap-4 mb-6">
        <p class="rounded-full bg-primary-light text-primary size-12 flex items-center justify-center"><LucideCheckIcon class="size-6"/></p>
        <slot name="message">
          <div>
            <UiDialogDescription class="mb-1">{{item}} 확인</UiDialogDescription>
            <div class="">
              {{message}}
            </div>
          </div>
        </slot>
      </div>
    </template>
    <template #footer>
      <UiDialogClose as-child>
        <UiButton  @click="toast.success('요청이 정상 처리되었습니다.')">확인</UiButton>
      </UiDialogClose>
    </template>
  </ModalBase>
</template>

<script setup lang="ts">
import ModalBase from "@/markup/components/modal/ModalBase.vue";
import {toast} from "vue-sonner";

const props = withDefaults(
  defineProps<{
    item?:string
    message?:string
  }>(),{
    message:'저장하시겠습니까?',
  }
)
</script>

<style scoped>

</style>
