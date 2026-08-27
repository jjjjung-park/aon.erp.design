<template>
  <UiTooltipProvider>
    <UiTooltip>
      <UiTooltipTrigger>
        <slot name="title"/>
      </UiTooltipTrigger>
      <UiTooltipContent :side="side" align="center" :variant="variant" class="flex flex-col gap-2">
        <slot name="content"/>
      </UiTooltipContent>
    </UiTooltip>
  </UiTooltipProvider>
</template>

<script setup lang="ts">
import type {TooltipContentVariants} from "@/ui/tooltip";

const props = withDefaults(defineProps<{
  title?:string,
  variant?:TooltipContentVariants["variant"],
  side?:"top"|"bottom"|"left"|"right"
}>(), {
  variant: "light",
  side:"top"
})

</script>

<style scoped>

</style>
