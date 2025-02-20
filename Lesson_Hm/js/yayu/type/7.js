console.log([1,2,3].map(parseInt))
console.log([1,2,3].map((v,index)=>parseInt(v,index)))
console.log([1,2,3].map((v,index,item)=>{
    console.log(v,index,item)
    return parseInt(v,index)
}))