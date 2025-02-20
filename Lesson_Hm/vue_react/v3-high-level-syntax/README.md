# vue3 高级语法

- watch & watchEffect
  - 监听数据变化，执行相关操作
  - 参数不同
    watch 第一个参数 可以是一个响应式数据源也可以是一个数组
    第二个参数 是一个回调函数 可以拿到新旧值
    第三个参数 选项 immediate 立即执行回调函数 默认是false
    deep 深度 
    watchEffect 自动执行一次，默认deep
  - effect 副作用 相关的响应式对象发生改变后，会自动执行的副作用  
  - v-model.number 双向绑定数据类型 特别适合表单

- slot 插槽
  - 插在组件的开和关之间
    组件开关之间的内容
  - 业务？ 提升组件的定制性
    props ref/reactive
    组件一部分UI 由父组件决定？  
    父组件通过 组件开关之间来传递