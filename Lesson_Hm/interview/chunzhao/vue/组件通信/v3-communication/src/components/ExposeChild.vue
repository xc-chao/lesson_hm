<template>
    <div>
        ExposeChild
    </div>
</template>

<script setup>
defineExpose({
    childName: 'Child',
    someMethod: () => {
        console.log('someMethod')
    }
})
</script>

<style scoped>

</style>