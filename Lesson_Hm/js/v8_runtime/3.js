function bar(){
    console.log(myname);// 这里打印的是lisi是因为
}

function foo(){
    var myname = "zhangsan";  
    bar()
    console.log(myname);
}
var myname = "lisi";
foo();