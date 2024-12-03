var name = "刀郎"
var a = {
    name:'薛之谦',
    func1:function(){
        console.log(this.name);
    },
    func2:function(){
        // setTimeout是一个异步函数（普通函数），异步函数中this指向的是window对象。
        setTimeout(function(){
            this.func1(); 
        }.bind(a),1000)// 通过call方法改变this指向，将this指向a对象。
    }
}
a.func2();  