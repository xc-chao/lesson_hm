<template>
    <main>
        Main
        <h1>你的评分是{{ score }}</h1>
        <Rate :value="score"/>
        <Item />
        <Item />
    </main>
</template>

<script setup>
import Item from './Item.vue'
import Rate from './Rate.vue'
import { ref } from 'vue'
// 将数据 从父组件传递给子组件 使用props
const score = ref(5)
</script>

<style scoped>
main{
    flex: 1;/* 占满剩余空间 */
    height: 500px;
    background-color: aqua;
}
</style>