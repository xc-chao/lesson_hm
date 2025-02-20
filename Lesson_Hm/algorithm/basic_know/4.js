function traverse(arr){
    var len = arr.length;  
    for (var i = 0; i < len; i++) { 
        console.log(arr[i]);// 
    }
}
// 这里的arr是外部传入的， 所以这里的空间复杂度是O(1)
traverse();