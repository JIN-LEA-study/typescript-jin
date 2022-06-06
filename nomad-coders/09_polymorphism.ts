// three call signatures
type SuperPrint = {
  (arr: number[]): void;
  (arr: boolean[]): void;
  (arr: string[]): void; // concrete type : number, boolean, string, void, unknown
  (arr: (number | boolean)[]): void; // 2. 이 같은 방식은 모든 가능성을 다 조합해서 만들어야하므로 추천하지 않는다.
};
// 3.  generic을 사용해보자. type의 placeholder와 같다.
// 4. call signature를 작성할 때, 들어올 타입을 확실하게 모를 때 generic을 사용한다.
const superPrint: SuperPrint = arr => {
  arr.forEach(i => console.log(i));
};

superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(["a", "b", "c"]);
superPrint([1, 2, true, false]); // 1. 에러기 나는 이유는 이것들에 대한 call signatures가 없기 때문이다. // 이 호출과 일치하는 오버로드가 없습니다.

// Generic
type SuperPrintGeneric = {
  <T>(arr: T): T; // TypeScript에게 type을 유추하도록 알려준 것
  // <TypePlaceholder>(arr: TypePlaceholder): TypePlaceholder;
};

const superPrintGeneric: SuperPrintGeneric = arr => arr[0];

const a = superPrintGeneric([1, 2, 3, 4]); // const superPrintGeneric: <number[]>(arr: number[]) => number[]
const b = superPrintGeneric([true, false, true]); // const superPrintGeneric: <boolean[]>(arr: boolean[]) => boolean[]
const c = superPrintGeneric(["a", "b", "c"]);
const d = superPrintGeneric([1, 2, true, false, "hello"]); // const superPrintGeneric: <(string | number | boolean)[]>(arr: (string | number | boolean)[]) => (string | number | boolean)[]
