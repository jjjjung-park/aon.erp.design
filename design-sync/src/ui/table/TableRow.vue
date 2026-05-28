<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <tr
    data-slot="table-row"
    :class="cn('bg-background hover:[&>td]:!bg-primary-light data-[state=selected]:[&_td]:!bg-primary-light data-[state=selected]:[&_td]:border-primary data-[state=selected]:[&_td]:border-y data-[state=selected]:[&_td:first-child]:relative ' +
     'data-[state=selected]:[&_td:first-child]:before:absolute data-[state=selected]:[&_td:first-child]:before:w-[3px] data-[state=selected]:[&_td:first-child]:before:left-0 data-[state=selected]:[&_td:first-child]:before:h-full data-[state=selected]:[&_td:first-child]:before:bg-primary',
    'data-[state=disabled]:[&>td>div]:opacity-50 data-[state=disabled]:[&>td]:cursor-default ',
    props.class)"
  >
    <slot />
  </tr>
</template>
