    var a = 1;
    var b =4;
    function foo(){
        var a = 2;
        function bar(){
            var a = 3;
            return a+b;

        }

        console.log(a,b);
    }
    foo();