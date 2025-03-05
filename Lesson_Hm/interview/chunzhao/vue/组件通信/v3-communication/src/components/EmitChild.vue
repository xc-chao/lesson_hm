<template>
    <div>
        <button @click="handClick">按钮</button>
        <button @click="emit('myClick','hello')">按钮</button>
    </div>
</template>

<script setup>
const emit = defineEmits(['myClick']);

const handClick = () => {
    emit('myClick','hello')
}
</script>

<style scoped>

</style>