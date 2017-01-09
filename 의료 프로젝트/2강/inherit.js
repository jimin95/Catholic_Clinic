var util = require('util'); // util 모듈 로딩

function Parent() {

}
Parent.prototype.sayHello = function(){
    console.log('Hellow World From Parent Class');
}

var obj = new Parent();
obj.sayHello();

function Child(){

}
util.inherits(Child, Parent); // Child가 Parent 상속

var obj2 = new Child();
obj2.sayHello(); // 상속 받았으므로 사용 가능