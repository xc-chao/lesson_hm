- 认识几个url
- url的设计模式 restful API 
  网站是用来暴露资源的
  - htpp://localhost:3001/posts/ 首页的链接 
  - http://localhost:3001/posts/1  1就相当于：ID 查询参数 详情页的链接 
  - http://localhost:3001/users/1 用户主页链接

- 数据的查询 Read  
- 访问资源的方式  get post
  - aoifox 是啥？ web 请求代理
    http://localhost:3001/posts/1 资源的路径 
    Post http://localhost:3001/posts/1  
  - 资源 db.json users posts 
  - HTTP 协议
    - Method（动作 GET | PATCH 修改| POST新增）+ url （资源）两个加起来为请求行
    - 请求头 Cookie （身份） Content-Type：application/json （格式）
    - 请求体 （数据）
  - json-server
    - http 服务
    - json文件可以作为数据资源向外提供访问，支持crud 操作  

- 会设计restful API 接口
  - 需求
    - 新增一篇文章
      http://localhost:3001/posts/1 指定Post请求
      {
        title: "hello",//请求体
      } 
    - 删除一篇文章  
      http://localhost:3001/posts/2 指定Delet请求

- json-server 是一个支持restful API 设计的数据服务器