// 编写一个函数， [1，2，3，4，5，6，7，8，9，0]
// return "(123) 456-7890" 电话号码
function getPhoneNumber(arr){

        let str = arr.join("");
        return `(${str[0]}${str[1]}${str[2]}) ${str[3]}${str[4]}${str[5]}-${str[6]}${str[7]}${str[8]}`;
    
    //return `(${str.sclice(0,3)}) ${str.sclice(3,6)}-${str.sclice(6)}` 
}
console.log(getPhoneNumber([1,2,3,4,5,6,7,8,9,0]))