<template>
  <div>
    <!-- <reouter-view/> -->
  </div>
</template>

<script setup>
// import { reactive, effect } from '@vue/reactivity';
import { 
  reactive, 
  // effect 
} from './reactivity'
const ret = reactive({
  num: 0
})
let val;
// effect(()=>{
//   // 依赖地图
//   val = ret.num;
// })
// console.log(val);
// ret.num = 10;
// console.log(val);
</script>

<style scoped>

</style>