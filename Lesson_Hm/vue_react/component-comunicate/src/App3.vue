<template>
    <div>
        <h2>父组件</h2>
        <p>来自子组件的消息：{{ messageFromChild }}</p>
        <!-- @ 事件 不是js 内置事件 是自定义事件 -->
        <ChildComponent @child-message = "handleChildMessage" :title="title"/> 

    </div>
</template>

<script setup>
// 父子组件通信
import { ref } from 'vue';
import ChildComponent from './components/ChildComponent.vue';
const title = ref('这是父组件的标题');
const messageFromChild = ref('');
// 自定义事件 child-message 父组件间的约定
const handleChildMessage = (message) => {
    messageFromChild.value = message;
};

</script>

<style scoped>
    
</style>