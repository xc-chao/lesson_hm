# css 底层基础

- 何为css？
    Ruleset 规则集
    ```css
      selector {选择器;
        property: value;属性：值;
      }
    ```
    ```css
      /* css rules */
      /* 规则集Ruleset */
      h1 { /* 选择器 */
        color: red;/* 声明 */
        text-align: center;/* 声明 */
      }
    ```

- css 为什么叫层叠样式表？
    层叠样式表 Cascading Style Sheets
    因为样式表可以被层叠，所以叫层叠样式表
    - html Dom 不能裸奔
    - css 选择DOM 元素运用样式规则
    - css是怎么引入的？
        - style 内联样式
        - link 外联样式
        - @import 导入样式表 es6 才有import
        - 行内样式 <p style="color:red;"></p>
    
    先下载样式，再解析DOM 应用样式
    dom + css = rander tree（显示页面 数据结构）  渲染树
    -> 浏览器渲染引擎->渲染页面
    
- 优先级
  - 从小到大
  - 计算规则
    *10 
    标签 1分
    类名 10分
    id 100分  
    行内 1000分
    !import 10000分 最大
  - 当选择器比较复杂的时候，优先级做加法
    .container ul li:nth-child(odd) /* :nth-child伪类也是10分 */ 22分
    一定选择最后的元素

- css 选择器分成哪几类？
  - 基础选择器
    - 标签选择器
    - 类选择器
    - id选择器
    - 通配选择器  * 性能不好
  - 组合选择器
    - 后代选择器 空格
    - 子选择器 >
    - 相邻兄弟选择器 +
    - 普通兄弟选择器 ~
  - 伪类选择器 :  动态伪类
    - :: active 激活状态 :: hover 鼠标悬停 :: first-child 第一个子元素 :: selection 选择的文字 ::foucs 获得焦点
  - 属性选择器