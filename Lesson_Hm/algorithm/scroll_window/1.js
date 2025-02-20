// es6 set 不重复的容器
const mySet = new Set();
mySet.add(1);
mySet.add("hello");
mySet.add(true);
console.log(mySet)
console.log(mySet.size)
console.log(mySet.has(1))
for(let item of mySet){
    console.log(item)
}
Array.from(mySet)// 转数组
console.log(Array.from(mySet))
console.log([...mySet])// 展开运算符