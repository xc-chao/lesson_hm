var a // undefined 这里的a是全局变量， 但是还没有赋值， 所以是undefined
a = 1; // LHS 赋值  这里就定义了类型为number
a();// RHS 查找  这里就调用了a函数， 但是a函数还没有定义， 所以报错TypeError