// HW1
// 1. 이 타입은 object 자료형이다.
// 2. 이 타입은 color 라는 속성을 가질 수도 있으며, 항상 문자가 들어와야 한다.
// 3. 이 타입은 size 라는 속성이 있어야하며, 항상 숫자가 들어와야 한다.
// 4. 이 타입은 position 이라는 변경 불가능한 속성이 있어야하며, 항상 숫자가 담긴 array 자료가 들어와야 한다.

type MyType = {
  color?: string;
  size: number;
  readonly position: number[];
};

let 테스트용변수: MyType = {
  size: 123,
  position: [1, 2, 3],
};

// HW2
// 1. 이렇게 생긴 object 자료를 다룰 일이 많다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
// 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어라.
// 3. 각 속성이 어떤 타입일지는 자유롭게 정한다.

type UserData = { name: string; email?: string; phone: number };
let 회원가입정보: UserData = {
  name: "kim",
  phone: 123,
};

// HW3
// 1. 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어라.
// 2. 미성년자 여부 속성은 true/false만 가능하다.

type UserData2 = { name: string; email?: string; phone: number };
type AdultCheck = { adult: boolean };

type NewUser = UserData2 & AdultCheck;

let 회원가입정보2: NewUser = {
  name: "kim",
  adult: false,
  phone: 1234,
};
