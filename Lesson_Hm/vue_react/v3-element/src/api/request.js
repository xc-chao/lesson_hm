// react vue http 请求标配 
// ./ ../ 相对路径 查找
// fs http 内置模块 node_modules/ 安装的第三方packages
import axios from 'axios'
// 创建axios实例
const service = axios.create({
    baseURL: '/', // 基础路径
    timeout: 5000 // 超时时间,请求5s没有响应就报错
})
// 请求拦截器 interceptors
service.interceptors.request.use(
    (config)=>{
        // 发生在请求之前
        console.log(config,'请求拦截器')
        let token = localStorage.getItem('token') || ''
        // 请求头添加token
        if(token){
            config.headers['Authorization']='Bearer '+token 
        }
        return config // 必须返回config 因为config是请求的配置
    }
)
export default service;