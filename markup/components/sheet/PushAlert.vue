<template>
  <SheetBase v-model:open="open" title="알림" :footer="false">
    <template #body>
      <div class="flex flex-col gap-3 py-2">
        <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
        <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
        <div class="flex flex-col gap-2"><UiSkeleton class="h-3 w-1/3" /><UiSkeleton class="h-9 w-full" /></div>
      </div>
    </template>
  </SheetBase>
</template>

<script setup lang="ts">
import SheetBase from '@/markup/components/sheet/SheetBase.vue'

const open = defineModel<boolean>('open', { default: false })
</script>
