var 함수6 = function (a) {
    return 10;
};
var ABC = function (x, y) {
    return x + y;
};
// methods 안에 타입지정
// object 안에 함수를 만들 수 있다.
var 회원정보 = {
    name: "kim",
    age: 30,
    plusOne: function (a) {
        // object안에 함수 타입 지정
        // 파라미터가 있는데 타입 지정 안하면 안된다.
        return a + 1;
    },
    changeName: function () {
        console.log("안녕");
    },
};
회원정보.plusOne(1);
회원정보.changeName();
// callback function simple description
function 함수7(x) {
    x();
}
function 함수8() { }
함수7(함수8);
// 1. 함수7 내부 코드 x() 실행된다.
// 2. 파라미터 x자리에 집어넣어서 함수8() 살행된다.
// 여기서 함수8이 콜백함수 함수안에 들어가는 함수를 콜백함수라 한다. (함수8이 콜백함수)
