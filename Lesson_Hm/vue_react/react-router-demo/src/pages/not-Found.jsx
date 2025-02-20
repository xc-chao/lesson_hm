import { useState, useEffect } from "react";

const NotFound = () => {
    const [count, setCount] = useState(0);
    // 副作用hooks 生命周期挂载后执行
    useEffect(() => {
        console.log("title 执行了");
        document.title = 'Not Found'
        // 卸载
        return () => {
            console.log("title 卸载了"); 
        }
    }, []); // 添加空的依赖数组，只在组件挂载时执行一次

    const add = () => {
        setCount(count + 1);
    };
    // 更新hooks onUpdated + onMounted
    useEffect(() => {
        console.log("count 更新了");
    }, [count]); // 添加 count 依赖
    return (
        <div>
            <h1 onClick={add}>404</h1>
        </div>
    );
};

export default NotFound;