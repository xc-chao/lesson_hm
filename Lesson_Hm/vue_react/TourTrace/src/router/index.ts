import { createRouter, createWebHistory } from 'vue-router'
// 路由类型
import type { RouteRecordRaw } from 'vue-router'

// js 弱类型 好学 
// 大型项目
// let a :number = 1;
// a = 2;
// a = "abc";// 巨大隐患

const rootRoutes :RouteRecordRaw[] = [
    {
        path: 'home',
        name: 'Home',
        meta: {
            title: '首页',
            cache: true
        },
        component: () => import('../views/Home/Home.vue')// 路由懒加载
    },
    {
        path: 'assistant',
        name: 'Assistant',
        meta: {
            title: 'ai助手',
            cache: true
        },
        component: () => import('../views/Assistant/Assistant.vue')
    },
    {
        path: 'shopping',
        name: 'Shopping',
        meta: {
            title: '商城',
            cache: true
        },
        component: () => import('../views/Shop/Shopping.vue')
    },
    {
        path: 'mine',
        name: 'Mine',
        meta: {
            title: '个人中心',
            cache: false
        },
        component: () => import('../views/My/Mine.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue'),
    }
]
// 类型可以让代码正确
const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: 'App',
        component: () => import('../views/KeepAlive.vue'),
        redirect: '/home', // 重定向
        children: rootRoutes
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    // as 当什么类型来看 断言
    document.title = to.meta.title as string; // ts强制类型转换 js 里面不需要
    next()

})

export default router