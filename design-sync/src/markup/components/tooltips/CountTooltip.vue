<template>
  <UiTooltipProvider>
    <UiTooltip>
      <UiTooltipTrigger class="flex items-center justify-center gap-1 cursor-default">
        <slot name="title">
          <p class="truncate">{{ title }}</p>
        </slot>
        <UiBadge variant="outline" size="count" class="cursor-pointer">+ {{count}}</UiBadge>
      </UiTooltipTrigger>
      <UiTooltipContent side="top" align="center" :variant="variant" class="flex flex-col gap-2">
        <slot/>
      </UiTooltipContent>
    </UiTooltip>
  </UiTooltipProvider>
</template>

<script setup lang="ts">
import type {TooltipContentVariants} from "@/ui/tooltip";

const props = withDefaults(defineProps<{
  title?:string,
  count:number,
  variant?:TooltipContentVariants["variant"]
}>(), {
  variant: "light",
})

</script>

<style scoped>

</style>
