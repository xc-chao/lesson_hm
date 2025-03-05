<template>
    <div>
        {{ name }}
    </div>
</template>

<script setup>
import { inject } from 'vue';
const name = inject('name');
</script>

<style scoped>

</style>