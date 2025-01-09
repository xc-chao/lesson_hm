// http 服务启动
// 内置的http模块
// commonjs 规范 node早期的模块化规范
const http = require('http');
// 启动http服务
// 基于请求响应的简单协议
const user= [
    {
        id:1,
        name:'张三',
    },
    {
        id:2,
        name:'李四',
    }
]
const server = http.createServer((req,res)=>{
    // 异步
    // 请求来到服务器后，该函数执行接到请求
    // req 解析请求对象
    // res 响应解析后的数据
    // Restful api 使用 HTTP 方法（如 GET、POST、PUT、DELETE 等）来操作资源，并且通常返回 JSON 或 XML 格式的响应数据。
    // http 结束
    res.end("callback(" + JSON.stringify(user)+")");
})
// 监听端口 访问通过端口号访问
server.listen(3000,()=>{
    console.log('服务启动成功');
})