<template>
    <div>
        {{value}}
        <button @click="handleClick">按钮</button>
    </div> 
</template>

<script setup>
defineProps(['value'])
const emit = defineEmits(['value'])
const handleClick = () => {
    emit('update:value', '新的valuevalue')
}
</script>

<style scoped>

</style>