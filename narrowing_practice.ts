// HW 1

// 숫자 여러개가 들어가는 array에 '4','5' 와 같은 문자타입의 숫자가 발견된다.
// 문자타입을 숫자로 바꾸는 함수를 만들어라.

function 클리닝함수(a: (number | string)[]) {
  let 클리닝완료된거: number[] = [];

  a.forEach(b => {
    if (typeof b === "string") {
      클리닝완료된거.push(parseFloat(b));
    } else {
      클리닝완료된거.push(b);
    }
  });

  return 클리닝완료된거;
}

console.log(클리닝함수([123, "3"])); // [123, 3]
console.log(클리닝함수([123, "4", "5"])); // [123, 3, 4]

// 1. 클리닝 함수 생성, 파라미터로 array를 집어넣을 수 있도록 작성한다.
// 2. 클리닝 완료된 array를 클리닝완료된거라고 작명해서 만든다.
// 3. 집어넣은 array를 반복문을 돌리기 위해 forEach()를 사용한다.
// 4. 반복문 돌리면 array 안에 있던 하나하나의 자료가 b라는 파라미터로 나온다.
// 5. string 타입이면 parseFloat(b)에 넣어서 숫자로 바꾸고 클리닝완료된거 array에 집어넣는다.
// 6. number 타입이면 클리닝완료된거 array에 집어넣는다.


// HW 2

// 선생님이 가르치고 있는 과목 중 맨 뒤의 1개를 return 해주는 함수를 만들어라.

let 철수쌤 = { subject: "math" };
let 영희쌤 = { subject: ["science", "english"] };
let 민수쌤 = { subject: ["science", "art", "korean"] };
let 에러친구 = { hello: "hi" };

function 이함수가그함수(x: { subject: string | string[] }) {
  if (typeof x.subject === "string") {
    // x.subject라는 파라미터는 케이스가 2개, 안전하게 마지막 else 문도 추가
    return x.subject;
  } else if (Array.isArray(x.subject)) {
    // 변수가 array 자료인지 확인하려면 typeof(X), Array.isArray()(O)
    return x.subject[x.subject.length - 1];
  } else {
    return "에러에러";
  }
}

console.log(이함수가그함수(철수쌤)); // math
console.log(이함수가그함수(영희쌤)); // english
console.log(이함수가그함수(민수쌤)); // korean
// console.log(이함수가그함수(에러친구)); // 에러에러
// console.log(이함수가그함수({ hello: "hi" })); // 에러에러
