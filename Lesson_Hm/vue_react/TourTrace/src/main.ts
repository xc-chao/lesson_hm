import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/tailwind.css'
import router from './router/index.ts'
import App from './App.vue'
const app = createApp(App)

app.use(createPinia()) // pinia启用
app.use(router)
app.mount('#app')