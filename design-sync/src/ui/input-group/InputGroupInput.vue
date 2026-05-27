<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"
import { Input } from '@/ui/input'

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <Input
    data-slot="input-group-control"
    :class="cn(
      'flex-1 h-full rounded-none border-0 bg-transparent shadow-none focus-visible:outline-0 focus-visible:ring-0 focus-visible:border-0 dark:bg-transparent !px-0 disabled:bg-transparent readonly:bg-transparent',
      props.class,
    )"
  />
</template>
