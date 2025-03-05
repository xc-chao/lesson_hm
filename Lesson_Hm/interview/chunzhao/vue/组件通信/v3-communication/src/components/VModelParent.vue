<template>
    <div>
        <VModelChild v-model:value="value" />
    </div>
</template>

<script setup>
import VModelChild from './VModelChild.vue';
import { ref } from 'vue';

const value = ref('hello');
</script>

<style scoped>

</style>