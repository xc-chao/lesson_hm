    var a = 1;
    var b = 2;
    function fn(a){
        var a = 3;
        console.log(a)
        console.log(b)
    }
    fn(3)