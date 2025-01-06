<template>
    <div>
        child
    </div>
</template>

<script setup>
import {
    defineExpose
} from 'vue';
defineExpose({
   // 暴露属性
   childName:'这是子组件的属性',
   someMethod:()=>{
    console.log('这是子组件的方法');
   }
});
</script>

<style scoped>

</style>