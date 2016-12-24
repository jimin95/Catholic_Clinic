function Exercise() {

}

Exercise.prototype.run = function() { // prototype ??
    console.log('module run');
}
module.exports = Exercise; // 클래스 하나만 export