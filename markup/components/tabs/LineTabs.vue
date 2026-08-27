<template>
  <UiScrollArea>
    <div class="flex flex-nowrap ">
      <template v-for="(tab) in tabList">
        <div :data-disabled="tab.disabled"
             :data-state="tab.active"
             @click="!tab.disabled && $emit('change', tab.value)"
             :class="cn(
       'flex min-w-fit items-center justify-center px-padding-sm gap-1 h-10 text-sm bg-background font-bold cursor-pointer text-muted relative',
               //disabled
               'data-[disabled=true]:cursor-not-allowed data-[disabled=true]:text-disabled-text',
               //active
               ' data-[state=true]:text-default data-[state=true]:after:content-[\'\'] data-[state=true]:after:absolute data-[state=true]:after:bottom-0 data-[state=true]:after:left-0 data-[state=true]:after:w-full data-[state=true]:after:h-[2px] ',
               props.type === 'primary' ? 'data-[state=true]:after:bg-primary' : 'data-[state=true]:after:bg-default',
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

const props = withDefaults(defineProps<{
  class? : HTMLAttributes["class"]
  tabList: Record < string, any > []
  type?:'primary' | 'secondary'
}>(),{
    type:'primary'
  }
);

</script>

<style scoped>

</style>
