<template>
  <div ref="parentRef" class="overflow-auto" :style="{ height: scrollHeight }">
    <div :style="{ height: rowVirtualizer.getTotalSize() + 'px', position: 'relative' }">
      <div
        v-for="virtualRow in rowVirtualizer.getVirtualItems()"
        :key="virtualRow.index"
        :data-index="virtualRow.index"
        :ref="rowVirtualizer.measureElement"
        :style="{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          transform: `translateY(${virtualRow.start}px)`
        }"
        :class="[props.class]"
      >
        <slot
          :item="listItem[virtualRow.index]"
          :index="virtualRow.index"
        >
        </slot>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { useVirtualizer } from '@tanstack/vue-virtual'
const parentRef = ref<HTMLElement | null>(null)

interface Props {
  listItem?:Array<any>
  estimateSize?: number
  overscan?: number
  class?:string
  elHeight?:number
  scrollHeight?:string
}

const props = withDefaults(defineProps<Props>(), {
  estimateSize: 40,
  overscan: 5,
  size: 40,
})

const options = computed(() => ({
  count:props.listItem.length,
  getScrollElement: () => parentRef.value,
  estimateSize: () => props.estimateSize,
  overscan: props.overscan,
}))
const rowVirtualizer = useVirtualizer(options);

</script>

<style scoped>

</style>
