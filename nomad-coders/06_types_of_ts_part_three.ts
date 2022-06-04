// 1. unknown
// 변수의 타입을 미리 알지 못할 때 unknown을 사용한다.
let a: unknown;

if (typeof a === "number") {
  let b = a + 1;
}

if (typeof a === "string") {
  let b = a.toUpperCase;
}

// 2. void
// void는 아무것도 return하지 않는 함수를 대상으로 사용한다.
function hello() {
  // function hello(): void // : void라고 써도 되고 안써도 된다.
  console.log("x");
}
// TypeScript는 이 함수가 아무것도 return하지 않는다는 것을 자동으로 인식한다.

const c = hello();
c.toUpperCase(); // void 타입엔 toUpperCase가 없다. // 'void' 형식에 'toUpperCase' 속성이 없습니다.

// 3. never
// never는 함수가 절대 return하지 않을 때 발생한다.
// 예) 함수에서 exception(예외)가 발생하는 경우
function hi(): never {
  throw new Error("xxx");
} // return 하지 않고 오류를 발생시키는 함수

function hi2(name: string | number): never {
  if (typeof name === "string") {
    name; // (parameter) name: string
  } else if (typeof name === "number") {
    name; // (parameter) name: number
  } else {
    // 타입이 올바르게 들어온다면 이 코드는 실행되지 않아야 하는 부분이다.
    name; // (parameter) name: never
  }
}
