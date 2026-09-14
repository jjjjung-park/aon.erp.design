<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { useVModel } from "@vueuse/core"
import { cn } from "@/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
  defaultValue?: string | number
  modelValue?: string | number
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
  <textarea
    v-model="modelValue"
    data-slot="textarea"
    :class="cn('border-border placeholder:text-disabled-text focus-visible:border-primary focus-visible:border-2 aria-invalid:border-danger dark:bg-inputs/30 flex field-sizing-content min-h-16 w-full rounded-sm border bg-transparent p-3 shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:bg-disabled disabled:text-disabled md:text-sm', props.class)"
  />
</template>
