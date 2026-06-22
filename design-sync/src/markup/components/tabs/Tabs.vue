<template>
  <div class="flex">
    <template v-for="(tab, index) in tabsList">
      <div :data-disabled="tab.disabled"
           :data-state="tab.active"
           :class="cn(
       'flex items-center justify-center px-padding-lg min-w-20 h-8 text-sm bg-background border-1 border-gray-300 font-bold -mr-1 cursor-pointer',
              //disabled
              'data-[disabled=true]:cursor-not-allowed data-[disabled=true]:text-disabled-text',
              //active
              'data-[state=true]:bg-primary data-[state=true]:text-primary-foreground data-[state=true]:border-primary',
              props.class
             )">
        <span class="truncate max-w-[140px]">{{ tab.label + index }}</span>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import {cn} from "@/lib/utils.ts";
import type {HTMLAttributes} from "vue";
import type {TabsVariants} from "@/markup/components/tabs/index.ts";

const props = defineProps<{
  class?: HTMLAttributes["class"]
  variant?: TabsVariants["variant"]
}>();


const tabsList = [
  {label: 'tabs fdfdfdfdfdfdfddfddf', value: 'tabs', active: true},
  {label: 'tabs', value: 'tabs', active: false, disabled: true},
  {label: 'tabs', value: 'tabs', active: false},
  {label: 'tabs', value: 'tabs', active: false},
  {label: 'tabs', value: 'tabs', active: false},
  {label: 'tabs', value: 'tabs', active: false},
]

</script>

<style scoped>

</style>
