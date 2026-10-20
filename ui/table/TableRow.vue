<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed, ref, useAttrs } from "vue"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<{
  class?: HTMLAttributes["class"]
  selected?: boolean
}>(), {
  selected: undefined,
})

const attrs = useAttrs()
// 행에 클릭 액션(상세 열기 등)이 연결돼 있을 때만 클릭으로 selected 처리 — selected prop을 직접 넘기면(제어) 그 값이 우선
const isClickable = computed(() => !!attrs.onClick)

const internalSelected = ref(false)
const isSelected = computed(() => props.selected ?? (isClickable.value && internalSelected.value))

function handleRowClick() {
  if (isClickable.value) internalSelected.value = true
}
</script>

<template>
  <tr
      data-slot="table-row"
      :data-state="isSelected ? 'selected' : undefined"
      :class="cn('bg-background hover:[&>td]:!bg-surface-muted data-[state=selected]:[&_td]:!bg-primary-light data-[state=selected]:[&_td]:border-primary data-[state=selected]:[&_td]:border-y data-[state=selected]:[&_td:first-child]:relative first:[&_td]:border-t-0 ' +
     'data-[state=selected]:[&_td:first-child]:before:absolute data-[state=selected]:[&_td:first-child]:before:w-[3px] data-[state=selected]:[&_td:first-child]:before:left-0 data-[state=selected]:[&_td:first-child]:before:h-full data-[state=selected]:[&_td:first-child]:before:bg-primary',
    isClickable && 'cursor-pointer',
    // disabled 행 활성화 시 pointer-events-none 필수 — 없으면 hover(bg-surface-muted)가 disabled 행에도 걸려서 클릭 가능한 것처럼 보임
    // 'data-[state=disabled]:[&>td>div]:opacity-50 data-[state=disabled]:[&>td]:cursor-default data-[state=disabled]:pointer-events-none ',
    props.class)"
      @click="handleRowClick"
  >
    <slot />
  </tr>
</template>
