<template>
    <div>
        <h1>Layout-组件</h1>
        <header>
            <!-- 具名插槽 -->
            <slot name="header"></slot> 具名插槽
        </header>
        <main>
            <!-- 默认插槽 -->
            <slot></slot>
        </main>
        <footer>
            <!-- 具名插槽 -->
            <slot name="footer"></slot>
        </footer>      
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>