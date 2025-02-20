- react 学习路径
  - react 基础语法 过一遍 （B站|文档）
  - hooks 相关
  - 全家桶
  - 状态管理
  - react 源码
  - Antd ...
  - ts

- AI Coding 
  - Vue & React 一起搞
  - 自然语义编程
    tailwindcss 语义化
    antd 组件

  - 给AI一张设计搞 -> 生成组件   

- http（cdn 更快） 引入 前端框架
  - vue
    Vue 

- 挂载点
  将前端工作交给vue/react， html里只需要一个挂载点  #app

  挂载vue App应用实例

- vue 哲学 让我们focues业务开发的现代前端框架
  - html界面上升到应用的复杂，现在前端复杂到数据驱动 
  - web应用是数据驱动的界面 
  - vue 事件机制 方便 @event=“handler”
  - 响应式编程
    - ref(0)包装简单数据类型成为响应式对象
    - .value = "" 修改value 值改变的同时，界面热更新(局部更新) 
    - 规避DOM操作 
    - 不再为API编程，而是focus on data 业务开发·

- App 和传统编程的区别
  - createApp 创建Vue App
  - #root 结合  
  - #root 里面 就是vue的世界了
    {{count}}
  - {{}} vue 的数据占位符
    可以改变
    不需要document.querySelector("")
    直接{{data}}
    setup(){
      return {
        data: 1
      }
    }