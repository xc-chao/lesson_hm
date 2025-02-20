<template>
    <div>
        <p id="count">Lifecyle Componemnt - Count:{{count}}</p>
    </div>
</template>

<script setup>
import {
    defineProps, 
    onBeforeMount, 
    onMounted, 
    onBeforeUnmount, 
    onUnmounted, 
    onBeforeUpdate, 
    onUpdated
}from 'vue'
defineProps({
    count:{
        type:Number,
        required:true,
    }
})
// 在组件加载的时候就会执行
// console.log('Lifecyle Componemnt')
onBeforeMount(()=>{
    // 组件挂载之前
    console.log('onBeforeMount'+'挂载之前')
})
// 组件有生老病死
onMounted(()=>{
    // 组件挂载完毕
    console.log('onMounted'+'挂载完毕')
    // 组件挂载完毕后，获取组件的dom元素
    console.log(document.getElementById('count'),'-------')
})
onBeforeUnmount(()=>{
    // 组件卸载之前
    console.log('onBeforeUnmount'+'卸载之前')
})
onUnmounted(()=>{
    // 组件卸载
    console.log('onUnmounted'+'卸载')
    console.log(document.getElementById('count'),'-------')
})
onBeforeUpdate(()=>{
    // 组件更新之前
    console.log('onBeforeUpdate'+'更新之前')
})
onUpdated(()=>{
    // 组件更新
    console.log('onUpdated'+'更新')
})
</script>

<style scoped>

</style>