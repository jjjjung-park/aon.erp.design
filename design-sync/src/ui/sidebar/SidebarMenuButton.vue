<script setup lang="ts">
import {reactiveOmit} from '@vueuse/core'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/ui/tooltip'
import SidebarMenuButtonChild, {type SidebarMenuButtonProps} from './SidebarMenuButtonChild.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<SidebarMenuButtonProps & {
  tooltip?: any,
  size?: string,
}>(), {
  as: 'button',
  variant: 'default',
  size: 'default',
})

const delegatedProps = reactiveOmit(props, 'tooltip')

</script>

<template>
  <SidebarMenuButtonChild v-if="!tooltip" v-bind="{ ...delegatedProps as any, ...$attrs }" class="hover:cursor-pointer hover:font-bold">
    <slot/>
  </SidebarMenuButtonChild>
  <TooltipProvider v-else>
    <Tooltip>
      <TooltipTrigger asChild class="">
        <SidebarMenuButtonChild v-bind="{ ...delegatedProps as any, ...$attrs }">
          <slot/>
        </SidebarMenuButtonChild>
      </TooltipTrigger>
      <TooltipContent side="right" align="center" class="z-[999]" variant="primary">
        <template v-if="typeof tooltip === 'string'">
          {{ tooltip }}
        </template>
        <component :is="tooltip" v-else/>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>

</template>
