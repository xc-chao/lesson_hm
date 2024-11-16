var a = 1;
var b = 4;
function foo(){
    // 编译阶段， 完成声明，但是拿不到这个值， 这时候出现undefined未定义
    console.log(a,b); // 输出 1 4

    var a = 2; // 变量提升 a已经被声明了，但是赋值不会被提升所以爆出 undefined
    const a = 3; // 报错， 因为在这个变量在它被声明之前就被使用了

    function bar(){
        return a + b;
    }   
}
foo();
