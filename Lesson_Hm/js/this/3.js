// 定义一个全局变量 x
var x = 2;

// 定义一个对象 obj 来模拟 outerFunction 作为一个方法被调用
const obj = {
    x: 1,
    outerFunction: function() {
        // 使用 this.x 确保 outerFunction 的 this 指向 obj
        console.log('Outer function this.x:', this.x);

        // 定义一个箭头函数 innerArrow
        const innerArrow = () => {
            // 箭头函数内的 this 继承自 outerFunction 的 this
            console.log('Inner arrow this.x:', this.x);
        };

        // 调用箭头函数
        innerArrow();
    }
};

// 以对象的方法形式调用 outerFunction
obj.outerFunction();

// 如果直接调用 outerFunction 作为普通函数，则 this 指向全局对象
const standaloneFunction = obj.outerFunction;
standaloneFunction(); // 注意：这里的 this.x 可能不是预期的结果