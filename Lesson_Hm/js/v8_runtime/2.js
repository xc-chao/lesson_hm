    function foo(){
        var a = 1;
        let b = 2;
        {
            let b = 3;
            var c = 4; // var不支持块级作用域
            let d = 5;
            console.log(a);
            console.log(b); // 3
        }
        console.log(b);// 为什么在块级作用域中，b被赋值为3，但是出了块级作用域后就打印出2呢？ 因为在块级作用域中，let b = 3; 声明了一个新的变量b， 所以b的值为3， 但是出了块级作用域后，b的值就为2了。
        console.log(c);
        console.log(d);
        // ReferenceError: d is not defined 这里没有d的定义， 因为d是块级作用域的变量， 出了花括号就不认识了
    }
    foo();