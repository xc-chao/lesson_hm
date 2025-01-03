import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 自动导入index.js文件
import router from './router' // router -> 路由对象
const app = createApp(App)
console.log(app)
    app.use(router)
    app.mount('#app')