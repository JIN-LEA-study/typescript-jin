// x는 파라미터 (숫자 input역할)
function 함수3(x: number): number {
  return x * 2; // return할 값 (output되는 값)
}
함수3(2); //이러면 4가 이 자리에 남음
함수3(4); //이러면 8이 이 자리에 남음

// 함수 만들기
// 1. 길고 복잡한 코드 한단어로 축약 가능
// 2. 숫자 집어넣으면 다른 숫자 나오는 블랙박스 역할

// (결론) 함수는 파라미터, return값 타입지정 가능

// 함수는 총 두 군데 타입지정이 가능
// 1. 함수로 들어오는 자료 (파라미터)
// 2. 함수에서 나가는 자료 (return)

// void
// 아무것도 리턴하지 말아주세요/
// 실수로 뭔가 return하는 걸 사전에 막을 수 있다.
function 함수4(x: number): void {
  // return 1 + 1; // 'number' 형식은 'void' 형식에 할당할 수 없습니다.
  1 + 1;
}

함수4(2);

// 자바스크립트와 다른점
// - 타입 지정된 파라미터가 필수

// function 자바스크립트함수(x) {}
// 자바스크립트함수(); // 자바스크립트에선 이렇게 작성해도 된다.
// 타입스크립트함수(x); // 파라미터 작성 필수

function 함수5(x?: number): void {}
// 파라미터가 옵션일 경우엔
// 파라미터변수?:타입 {age?: number}
// ? 연산자는 들어올 수도 있다 라는 뜻이긴한데
// 변수? : number는
// 변수 : number| undefined 와 같다.

function 조건(x: number | string): void {
  // console.log(x + 3); //ERROR // string + number (가능) number + number(가능) 이외엔 불가능
  if (typeof x === "number") {
    // x의 타입이 숫자면
    console.log(x + 3);
  }
}

// HW
// 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력
function sayHi(x?: string) {
  if (x) {
    console.log("안녕하세요 " + x);
  } else {
    console.log("왜입력안함");
  }
}

// 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수
function 자릿수세기(x: number | string): number {
  return x.toString().length;
}

// 결혼 가능 확률을 알려주는 함수
function 결혼가능하냐(
  money: number,
  house: boolean,
  charm: string
): string | void {
  let score: number = 0;
  score += money;
  if (house === true) {
    score += 500;
  }
  if (charm === "상") {
    score += 100;
  }
  if (score >= 600) {
    return "결혼가능";
  }
}
console.log(결혼가능하냐(100, true, "상"));
