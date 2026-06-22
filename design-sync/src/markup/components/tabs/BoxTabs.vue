<template>
  <div class="flex">
    <template v-for="tab in list">
      <div :data-disabled="tab.disabled"
           :data-state="tab.active"
           :class="cn(
       'flex items-center justify-center px-padding-lg min-w-20 h-8 text-sm bg-background text-secondary border-1 border-gray-300 font-bold cursor-pointer border-r-0 last:border-r-1 ' +
              //disabled
              'data-[disabled=true]:cursor-not-allowed data-[disabled=true]:text-disabled-text ' +
              //active
              'data-[state=true]:bg-primary-light data-[state=true]:text-primary data-[state=true]:border-primary ' +
              'data-[state=true]:[&+div]:border-l-primary',
              props.class
             )"
           @click="!tab.disabled && emit('change', tab.value)">
        <span class="truncate max-w-[140px]">{{ tab.label }}</span>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import {cn} from "@/lib/utils.ts";
import type {HTMLAttributes} from "vue";

const props = defineProps<{
  tabList?: { label: string; value: string; active: boolean; disabled?: boolean }[]
  class?: HTMLAttributes["class"]
}>()

const emit = defineEmits<{ change: [value: string] }>()

const defaultList = [
  { label: 'tabs', value: 'tab1', active: true },
  { label: 'tabs', value: 'tab2', active: false, disabled: true },
  { label: 'tabs', value: 'tab3', active: false },
  { label: 'tabs', value: 'tab4', active: false },
]

const list = computed(() => props.tabList ?? defaultList)
</script>

<style scoped>

</style>
