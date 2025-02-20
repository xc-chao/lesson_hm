<template>
    <div>
        <p>mouse x: {{ mousePos.x }}</p>
        <p>mouse y: {{ mousePos.y }}</p>
    </div>
</template>

<script setup>
import {
    // 自定义hook
    useMouse,
    useMemo
} from '../hooks/useMouse'
import {
    reactive
} from 'vue'
import Hook from '../hooks/useMouse'
useMemo()
console.log(Hook) // 打印的是useMouse的返回值
const {x,y} = useMouse()
const mousePos = reactive({
    x,
    y
})
</script>

<style scoped>

</style>