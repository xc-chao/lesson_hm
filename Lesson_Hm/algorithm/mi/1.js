// 求x的n次方
// 暴力解法
function fun1(x, n){
  let result = 1;
  for(let i = 0; i < n; i++){
    result *= x;
  }
  return result;
}
// 递归 
function fun2(x, n){
  if(n === 0){
    return 1;
  }
  return x * fun2(x, n - 1);
}