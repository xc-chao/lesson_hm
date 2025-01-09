<template>
    <div>
        <h2>CompB</h2>
        <button @click="counterStore.decreament">-</button>
        <p>{{ counterStore.count }}</p>
    </div>
</template>

<script setup>
import { useCounterStore } from '../store/counter';
const counterStore = useCounterStore();
// const { count,decreament } = counterStore;

</script>

<style scoped>

</style>