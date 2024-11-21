// 函数也是对象
function great(name){
    return `hello ${name}`;
}

great('123')
great.language = 'js'; // 给函数添加属性 
great.greatInSpanish = function(){ // 给函数添加方法
    return 'hola ${name}';
}

function invokeGreeting(greetingFunction,name){
    return greetingFunction(name);
}

// 函数作为参数传递, 回调函数
console.log(invokeGreeting(great,'123'));