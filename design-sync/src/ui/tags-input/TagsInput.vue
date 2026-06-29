<script setup lang="ts">
import type { TagsInputRootEmits, TagsInputRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { TagsInputRoot, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<TagsInputRootProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<TagsInputRootEmits>()

const delegatedProps = reactiveOmit(props, "class")

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <TagsInputRoot
    v-slot="slotProps" v-bind="forwarded" :class="cn(
      'flex flex-wrap gap-2 items-center rounded-sm border border-border bg-background px-2 text-sm transition-[color,box-shadow] outline-none',
      'focus-within:border-primary data-[disabled]:bg-disabled data-[disabled]:text-disabled-text data-[disabled]:cursor-not-allowed data-[disabled]:[&_svg]:text-disabled-text data-[disabled]:[&_*:focus-visible]:border-border data-[disabled]:border-border data-[disabled]:[&_[data-reka-collection-item]]:text-primary',
      'dark:aria-invalid:ring-destructive/40 aria-invalid:border-danger aria-invalid:focus-visible:border-danger ',
      props.class)"
  >
    <slot v-bind="slotProps" />
  </TagsInputRoot>
</template>
