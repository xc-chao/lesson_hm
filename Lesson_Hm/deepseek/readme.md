## 春招执行方案

- 时间
  3月-5月
- 大厂实习最容易
  - 语言能力
  - 面试能力
  - 算法能力
- 3月份-4月份 面试新手期 4月份找一份远程实习(AI远程实习)
  - leetcode 刷题 100+ 动态规划 分治 3题+
o
## deepseek
- 性价比高
  aigc
  百万 tokens 1元
  tokens 提问以及返回 按token计费 
  token 分词

  参照物gpt4 o1 每百万tokens 280元 99.99%的省钱率
- 为什么省钱
  - OpenAI 堆算力 GPU
  - 新的算法 甚至可以绕开 英伟达 cuda 编程
  - DeepSeek v3 2048 块 H800 557.6万美元，meta llama3 是deepseek 的11倍 
    openai No.1 闭源的
    llama3 No.1 开源的

## DeepSeek AI 全栈应用
    前端 + 后端 + llm = AI fullstuck

- ai应用集合项目
  coze 工作流 + ai 应用
  deepseek openai 的替代品 prompt
  langchain rag应用开发 

- react(chatbot)
- node koa 
  前端提供api调用
- LLM 请求（deepseek + ollama）302.ai
  离线大模型调用?

- 大前端
  - 前端包着后端
    - 后端
      - koa
      - http 服务 3000 伺服状态
      - 路由 /chatai message ？
        - npm i koa-router(周边生态)
        - 实例化路由对象 new Router()
        - router.Method('/path',async(ctx)=>{
           
           })注册路由
           - ctx 上下文对象 request + response
           - ctx.body 设置响应体
    - 跨域 同源策略

- ollama
  - 302.ai ai 转发 online 大模型
  - 本地访问大模型的可能
    某大厂，开源的deepseek
    ollama pull deepseek-r1:1.5b 拉取到本地 offline 调用
    模型微调 自己的业务或需求，重新的练一下deepseek
  - ollama pull llama3.2:latest (pull拉取到本地)
  - const add = (x,y) => x + y 编程
    LLM(巨大的参数) nlp + 全球的知识(机器学习) + transformer机制 => AIGC 回答 大模型函数
  - ollama run deepseek-r1:1.5b 运行
  - 参数（处理问题的规模）尺寸
    内存（8G） 显卡 等硬件相关
  - 集成deepseek 能力 可以实现了

- koa 
  路由定义好，函数的方式来处理从这个路由的用户，参数校验，逻辑功能，LLM axios 请求 返回资源，结束请求。
  - 基于koa，koa-router 通过axios 向ollama 11434/api/chat 发送请求，获得LLM 响应
  - 封装AI LLM 接口

- 安装nodemon 实现热更新
- npm i nodemon -g
- nodemon app.js
- react 去axios 向koa AI LLM接口发送请求