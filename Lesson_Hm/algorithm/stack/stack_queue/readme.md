FIFO Queue

- typeof
  变量存储的二进制 前三位 000 表示对象 010 表示函数 100 表示字符串 110 表示布尔值 1 表示整数 0 表示小数 undefined 011 表示未定义 null 000 （历史遗留问题）表示空对象

- Object.prototype.toString.call()

- substring  slice 区别
  第二个参数 结束位置不一样
  slice 第二个参数 结束位置不包含 可以是负数 负数表示倒数第几个 -1 表示倒数第一个
  substring 第二个参数 结束位置包含 不可以是负数 负数一律表示0