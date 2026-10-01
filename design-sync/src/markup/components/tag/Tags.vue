<template>
  <div :data-slot="props.type ?? 'tag'"
       :class="cn(
         tagsVariants({ variant: props.variant ?? (props.type === 'chip' ? 'secondary' : 'default'), type: props.type ?? 'tag' }),
         props.disabled && 'bg-disabled text-disabled-text border-transparent',
         props.class
       )">
    <slot>
      <p class="truncate caption__bold">{{ title }}</p>
    </slot>
    <UiButton data-slot="close" v-if="showClose" variant="ghost" size="inline-icon-sm" class="text-inherit hover:bg-transparent"><LucideX/></UiButton>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "vue";
import { tagsVariants } from "@/lib/cva/tag"

type TagsProps = {
  class?: HTMLAttributes["class"]
  title?: string
  disabled?: boolean
} & (
  | { type?: 'tag';  variant?: 'default' | 'secondary' | 'outline' | 'info' | 'category'; closeable?: never }
  | { type: 'chip'; variant?: 'secondary' | 'outline'; closeable?: boolean }
  )

const props = defineProps<TagsProps>()

// chip이어도 closeable을 명시적으로 true로 넘겨야 표시, disabled면 항상 숨김
const showClose = computed(() => props.closeable && !props.disabled)
</script>
