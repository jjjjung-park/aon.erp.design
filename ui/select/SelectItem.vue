<script setup lang="ts">
import type { SelectItemProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  SelectItem,

  SelectItemText,
  useForwardProps,
} from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<SelectItemProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectItem
    data-slot="select-item"
    v-bind="forwardedProps"
    :class="
      cn(
        'focus:bg-primary-light focus:text-primary [&_svg:not([class*=\'text-\'])]:text-primary relative flex gap-2 w-full cursor-pointer items-center rounded-input p-2 h-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:text-disabled-text aria-[selected=true]:bg-primary-light aria-[selected=true]:text-primary truncate [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2',
        props.class,
      )
    "
  >
    <SelectItemText>
      <slot />
    </SelectItemText>
  </SelectItem>
</template>
