// 和普通函数的区别
// 1.构造函数首字母大写
// 2.构造函数不需要return 会返回实例对象
// 3.构造对象的过程中，this指向实例对象
// 4.构造函数 constructor 
function Person(name,age){
    this.name = name
    this.age = age
}
const xc = new Person('小超',20)
console.log(xc.name,xc.age)
const liu = new Person('刘大侠',18)
console.log(liu.name,liu.age)