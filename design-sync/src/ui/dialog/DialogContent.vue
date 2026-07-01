<script setup lang="ts">
import type { DialogContentEmits, DialogContentProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  DialogContent,

  DialogPortal,
  useForwardPropsEmits,
} from "reka-ui"
import { cn } from "@/lib/utils"
import DialogOverlay from "./DialogOverlay.vue"
defineOptions({
  inheritAttrs: false,
})
const props = defineProps<DialogContentProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<DialogContentEmits>()

const delegatedProps = reactiveOmit(props, "class")

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
<!--  inline-style 처리를 위해 attr 추가  -->
<template>
  <DialogPortal>
    <DialogOverlay />
    <DialogContent
      data-slot="dialog-content"
      v-bind="{ ...forwarded, ...$attrs }"
      :class="
        cn(
          'bg-background data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0  data-[state=closed]:animate-out   data-[state=open]:animate-in fixed top-[50%] left-[50%] z-50 flex flex-col  translate-x-[-50%] translate-y-[-50%] rounded-md  shadow-lg min-w-120',
          props.class,
        )"
    >
      <slot />

    </DialogContent>
  </DialogPortal>
</template>
