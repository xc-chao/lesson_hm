# js 数据类型


- js 有多少种数据类型？
- 七上八下 因为es6新推出的bigint 类型，和number归类于一种数据类型numeric。
  **内存分配机制**
  **拷贝，引用式** 

  - 简单数据类型
    numeric（number+bigint）， string， boolean， null， undefined， symbol
    - 依据变量内存的分配机制，简单数据类型在栈里面，复杂数据类型的地址在栈内存里面指向的是堆内存， 堆内存里面存放的是复杂数据类型的值。
    - 简单数据类型拷贝，  
  - 复杂数据类型
    object   

  - null
    null 表示一共个空值或不存在的对象(释放空间)，是一个可以赋给变量的特殊值。 
    显示回收内存

  - undefined 未定义（类型）

  - symbol 唯一值
    以函数的形式创建，但其实是一个简单值，我们可以给它打个标签，哪怕是两个相同的标签，也不会相等。 
    ex：Symbol('马斯克') === Symbol('马斯克')//  false
     
  - bigint 大整数
    ex：let num1 = 999999999999999999999999999n;
        let num12 =123455474424316547664653536n;
        console.log(num1+num12);  

  - 简单数据类型 primitive(原始数据类型)
    一眼就可以看出其值

    函数、数组等有很多特性无法表达
    
    ## 函数
    - 是一个单独的函数类型
## 对象
    - 对象是一种复杂数据类型
    - 丰富、复杂、笼统
    - 函数 ？ 函数对象，一等对象？可以执行对象？
        - 函数有属性， 方法
        - 函数可以作为形参传递
    - 数组 可遍历，迭代的对象 ？ 
  
  - ECMAScript 是js的标准
  
  - 区分这么多种的对象？
  - 得到变量的确切类型
    typeof 除了null之外的primitive 类型 都可以被判断
    null 是object 当初设计时的bug
    前三位 类型的值 null object 000
    "123" 123