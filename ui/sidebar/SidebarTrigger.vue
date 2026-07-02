<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { PanelLeft } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { Button } from '@/ui/button'
import { useSidebar } from './utils'

const props = withDefaults(defineProps<{
    class?: HTMLAttributes['class'],
    icon?: any
    variant?: 'ghost' | 'outline' | 'link'
  }>(),
  {
    variant: 'ghost',
  })

const { toggleSidebar } = useSidebar()
</script>

<template>
  <Button
    data-sidebar="trigger"
    data-slot="sidebar-trigger"
    :variant="props.variant"
    :class="cn('', props.class)"
    @click="toggleSidebar"
    size="icon"
  >
    <component :is="props.icon || PanelLeft" />
    <span class="sr-only">Toggle Sidebar</span>
  </Button>
</template>
