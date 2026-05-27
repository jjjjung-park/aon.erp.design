<template>
  <div :data-slot="type"
       :class="cn(tagsVariants({variant, type}),props.class)">
    <slot>
      <p class="truncate">{{ title }}</p>
    </slot>
    <UiButton data-slot="close" v-if="closeable" variant="ghost" size="icon-sm" class="text-inherit hover:bg-transparent size-3"><LucideX/></UiButton>
  </div>
</template>
<script setup lang="ts">
import { cn } from "@/lib/utils"
import type {HTMLAttributes} from "vue";
import { tagsVariants } from "@/lib/cva/tag"
import type { TagsVariants } from "@/lib/cva/tag"
const props = withDefaults(defineProps<{
  class?: HTMLAttributes["class"]
  variant?: TagsVariants["variant"]
  type?: TagsVariants["type"]
  title?:string
  closeable?:boolean
}>(), {
  variant: "default",
  type:'tag',
  closeable:false,
})
</script>

<style scoped>

</style>
