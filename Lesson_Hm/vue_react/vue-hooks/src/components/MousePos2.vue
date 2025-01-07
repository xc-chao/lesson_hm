<template>
    <div>
        <p>mouse x: {{ mousePos.x }}</p>
        <p>mouse y: {{ mousePos.y }}</p>
    </div>
</template>

<script setup>
import {
    // composition api vue3 核心亮点
    reactive,
    onMounted, // 生命周期 life cycle
    onUnmounted
} from 'vue'

const mousePos = reactive({
    x: 0,
    y: 0
})
    // 全局监听事件
    const mousePosHandler = (e) => {
        mousePos.x = e.clientX
        mousePos.y = e.clientY
        console.log('我还在...')
    }

// 监听事件
onMounted(() => {
    window.addEventListener('mousemove', mousePosHandler)
})
// 卸载前消除事件
onUnmounted(() => {
    window.removeEventListener('mousemove', mousePosHandler)
})
</script>

<style scoped>

</style>