- git 有哪些命令？
  版本控制软件  多人协作 可能是几个亿的项目
  写项目？ 电脑坏了，保存代码的版本且安全, 团队间代码的协作
  git 帮我们在本地 管理代码版本， 远程仓库（分布式）
  常用操作， 自我代码管理和简单的协助  
  - git init 初始化本地仓库
  - 把代码提交到仓库分三步：
    - git add . 添加文件到暂存区
    - git commit -m '注释' 提交代码
    - git push origin main 推送本地仓库的代码到远程仓库
  
  - git pull 拉取远程仓库的代码
  - git status 查看当前仓库的状态
  - git branch 查看分支
  - git log 查看提交历史
    - git checkout 切换分支(可以恢复旧版本)
  - git merge 合并分支
  - git diff 查看文件的差异

## 大厂需要的git 能力？
  - git 是必备技能
  - 高级技巧，考点
  - git 的文档是内置
    - git help 拿到常用的 git 命令
    - git help -a 可以拿到所有的git命令.
    - vi 编辑器 :j 向下翻页 :k 向上翻页 :q 退出
    git help add   深入了解某个命令的作用和参数
    - 你是如何了解git命令的作用和参数？
  
## 代码仓库
   文件夹——> 开发目录(网站)——> 代码仓库()
   - 好处
     项目代码的版本（version）git 关注的是代码的版本 
     时光穿梭机 文件的任何版本 有时候我们想要找回旧版本的代码
   - git 仓库里存的是啥？
     文件？ 事实上是文件的版本 
     拿着相机一直拍照
     .git 目录 就是 仓库
     git 相关的内容就放在.git 目录里
   - git config 配置 操作留下了责任人， 多人协作的思想。
     老板就知道是谁提交的代码？
     git config --global user.name 'xxx'    配置用户名
     git config --global user.email 'EMAIL' 配置邮箱
     配置， --global 全局配置

   - git status 
     反馈当前仓库的状态
     on branch main 主分支上 默认分支

     untracked files 未跟踪的文件 还没有纳入版本管理（就是还没有提交到git本地仓库）
     use commit 通过提交到仓库里来进行跟踪

添加到仓库是一件严谨的事情
   - git add file
     将文件的当前版本 先添加到暂存区 

   - git commit -m '注释'
     提交到仓库里
     提交到仓库里的是 暂存区的内容
     git status 查看当前仓库的状态

- 为什么需要 暂存区， 仓库 两个概念？  
  - 后悔药
  - 分几次add 然后一次性commit 提交
    进货， 买菜车(git add 多次)， 把菜放到车里， 然后一次性把车送到超市(git commit 一次)。 
  - 暂存区 仓库
    - 一次性多个文件多次加入暂存区，后悔，组成一个提交逻辑（任务）
    - 一次commit -m 要规范 讲清楚任务
    - 不要随便提交commit，围绕开发需求
      一个上午 2-5次commit

- git status
  让我们了解当前仓库的状态，摸鱼后还能人间清醒


- git log
  代码提交记录
  查看历史记录
  git log --oneline  简化历史记录
  git log --oneline --graph  图形化历史记录