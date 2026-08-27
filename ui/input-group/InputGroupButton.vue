<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import type { ButtonVariants } from "@/ui/button"
import { cn } from "@/lib/utils"
import { Button } from '@/ui/button'

const props = withDefaults(defineProps<{
  variant?: ButtonVariants["variant"]
  size?: ButtonVariants["size"]
  class?: HTMLAttributes["class"]
}>(), {
  variant: "ghost",
  size: "inline-icon",
})
</script>

<template>
  <Button :variant="variant" :size="size" :class="cn('shadow-none', props.class)">
    <slot />
  </Button>
</template>
