import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./App.css";

const chatApi = async(message) =>{
  // 请求行 method + url + http版本号
  // 5173 -> 3000 跨域？ 同源策略 cors 服务器端， jsonp？
    const response = await axios.post('http://localhost:3000/chatai',
      // 请求体 
      message,{
        // 请求头
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    return response.data
}

// hooks 内置 hooks 函数 副作用
const App = () =>{
  // useEffect函数不能是异步函数，只能是同步函数，因为useEffect函数是在组件渲染之后执行的
  useEffect(()=>{
    // 消除副作用，设置为空数组，只会在组件挂载的时候执行一次
    // await chatApi()
    const callChatAPI = async()=>{
      await chatApi({
        message: '你好'
      })
    }
    callChatAPI()
  },[])
  return (
    <div>
      App
    </div>
  )
}
export default App;