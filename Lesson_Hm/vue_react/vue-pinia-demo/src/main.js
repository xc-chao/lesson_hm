import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 全家桶的最后一步 引入pinia
import { createPinia } from 'pinia'

const app =createApp(App)
// 大型项目  状态管理
// pinia 的实例 vue 全家桶中的Store
const pinia = createPinia()
    app.use(pinia)
    app.mount('#app')
