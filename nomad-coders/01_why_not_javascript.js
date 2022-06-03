// 1. 객체 + boolean
[1, 2, 3, 4] + false; // 입력값이 하나지만 코드가 실행이 된다.
// '1,2,3,4false'

// 2.
function divide(a, b) {
  return a / b;
}

divide(2, 3);
// 0.6666666666666666;

divide("xxxxxx");
// NaN;
// 이때는 에러가 나오는게 맞다.

// 3. 런타임 에러 (유저의 컴퓨터에 코드가 실행되면 나타나는 에러)
const nico = { name: "nico" }; // 객체
nico.hello(); // 객체에 hello() 함수를 불러옴
// VM839:1 Uncaught TypeError: nico.hello is not a function at <anonymous>:1:6

// 좋은 프로그래밍 언어는 nico 객체(object)를 분석해서 hello() 함수가 없다는 것을 알려준다.
// 컴파일 실패로 실행조차 못하는 코드가 JavaScript에서는 실행이 된다.// TypeScript에서는 다음과 같은 배열 + boolean의 이상한 코드를 작성할 수 없다.

// TypeScript에서는 배열 + boolean과 같은 이상한 코드를 작성할 수 없다.

[1] + true;
// '1true'
