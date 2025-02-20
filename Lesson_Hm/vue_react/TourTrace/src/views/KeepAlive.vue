<template>
    <div>
        <router-view />
        <div class="footer h-12">
            <TabBar class="fixed bottom-0"></TabBar>
        </div>
    </div>
</template>

<script setup lang="ts">
import TabBar from "../components/Home/TabBar.vue";
</script>

<style scoped>

</style>