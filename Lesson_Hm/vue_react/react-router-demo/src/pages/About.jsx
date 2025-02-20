import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const About = () => {
    const [count, setCount] = useState(0);
    // 副作用hooks 生命周期挂载后执行
    useEffect(() => {
       document.title = "About" 
    }, [])
    return (
        <div>
            <h1>About</h1>
            <Link to="/">Home</Link>
        </div>
    )
}
export default About