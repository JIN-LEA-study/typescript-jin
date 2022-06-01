// object에 타입지정하려면 interface도 있다.
// type 지정
type Square = { color: string; width: number };
let 네모: Square = { color: "red", width: 100 };

// object 타입 지정 시 interface의 사용 가능하다.
interface Square2 {
  color: string;
  width: number;
}
let 네모2: Square2 = { color: "red", width: 100 };

interface Student {
  name: string;
}
interface Teacher {
  name: string;
  age: number;
}

let 학생: Student = { name: "Kim" };
let 선생: Teacher = { name: "kim", age: 20 };

// interface 장점 : extends로 복사 가능
interface Student {
  name: string;
}
// Student interface를 extends 해달라고 적으면, Student 안에 있던 것을 복사해서 Teacher에 넣어준다.
// 이제 Teacher 타입은 age, name 속성을 가진다.
interface Teacher extends Student {
  age: number;
}

// type 키워드와의 차이점
// & 기호 (intersection type)
// 두 타입을 전부 만족하는 타입이라는 뜻
type Animal2 = { name: string };
type Cat = { age: number } & Animal2; // 좌우측 모두 만족하는 타입을 하나 생성

let 야옹이: Cat = { name: "kim" }; // (주의) & 쓸 때 중복속성 발생하면? 미리 에러가 안난다.

// type vs interface
// 타입 이름 중복 선언시
// interface는 중복선언 가능 (합쳐짐)
// type은 중복선언 불가능
interface Student2 {
  name: string;
}

interface Student2 {
  score: number;
}

type Cat = Animal & { legs: number }; // type은 엄격해서 중복선언 안된다.

// 외부 라이브러리 같은 경우 interface로 도배되어 있는데, 그래야 customizing이 쉽기 때문이다.
// 따라서 다른 사람이 많이 이용할 것 같으면 object 타입 정할 때 interface를 쓰는 것이 좋다.

// extends 쓸 때 중복속성 발생하면 에러로 잡는다.
interface Student {
  name: string;
}

interface Student {
  name: string;
}

interface Teacher extends Student {
  name: number; // 중복속성 발생 -> Error
}
// (주의) name : string , name : number 라서 에러가 나는 것이다.
// 둘다 name : string 타입이면 에러가 나지 않는다. (하나로 합쳐줌)
