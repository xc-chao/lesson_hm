# js 类型转换

- es 之前， js有多少种类型？ 6种
  - 基本类型（primitive），拷贝式赋值： number string boolean undefined null （值类型）
  - 复杂类型： object （引用类型）

- 为何JS 的类型会改变？
  Number（"1"）

- JS 是弱类型语言
- 变量的类型 是可以改变的
- 搞清楚变量的确切类型，大圣来了
  - primitive 类型-> 其他类型的转换
    - Bollean  
  - Object 类型-> 其他类型的转换

- Boolean 显示类型（构造函数）转换规则
  - false 的情况
    - 为空 false
    - 0
    - +0
    - -0
    - null    
    - false
    - NaN
    - ""
    - undefined
  - true 的情况
  
- NaN 
  - 类型任然是Number，表示一个特殊的数值
    - Not a Number

- Number
  - 0、1、NaN

- String
  - 空字符串
  - undefined
  - null    