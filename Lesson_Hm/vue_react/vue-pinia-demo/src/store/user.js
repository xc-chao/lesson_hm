// 全局共享的用户状态
import { defineStore } from "pinia";
import { 
    ref,
    reactive
} from "vue";
// hooks 编程
export const useUserStore = defineStore('user',()=>{
    const isLogin = ref(false);
    const doLogin = ()=>{
        isLogin.value = true;
    }
    const doLogout = ()=>{
        isLogin.value = false;
    }
    const userInfo = reactive({
        name:'张三',
        avatar:'',
        message:0,
        uid:null
    })
    // 在 store/user.js 中：
const setUserInfo = () => {
    userInfo.name = "是染染啊";
    userInfo.avatar = "https://p6-passport.byteacctimg.com/img/user-avatar/c43e6611d1f020db6f5657f679946500~140x140.awebp";
    userInfo.message = 10;
    userInfo.uid = 728309102811129;
};

return {
    isLogin,
    doLogin,
    doLogout,
    userInfo,
    setUserInfo // 确保这里使用一致的名称
};
})