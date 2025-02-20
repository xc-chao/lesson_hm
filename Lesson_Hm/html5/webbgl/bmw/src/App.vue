<template>
  <div>
    <button @click="toggleComponent">Toggle Component</button>
    <button @click="incrementCount">Increment Count</button>
    <p>Count:{{ count }}</p>
    <transition name="fade">
    <LifecycleComponent v-if="showComponent" :count="count"/>
    </transition>
    
    <div class="box1" :style="{width:width + 'px'}"></div>
    <button @click="change">click</button>
    
  </div>
</template>

<script setup>
import LifecycleComponent from './components/LifecycleComponent.vue'
import { ref } from 'vue'
const count = ref(0)
const showComponent = ref(true)
const width = ref(100);

const toggleComponent = () => {
  showComponent.value = !showComponent.value;
};

const incrementCount = () => {
  count.value++;
};

const change = () => {
  width.value += 100;
};
</script>

<style scoped>

.box1{
  height: 100px;
  background-color: red;
  transition: width 3s;
}
/* 定义淡入淡出的过渡效果 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active 在 Vue < 2.1.8 */ {
  opacity: 0;
}
</style>