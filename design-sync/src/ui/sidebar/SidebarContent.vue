<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/ui/scroll-area"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    data-slot="sidebar-content"
    data-sidebar="content"
    :class="cn('flex min-h-0 flex-1 flex-col overflow-hidden', props.class)"
  >
    <!--  네이티브 스크롤바 대신 오버레이 스크롤(ScrollArea) 사용  -->
    <!--  reka 뷰포트 안쪽 content div를 flex-col로 바꿔 기존 gap-2·mt-auto 동작 유지  -->
    <ScrollArea class="min-h-0 flex-1 [&>[data-slot=scroll-area-viewport]>div]:flex [&>[data-slot=scroll-area-viewport]>div]:min-h-full [&>[data-slot=scroll-area-viewport]>div]:flex-col [&>[data-slot=scroll-area-viewport]>div]:gap-2">
      <slot />
    </ScrollArea>
  </div>
</template>
