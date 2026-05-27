<template>
  <ModalBase v-model:open="open" title="테이블 정렬" footer>
    <template #body>
      <div class="flex flex-col gap-3 py-2">
        <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
        <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
        <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
      </div>
    </template>
    <template #footer>
      <UiButton>적용</UiButton>
    </template>
  </ModalBase>
</template>

<script setup lang="ts">
import ModalBase from '@/markup/components/modal/ModalBase.vue'

const open = defineModel<boolean>('open', { default: false })
</script>
