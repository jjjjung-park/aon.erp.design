<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    data-slot="input-group"
    role="group"
    :class="cn(
      'group/input-group border-border dark:bg-inputs/30 relative flex w-full items-center rounded-sm border transition-[color,box-shadow] outline-none pr-padding-md pl-2 bg-background',
      'h-8 min-w-0 has-[>textarea]:h-auto',

      // Variants based on alignment.
      'has-[>[data-align=inline-start]]:[&>input]',
      'has-[>[data-align=inline-end]]:[&>input]',
      'has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3',
      'has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3',

      // Focus state.
      'has-[[data-slot=input-group-control]:focus-visible]:border-primary',

      // Error state.
      `has-[[data-slot=input-group-control][aria-invalid='true']]:border-danger`,

      props.class,
    )"
  >
    <slot />
  </div>
</template>
