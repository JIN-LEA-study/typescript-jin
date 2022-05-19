let 이름10: string = "kim";
let 나이: number = 20;
let 결혼했니: boolean = false;
// null, undefined도 있는데 굳이 사용하지 않는다.

// array 자료에 타입 지정 가능
let 회원들: number[] = [1, 2];
let 회원들2: string[] = ["kim", "park"];

// 변수 하나에 여러자료 object 자료형 써도 된다.
let 회원: { member1: string; member2: string } = {
  member1: "kim",
  member2: "park",
};

let 내정보: { age: number } = { age: 20 };

// Union type : 타입 2개 이상 합친 새로운 타입 만들기
let 회원2: number | string = 123;
// let 회원2: number | string = 'kim';
// let 회원3: number | string | boolean = 123;

// 숫자 or 문자가 가능한 array 타입 지정
// array와 object 자료에 number 또는 string이 들어올 수 있게 타입을 수정
let 어레이: (number | string)[] = [1, "2", 3];
let 오브젝트: { a: string | number } = { a: 123 };

// 모든 자료형 허용해준다(타입스크립트 쓰는 의미가 없다. -> 타입 실드 해제 문법)
let 이름11: any;
이름11 = 123;
이름11 = [];

//any 보다는 unknown 타입이 나은듯
// 요즘 타입스크립트는 unknown 타입을 사용합니다.

let 이름12: unknown;
이름12 = 123;
이름12 = undefined;
이름12 = {};

let 이름13: unknown;
// unknown 타입을 다른 곳에 집어넣으려고 하면 그쪽 실드가 발동해서 에러
// let 변수1: string = 이름13; // error
// let 변수2: boolean = 이름13; // error
// let 변수3: number = 이름13; // error

let 이름14: any;
// any는 안그럼
let 변수1: string = 이름14;
let 변수2: boolean = 이름14;
let 변수3: number = 이름14;

// 이름12 - 1 // error
// 간단한 수학연산도 타입 맞아야 한다.

let 나이2: string | number;
나이 + 1;
// 나이2 + 1; // error
"kim" + 1;

// string 타입 + 1 (허용)
// number 타입 + 1 (허용)
// string|number 타입 + 1 (안돼)

// 1.
// 다음 변수 4개에 타입을 지정
// let user = 'kim';
// let age = undefined;
// let married = false;
// let 철수 = [user, age, married];

let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, age, married];

// 2.
// 학교라는 변수에 타입을 지정

// let 학교 = {
//   score : [100, 97, 84],
//   teacher : 'Phil',
//   friend : 'John'
// }
// 학교.score[4] = false;
// 학교.friend = ['Lee' , 학교.teacher]

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
