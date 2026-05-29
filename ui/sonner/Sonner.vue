<script lang="ts" setup>
import type { ToasterProps } from "vue-sonner"
import { CircleCheckIcon, InfoIcon, Loader2Icon, OctagonXIcon, TriangleAlertIcon, XIcon } from "lucide-vue-next"
import { Toaster as Sonner } from "vue-sonner"
import { cn } from "@/lib/utils"

const props = defineProps<ToasterProps>()
</script>

<template>
  <Sonner
    :class="cn('toaster group', props.class)"
    :style="{
      '--normal-bg': 'var(--color-background)',
      '--normal-text': 'var(--color-default)',
      '--border-radius': 'var(--radius-sm)',
      '--padding':'var(--spacing-padding-lg)',
      '--success-bg':'var(--color-success-light)',
      '--success-text':'var(--color-success)',
      '--info-bg':'var(--color-info-light)',
      '--info-text':'var(--color-info)',
      '--warning-bg':'var(--color-warning-light)',
      '--warning-text':'var(--color-warning)',
      '--error-bg':'var(--color-danger-light)',
      '--error-text':'var(--color-danger)',
    }"

    v-bind="props"
  >
    <template #success-icon>
      <CircleCheckIcon class="size-4" />
    </template>
    <template #info-icon>
      <InfoIcon class="size-4" />
    </template>
    <template #warning-icon>
      <TriangleAlertIcon class="size-4" />
    </template>
    <template #error-icon>
      <OctagonXIcon class="size-4" />
    </template>
    <template #loading-icon>
      <div>
        <Loader2Icon class="size-4 animate-spin" />
      </div>
    </template>
    <template #close-icon>
      <XIcon class="size-4" />
    </template>
  </Sonner>
</template>
