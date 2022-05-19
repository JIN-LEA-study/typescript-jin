var 이름10 = "kim";
var 나이 = 20;
var 결혼했니 = false;
// null, undefined도 있는데 굳이 사용하지 않는다.
// array 자료에 타입 지정 가능
var 회원들 = [1, 2];
var 회원들2 = ["kim", "park"];
// 변수 하나에 여러자료 object 자료형 써도 된다.
var 회원 = {
    member1: "kim",
    member2: "park",
};
var 내정보 = { age: 20 };
// Union type : 타입 2개 이상 합친 새로운 타입 만들기
var 회원2 = 123;
// let 회원2: number | string = 'kim';
// let 회원3: number | string | boolean = 123;
// 숫자 or 문자가 가능한 array 타입 지정
// array와 object 자료에 number 또는 string이 들어올 수 있게 타입을 수정
var 어레이 = [1, "2", 3];
var 오브젝트 = { a: 123 };
// 모든 자료형 허용해준다(타입스크립트 쓰는 의미가 없다. -> 타입 실드 해제 문법)
var 이름11;
이름11 = 123;
이름11 = [];
//any 보다는 unknown 타입이 나은듯
// 요즘 타입스크립트는 unknown 타입을 사용합니다.
var 이름12;
이름12 = 123;
이름12 = undefined;
이름12 = {};
var 이름13;
// unknown 타입을 다른 곳에 집어넣으려고 하면 그쪽 실드가 발동해서 에러
// let 변수1: string = 이름13; // error
// let 변수2: boolean = 이름13; // error
// let 변수3: number = 이름13; // error
var 이름14;
// any는 안그럼
var 변수1 = 이름14;
var 변수2 = 이름14;
var 변수3 = 이름14;
// 이름12 - 1 // error
// 간단한 수학연산도 타입 맞아야 한다.
var 나이2;
나이 + 1;
// 나이2 + 1; // error
"kim" + 1;
// string 타입 + 1 (허용)
// number 타입 + 1 (허용)
// string|number 타입 + 1 (안돼)
// 1.
// 다음 변수 4개에 타입을 지정
// let user = 'kim';
// let age = undefined;
// let married = false;
// let 철수 = [user, age, married];
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
// 2.
// 학교라는 변수에 타입을 지정
// let 학교 = {
//   score : [100, 97, 84],
//   teacher : 'Phil',
//   friend : 'John'
// }
// 학교.score[4] = false;
// 학교.friend = ['Lee' , 학교.teacher]
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
