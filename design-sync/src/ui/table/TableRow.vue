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
      :class="cn('bg-background hover:[&>td]:!bg-surface-muted data-[state=selected]:[&_td]:!bg-primary-light data-[state=selected]:[&_td]:border-primary data-[state=selected]:[&_td]:border-y data-[state=selected]:[&_td:first-child]:relative first:[&_td]:border-t-0 ' +
     'data-[state=selected]:[&_td:first-child]:before:absolute data-[state=selected]:[&_td:first-child]:before:w-[3px] data-[state=selected]:[&_td:first-child]:before:left-0 data-[state=selected]:[&_td:first-child]:before:h-full data-[state=selected]:[&_td:first-child]:before:bg-primary',
    // disabled 행 활성화 시 pointer-events-none 필수 — 없으면 hover(bg-surface-muted)가 disabled 행에도 걸려서 클릭 가능한 것처럼 보임
    // 'data-[state=disabled]:[&>td>div]:opacity-50 data-[state=disabled]:[&>td]:cursor-default data-[state=disabled]:pointer-events-none ',
    props.class)"
  >
    <slot />
  </tr>
</template>
