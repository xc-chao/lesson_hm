# BATJTMD


## 腾讯
### WEUI 前端框架

- 先写结构
  - 总结构 page 盒子
  - 上下结构
  - title + desc
  - button 区域

### BEM 国际命名规范
> 简单，可复用的根据页面结构和功能区块 来命名类名的国际规范。
  .weui-cells Block
  Block 页面由区块（独立功能）构成
  Element 区块由元素构成
  BE 是可以嵌套的
- 页面结构套路 十几个套路
  .page>.page__hd+.page__bd+.page__ft 
  - .page Block 快
   - .page__hd Element 元素
   - .page__bd
   - .page__ft
  
  - .weui-btn
    项目代号 + 元素 

- css 源码
  - 模块化 