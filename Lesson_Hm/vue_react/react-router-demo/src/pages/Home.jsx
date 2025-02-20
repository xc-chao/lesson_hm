// react 全面hooks **函数式编程**
import { useState, useEffect } from'react'
const Home = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = "Home"
  }, [])

  return (
    <div>
      <h1>Home</h1>
    </div> 
  )
}
export default Home