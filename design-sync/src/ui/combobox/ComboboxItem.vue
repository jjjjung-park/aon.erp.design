<script setup lang="ts">
import type { ComboboxItemEmits, ComboboxItemProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ComboboxItem, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<ComboboxItemProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<ComboboxItemEmits>()

const delegatedProps = reactiveOmit(props, "class")

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
<template>
  <ComboboxItem
    data-slot="combobox-item"
    v-bind="forwarded"
    :class="cn(
      ' [&_svg:not([class*=\'text-\'])]:text-primary hover:bg-primary-light hover:text-primary relative flex cursor-pointer items-center gap-2 rounded-sm px-2 h-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:text-disabled-text [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-5',
      'aria-[selected=true]:bg-primary-light aria-[selected=true]:text-primary ', props.class)"
  >
    <slot />
  </ComboboxItem>
</template>
