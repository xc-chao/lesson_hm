// 所有向后端请求的接口都在这里写

// 登录接口
// api/login server 响应 apifox 测试ok？
// 前后端分离 后端接口 前端请求 
// 全栈的解耦
import request from './request.js'
export const login = (body) => request.post('/api/login',body).then(res =>{
    return res
})
// 协议 域名 端口 路径

export const getUserInfo = () => request.get('/api/getUserInfo').then(res=>{
    return res
})