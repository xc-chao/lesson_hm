<template>
    <div>
        <h1>父组件传递的参数</h1>
        <p>{{rate}}</p>
    </div>
</template>

<script setup>
import {defineProps,ref,computed} from 'vue'
// 子组件和父组件不一定是一值绑定的，哪里要用往哪搬
// 定义props 业务 消费数据， 不是自身的数据，而是和父组件绑定的数据
// 告诉外界，我需要一个什么类型的数据
let props = defineProps(
    {
       value:Number,
    })
let count = ref(0)
let rate = computed(()=>{
    return "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value)
})
</script>

<style scoped>

</style>