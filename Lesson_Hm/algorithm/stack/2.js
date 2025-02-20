// Stack 类
class AarrayStack{
    // 类的属性
    // public 公共属性 可以在类的内部和外部访问
    // private 私有属性 只能在类的内部访问 不能在类的外部访问
    // protected 保护属性 只能在类的内部和子类访问
    // item;
    #stack;// 私有属性 正确
    constructor(){
        this.#stack=[];
        // this.item = 1;
    }
    // 类的方法
    push(element){
        this.#stack.push(element);
    }
    pop(){
        return this.#stack.pop();
    }
    // 查看栈的大小
    get size(){

        return this.#stack.length;
    }
    // 查看栈顶元素
    peek(){
        if(this.isEmpty()) 
            throw new Error('stack is empty');
        return this.#stack[this.#stack.length-1];
    }
    isEmpty(){
        return this.#stack.length===0;
    }
    toArray(){
        return this.#stack;
    }
}

const stack=new AarrayStack();
// 外部不能访问 stack 只能访问类的方法 来操作 stack
console.log(stack.stack);
// stack.stack.push(1);
// console.log(stack.item)
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.size)
console.log(stack.toArray())