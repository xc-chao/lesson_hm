<template>
    <div>
        ChildTow
        {{ msg2  }}
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    msg2: {
        type: String,
        required: true
    } 
})

</script>

<style scoped>

</style>