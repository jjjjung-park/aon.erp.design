<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { ButtonVariants } from "."
import { Primitive } from "reka-ui"
import { cn } from "@/lib/utils"
import { buttonVariants } from "."

interface Props extends PrimitiveProps {
  variant?: ButtonVariants["variant"]
  size?: ButtonVariants["size"]
  class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
})
</script>

<template>
  <Primitive
    data-slot="button"
    type="button"
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <!--  아이콘 버튼이 아닐때만 span 필요 - 말줄임표용 -->
    <template v-if="!['icon', 'icon-sm', 'icon-lg'].includes(size)">
      <span class="[&:has(img,svg)]:inline-flex [&:has(img,svg)]:gap-1 [&:has(img,svg)]:items-center [&:has(img,svg)]:min-w-0 ">
        <slot/>
      </span>
    </template>

    <template v-else>
      <slot/>
    </template>

  </Primitive>
</template>
