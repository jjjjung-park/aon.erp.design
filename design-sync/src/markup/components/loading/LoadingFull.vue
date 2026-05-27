<template>
  <div :class="cn('bg-background/70 fixed z-999 inset-0 flex flex-col gap-4 justify-center items-center', props.class) ">
    <UiSpinner class="size-14 text-primary"/>
    <slot name="loading-text">
      <div class="font-bold text-secondary">로딩중입니다...</div>
    </slot>
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import {cn} from "@/lib/utils"
const props = defineProps<{
  class?:HTMLAttributes["class"]
}>()
</script>

<style scoped>

</style>
