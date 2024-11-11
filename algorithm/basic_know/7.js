const arr = [1,2,3,4,5];
// 数组的长度
const len = arr.length;
// 此循环 遍历
// for(let i = 0; i < len; i++){
//     console.log(arr[i],i);
// }

arr.forEach(function(item,index){
    console.log(item,index);
})
// 上面的for循环性能更好，下面的空间复杂度更高。   