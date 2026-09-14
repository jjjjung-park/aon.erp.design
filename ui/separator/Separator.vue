<script setup lang="ts">
import type { SeparatorProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { Separator } from "reka-ui"
import { cn } from "@/lib/utils"
import { separatorVariants } from "."

const props = withDefaults(defineProps<
  SeparatorProps & { class?: HTMLAttributes["class"]; size?: 'sm' | 'md' | 'full' }
>(), {
  orientation: "horizontal",
  decorative: true,
  size: "md",
})

const delegatedProps = reactiveOmit(props, "class", "size")
</script>

<template>
  <Separator
    data-slot="separator-root"
    v-bind="delegatedProps"
    :class="cn(separatorVariants({ size: props.size, orientation: props.orientation }), props.class)"
  />
</template>
