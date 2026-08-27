<template>
  <div class="flex">
    <template v-for="(tab, index) in tabList">
      <div :data-disabled="tab.disabled"
           :data-state="tab.active"
           @click="!tab.disabled && $emit('change', tab.value)"
           :class="cn(
       'flex items-center justify-center px-padding-sm min-w-20 h-8 text-sm bg-background text-muted border-1 border-surface font-bold cursor-pointer border-r-0 last:border-r-1 ' +
              //disabled
              'data-[disabled=true]:cursor-not-allowed data-[disabled=true]:text-disabled-text ' +
              //active
              'data-[state=true]:bg-primary-light data-[state=true]:text-primary data-[state=true]:border-primary ' +
              'data-[state=true]:[&+div]:border-l-primary',
              props.class
             )">
        <slot :tab="tab">
          <span class="truncate max-w-[140px]">{{ tab.label + index }}</span>
        </slot>

      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import {cn} from "@/lib/utils.ts";
import type {HTMLAttributes} from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"]
  tabList:Record<string, any>[]
}>();
</script>

<style scoped>

</style>
