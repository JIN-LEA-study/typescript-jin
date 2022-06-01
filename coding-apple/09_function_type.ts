// type alias에 함수 type 저장해서 쓰는 방법
type 함수타입 = (a: string) => number;

let 함수6: 함수타입 = function (a) {
  return 10;
};

// Arrow Function
// arrow function의 장점 : 기호 생략기능을 제공
// 1. arrow function에선 중괄호안에 return 코드밖에 없으면, 중괄호 { } 생략 가능하다.
// 2. 파라미터가 한개 밖에 없으면 소괄호 ( ) 생략도 가능하다.
// () => { return 10 }일 때 생략 가능  // x => 2 * x;

// (파라미터)=>{}  //arrow function 문법
// function(파라미터){} //일반 function 문법

// function 함수이름 :NumOut (){} (X)
// let 함수명 = function(){} (O)

type NumOut = (x: number, y: number) => number;
let ABC: NumOut = function (x, y) {
  return x + y;
};

// methods 안에 타입지정
// object 안에 함수를 만들 수 있다.
let 회원정보 = {
  name: "kim",
  age: 30,
  plusOne(a) {
    // object안에 함수 타입 지정
    // 파라미터가 있는데 타입 지정 안하면 안된다.
    return a + 1;
  },
  changeName: () => {
    console.log("안녕");
  },
};

회원정보.plusOne(1);
회원정보.changeName();

// HW1
// 위의 회원정보라는 변수에 타입지정
// - plusOne이라는 속성은 함수, 숫자를 넣어서 숫자를 return하는 함수여야 한다.
// - changeName이라는 속성은 함수, 아무것도 return하면 안된다.

type Member3 = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};

// callback function simple description
function 함수7(x) {
  x();
}
function 함수8() {}

함수7(함수8);
// 1. 함수7 내부 코드 x() 실행된다.
// 2. 파라미터 x자리에 집어넣어서 함수8() 살행된다.
// 여기서 함수8이 콜백함수 함수안에 들어가는 함수를 콜백함수라 한다. (함수8이 콜백함수)
