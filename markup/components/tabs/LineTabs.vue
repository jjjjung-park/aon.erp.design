<template>
  <UiScrollArea>

    <div class="flex flex-nowrap ">
      <template v-for="(tab) in tabList">
        <div :data-disabled="tab.disabled"
             :data-state="tab.active"
             @click="$emit('change', tab.value)"
             :class="cn(
       'flex min-w-fit items-center justify-center px-padding-lg gap-1 h-8 text-sm bg-background font-bold cursor-pointer text-secondary relative',
               //disabled
               'data-[disabled=true]:cursor-not-allowed data-[disabled=true]:text-disabled-text',
               //active
               ' data-[state=true]:text-default-text data-[state=true]:after:content-[\'\'] data-[state=true]:after:absolute data-[state=true]:after:bottom-0 data-[state=true]:after:left-0 data-[state=true]:after:w-full data-[state=true]:after:h-[2px] data-[state=true]:after:bg-primary',
               props.class
             )">
          <slot :tab="tab">
            <span>{{ tab.label }}</span>
          </slot>
        </div>
      </template>
    </div>
    <UiScrollAreaScrollBar orientation="horizontal"/>
  </UiScrollArea>
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
