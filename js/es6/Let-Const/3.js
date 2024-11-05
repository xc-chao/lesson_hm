// 声明了一个对象常量 ，对象里面的属性是常量，不能被修改。属性值可以改变
const xcObj = {
    name: "XC",
    age: 10,
    hobbies: ["赵丽颖", "uzi", "黑马程序"],
    address: {
        city: "Beijing",
        country: "China"
    }
}

// js里面的常量是可以改变的 Assignment to constant variable.
xcObj.hobbies.push("XC")
xcObj = '12345' // 报错 Assignment to constant variable.这里修改了类型。
console.log(person)