var moduleobject = { // moduleobject.js와 이름 같아야 됨..?
    hour : 0,
    study : function() {
        this.hour++;
        console.log(this.hour + '시간');
    }
};

module.exports = moduleobject; // 객체를 모듈 export 시킴