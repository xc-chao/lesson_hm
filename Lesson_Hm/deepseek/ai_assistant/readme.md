# AI Assistant 全栈项目
- 大前端全栈
- 后端驱动全栈为主
    - 设计模式
      大前端 前端 mvvm  
          - 数据模型层：model(数据状态 useState, ref/reactive, api/axios 接口, pinia) 
            - model 模型层 = 数据定义 + 数据处理 +数据存储 + 数据管理 + 数据请求 + 数据响应
          - 视图层：view(component组件, template模板, style样式) 
            - view 视图层 = 组件 + 模板 + 样式
          - 视图模型层：vm(数据绑定, 事件处理, 路由)
            - vm 视图模型层 = 数据绑定{{}} + 事件处理useEffect() + 路由router。数据驱动界面(v-if/v-show/v-for)... script 事件监听 @change 事件监听(vue) onchange 事件监听(react)
      后端 mvc model(数据状态) view() controller(路由)
          - model 数据库独立于后端的 数据模型文件 schema orm
          - view 视图层 = 前端模板文件 index.html
          - controller 控制器层 = 路由文件 router.js
    - 并发数量
    - 基础设施 
    - DDos 肉鸡攻击 qps 

## 后端全栈AI 项目
- python flask 框架 node koa 框架
  app.py 单点入口
- 纯js
- deepseek 在线api

## 项目准备
- 安装python
  3.10.6
- 配置虚拟环境
  python -m venv name
  本地项目依赖 不受全局影响，不会污染全局环境
  当前项目下有了项目依赖包 , 激活虚拟环境（.\ai_assistant\Scripts\activate）
  - pip安装 pip install openai Flask python-dotenv -i https://mirrors.aliyun.com/pypi/simple/

  openai 已经成为aigc LLM 的事实标准
  /completion/chat
  base_url
  Flask koa 后端框架  

  - 没有做前后端分离 mvc 开发模式
    - 前端 static 目录下
    - 路由 / 显示index.html
    - 