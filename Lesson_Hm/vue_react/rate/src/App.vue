<script setup>
import AppHeader from './components/AppHeader.vue'
import Appmain from './components/Appmain.vue'
import AppSidebar from './components/AppSidebar.vue'
</script>

<template>
  <div class="container">
    <AppHeader />
    <div class="flex">
      <Appmain />
      <AppSidebar />
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
}
</style>