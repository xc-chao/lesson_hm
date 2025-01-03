# vue 全家桶之 vue-router 路由

- vue 语法 组件（vue2 选项式 / vue3 组合式 大型项目 200行）、响应式、生命周期、指令（v-if：/ v-show：v-model：v-for：v-bind：）、三种数据（自有数据ref、props、computed）
- vue-router 路由
  - 跳转到其他页面 路由 
- vuex/pinia 状态管理


# vue-router
- 将接管路由，像交警一样
- router-link 取代 a 标签 为什么？
  - 性能更好，因为 a 标签会重新加载页面，router-link 不会
  - 更符合语义化，a 标签是链接，router-link 是路由链接
  - router-link 是一个组件，a 标签是一个标签
  - router-link 组件包含a的功能，路由对应的组件显示到相应位置
  - 组件没有生效 无法识别的组件 -> 当作html标签处理
  - 向路口文件引入路由

- router 专门的目录
  - index.js 入口配置文件
  - router-link 是vue-router 提供的组件，use（router）不用引入就可以生效