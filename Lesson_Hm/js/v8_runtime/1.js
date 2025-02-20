// hoisting
console.log(a,func);
console.log(b); // 词法环境中的变量/常量， 在声明之前不可以访问。
// ReferenceError: Cannot access 'b' before initialization
// 暂时性死区   TDZ temporary dead zone
var a = 1;

function func(){

}
let b = 2;
b++;// 词法环境里找b