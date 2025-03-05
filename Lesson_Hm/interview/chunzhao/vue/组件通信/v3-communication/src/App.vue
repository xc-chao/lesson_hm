<template>
  <div>
    <ParentOne />
    <ParentTow />
    <EmitParent />
    <ExposeParent />
    <VModelParent />
    <ProvideParent />
  </div>
</template>

<script setup>
import ParentOne from './components/ParentOne.vue'
import ParentTow from './components/ParentTow.vue';
import EmitParent from './components/EmitParent.vue';
import ExposeParent from './components/ExposeParent.vue';
import VModelParent from './components/VModelParent.vue';
import ProvideParent from './components/ProvideParent.vue';
</script>

<style scoped>

</style>