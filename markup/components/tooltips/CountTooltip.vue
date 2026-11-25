<template>
  <UiTooltipProvider>
    <UiTooltip>
      <UiTooltipTrigger class="flex items-center justify-center gap-1 cursor-default">
        <slot name="title">
          <p class="truncate">{{ title }}</p>
        </slot>
        <!--   뱃지 -> 태그 컴포넌트 변경 (누락)     -->
        <Tags variant="outline" type="chip" class="cursor-pointer">+ {{count}}</Tags>
      </UiTooltipTrigger>
      <UiTooltipContent side="top" align="center" :variant="variant" class="flex flex-col gap-2">
        <slot/>
      </UiTooltipContent>
    </UiTooltip>
  </UiTooltipProvider>
</template>

<script setup lang="ts">
import type {TooltipContentVariants} from "@/ui/tooltip";
import Tags from "@/markup/components/tag/Tags.vue";

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
