// vue 源码学习 深入学习
// vue 可以在后端运行
// vue 也是模块化写出来的 reactivity
const {
    effect, // ?
    reactive // vue 响应式的
} = require('@vue/reactivity');
// 不用挂载页面上，node下？
let dummy
// 响应式
const counter = reactive({
    num1:1,
    num2:2
})
// effect 是一个函数
// 接受一个函数参数
// 当函数中的依赖发生变化的时候，会重新执行函数
effect(()=>{
    // proxy get 收集依赖
    // dummy = counter.num1 + counter.num2
    console.log(counter.num2)
})

setInterval(()=>{
    // proxy set
    counter.num1++
},1000)

setInterval(()=>{
    // proxy set
    counter.num2++
},5000)