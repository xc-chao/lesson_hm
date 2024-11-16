# 星球大战 

- <!DOCTYPE html> 声明文档类型为html5
  html5 版本声明头
- *
  css 通配符， 所有元素
  margin 0 padding 0 所有元素初始化一致
  由于有不同的浏览器厂商，默认值不一样
  需要在页面样式开始之前，做一个样式reset 让任何浏览器访问，我们的页面样式都是一张白纸
  在所有的浏览器上的访问，都显示一样的效果


* 性能不太好， 所以我们宁愿列出来所有的标签，也不要用通配符

-居中 
  - 定位 position：absolute
    - 百分比相对于父元素
  - transform 变基属性
    - translate 平移
      - x 左移 负 右移 正
      - y 上移 负 下移 正
  - 背景大法
    盒子会在页面的占位显现出来

- css 动画
  - animation 动画样式
  - keyframes 关键帧
  - transfrom scale translateZ
  - 飞船模拟动画， 逼真的动画效果
  - 1% 的时间差， 画龙点睛
  - transfrom-style: prespective-3d 开启3d效果的支持
    - perspective: 800px 视点， 眼睛到屏幕的距离


- inline 元素不支持transfrom， display 属性切换为 inline-block 元素，这样才会支持旋转。