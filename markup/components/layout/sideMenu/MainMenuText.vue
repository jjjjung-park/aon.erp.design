<template>
  <UiSidebarGroup class="px-3">
    <!--  GroupLabel == 1depth -->
    <UiSidebarGroupLabel class="title__bold h-10 ">
      <component :is="activeItem.icon" v-if="activeItem.icon" class="size-4 mr-2"/>
      <span>{{ activeItem.title }}</span>
    </UiSidebarGroupLabel>
    <UiSidebarMenu>
      <template v-for="subItem in activeItem.subItems" :key="subItem.title">
      <!--   클래스 추가      -->
        <!--  MenuItem == 2depth -->
        <UiSidebarMenuItem class="gap-1">
          <template v-if="subItem.childItem">
            <UiCollapsible class="group/collapsible">
              <UiCollapsibleTrigger as-child class="pl-6 hover:bg-gray-100 mb-1">
                <UiSidebarMenuButton :tooltip="false" class=" h-10 ">
                  <span>{{ subItem.title }}</span>
                  <LucideChevronDown class="ml-auto text-secondary transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180 size-5"/>
                </UiSidebarMenuButton>
              </UiCollapsibleTrigger>
              <!--  CollapsibleContent : 3depth -->
              <UiCollapsibleContent>
                <UiSidebarMenuSub class="border-0 ">
                  <UiSidebarMenuSubItem v-for="item in subItem.childItem" :key="item.title" class="h-10 flex items-center pl-8 hover:bg-gray-100 rounded-sm has-[span[data-active=true]]:bg-primary-light">
                    <UiSidebarMenuSubButton as-child  @click="router.push(item.url || '#')" :is-active="item.isActive">
                      <span>{{ item.title }}</span>
                    </UiSidebarMenuSubButton>
                  </UiSidebarMenuSubItem>
                </UiSidebarMenuSub>
              </UiCollapsibleContent>
            </UiCollapsible>
          </template>
          <template v-else>
            <UiSidebarMenuButton :is-active="subItem.isActive" :tooltip="false" class="pl-6 h-10 hover:bg-gray-100 data-[active=true]:bg-primary-light data-[active=true]:text-primary data-[active=true]:font-bold" @click="router.push(subItem.url || '#');" >
              <span>{{ subItem.title }}</span>
            </UiSidebarMenuButton>
          </template>
        </UiSidebarMenuItem>
      </template>

    </UiSidebarMenu>
  </UiSidebarGroup>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import {
  useSidebar,
} from '@/ui/sidebar'
const router = useRouter()
defineProps<{
  activeItem: any | null
}>()

const { state } = useSidebar()

const hoverShow = ref<boolean>(false)

watch(state, (val) => {
  if(val !== 'collapsed') hoverShow.value = false
})
</script>
