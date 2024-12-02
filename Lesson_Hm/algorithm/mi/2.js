function func(x, n){
    if(n === 0){
        return 1;
    }

    // 自顶向下
    let result = func(x, Math.floor(n/2));
    if(n % 2 === 0){
        return result * result;
    }else{
        return result * result * x;
    }
}
//16 4  2  1
// 4 2 1 0
func(2, 4)