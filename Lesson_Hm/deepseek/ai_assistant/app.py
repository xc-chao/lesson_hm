# 后端http 伺服

from flask import Flask, request, jsonify, send_from_directory

# 实例化Flask app 对象
# python 没有new 关键字
# 后端驱动的开发中 static 静态文件 => 前端的静态文件
# 传统的后端，mvc没有前后端分离
app = Flask(__name__, static_url_path='',static_folder='static')

# 定义一个路由
# 路由就是一个url 地址
# 路由的作用就是接收前端的请求
# 装饰器模式 mvc mvvm
# 把server_index 装饰成路由的处理函数
@app.route('/')
def server_index():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    # 启动flask 服务
    app.run(debug=True)
