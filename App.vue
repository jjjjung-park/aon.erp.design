<template>
  <div class="min-h-screen flex flex-col bg-background text-default">
    <header class="flex items-center gap-2 border-b border-border px-4 h-12 shrink-0">
      <span class="title__bold mr-2">마크업 화면 미리보기</span>
      <nav class="flex items-center gap-1">
        <button
          v-for="item in screens"
          :key="item.name"
          class="px-3 h-8 rounded-sm text-sm hover:bg-gray-100"
          :class="current === item.name ? 'bg-primary-light text-primary font-bold' : ''"
          @click="current = item.name"
        >
          {{ item.label }}
        </button>
      </nav>
    </header>

    <main class="flex-1 min-h-0 overflow-auto">
      <component :is="activeComponent" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import Atomic from '@/markup/views/components/Atomic.vue'
import Molecule from '@/markup/views/components/Molecule.vue'
import Skeleton from '@/markup/views/components/Skeleton.vue'
import Structures from '@/markup/views/components/Structures.vue'
import Structures2 from '@/markup/views/components/Structures2.vue'
import Table from '@/markup/views/components/Table.vue'

const screens = [
  { name: 'structures', label: 'Structures', comp: Structures },
  { name: 'structures2', label: 'Structures2', comp: Structures2 },
  { name: 'table', label: 'Table', comp: Table },
  { name: 'atomic', label: 'Atomic', comp: Atomic },
  { name: 'molecule', label: 'Molecule', comp: Molecule },
  { name: 'skeleton', label: 'Skeleton', comp: Skeleton },
] as const

const current = ref<(typeof screens)[number]['name']>('structures')
const activeComponent = computed(
  () => screens.find((s) => s.name === current.value)?.comp ?? Structures,
)
</script>
