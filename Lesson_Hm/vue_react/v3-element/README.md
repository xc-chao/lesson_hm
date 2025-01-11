# Elements 组件库

- 如何开发一个vue项目
  - vite 工程化 
    npm init vite
  - vue 核心语法（响应式、组件化、指令等）
    前端框架 
  - vu-router
  - pinia
  - elements3 UI 组件库
  - stylus npm i -g stylus 全局安装
  - axios ajax 请求封装库

- app.use
   向vue app 中注册插件 生态
   element3 提供得组件可以全局使用
   - 注意问题 性能
     页面打开会变慢，按需加载 
     - element3 组件 以el- 开头 
     - 不要重复造轮子 70% 常见组件需求

## 项目亮点
- 项目全面使用es6 + 风格
  代码简洁 易读 易维护 
- 良好的注释习惯
- 按需加载vue 组件库element3，性能优化，页面加载速度 
- 路由
  - 多级路由
    - 二级路由 path 前面不要 /
  - path,component,name,meta
  - 路由懒加载
    最佳用户体验是快
    按需加载页面级别组件 import函数引入方式 （）=> import('') 
  - 路由守卫
- 表单组件
  - 看文档
  - :model="form" 收集表单数据
  - ref 获取表单实例
    - 有时候要获取DOM元素，组件对象
    - 调用相应的方法
    - template 用ref="formRef" 标记DOM || 组件
      - const formRef = ref(null) 挂载前就为null
      - 挂载后就拿到了
    - 表单的校验 
      - rules
      - items prop
      - valid 方法 boolean
  - 布局组件
    - ElContainer
    - ElAsider
    - ElMain
    - ElRow
    - ElCol