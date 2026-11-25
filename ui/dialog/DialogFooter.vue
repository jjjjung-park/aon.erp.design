<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{ class?: HTMLAttributes["class"] }>()
</script>

<template>
  <div
    data-slot="dialog-footer"
    :class="cn('px-4 h-14 w-full flex flex-row justify-between items-center', props.class)"
  >
    <slot />
  </div>
</template>
