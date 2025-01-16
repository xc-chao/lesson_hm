<template>
  <div>
    {{ typeof user.age }}
    <p>姓名: {{ user.name }}</p>
    <input v-model="user.name" placeholder="输入姓名" />
    <p>年龄: {{ user.age }}</p>
    <input type="number" v-model.number="user.age" placeholder="输入年龄" />
  </div>
</template>

<script setup>
import { reactive, ref, watch, watchEffect } from 'vue';

// 定义一个嵌套的对象作为响应式数据
const user = reactive({
  name: '张三',
  age: 25,
  hometown: {
    city:{
      name: '北京',
      country: '中国'
    }
  }
});

// 使用 watch 监听 user 对象的变化，并设置 deep 为 true
// watch(user, (newVal, oldVal) => {
//   console.log('user 发生了变化');
//   console.log('新值:', newVal);
//   console.log('旧值:', oldVal);
// },{
//   deep: true
// });

// 默认执行一次
// watchEffect 不需要配置deep
watchEffect(() => {
  // Object.prototype.toString()
  console.log(`user 发生了变化${JSON.stringify(user)}`); 
})
</script>