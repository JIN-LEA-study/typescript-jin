var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// rest Parameter
// ... 점 3개 붙이면 rest parameter이다.
function 전부더하기() {
    var abc = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        abc[_i] = arguments[_i];
    }
    console.log(abc);
}
전부더하기(1, 2, 3, 4, 5); // 몇개의 파라미터가 들어올 지 아직 모를 때
// 전부더하기(1, 2, 3, 4, 5); 이렇게 작성하면 array로 감싸져서 들어온다.
// spread operator // 괄호 벗기고 싶을 때
var arr = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true);
console.log(arr3); // [1, 2, 3, 4, 5]
// destructuring 개념 설명
// 이 자료들을 변수로 빼서 쓰고 싶으면
var array = ["안녕", 100];
// 1. 귀찮다.
var 변수하나 = arr[0]; // 귀찮다.
var 변수둘 = arr[1]; // 귀찮다.
// 2. 쉽게 빼내려면
var _a = ["안녕", 100], 변수셋 = _a[0], 변수넷 = _a[1];
console.log(변수셋); // 안녕
console.log(변수넷); // 100
// destructuring 문법 object 버전
var 사람 = { student: true, age: 20 };
var student = 사람.student;
var age = 사람.age;
// 정확히 하려면 속성명도 맞춰줘야 student라는 변수는 true, age라는 변수는 20이 된다.
var _b = { student: true, age: 20 }, student = _b.student, age = _b.age;
// JavaScript 신문법 적용으로 아래와 같은 코드도 가능하다.
var _c = { student: true, age: 20 }, student = _c.student, age = _c.age;
// 함수 파라미터에 destructuring 가능
// (상황) object 안에 있던 자료를 파라미터로 집어넣고 싶다.
// (상식) 파라미터 만들기 == 변수 만들기
// let 오브젝트 = { student: true, age: 20 };
function 함수(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
함수({ student: true, age: 20 }); // true 20
// 1. 변수만들 때 기존 object에 있던 자료를 파라미터로 집어넣고 싶으면
var person2 = { student: true, age: 20 };
function 함수(a, b) {
    console.log(a, b);
}
함수(person2.student, person2.age);
// 2. destructuring 문법을 이용하면 약간 더 쉽게 사용가능
var person3 = { student: true, age: 20 };
function 함수(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
함수({ student: true, age: 20 }); // true 20
// 3. 즉,
// 파라미터 변수만들 때 { student, age }라고 쓰면
// 파라미터로 들어오는 { student : 어쩌구 }는 student 라는 변수에 저장해주세요~
// 파라미터로 들어오는 { age : 어쩌구 }는 age 라는 변수에 저장해주세요~
// object 자료니까 변수 작명할 때 object 속성명으로 잘 작명
var person4 = { student: true, age: 20 };
function 함수(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
함수({ student: true, age: 20 });
