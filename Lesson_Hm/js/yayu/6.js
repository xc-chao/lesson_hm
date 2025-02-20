function Person(name,age){
    this.name = name
    this.age = age
}
Person.prototype.name = '孔子'
Person.prototype.hometown = '山东'
let Person1 = new Person('张总',18)
let Person2 = new Person('郭总',18)
console.log(Person1 === Person2) // false
console.log(Person1.name,Person2.name)// 张总  郭总，先在实例上找，找不到再去原型上找