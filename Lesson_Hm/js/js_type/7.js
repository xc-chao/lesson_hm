    // js 是一切皆对象 面向对象的很存粹
    let arr = [1,2,3,4,5];
    arr.customProperty = 'this is a custom property';
    arr.push(6);
    arr.forEach(function(item){
        console.log(item);
    })