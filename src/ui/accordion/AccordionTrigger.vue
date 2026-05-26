<script setup lang="ts">
import type { AccordionTriggerProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ChevronDown } from "lucide-vue-next"
import {
  AccordionHeader,
  AccordionTrigger,

} from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<AccordionTriggerProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      data-slot="accordion-trigger"
      v-bind="delegatedProps"
      :class="
        cn(
          'focus-visible:border-primary flex flex-1  items-center justify-between text-left text-md font-bold transition-all outline-none disabled:pointer-events-none hover:cursor-pointer disabled:text-disabled-text [&[data-state=open]>svg]:rotate-180',
          props.class,
        )
      "
    >
      <slot />
      <slot name="icon">
        <ChevronDown
          class="pointer-events-none size-6 shrink-0 translate-y-0.5 transition-transform duration-200 text-inherit"
        />
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>
