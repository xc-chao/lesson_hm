<template>
    <div>
        <h2>子组件</h2>
        <p>来自父组件的消息：{{ title }}</p>
        <button @click="sendMessage">发送消息给父组件</button>
    </div>
</template>

<script setup>
import { 
    defineProps, // 接收父组件传递过来的属性
    ref,
    defineEmits // 发送消息给父组件
} from 'vue';

// 接收父组件传递过来的属性
const props = defineProps({
    title:{
        type:String,
        default:'默认标题',
        required:true
    }
});

// 发送消息给父组件
const ChildComponent = ref('hello parent');
const emit = defineEmits(['child-message']);
const sendMessage = () => {
    emit('child-message', ChildComponent);
};
</script>

<style scoped>

</style>