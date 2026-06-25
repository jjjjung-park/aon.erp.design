<template>
  <div class="bg-surface-muted text-muted w-full h-full flex items-center justify-center">
    <p class="flex flex-col gap-2 items-center ">
      <slot>
        <LucideInfo/>
        <p>데이터가 없습니다. </p>
      </slot>
    </p>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped>

</style>
