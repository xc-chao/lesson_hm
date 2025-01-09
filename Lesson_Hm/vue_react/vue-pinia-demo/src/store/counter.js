// 中央 状态管理器 login uesrInfo 
// count 收入到中央仓库
// 定义仓库
import { defineStore } from "pinia";
import { ref } from "vue";
export const useCounterStore = defineStore('counter',()=>{
    const count = ref(0)

    function increament(){
        count.value++
    }
    function decreament(){
        count.value--
    }
    return {
        count,
        increament,
        decreament
    }
})