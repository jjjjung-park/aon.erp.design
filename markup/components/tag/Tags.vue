<template>
  <div :data-slot="props.type ?? 'tag'"
       :class="cn(tagsVariants({ variant: props.variant ?? (props.type === 'chip' ? 'secondary' : 'default'), type: props.type ?? 'tag' }), props.class)">
    <slot>
      <p class="truncate">{{ title }}</p>
    </slot>
    <UiButton data-slot="close" v-if="closeable" variant="ghost" size="icon-sm" class="text-inherit hover:bg-transparent size-3"><LucideX/></UiButton>
  </div>
</template>
<script setup lang="ts">
import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "vue";
import { tagsVariants } from "@/lib/cva/tag"

type TagsProps = {
  class?: HTMLAttributes["class"]
  title?: string
} & (
  | { type?: 'tag';  variant?: 'default' | 'secondary' | 'outline' | 'info';       closeable?: never }
  | { type: 'chip'; variant?: 'secondary' | 'outline' | 'disabled'; closeable?: boolean }
)

const props = defineProps<TagsProps>()
</script>
