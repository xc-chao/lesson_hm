# 定时器

- JS是单线程，只有一个主线程
- setTimeout 是异步执行的计时器，会在主线程执行完后执行，不会阻塞主线程的执行
  callback 回调函数 放入 event loop ，时间（ms）
- setInterval 是周期性执行的计时器，会在主线程执行完后执行，不会阻塞主线程的执行
  callback 回调函数 放入 event loop ，时间（ms）

- 一定会在 指定时间后执行吗？
  - 找回？
    执行的是回调函数 
- 定时器ID  

- 如何用 setTimeout 实现 setInterval ？
  - 场景编程题
  - 手写 fn
    - customeInterval 
    - callback ， time（ms） 参数 