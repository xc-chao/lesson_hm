import React,{useEffect}from 'react';
// 前后端分离
import {
    // HashRouter as Router,
    // BrowserRouter 使用history API 来实现路由 as 是别名
    BrowserRouter as Router, // vue里面有 hash #模式，history /模式
    Routes, // Routes 是路由规则的集合
    Route  // vue里面有 router-view router-link ,路由规则 有path和component属性
} from 'react-router-dom';

import routes from '@/router';
import {ConfigProvider, Button} from 'zarm';
//import 'zarm/dist/zarm.css'; // vite-plugin-import-gloabl 会自动导入css
import { getUserInfo } from 'utils/';
export default function App() {
    useEffect(()=>{
        // 页面加载时，判断是否登录
        getUserInfo();
    },[]) // [] 表示只在页面加载时执行一次
    return ( 
    <ConfigProvider primaryColor={'#007fff'}>
      <Router>
          <Routes>
            { routes.map(route =><Route key={route.path} path={route.path} element={<route.component/>} />)}
          </Routes>
        <Button theme='primary'>Hello World!</Button>
      </Router> 
    </ConfigProvider>
    )
}
