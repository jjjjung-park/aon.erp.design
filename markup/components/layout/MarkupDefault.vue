<template>
  <UiSidebarProvider>
    <LeftSidebar />
    <UiSidebarInset class="overflow-hidden h-screen">
      <Header />
      <PageTabs />

      <router-view />

    </UiSidebarInset>
  </UiSidebarProvider>
</template>

<script setup lang="ts">
import LeftSidebar from './sideMenu/LeftSidebar.vue'
import Header from './Header.vue'
import {PageTabs} from "../tabs";

</script>

