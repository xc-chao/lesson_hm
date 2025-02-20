import {
    createRouter,
    createWebHistory
} from "vue-router";
// import Home from '../page/Home.vue'
import About from '../page/About.vue'
import Login from '../page/Login.vue'

// 路由配置数组
const routers = [
    {
        path: '/',
        name: 'Home',
        component:()=>import('../page/Home.vue'),// 路由懒加载
        meta:{
            title:'首页',
            requireLogin:true
        },
        children:[
            {
                path: 'about',
                name: 'About',
                component:()=>import('../page/About.vue'),
                meta:{
                    title:'关于',
                    requireLogin:false
                }
            }
        ]
    },
    {
        path: '/login',
        component:()=>import('../page/Login.vue'),
        name:'Login',
        meta:{
            title:'登录',
            requireLogin:false
        }
    }
]
// 创建路由
const router = createRouter({
    history: createWebHistory(),
    routes: routers
})

// 路由守卫
router.beforeEach((to,from,next)=>{
    document.title=to.meta.title ||'掘金'; // 动态设置标题
    // if(to.meta.requireLogin){
    //     next('/login')
    //     return 
    // }
    next()
})
export default router;