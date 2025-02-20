<template>
  <div>
    <!-- :count="count", 冒号后传递的参数名，双引号表示父组件传递参数给子组件 -->
    <CompA />
    <CompB />
    <div v-if="isLogin">
      <img :src="userInfo.avatar" alt="User Avatar">
    </div>
    <div v-else>
      <button @click="login">登入</button>
    </div>
  </div>
</template>

<script setup>
import CompA from './components/CompA.vue';
import CompB from './components/CompB.vue';
import { useUserStore } from './store/user';
import { toRefs } from 'vue';

const userStore = useUserStore();
const { userInfo, isLogin } = toRefs(userStore);
const { doLogin, doLogout, setUserInfo } = userStore;

function login() {
    console.log('Login button clicked');
    doLogin();
    setUserInfo();
}
</script>

<style scoped>
/* Add any scoped styles here */
</style>