# 面向对象 OpenAI 接口编程

- 多模态
  - 单模态
    chagpt 文本
  -  图片、视频、音频
- npm init -y 后端
  npm i openai   安装openai 包  openai sdk

- npm config set registry https://registry.npmmirror.com  国内镜像源
  设置了npm 的 镜像源， 国外的 npm ，慢，阿里国内的镜像源，快

- 时间 占用空间
    npm i -g openai全局安装
    npm i -g pnpm
    哪里去了？ 命令行直接调用 环境变量？ 会污染全局


- 既不会重复安装 又不会污染全局， 符号链接去指向之前的安装
  快了， 省空间 pnpm  
  - 用 pnpm install openai
    pnpm 是一个高性能的包管理器，它的主要特点包括：
    节省磁盘空间：通过创建符号链接来共享依赖，避免重复下载和存储相同的依赖包。
    快速安装：由于共享依赖，安装速度通常比 npm 和 yarn 更快。
    严格的依赖管理：确保每个项目使用的依赖版本完全一致，避免版本冲突。 
  - main.mjs 主入口， 单点入口的职责
    mjs es6 module import from 
  
  - 调试能力
    console.log(result) 比较深 查看它的json 结构

  - 理解参数
    gpt4o 多模态读图能力
         - 文本指令
            type: 'text',
            'text': '请描述以下图片的内容' 
         - 图片地址
         - try catch
           容错

    - 暴露apikey了 
      - 输入命令pnpm install dotenv 安装 dotenv 