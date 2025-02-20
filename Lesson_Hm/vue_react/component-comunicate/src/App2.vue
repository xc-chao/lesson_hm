<script setup>
import {
  ref, // 简单数据类型
  reactive // 复杂数据类型
} from 'vue'

// 组合API
// 计数业务
const nums = ref(0); // 简单数据类型
const increment = ()=>{
  nums.value++; // value 是 ref 的属性(模板占位符会自动解析)
}
// user form 对象数据业务
const obj = reactive({
  // 复杂数据类型
  name:'Alice',
  age:18
})
// 修改数据不需要 .value 属性
const updateState = ()=>{
  obj.name = 'Bob';
  obj.age++;
}
</script>

<template>
<div>
  <p>{{ nums }}</p>
  <button @click="increment">+</button>

  <p>Name:{{ obj.name }}</p>
  <p>Age:{{ obj.age }}</p>
  <button @click="updateState">修改</button>
</div>
   
</template>

<style scoped>

</style>
