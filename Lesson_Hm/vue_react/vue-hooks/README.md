# vue-hooks 编程

- react 的hooks 编程，vue 直接抄
- 从vue 功能 -> 组件思维 -> hooks 编程
- 内存泄漏 重要
  不会主动取消事件监听，组件销毁，事件处理函数无法
- 生命周期 v-if 组件卸载前打扫内存战场

- es6 的模块化
  - import from 引入
    import Obj from 默认输出的对象 exprot default  
    import {A，B} 解构出想要的自定义hook export 对象
  - export default 导出

- hooks 编程风格
  - 函数式编程
     useMouse use开头，hooks 函数的特征
  - 将响应式业务（状态）和UI 分离
  - 让我们的组件更好，维护复用
  - UI 组件开发工程师
  - 组件拆分为 UI界面 和 业务逻辑

- 组件 = UI + State 