// ReferenceError: b is not defined
// RHS 查找 失败得时候， 会爆出    ReferenceError 错误，报错
// 不能像LHS一样默认声明变量
function foo(a){
    console.log(a+b);
    b = a;

}
foo(2);