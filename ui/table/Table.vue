<script setup lang="ts">
import {cn} from '@/lib/utils'
import type {HTMLAttributes} from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <table
    data-slot="table"
    :class="cn('caption-bottom text-sm  border-separate border-spacing-0 ', props.class)"
  >
    <slot />
  </table>
</template>
