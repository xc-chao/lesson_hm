console.log(1/+0);// 正无穷大
console.log(1/-0);// 负无穷大
console.log(Object.is(5,5));
console.log(Object.is(+0,-0));
console.log(2*'a'); // NaN
console.log(2+'a'+'b'); // 隐式转换将2.toString()转换为字符串
console.log(typeof NaN);
console.log(parseInt('abc'));
console.log(parseInt('123abc'));
console.log(NaN==NaN)// false NaN不代表确切的数值
// 不能通过===NaN去判断，所以要用isNaN()
console.log(isNaN(NaN),isNaN('abc'))