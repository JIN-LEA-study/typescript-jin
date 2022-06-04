function addFunction(a: number, b: number) {
  // function add(a: number, b: number): number
  return a + b;
}

const addArrow = (a: number, b: number) => (a = b);
// 인자의 타입이랑 함수의 반환 타입을 알려주는 것

// call signatures
// react에서도 이렇게 쓴다.
type Add = (a: number, b: number) => number; // 분리해서 작성 가능

const add: Add = (a, b) => a + b; // 분리해서 작성 가능, 위에 작성했기 때문에 여기선 type에 대해 free가 된다.
