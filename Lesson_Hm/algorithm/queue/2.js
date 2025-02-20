// es6 + 数组 
class ArrayQueue{
    #nums;// 数组 私有属性 es6
    #front = 0;// 队首 内存的优化
    #queSize = 0;// 队列的长度
    constructor(capacity){
        // 分配了capacity单位连续的空间 
        // 这段内存就在缓存中了
        this.#nums = new Array(capacity);
    }
    // ADT 操作
    get size(){
        return this.#queSize;
    }
    push(num){
        if(this.size === this.capacity){
            console.log('队列已满');
            return;
        }
        // % 取余 队尾下标 rear后部/后面
        const rear = (this.#front + this.size) % this.capacity; // 这里求的长度
        this.#nums[rear] = num;
        this.#queSize++;
    }
    isEmpty(){
        return this.#queSize === 0;
    }
    peek(){
        if(this.isEmpty()){
            throw new Error('队列为空');
        }
        return this.#nums[this.#front];
    }
    pop(){
        const num = this.peek();
        this.#front = (this.#front + 1) % this.capacity;
        this.#queSize--;
        return num;
    }
    toArry(){
        // 打印队列
        const res = new Array(this.size);
        for(let i = 0, j = this.#front;i < this.size;i++,j++){
            res[i] = this.#nums[j % this.capacity];
        }
        return res;
    }
}
const queue = new ArrayQueue();
