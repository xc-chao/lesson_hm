<template>
    <div>
      <ExposeChild ref="comp" />
      <button @click="handleClick">按钮</button>
    </div>
  </template>
  
  <script setup>
  import ExposeChild from './ExposeChild.vue'
  import { ref } from 'vue'
  const comp = ref(null)
  const handleClick = () => {
    console.log(comp.value.childName);
    comp.value.someMethod();
  }
  
  </script>
  
  <style scoped>
  
  </style>