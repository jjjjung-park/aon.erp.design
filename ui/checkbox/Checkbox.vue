<script setup lang="ts">
import type { CheckboxRootEmits, CheckboxRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { Check } from "lucide-vue-next"
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<CheckboxRootProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<CheckboxRootEmits>()

const delegatedProps = reactiveOmit(props, "class")

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <CheckboxRoot
    data-slot="checkbox"
    v-bind="forwarded"
    :class="
      cn('peer border-border bg-background data-[state=checked]:bg-primary data-[state=checked]:text-neutral data-[state=checked]:border-primary dark:aria-invalid:ring-danger/40 aria-invalid:border-danger size-4 shrink-0 rounded-sm border shadow-xs transition-shadow outline-none ' +
       'disabled:cursor-not-allowed disabled:bg-disabled data-[state=checked]:disabled:bg-disabled data-[state=checked]:disabled:border-border' ,
         props.class)"
  >
    <CheckboxIndicator
      data-slot="checkbox-indicator"
      class="grid place-content-center text-current transition-none data-[state=checked]:disabled:bg-disabled"
    >
      <slot>
        <Check class="size-3.5" />
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
