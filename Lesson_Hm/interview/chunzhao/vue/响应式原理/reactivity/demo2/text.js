let obj = {}
const map = new WeakMap();// 键值对
map.set('a', 1);
map.set(obj, 2);// 弱引用类型 不要来回拉扯
// let obj2 = {
//     obj:2
// }
// console.log(map);
// console.log(obj2.obj);

delete obj;// 手动删除obj 触发垃圾回收