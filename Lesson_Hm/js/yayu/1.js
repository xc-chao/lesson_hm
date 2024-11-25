// js 造人
// 对象字面量
let cao ={
    name:'小超',
}
let fan = {
    name:'小范',
    age:20,
}
// class es6 类
class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    eat(){
        console.log('吃饭')
    }
}
let xc = new Person('小超',20)
let guo = new Person('过大侠',18)
