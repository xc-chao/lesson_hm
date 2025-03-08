# 0.5px 问题

- 请问有0.5px 像素吗？
  发光元器件 没有小数px 1px
  retina

- 移动端高清屏幕 1px 有点粗
- 通过css3的 新特性 transform: scale(0.5) 缩放实现
- 通过 transform: buttom center 设置不动点 buttom 表示压到底部 top 表示压到顶部


## 当设置
.box::before{
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%; /* 或者指定具体的高度 */
    border: 1px solid #000;
    box-sizing: border-box; /* 确保边框包含在元素的宽高内 */
}

因为元素没有宽高，所以只有边框的底部会显示出来。