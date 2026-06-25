<script lang="ts" setup>
import type { CalendarCellTriggerProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { CalendarCellTrigger, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"
import { buttonVariants } from '@/ui/button'

const props = withDefaults(defineProps<CalendarCellTriggerProps & { class?: HTMLAttributes["class"] }>(), {
  as: "button",
})

const delegatedProps = reactiveOmit(props, "class")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarCellTrigger
    data-slot="calendar-cell-trigger"
    :class="cn(
      buttonVariants({ variant: 'ghost', size: 'icon'  }),
      'size-8 text-sm p-0 font-normal aria-selected:opacity-100 cursor-default border-2 border-transparent ' +
       'focus-within:bg-primary-light focus-visible:bg-primary-light focus:bg-primary-light focus-within:text-primary focus-visible:text-primary focus:text-primary',
      '[&[data-today]:not([data-selected])]:bg-background [&[data-today]:not([data-selected])]:text-primary hover:bg-primary-light hover:text-primary ',
      // Selected
      'data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[selected]:focus:border-gray-900/20 data-[selected]:opacity-100 data-[selected]:hover:bg-primary data-[selected]:hover:text-primary-foreground data-[selected]:focus:bg-primary data-[selected]:focus:text-primary-foreground',
      // Disabled
      'data-[disabled]:text-disabled-text data-[disabled]:opacity-50',
      // Unavailable
      'data-[unavailable]:text-danger-light data-[unavailable]:line-through',
      // Outside months
      'data-[outside-view]:text-disabled-text',
      props.class,
    )"
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarCellTrigger>
</template>
