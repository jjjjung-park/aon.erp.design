<script setup lang="ts">
import type { SplitterResizeHandleEmits, SplitterResizeHandleProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { GripVertical } from "lucide-vue-next"
import { SplitterResizeHandle, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"
const props = withDefaults(defineProps<SplitterResizeHandleProps & {
  class?: HTMLAttributes["class"],
  withHandle?: boolean
}>(), {
  withHandle: true
})
const emits = defineEmits<SplitterResizeHandleEmits>()

const delegatedProps = reactiveOmit(props, "class", "withHandle")
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SplitterResizeHandle
    data-slot="resizable-handle"
    v-bind="forwarded"
    :class="cn('bg-border focus-visible:ring-ring relative flex w-0 items-center justify-center ' +
     'after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 after:border-r-1 after:border-gray-200 ' +
     'before:absolute before:inset-y-0 before:left-1/2 before:w-1 before:-translate-x-1/2 before:border-l-1 before:border-gray-200 ' +
      'focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden ' +
       'data-[orientation=vertical]:h-px data-[orientation=vertical]:w-full data-[orientation=vertical]:after:left-0 data-[orientation=vertical]:after:h-1 data-[orientation=vertical]:after:w-full data-[orientation=vertical]:after:-translate-y-1/2 data-[orientation=vertical]:after:translate-x-0 [&[data-orientation=vertical]>div]:rotate-90', props.class)"
  >
    <template v-if="props.withHandle">
      <div class="bg-gray-200 z-10 flex h-6 w-4 items-center justify-center rounded-xs border-border border-1">
        <GripVertical class="size-3 text-muted" />
      </div>
    </template>
  </SplitterResizeHandle>
</template>
