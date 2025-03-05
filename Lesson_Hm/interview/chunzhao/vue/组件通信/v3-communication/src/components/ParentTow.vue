<template>
    <div>
        ParentTow
        <ChildTow :msg2="msg2" />
    </div>
</template>

<script setup>
import ChildTow from './ChildTow.vue'
import { ref, reactive } from 'vue'

const msg2 = ref('传给子组件的msg2')

// const msg1 = reactive('传给子组件的msg1')
</script>

<style scoped>

</style>