function Person(name,age){
    this.name = name
    this.age = age
}
// 原型在哪 
const kobe = {
    name:'kobe',
    playBasketball:function(){
        console.log('打篮球');
    }
}
// 原型链
Person.prototype = kobe // 把kobe 赋值给 Person的原型,kobe 就是 Person的原型
const xc = new Person('小超',20) 
xc.playBasketball()
console.log(xc.__proto__ === kobe);// true, 私有属性