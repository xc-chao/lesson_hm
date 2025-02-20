# AI 全栈项目

- 架构
  - fronted 前端
  - backend 后端
    数据接口  user.json 数据文件
    文件型数据
    http服务 http：localhost：3000/users  数据接口
    json-server  第三方库  快速搭建http服务 

  - 提供数据接口
    - npm i json-server
      - http server 响应http 请求协议 localhost 127.0.0.1
      - josn 文件 json-server --port 3000 user.json
      - 启动服务
        - json-server --watch user.json --port 3000
        - 启动服务  监听数据文件的变化
        - 数据文件的变化  自动更新数据接口
        - 数据接口  localhost：3000/users
      - script
        "dev": "json-server --watch user.json --port 3000"    
      - npm run dev 启动脚本  
  - LLM AI Server  