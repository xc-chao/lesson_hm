"use strict"
// 严格模式时， 不允许LHS查询， 不允许在未声明的变量上赋值
// console.log(b); // 报错， 因为b未声明
// a = 1; // 报错， 因为a未声明

function foo(){
    b = 2;
}
foo();
console.log(b);