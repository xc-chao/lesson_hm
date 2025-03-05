<template>
    <div>
        ParentOne
        <ChildOne :msg1="msg1" :msg2="msg2" />
    </div>
</template>

<script>
import { ref } from 'vue'
import ChildOne from './ChildOne.vue'
export default {
    data() {
        return {
            msg1: '传给子组件的msg1',
        }
    },
    setup(){
        // 打破vue2 语法割裂逻辑的限制， 把响应式数据和方法都放在setup方法中
        const msg2 = ref('传给子组件的msg2')
        return {
            msg2
        }
    },
    components: {
        // 动态导入组件
        ChildOne  
    }
}

</script>

<style scoped>

</style>