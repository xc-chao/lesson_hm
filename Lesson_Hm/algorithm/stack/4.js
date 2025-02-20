const MinStack = function () {
    this.stack = []; // 原栈
    // 定义辅助栈
    this.stack2 = [];
};
/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(num){
    this.stack.push(num);
    // 为什么要等于呢？ 因为我们要取最小值，所以当栈顶元素大于等于 num 时，我们才入栈
    if(this.stack2.length === 0 || this.stack2[this.stack2.length - 1] >= num) {
        this.stack2.push(num);
    }
}
MinStack.prototype.pop = function(){
    // 若出栈的值和当前最小值相等，那么辅助栈也要对栈顶元素进行出栈，确保最小值的有效性
    if(this.stack.pop() === this.stack2[this.stack2.length - 1]) {
        this.stack2.pop();
    }
}
MinStack.prototype.getMin = function(){
    return this.stack2[this.stack2.length - 1];
}
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());
