"use strict"
// 严格模式时， 不允许LHS查询， 不允许在未声明的变量上赋值
function foo(a){
    b = a;
}
foo(2);
console.log(b+a);