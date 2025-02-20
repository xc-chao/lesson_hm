// Symbol es6 的新数据类型 独一无二 标签
// 函数一样的外观 但是 是简单数据类型
// js设计哲学 
let sym1 = Symbol('马斯克');
let sym2 = Symbol('马斯克');
console.log(sym1 === sym2); // 输出 false