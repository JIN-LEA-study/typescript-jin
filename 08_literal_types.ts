let 이름15: "kim"; // 이 변수엔 'kim'만 들어올 수 있다.
let 이름16: 123; // 이 변수엔 123만 들어올 수 있다.
// 이름16 = 456; // Error

// Literal types : 특정 글자나 숫자만 가질 수 있게 제한을 두는 타입
// 1. 변수에 뭐가 들어올 지 더 엄격하게 관리가능
// 2. 자동완성 힌트 굿.
let jito: "대머리" | "솔로";

jito = "대머리";
jito = "솔로";

let 방향: "left" | "right"; // 'left' 또는 'right' 글자만 가질 수 있는 변수
방향 = "left";

function 함수(a: "hello"): 1 | 0 {
  // 지정한 파라미터의 값만 return 가능하다.
  // return 534; // Error
  return 1;
}
함수("hello");

// 가위, 바위, 보 중에 1개 입력 가능
// 가위, 바위, 보 만 들어올 수 있는 array를 return 해야한다.
function rock(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  // 파라미터에 이런 값들만 들어올 수 있다. // array안에는 가위나 바위나 보라는 문자가 들어올 수 있다.
  return ["가위", "보"];
}
// const 변수는 값을 바꿀 수 없는 변수
const 변하면안되는변수 = 123;

var 자료 = {
  name: "kim",
} 

function 그저함수(a: "kim") {
  // 'kim'이라는 자료만 들어올 수 있습니다 (X)
  // 'kim'이라는 타입만 들어올 수 있습니다 (O)
}

그저함수(자료.name);
// Literal type의 문제점
// solution 1. object 만들 때 타입 지정 확실하게 한다.
// solution 2. as문법으로 타입을 사기친다.
// solution 3. as const 이상한 키워드 사용한다.
// - 이 object는 literal type 지정 알아서 쓰라.

var 자료2 = {
  name: "kim",
} as const 
// 효과 1. object value 값을 그대로 타입으로 지정해 준다. "kim"이란 타입이다.
// 효과 2. object 속성들에 모두 readonly를 붙여준다.
function 이그저함수(a: "kim") {
  // 'kim'이라는 자료만 들어올 수 있습니다 (X)
  // 'kim'이라는 타입만 들어올 수 있습니다 (O)
}

이그저함수(자료2.name);
// var 자료2: {
//   readonly name: "kim";
// } -> 라고 되어있다.