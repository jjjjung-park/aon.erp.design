<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { useVModel } from "@vueuse/core"
import { cn } from "@/lib/utils"

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes["class"]
}>()

const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void
}>()

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <input
    v-model="modelValue"
    data-slot="input"
    :class="cn(
      'file:text-muted placeholder:text-disabled-text selection:bg-primary selection:text-neutral dark:bg-inputs/30 border-border flex h-8 w-full min-w-0 rounded-sm border bg-transparent px-padding-md',
      'focus-visible:border-primary focus-visible:outline-0 disabled:bg-disabled disabled:text-disabled-text disabled:border-0',
      'aria-invalid:border-danger aria-invalid:focus-visible:border-danger ',
      '[&.text-center]:px-padding-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
      props.class,
    )"
  >
</template>
