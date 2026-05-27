<template>
  <UiSidebarGroup class="flex-col p-0 ">
    <template v-for="item in items" :key="item.title">
      <UiSidebarMenuButton  class="flex items-center relative justify-center size-16 hover:cursor-pointer hover:bg-transparent text-primary-foreground/40 hover:text-white active:bg-transparent active:text-white data-[active=true]:bg-transparent data-[active=true]:text-white"
                            :tooltip="open?item.title:undefined"
                            :is-active="activeItem.title === item.title"
                           @click="clickAction(item)"
                           @mouseenter="hoverAction(item)">
        <component :is="item.icon" v-if="item.icon" class="stroke-2"/>
        <!--  하위메뉴 있음 표시 아이콘  -->
        <LucideEllipsisVertical class="absolute right-0 size-5"/>
      </UiSidebarMenuButton>
    </template>
  </UiSidebarGroup>
</template>

<script setup lang="ts">
import {  type LucideIcon } from 'lucide-vue-next'

import { useSidebar } from '@/ui/sidebar'
defineProps<{
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[],
  activeItem: any | null
}>()

const emit = defineEmits(['update:activeItem'])
const {setOpen, setHover, open} = useSidebar()
const activeMenu = (item: any) => {
  emit('update:activeItem', item)
}
const clickAction = (item: any) => {
  item.isActive = true;
  activeMenu(item)
  setOpen(true);
  setHover(false)

}
const hoverAction = (item: any) => {
  if (!open.value) {
    activeMenu(item);
    setHover(true)
  }
}

</script>
