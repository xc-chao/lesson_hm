import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import{
    ElButton,
    ElInput,
    ElFormItem,
    ElForm,
    ElContainer,
    ElHeader,
    ElMenu,
    ElMenuItem,
    ElSubMenu,
    ElAside,
    ElMain
} from 'element-plus' // 按需引入 优化加载性能问题
import 'element-plus/dist/index.css'
import router from './router'
import { createPinia } from 'pinia'

createApp(App)
    .use(createPinia())
    .use(router)
    .use(ElButton) // UI 组件库 开发效率提升了
    .use(ElInput)
    .use(ElFormItem)
    .use(ElForm)
    .use(ElContainer)
    .use(ElHeader)
    .use(ElMenu)
    .use(ElMenuItem)
    .use(ElSubMenu)
    .use(ElAside)
    .use(ElMain)
    .mount('#app')
