<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
  size?: "sm" | "md" | "lg"
}>()
</script>

<template>
  <div
    data-slot="card"
    :data-size="props.size"
    :class="
      cn(
        'bg-background border-border flex flex-col rounded-md border ' +
        // 사이즈별
         'data-[size=lg]:min-w-110 data-[size=lg]:px-padding-lg data-[size=lg]:pb-padding-lg data-[size=lg]:pt-padding-sm data-[size=md]:min-w-80 data-[size=md]:px-padding-lg data-[size=md]:py-padding-xs data-[size=sm]:min-w-40 data-[size=sm]:px-padding-sm data-[size=sm]:py-padding-xs',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
