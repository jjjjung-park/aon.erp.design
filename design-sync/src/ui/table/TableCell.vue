<script setup lang="ts">
import {cn} from '@/lib/utils'
import type {HTMLAttributes} from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <td
    data-slot="table-cell"
    :class="cn(
      'align-middle  [&>[role=checkbox]]:translate-y-[2px] h-12 relative text-sm border-t border-gray-200 bg-white [&>div.flex]:min-w-0 [&>div]:[&:has([role=checkbox])]:text-center focus-visible:outline-none',
      props.class)"
  >
    <slot />
  </td>
</template>
