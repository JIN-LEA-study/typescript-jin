// HW2
// 함수 2개를 만들고 타입 지정
// - cutZero() 함수
// - 문자 하나 입력하면, 맨 앞에 '0' 문자가 있으면 제거한 후, string type으로 return 한다.
// - removeDash() 함수
// - 문자 하나 입력하면, 대시기호 '-' 가 있으면 전부 제거한 후, 숫자 type으로 return 한다.

type CutType = (x: string) => string;

let cutZero: CutType = function (x) {
  let result = x.replace(/^0+/, "");
  return result;
};
function removeDash(x: string): number {
  let result = x.replace(/-/g, "");
  return parseFloat(result);
}
// cutZero는 파라미터 입력하면 첫 글자 0을 제거 후 return,
// removeDash는 파라미터 입력하면 - 대시 기호 제거 후 return

// HW3
// 함수에 함수를 집어넣기 (콜백함수)
// 이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수이다.
// 1. 첫째 파라미터한다. 를 둘째 파라미터(함수)에 파라미터로 집어넣는다.
// 2. 둘째 파라미터(함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣는다.
// 3. 셋째 파라미터(함수)에서 return된 결과를 콘솔창에 출력
// 실행예시 - 만들함수('010-1111-2222', cutZero, removeDash)

// 1) 타입 지정 없이 작성
function 만들함수js(a, func1, func2) {
  let result = func1(a);
  let result2 = func2(result);
  console.log(result2);
}
만들함수js("010-1111-2222", cutZero, removeDash); //1011112222
// 1. 만들함수js에 입력한 a라는 파라미터를 func1()함수에 넣는다.
// 2. 집어넣은 결과를 result에 저장한다.
// 3. 그 결과를 다시 func2() 함수에 넣는다.
// 4. 최종 결과를 콘솔창에 출력한다.

// 2) 타입 지정
type 함수타입1 = (a: string) => string;
type 함수타입2 = (a: string) => number;

function 만들함수ts(a: string, func1: 함수타입1, func2: 함수타입2) {
  // 첫 파라미터는 문자
  // 둘째 파라미터는 cutZero같은 함수, 함수타입을 alias로 만듦
  // 셋째 파라미터는 removeDash같은 함수, 함수타입을 alias로 만듦
  let result = func1(a);
  let result2 = func2(result);
  console.log(result2);
}
만들함수ts("010-1111-2222", cutZero, removeDash); //1011112222
