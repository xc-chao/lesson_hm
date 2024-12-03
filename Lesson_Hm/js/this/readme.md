# 深入 this
this 函数运行环境指针

- 当我们对内存（栈内存、堆内存），就可以理解 this 指向。

- 调用栈 、执行上下文、作用域、作用域链（outer）->outer解决执行上下文的指向。
  少了一个指向 函数调用对象的指针 -> this 指向 全局对象。window global

- this 有哪几种？
  函数的调用方式相关，this值不固定，在函数执行的一刹那，被谁调用决定。
  - 对象的方法被调用-> this 指向 调用对象
  - 普通函数被调用-> this 指向 全局对象 浏览器window node.js global
  - 构造函数被调用-> this 指向 实例对象 （new）
  - 指定this 调用方式  call apply bind
  - 箭头函数被调用-> this 指向 外层函数的 this 