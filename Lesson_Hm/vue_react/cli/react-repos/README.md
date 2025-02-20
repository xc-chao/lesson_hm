# react repos 项目列表

- 用户的仓库列表
  - repos 组件 

- react 组件
  - .vue, .jsx 组件
  - components/ -> 挂载App.jsx
  - 相比于vue的三部分清晰明朗了 react 函数即组件 
    - 首字母大写
    - 返回一段html，jsx
  
  - vue 和 react 相同点/区别点 
    - 组件化思想
    - 现代前端编程框架
    - 都有工程化配套
    - 都有状态管理
    - 数据绑定 {{}} {}
    - 响应式， 数据驱动，不需要操作DOM 耗性能操作 
    
    - 区别 
      - .jsx, .vue
      - template,js,css 三段式、 函数即组件
      - vue 好入门 api丰富，react 难入门但纯粹（JS高手） 
      - vue css 在组件内部，react css 单独文件
      - 组件 = 组（html + css + js）和完成一件功能拆分  
      - vue template ，react jsx （js）
        - JSX 是react 最漂亮的部分，在函数中，最方便的表达UI部分   
          本声不可以的，react回去解析JSX html（XML）in js
        - 不能写class， 要用className 
  - 组件类
    - 封装组件 import + export default 功能的拆分
    - 函数（构造）组件 return html 是必须的  
    - 组件可以复用
    - 封装的是UI + 响应式数据
    - 只要写原生JS 就可以了