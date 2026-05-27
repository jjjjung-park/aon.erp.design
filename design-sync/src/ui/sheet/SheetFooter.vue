<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{ class?: HTMLAttributes["class"] }>()
</script>

<template>
  <div
    data-slot="sheet-footer"
    :class="cn(' flex w-full justify-between items-center h-14 p-3', props.class)
    "
  >
    <slot />
  </div>
</template>
