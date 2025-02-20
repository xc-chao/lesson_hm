function Typeof(obj){
    // typeof 除了null之外的基本数据类型都可以判断出
    // function 可以之外都是 object 
    // return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
    // [1]里面是返回的第几个元素 从0开始
    let res = Object.prototype.toString.call(obj).split(' ')[1].toLowerCase();
    res = res.substring(0,res.length-1);
    return res;
}
console.log(Typeof([]))