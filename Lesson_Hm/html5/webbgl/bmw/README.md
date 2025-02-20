# Vue3 组件生命周期
    - 组件类实例化
      template 模板的编译、css的合成、js的编译
      onBeforeMount
    - 组件挂载到父组件上，完成渲染   
- v-if 切换卸载 / v-show 切换显示
  - 条件渲染 true 显示 false 隐藏
  - 区别 v-if 当为false不会挂载到组件树上  v-show 当为false会挂载到组件树上，只是设置display:none; css切换
  - 显示-> v-if false 销毁
  - 隐藏-> v-if true 挂载？ 
  - 有的组件需要toggle 显示/隐藏
    - 响应式数据 showComponment
    - 页面状态？ 

- 组件是一个类 Vue.Component LifecycleComponent ref + defineProps ...new 实例化
  template + css + js 结合， 做好准备工作 -> 挂载到父组件上 -> 渲染 -> 卸载 