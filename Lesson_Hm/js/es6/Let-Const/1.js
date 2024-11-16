// 大厂语法基础题
function sayHello() {
   //  变量
    var name = "xc"
    return "Hello->" +name;
}
// es5 新增的var 语句
// var 声明的变量是全局变量
var age = 10;
// 代码块
// 块级作用域
if(age > 5) {
    //es6 新增的let 变量声明 let只能在当前块级作用域生效 2015年发布
    var name = "XC-chao";
    let dogYears = age * 7;
    console.log("You are " + dogYears + "years old")
} else {
    console.log("age is less than 5")
}

console.log(name,'name')
// 这里不会打印结果,会报错，因为dogYears是用let定义的，只能在当前快级有效 console.log(dogYears,'dogYears')


// 函数
console.log(sayHello())