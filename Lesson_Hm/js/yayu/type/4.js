// 基本数据类型间的显示类型转换之Number
// Number
console.log(Number());
console.log(Number(0));
console.log(Number(null));
// NaN undefined 数值上下文没有转成一个特定数值的含义
console.log(Number(undefined));
// 布尔值
console.log(Number(true));
console.log(Number(false));
// 字符串
console.log(Number('123'));
console.log(Number('123abc')); 
console.log(Number(''),Number(" ")); // 0
console.log(Number("100a"));
// 16进制
console.log(Number('0x11'));

