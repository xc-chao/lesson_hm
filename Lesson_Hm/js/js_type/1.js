    let a = null; // 栈内存
    console.log(a);
    // 堆内存 大对象  
    let largeObject = {
        data:new Array(10).fill('a'),
    }
    // 设计为null类型 释放内存
    largeObject = null;
    console.log(largeObject);