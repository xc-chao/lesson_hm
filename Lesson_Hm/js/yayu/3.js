// 
function Person(name,age){
    console.log(this)
    this.name = name
    this.age = age
}

Person('小超',20) // 普通函数调用  this指向window
const first = new Person('小清',20)