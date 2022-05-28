// 타입 정의가 너무 길면 Type Aliases
// type alias (타입 변수)
// 타입을 변수처럼 만들어서 쓰는 alias 문법, 관습적으로 대문자로 시작
type Animal = string | number | undefined;
let 동물: Animal;

// object 타입도 저장 가능
type Human = { name: string; age: number };
let 인간: Human = { name: "kim", age: 20 };

// type 키워드 안쓰면 이렇게 만들어야 한다. 지저분.
let 인간2: {
  name: string;
  age: number;
} = { name: "john", age: 20 };

// const 변수는 등호로 재할당만 막는 역할
// const로 담은 object 수정은 자유롭게 가능하다.
const 출생지역 = { region: "seoul" };
출생지역.region = "busan";

// typescript 쓰면 object 자료 수정도 막을 수 있다.
const 바꾸는친구 = {
  name: "엠버",
};
바꾸는친구.name = "유라"; // 바뀜

type RandomFriend = {
  readonly name: string; // 읽기 전용, 수정이 안된다.
};

const 못바꾸는친구: RandomFriend = {
  name: "엠버",
};

못바꾸는친구.name = "유라"; // Error

// 실제 변환된 js 파일은 에러가 없다.
// 타입 스크립트 에러는 에디터 & 터미널에서만 존재한다.

type Justfriend = {
  name?: string; // name 속성은 선택 사항 들어와도 되고 안들어와도 된다. (string 또는 undefined가 들어올 수 있다는 뜻)
  // name: string | undefined; // 위와 같은 의미
};

const 걍친구: Justfriend = {
  name: "엠버",
};

// type 키워드 여러개를 합치기
// 방법 1. type 변수, union type으로 합치기
type Name = string;
type Age = number;
type Eric = Name | Age; // string 또는 number가 들어온다.

// 방법 2. & 연산자로 object 타입 합치기
type PositionX = { x: number };
type PositionY = { y: number };
// 다음과 같이 만들려면 { x: number , y: number }
type NewType = PositionX & PositionY; // 개발자 용어 : object를 extend한다.
let position: NewType = { x: 10, y: 20 };

// (참고) 같은 이름의 type 변수 재정의 불가능
