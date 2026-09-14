<template>
  <UiPopoverContent :class="cn('p-4 pt-2 grid gap-3', props.class)">
    <header class="flex items-center justify-between">
      <slot name="title" >
        <h3 class="title__bold">{{ title }}</h3>
      </slot>
      <UiButton variant="ghost" size="icon" class="ml-auto" @click="$emit('close')">
        <LucideX/>
      </UiButton>
    </header>

    <slot name="body"/>

    <footer class="flex justify-between items-center">
      <slot name="footer"/>
    </footer>
  </UiPopoverContent>
</template>

<script setup lang="ts">
import {cn} from "@/lib/utils"
import type {HTMLAttributes} from "vue";
const props = defineProps<{
  class?:HTMLAttributes["class"]
  title?: string
}>()

const $emit = defineEmits(['close'])
</script>

<style scoped>

</style>
