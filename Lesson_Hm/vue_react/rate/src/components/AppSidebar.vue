<template>
    <aside class="flex">
        <user/>
        <user/>
        <user/>
    </aside>
</template>

<script setup>
import user from './user.vue'
</script>

<style scoped>
aside{
    width: 200px;
    height: 500px;
    background-color: lightblue;
}
</style>