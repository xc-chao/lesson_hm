# 跨域

- 运行的环境 
  - 前端
    v8 引擎在浏览器  
  - 后端
    node 封装了v8引擎，剥离了html等标签，只运行js代码
    并且借助c++去调用系统的api
  - 为什么node 需要有模块化需求？
    - 引入各种模块
    - 后端功能复杂
    - mvc 架构（model 连接数据库、view 页面、controller 控制器，负责前端的参数校验，逻辑等）  
  - require -> es6 module

- 为何要学node？
  - 后端开发
  - 大前端
  - 简单性能好

- CORS policy（跨源资源共享）
  - 安全策略
  - baidu -> google (不受信任) 不同的域名
  - http://127.0.0.1:5500/ js script 所在的域名
  - http://localhost:3000 任然被block

- 保护谁？
  - 后端， 制定规则
    目前没有block
  - 前端
    JS 限制跨域请求  
    JS dom 修改页面的 跨域内容受限

- Cross-Origin Resource Sharing
  Oringin > Domain + Port（域名+端口）

## 前后端分离
- vue 前端
- node/java 后端
- 开发日常 跨域是家常便饭

- 换条路走
  - script + src 
    - 不受cors限制
  - http 请求 将后端api 资源拿到
    - src = api url
  - json 数据给我
  - script 会阻塞线程，会影响页面加载速度，因为要等js加载完，再渲染
  - jsonp
    json with padding(函数)
    - 前端需要script 标签 src 执行api url
    - 页面上埋一个全局方法 window.callback()
    - 需要后端的配合 数据外面包 函数
  - 封装一个jsonp函数
    - url + callback
    - dom script挂载 和 window[callbaack]