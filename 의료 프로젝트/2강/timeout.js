function sayHello() {
    console.log('Hellow World');

}

/*
setTimeout(function() {
    sayHello();

}, 3000);
*/

setInterval(function() {
    sayHello();
}, 2000);