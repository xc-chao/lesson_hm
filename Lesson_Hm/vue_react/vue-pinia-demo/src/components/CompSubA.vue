<template>
    <div>
        <p>CompA的子组件: CompSubA</p>
        <hr>
        {{ count }}
    </div>
</template>

<script setup>
import { toRefs } from 'vue'; // 引入toRefs 使数据变成响应式
import { useCounterStore } from '../store/counter';
const counterStore = useCounterStore(); 
const { count } = toRefs(counterStore); // 解构赋值会，丢失响应式，可以通过toRefs解决

</script>

<style scoped>

</style>