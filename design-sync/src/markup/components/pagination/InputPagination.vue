<template>
  <div class="flex items-center gap-3 justify-center  w-full">
    <UiButton variant="ghost" size="icon">
      <LucideChevronLeftIcon/>
    </UiButton>
    <div class="flex  items-center gap-2 text-secondary text-sm">
      <UiInput class="w-[64px] text-center" v-model="modelValue"/>
      <span class="text-disabled-text">/</span>
      {{ total }}
    </div>
    <UiButton variant="ghost" size="icon">
      <LucideChevronRightIcon/>
    </UiButton>
  </div>
</template>

<script setup lang="ts">
const modelValue = ref<number>(1)
const props = defineProps<{
  total?: number
}>()

</script>

<style scoped>

</style>
