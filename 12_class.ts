// 필드값 타입지정

class Person {
  // data: number = 0;
  data = 0; // 타입 생략해도 컴파일러가 알아서 타입지정 해준다.
}

let henry = new Person();
let apple = new Person();

console.log(henry.data);
console.log(apple.data);

// class 내부에는 모든 자식 object들이 사용가능한 속성?을 만들 수 있다.
// 예를 들어 모든 Person 클래스의 자식들에게 data 라는 속성을 부여해주고 싶으면

// constructor 타입 지정
// class는 간단히 말하면 object 복사기계
// { name : 어쩌구, age : 어쩌구 } 이렇게 생긴 object 자료를 복사해주는 기계
// ES6 신문법에선 constructor 함수
class Person2 {
  name: string;
  // constructor(a: string) :number{ // 복제 되는 것이 항상 object인데 굳이 return 타입 지정할 이유는 없다.
  constructor(a: string) {
    this.name = a;
  }
  // prototype 함수 타입 지정
  이그저걔함수(a: string) {
    console.log("안녕" + a);
  }
}

Person;

let 사람1 = new Person2("kim");
let 사람2 = new Person2("park");

console.log(사람1); // constructor 파라미터 타입 지정 가능

사람1.이그저걔함수("안녕");

// HW1
// Car 클래스
// 1. { model : '소나타', price : 3000 } 이 object를 복사해주는 class를 만들어라.
// 2. 복사된 object 자료는 .tax() 라는 함수가 사용 가능하다. 현재 object에 저장된 price의 10분의 1을 출력해야 한다.
// 3. model과 price 속성의 타입과 .tax() 함수의 return 타입도 지정한다.

class Car {
  model: string;
  price: number;
  constructor(a: string, b: number) {
    this.model = a;
    this.price = b;
  }

  tax(): number {
    return this.price * 0.1;
  }
}

let car1 = new Car("소나타", 3000);
console.log(car1); // 콘솔창 출력 결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()); // 콘솔창 출력 결과는 300

// HW2
// 파라미터가 들어가는 class, Word를 만들어라.
// 1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력한다.
// 2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장된다.
// 3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는, class를 만들어라.
// 4. class 만들 때 넣을 수 있는 숫자와 문자 개수에 제한은 없다.

class Word {
  num;
  str;

  constructor(...param) {
    let 숫자들: number[] = [];
    let 문자들: string[] = [];

    param.forEach(i => {
      if (typeof i === "string") {
        문자들.push(i);
      } else {
        숫자들.push(i);
      }
    });

    this.num = 숫자들;
    this.str = 문자들;
  }
}

let obj = new Word("kim", 3, 5, "park");
console.log(obj.num); // [3,5]
console.log(obj.str); // ['kim', 'park']

// 1. class Word를 만들고, constructor를 만든다.
// 2. 그 안에는 rest parameter가 들어올 수 있게 만든다. 이제 new Word() 할 때 파라미터를 많이 입력하는 것이 가능해진다.
// 3. rest parameter는 array로 들어온다. 이 것을 반복문 돌려서 하나하나 검사해본다.
// 4. 파라미터 타입이 문자면 문자들 []에 추가, 숫자면 숫자들 []에 추가한다.
// 5. this.num = 숫자들 array, this.str = 문자들 array 이렇게 해준다.
