// ReferenceError: b is not defined
// RHS 查找 失败的时候， 会爆出    ReferenceError 错误，报错
// 不能像LHS一样默认声明变量
function foo(a){
    
    b = a;

}
foo(2);//foo()RHS foo(2)->2=a赋值LHS
console.log(b+a);