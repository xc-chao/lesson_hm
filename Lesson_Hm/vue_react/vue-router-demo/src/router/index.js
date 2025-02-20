// 路由配置
import {
    createRouter,// 实例化创建路由
    createWebHashHistory // 路由模式
} from 'vue-router' // 插件
// 页面级别组件放到views文件夹下
// .. 调出上一级目录 * 匹配所有文件
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Pos from '../views/post/index/Index.vue'
import PostShow from '../views/post/show/Show.vue'
// 路由配置
const routes = [
    {
        path: '/', // 路由路径
        component: Home // 路由组件
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts',
        component: Pos
    },
    {
        path: '/posts/:postId', // 动态路由
        component:PostShow
    }
]
// 创建路由实例
const router = createRouter({ // 创建路由
    history: createWebHashHistory(), // 路由模式
    routes // 路由配置数组
})

// 导出路由
export default router