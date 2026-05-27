<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <tfoot
    data-slot="table-footer"
    :class="cn('[&_td]:border-default [&_td]:border-t-1[&_td]:border-b-0 [&_tr]:hover:[&_td]:!bg-transparent [&_td]:font-bold [&_th]:border-b-0 sticky bottom-0 z-10 ', props.class)"
  >
    <slot />
  </tfoot>
</template>
