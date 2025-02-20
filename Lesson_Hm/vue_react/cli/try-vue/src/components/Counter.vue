// vue3 中使用 ref 定义响应式数据
// script里面写一个setup函数，不需要写return，直接写响应式数据，这是一个语法糖，会自动把数据变成响应式数据
<script setup>
import { ref } from 'vue'
let count = ref(0)
// 传统函数
function add() {
    count.value++
}
// 箭头函数
const sub = () => {
    if (count.value <= 0)return
    count.value--
}
</script>
<template>
    <div class="counter">
        <p>计数器</p> 
        <p>count：{{ count }}</p> 
        <button @click="add()">点击+1</button>
        <button @click="sub()">点击-1</button>
    </div>
</template>
<style scoped>
.counter{
    text-align: center;
    margin-top: 50px;
}
button{
    padding: 10px 20px;
    font-size: 16px;
}
</style>