<template>
    <div>
        <h2>CompA</h2>
        <button @click="counterStore.increament">+</button>
        <p>count:{{ counterStore.count }}</p>
        <CompSubA />
    </div>
</template>

<script setup>
// 引入中央模块
import CompSubA from './CompSubA.vue';
import { useCounterStore } from '../store/counter';
const counterStore = useCounterStore(); // 本地和中央仓库的连接
// console.log(counterStore);
// const { count,increament } = counterStore;
</script>

<style scoped>

</style>