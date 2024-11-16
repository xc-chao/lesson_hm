// 作用域赋值规则
var b = 1;
function foo(){
    var a = 1;
    // a = 1; 引擎交给编译器的代码var a 被忽略了，因为已经存在了 var a = 2;
    var a = 2;
    console.log(a, b);
}

foo();