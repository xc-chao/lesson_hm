# 开发weather

- 组件思维
- 切页面
  - 先写template{{占位数据}}
  - html 的语义化
  - BEM 命名
- BFC 基本概念 
  Block Formating Context 块级格式化上下文
  - 浮动 float 用来实现两（多）列式布局的方案
    float：left ; float: right 左右
  - 产生问题
    - 子元素离开了文档流，父元素高度塌陷
    - 后面的元素挤占nav的空间
  - float和position 是有区别的
      - float 是在左右
      - position 是在上下左右
      - float 没有完全脱离文档流  影响周边的文字，形成环绕效果
      - position 完全脱离文档流 
  - overflow:auto、diaplay:flex等 给nav块级元素开启了一个BFC（Block Formating Context）
    - 规则，BFC 元素可以得到内部的浮动元素的高度
    - 块级元素不等于BFC