const queue = []
// 入队 FIFO 线性 访问受限 双端队列
queue.push(1) 
queue.push(3)
queue.push(2)
queue.push(5)
queue.push(4)

// 访问队首
const peek = queue[0]
// 出队
const pop = queue.shift()
// 长度
const size = queue.length
// 是否为空
const empty = queue.length === 0
