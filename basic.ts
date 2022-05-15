// .ts는 브라우저가 인식을 못한다. js만 인식 가능하다.
// tsconfig.json은 ts -> js 컴파일 시 옵션 설정 가능
// 터미널에 tsc -w 입력하면 자동변환 -> 컴파일

// 타입으로 쓸 수 있는 것 : string, number, boolean, bigint, null, undefined,[], {}
let 이름1: string = "kim";
이름1 = "김박";

// Type Error :
let 이름2: string = "kim"; // error : 'number' 형식은 'string' 형식에 할당할 수 없다.
// 이름2 = 123;

// object 타입 지정
let 이름3: { name: string } = { name: "kim" };
let 이름4: { name?: string } = { name: "kim" }; // name? : name이란 속성이 들어올 수도 있고 안들어 올 수도 있다.

// 다양한 타입이 들어올 수 있게 하려면 Union type
let 이름5: string | number = "kim"; // | 기호를 이용해 or 연산자를 표현
let 이름6: string | number = 123;
let 이름7: string[] | number = 123; // string이 담긴 array or number가 들어올 수도있다.

// Type alias : 타입을 변수에 담기
type nameType = string | number;
let 이름8: nameType = "kim"; // type 키워드를 이용해 타입을 변수처럼 담아서 사용가능

// literal type : 나만의 타입 지정
type NameType = "kim" | "park"; // 임의 지정 타입 선언
let 이름9: NameType = "kim"; // 이름9라는 변수엔 앞으로 'kim' 또는 'park'만 들어올 수 있다.

// 함수는 파라미터와 return 값이 어떤 타입일지 지정가능
function 함수(x: number): number {
  return x * 2; //무조건 number return도 number
}

// array에 쓸 수 있는 tuple 타입
type Member = [number, boolean]; // 무조건 첫번째는 number, 두번째는 boolean
// let john: Member = ["123", true]; // error
let john: Member = [123, true];

// object에 타입 지정해야할 속성이 많다.
type Member2 = {
  [key: string]: string; // 글자로 된 모든 object 속성의 타입은 : string
  // [key:string] : 모든 object 속성
};
let jjohn: Member2 = { name: "kim" };

// class 타입 지정 가능
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// 항상 타입이 무엇인지 미리 체크하는 narrowing 또는 assertion 문법을 사용
//에러
function 함수1(x: number | string) {
  // return x * 2;
}

//가능
function 함수2(x: number | string) {
  if (typeof x === "number") {
    return x * 2;
  }
}
