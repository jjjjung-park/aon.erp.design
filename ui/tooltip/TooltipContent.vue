<script setup lang="ts">
import type { TooltipContentEmits, TooltipContentProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { TooltipContentVariants } from "."
import { reactiveOmit } from "@vueuse/core"
import { TooltipArrow, TooltipContent, TooltipPortal, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"
import { tooltipContentVariants, tooltipArrowVariants } from "."

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<TooltipContentProps & {
  class?: HTMLAttributes["class"]
  variant?: TooltipContentVariants['variant']
}>(), {
  sideOffset: 4,
})

const emits = defineEmits<TooltipContentEmits>()

const delegatedProps = reactiveOmit(props, "class")
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <TooltipPortal>
    <TooltipContent
      data-slot="tooltip-content"
      v-bind="{ ...forwarded, ...$attrs }"
      :class="cn(tooltipContentVariants({ variant }), props.class)"
    >
      <slot />
      <slot name="tooltip-arrow">
        <TooltipArrow :class="cn(tooltipArrowVariants({ variant }))" />
      </slot>
    </TooltipContent>
  </TooltipPortal>
</template>
