<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
  variant?: "legend" | "label"
}>()
</script>

<template>
  <legend
    data-slot="field-legend"
    :data-variant="variant"
    :class="cn(
      'mb-3 font-bold',
      'data-[variant=legend]:text-sm',
      'data-[variant=label]:text-xs',
      props.class,
    )"
  >
    <slot />
  </legend>
</template>
