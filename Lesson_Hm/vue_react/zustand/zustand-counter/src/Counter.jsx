// redux store 来到组件 使用connect 高阶组件
import React from 'react';
import useCounterStore from'./store/counter';

function Counter(){
    // 状态是共享的 不能随便修改 
    // 只能通过dispatch 派发action 来修改状态
    const count = useCounterStore((state) => state.count);
    const increment = useCounterStore((state) => state.increment);
    const decrement = useCounterStore((state) => state.decrement);
    return (
       <div>
           <h1>Count: {count}</h1>
           <button onClick={increment}>+</button>
           <button onClick={decrement}>-</button>
       </div> 
    )
}
export default Counter;