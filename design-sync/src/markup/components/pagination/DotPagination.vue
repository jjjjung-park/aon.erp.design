<template>
  <div class="flex gap-2 justify-center w-full">
    <template v-for="(item, index) in total" :key="index">
      <UiButton variant="ghost" size="icon-sm" class="w-2 h-2 bg-surface data-[state=active]:bg-primary" />
    </template>
  </div>
</template>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    total?: number
  }>(),
  {
    total: 5,
  }
)
</script>
<style scoped>

</style>
