// es6 class 类
class MyQueue{
    constructor(){
        // 后进后出
        this.stack1 = [];
        // 辅助先进先出
        this.stack2 = [];
    }
    push(x){
        this.stack1.push(x);
    }
    pop(){
        // 当辅助栈不为空时，直接弹出辅助栈的栈顶元素
        if(this.stack2.length === 0){
            while(this.stack1.length > 0){
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
    peek(){
        if(this.stack2.length === 0){
            while(this.stack1.length > 0){
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length - 1];
    }
    empty(){
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}