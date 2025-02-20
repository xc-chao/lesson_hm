# 百度面试题之绝对定位

## 文档(document 顺序)流(从上到下 块级元素，从左到右 行内元素)
- document html 文档
  网页的结构  
  页面绘制的本质


  - 按文档流先绘制 #box1 再绘制 #box2
    精确计算盒子的大小 = 内容（height + width） + padding + border + margin 
    盒子的位置 在原来的位置上给 margin 间距， 给位置定位


## position 的属性原理
   文档流有什么关系？
   - relative 相对定位
     - 默认的位置 移动 left top....
        position: relative;
        top:30px;
        left: 20px;
     - 盒子原来的占位（文档流中的位置）不受影响    
  - absolute 绝对定位
     - 绝对定位会离开文档流 
     - 首先找到最近的 祖先有定位节点的元素
       如果没有找到的话 就以 body(主窗口) 为基准 进行定位 