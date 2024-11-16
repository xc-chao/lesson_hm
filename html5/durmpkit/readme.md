# html5 代码敲击乐

## 前端是代码界的导演

## 编写静态页面
- 先写html结构，再写样式
- 职责分离
- html 是演员
  - 盒子 div
    - html标签
    - div 盒子
    - span 内容
  - 利用html先写出结构
  
- 开发效率是第一位的
  - Emmett 快速编写html代码
     .keys>(.key>div+span.sound)*9
- 现在有个毛胚房（结构），需要给它上色（样式）

- html 标签分成两类
  - 块级元素 默认占据整个一行 div等 从上到下
  - 行内元素 从左到右 列

- css 是演员的化妆
  - 利用css美化页面
  - .keys 类名选择器
  - > 子元素选择器
  - + 相邻兄弟选择器

- display: flex 弹性布局
  启动弹性布局， 子元素变成弹性元素

- 盒子模型
  - 内容 content
  - 内边距 padding
  - 边框 border
  - 外边距 margin

## 监听事件
- 给元素绑定事件
- 事件类型
- 事件处理函数
- 事件对象
  - 例如 键盘事件 鼠标事件 
  - document.addEventListener('keydown', function(event) { 这行代码的作用是在文档（document）上添加一个事件监听器，用于监听键盘按键被按下的事件（keydown）。
  - 解释这一行代码的各部分：
  - document：代表整个HTML文档。
addEventListener：是一个方法，用于给文档或文档中的元素添加事件监听器。它接受两个或三个参数：事件类型（如 'click', 'keydown' 等）、事件处理函数以及一个可选的布尔值参数，用于指定事件传播方式（true 表示捕获阶段，false 表示冒泡阶段，默认是 false）。
'keydown'：表示要监听的事件类型，这里是键盘按键被按下的事件。
function(event) {... }：这是一个事件处理函数，当指定的事件发生时，会调用这个函数。event 是一个事件对象，包含了与事件相关的信息，比如被按下的键、鼠标位置等。

  