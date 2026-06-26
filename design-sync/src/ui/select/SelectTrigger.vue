<script setup lang="ts">
import type { SelectTriggerProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ChevronDown } from "lucide-vue-next"
import { SelectIcon, SelectTrigger, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = withDefaults(
  defineProps<SelectTriggerProps & { class?: HTMLAttributes["class"], size?:  "sm" | "default" | "lg" }>(),
  { size: "default" },
)

const delegatedProps = reactiveOmit(props, "class", "size")
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectTrigger
    data-slot="select-trigger"
    :data-size="size"
    v-bind="forwardedProps"
    :class="cn(
      'border-border data-[placeholder]:text-disabled-text [&_svg:not([class*=\'text-\'])]:text-muted flex w-fit items-center justify-between gap-2 rounded-sm border bg-transparent px-padding-md text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none  aria-invalid:border-danger aria-invalid:border-2 dark:aria-invalid:ring-danger/40  dark:bg-inputs/30 dark:hover:bg-inputs/50 focus-visible:border-primary ' +
       'disabled:cursor-not-allowed disabled:bg-disabled disabled:text-disabled-text disabled:[&_svg]:text-disabled-text ' +
        'data-[size=default]:h-8 data-[size=sm]:h-6 data-[size=sm]:text-xs *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 aria-[expanded=true]:border-primary data-[display=readonly]:bg-surface-muted data-[display=readonly]:text-default data-[display=readonly]:cursor-default',
      props.class,
    )"
  >
    <slot />
    <SelectIcon as-child>
      <ChevronDown class="size-5 text-muted"/>
    </SelectIcon>
  </SelectTrigger>
</template>

