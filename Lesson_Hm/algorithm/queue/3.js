// 类的正常运行
class AutoExpandArray{
    #nums;// 数组 私有属性 es6
    #front = 0;// 队首 内存的优化
    #queSize = 0;// 队列的长度
    constructor(capacity){
        // 分配了capacity单位连续的空间
        // 这段内存就在缓存中了
        this.#nums = new Array(capacity);
    }
    get capacity(){
        return this.#nums.length;
    }
    get size(){
        return this.#queSize;
    }
    isEmpty(){
        return this.#queSize === 0;
    }
    push(num){
        if(this.size === this.capacity){
           this.#expandCapacity() 
        }
    }
    #expandCapacity(){
        // 地址 1000 
        // 敏感，不能干掉别人的东西
        // 重新分配一个更大的数组空间，进行一次O(n)时间复杂度的搬运工作
        const newCapacity = this.capacity * 2;
        const newNums = new Array(newCapacity); // 全新的空间
        // 搬运
        for(let i = 0;i < this.size;i++){
            newNums[i] = this.#nums[(i + this.#front) % this.capacity];
        }
        this.#nums = newNums // 原来的内存地址释放
    }
}