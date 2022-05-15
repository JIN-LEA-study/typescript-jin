// .ts는 브라우저가 인식을 못한다. js만 인식 가능하다.
// tsconfig.json은 ts -> js 컴파일 시 옵션 설정 가능
// 터미널에 tsc -w 입력하면 자동변환 -> 컴파일
// 타입으로 쓸 수 있는 것 : string, number, boolean, bigint, null, undefined,[], {}
var 이름 = "kim";
이름 = "김박";
// Type Error :
var 이름2 = "kim"; // error : 'number' 형식은 'string' 형식에 할당할 수 없다.
// 이름2 = 123;
// object 타입 지정
var 이름3 = { name: "kim" };
var 이름4 = { name: "kim" }; // name? : name이란 속성이 들어올 수도 있고 안들어 올 수도 있다.
// 다양한 타입이 들어올 수 있게 하려면 Union type
var 이름5 = "kim"; // | 기호를 이용해 or 연산자를 표현
var 이름6 = 123;
var 이름7 = 123; // string이 담긴 array or number가 들어올 수도있다.
var 이름8 = "kim"; // type 키워드를 이용해 타입을 변수처럼 담아서 사용가능
var 이름9 = "kim"; // 이름9라는 변수엔 앞으로 'kim' 또는 'park'만 들어올 수 있다.
// 함수는 파라미터와 return 값이 어떤 타입일지 지정가능
function 함수(x) {
    return x * 2; //무조건 number return도 number
}
// let john: Member = ["123", true]; // error
var john = [123, true];
var jjohn = { name: "kim" };
// class 타입 지정 가능
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
// 항상 타입이 무엇인지 미리 체크하는 narrowing 또는 assertion 문법을 사용
//에러
function 함수1(x) {
    // return x * 2;
}
//가능
function 함수2(x) {
    if (typeof x === "number") {
        return x * 2;
    }
}
