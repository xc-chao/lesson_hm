// 对象字面量
let obj = {
    name:'obj',
    job:'前端开发工程师',
    company:'腾讯'
}

// obj.hometown = '北京';

let a = 1;
// 值拷贝
let b = a;
b = 3;
let obj2 = obj;
// obj2 里面存放的是obj的地址 ，引用式赋值
obj2.name = '染染';
console.log(obj,obj2);