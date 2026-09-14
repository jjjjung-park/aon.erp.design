<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import type { AlertVariants } from "."
import { cn } from "@/lib/utils"
import { alertVariants } from "."

const props = withDefaults(defineProps<{
  class?: HTMLAttributes["class"]
  variant?: AlertVariants["variant"]
  dismiss?: boolean
}>(), {
  variant: "default",
  dismiss: false
})
const $emits = defineEmits(['close'])
</script>

<template>
  <div
    data-slot="alert"
    :class="cn(alertVariants({ variant }), props.class)"
    role="alert"
  >
    <slot name="alert-icon">
      <template v-if="variant === 'default'">
      </template>
      <template v-else-if="variant === 'danger'">
        <LucideAlertTriangle/>
      </template>
      <template v-else-if="variant === 'warning'">
        <LucideCircleAlert/>
      </template>
      <template v-else-if="variant === 'success'">
        <LucideCheck/>
      </template>
      <template v-if="variant === 'primary'">
        <LucideInfo/>
      </template>
    </slot>
    <slot name="default"/>
    <template v-if="dismiss">
      <div class="ml-auto flex gap-2 items-center">
        <UiSeparator orientation="vertical" class="h-4 ml-1 bg-current opacity-20"/>
        <UiButton variant="ghost" size="icon-sm" class="text-current hover:bg-current/10 h-auto w-auto" @click="$emits('close')"><LucideX/></UiButton>
      </div>
    </template>


  </div>
</template>
