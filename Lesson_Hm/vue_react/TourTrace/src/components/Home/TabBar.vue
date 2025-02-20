<template>
    <van-tabbar v-model="active" 
    class="shadow-black shadow-2xl opacity-90">
      <van-tabbar-item to="/assistant">
        <template #icon>
          <van-icon class="iconfont" class-prefix="icon" name="zhinengAIzhushou" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart" to="/shopping">商城</van-tabbar-item>
      <van-tabbar-item icon="manager" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
    
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  // 获取当前路由
  const active = ref<number>(1);
  </script>
  
  <style scoped>
  
  </style>