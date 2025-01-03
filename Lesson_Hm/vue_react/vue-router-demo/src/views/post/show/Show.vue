<template>
    <div>
        <p>PostShow{{ postId}}</p>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute() // 当前路由
console.log(route)
// 从路由中获取参数
const {postId} = route.params
</script>

<style scoped>

</style>