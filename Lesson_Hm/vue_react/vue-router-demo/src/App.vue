<template>
  <!-- 导航栏 -->
  <div class="page">
    <header class="page-header">
      <h3 class="brand">{{ name }}</h3>
      <nav class="menu">
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于</router-link>
        <router-link to="/posts">内容</router-link>
      </nav>
    </header>
    <main class="page-body">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
const name = '智谱华章' // 数据

</script>

<style scoped>

</style>