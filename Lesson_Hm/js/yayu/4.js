// constructor
function Person(name,age){
    //console.log(this)
    this.name = name
    this.age = age
    
}
// 每个函数都有一个 prototype 属性，它指向一个对象，
// 这个对象包含了可以被该函数的所有实例共享的属性和方法。
Person.prototype = {
    eat:function(){
        console.log(`${this.name}爱吃肉`)
    }
}

const xc = new Person('小超',20)
xc.eat()
const liu = new Person('刘大侠',18)
liu.eat()