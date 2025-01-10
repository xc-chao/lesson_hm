import {
    createRouter,
    createWebHistory
} from "vue-router";
// import Home from '../page/Home.vue'
import About from '../page/About.vue'
import Login from '../page/Login.vue'

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
// // 路由守卫 
// const routerGuard = (to,from,next)=>{
//     console.log(to,from);
//     if(to.meta.requireLogin){
//         // 登录
//         next()
//     }else{
//         next()
//     }
// }

const router = createRouter({
    history:createWebHistory(),
    routes:routers
})

export default router;