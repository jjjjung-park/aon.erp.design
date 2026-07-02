<script setup lang="ts">
import {cn} from '@/lib/utils'
import type {HTMLAttributes} from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <th
    data-slot="table-head"
    :class="
      cn(
        'align-middle [&>[role=checkbox]]:translate-y-[2px]  h-10 relative text-sm font-bold  whitespace-break-spaces border-y border-border group [&>div]:px-padding-xs [&>div]:[&:has([role=checkbox])]:text-center' ,
        props.class
      )
    "
  >
    <slot />
  </th>
</template>
