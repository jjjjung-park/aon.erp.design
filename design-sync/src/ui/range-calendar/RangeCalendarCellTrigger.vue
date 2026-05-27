<script lang="ts" setup>
import type { RangeCalendarCellTriggerProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { RangeCalendarCellTrigger, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"
import { buttonVariants } from '@/ui/button'

const props = withDefaults(defineProps<RangeCalendarCellTriggerProps & { class?: HTMLAttributes["class"] }>(), {
  as: "button",
})

const delegatedProps = reactiveOmit(props, "class")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarCellTrigger
    data-slot="range-calendar-trigger"
    :class="cn(
      buttonVariants({ variant: 'ghost', size: 'icon' }),
      'size-8 text-sm p-0 font-normal aria-selected:opacity-100 cursor-default  border-2 !border-transparent',
      'data-[highlighted]:bg-primary-light [&[data-highlighted]:not([data-highlighted-end=true]):not([data-selected])]:rounded-none',
      '[&[data-today]]:text-primary hover:bg-primary-light hover:text-primary ',
      '[&[data-today]:not([data-selected])]:text-primary hover:bg-primary-light hover:text-primary',
     'focus-within:bg-primary-light focus-visible:bg-primary-light focus:bg-primary-light focus-within:text-primary focus-visible:text-primary focus:text-primary',
      //selected + focus
      'data-[selection-start]:data-[selected]:focus-within:!border-gray-600/20 data-[selection-end]:data-[selected]:focus-within:!border-gray-600/20 ',
      // Selection Start
      'data-[selection-start]:bg-primary data-[selection-start]:!text-primary-foreground data-[selection-start]:hover:bg-primary data-[selection-start]:hover:text-primary-foreground data-[selection-start]:focus:bg-primary data-[selection-start]:focus:text-primary-foreground',
      // Selection End
      'data-[selection-end]:bg-primary data-[selection-end]:text-primary-foreground data-[selection-end]:hover:bg-primary data-[selection-end]:hover:text-primary-foreground data-[selection-end]:focus:bg-primary data-[selection-end]:focus:text-primary-foreground',
      // Outside months
      'data-[outside-view]:text-muted-foreground',
      // Disabled
      'data-[disabled]:text-muted-foreground data-[disabled]:opacity-50',
      // Unavailable
      'data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through',
      props.class,
    )"
    v-bind="forwardedProps"
  >
    <slot />
  </RangeCalendarCellTrigger>
</template>
