// 申明了一个变量对象，对象中有一个方法，方法名为foo，方法中打印出一个字符串，然后申明了一个变量foo，将obj对象中的foo方法赋值给foo，然后调用obj对象中的foo方法，最后调用foo方法。
"use strict"
var x = 2;
var obj = {
    x:1,
    foo:function(){
        console.log(this)
        console.log(this.x)
    }
    // 函数运行的时候出现this，this指向的是调用者，调用者是obj对象，所以打印的是1
}
// 函数体
var foo = obj.foo;// 将obj对象中的foo方法赋值给foo 为什么打印的是函数呢？ 因为foo是一个变量，变量中存储的是一个函数，所以打印的是函数。
var obj2 ={
    x:5,
    foo:foo
}
// 相同点：同一个函数在运行
// 区别点：被谁调用、调用的位置不一样
// 调用时候？调用方式不一样
// 对象调用
obj2.foo()// 打印的是5
obj.foo()// 打印的是1
// 普通函数调用
foo()// 打印的是2,严格模式下打印的是undefined，因为在严格模式下，this指向的是undefined。
