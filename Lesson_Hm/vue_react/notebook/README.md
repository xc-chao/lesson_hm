# React NoteBook 全栈

- npm i react-router-dom -S
  -- save 的简写 一直依赖 react-router-dom@7
  -- save-dev -D 开发环境依赖dependencies
- 项目依赖
  - 开发阶段 development vite
  - 测试阶段 test 其他同事的电脑上 没有环境 npx 临时安装
  - 上线阶段 production  打包-> 项目部署-> dns 域名解析系统到本地调试 -> 上线

- 编程风格
  - react 组件 由函数组件jsx（js里面写html） 文件 + 样式文件css 组成
    - 组件目录大写
    - 组件文件小写 名字叫index.jsx
    引入的时候 直接引入组件目录即可，组件类的作用，同时不用去引入 index.jsx 
  - return(JSX) dom树的对齐，优雅

- 页面级别组件
  - 首页
    Home.vue

- es6 module 的语法
  import React, {useState, useEffect,useMemo} from 'react'
  default 解构的引入
  import React.useState from 'react'
  import * as React from 'react' 

- key 的用法
  循环输出组件，需要给唯一的key 值需要唯一
  update 性能

- 选择框架
  - zarm 移动端react ui组件库
    指定3.1.2版本 npm i zarm@3.1.2 
  - 引入组件 button
  - 引入样式
    import 'zarm/dist/zarm.min.css'
  - 引入配置 ConfigProvider theme primaryColor
  - 主题定制 theme primaryColor
- npm run build
  - 上线之前先打包
  - dist 结果/目录
    - src/ 开发目录
    - 不需要注释、换行等，压缩到一起，减少体积，只要浏览器能解析就好。
    - 组件打包成js文件，css 打包成一个css文件
      性能优化 http 并发数量减少 在同一时间请求的数量减少
    - vite 很快 jsx文件不能直接运行的，需要vite 编译成js文件
    - size gzip 大小 http 主动启动gzip 压缩传输的底层tcp/ip协议

- vite 
  - 按需加载 vite-plugin-style-import 

- less stylus css 预编译
  - 快
  - less css预编译
  - 变量、嵌套、混合函数
  - module css 
    - style.module.less 
    - 支持 css 模块
      - vite 申明 less -> 解析
      - {s.index} 

- 移动端适配
  rem 10rem = 宽度
  - lib-flexible rem 适配
  - postcss-pxtorem 包 自动化px 转rem 提高开发效率
    - postcss 允许开发者通过一系列插件来处理和增强 css 文件，使其具备更高的可维护性、兼容性和性能。

- axios 配置
  - baseURL 
    前后端分离，前端访问的是后端的接口，一般会以/api开头
    方便，baseURL 统一配置 