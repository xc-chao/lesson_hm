# 何为es6？

- es6是JavaScript语言的当下标准
  2015年 es6 与之前的 es5 js语言的不同版本
  var 不支持常量功能
  es6 才有 const + let

- let 与var 
  相同点 声明变量
  区别 let 支持块级作用域 { let = ....} 在外面是访问不到的  

- const 
  常量也是支持块级作用域的，建议大写（表示一个大写）
  js 的const 和其他语言不太一样(因为它叫constant variable 常量变量)
  复杂数据类型的值可以发生改变

- 变量作用域
    -全局作用域
    -局部作用域
        -函数作用域(function(){.....})
        -块级作用域
            var 不支持 
            const let 支持 