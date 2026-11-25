<template>
  <UiPagination v-slot="{ page }" :items-per-page="5" :total="100" :default-page="1">
    <UiPaginationContent v-slot="{ items }">
      <UiPaginationPrevious />

      <template v-for="(item, index) in items" :key="index">
        <UiPaginationItem
          v-if="item.type === 'page'"
          :value="item.value"
          :is-active="item.value === page"
        >
          {{ item.value }}
        </UiPaginationItem>
      </template>
      <UiPaginationEllipsis :index="2" />
      <UiPaginationNext />
    </UiPaginationContent>
  </UiPagination>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
