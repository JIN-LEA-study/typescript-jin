// HTML 조작시 narrowing 하는 방법 5가지
// 1. if문으로 type narrowing
let 제목 = document.querySelector("#title"); // 잘 찾지 못하면 null, 잘 찾으면 html object 자료가 남는다.
if (제목 != null) {
  제목.innerHTML = "반갑소";
}
// 2. instanceof 연산자 (가장 많이 쓰게 될 문법)
let 제목2 = document.querySelector("#title");
if (제목2 instanceof HTMLElement) {
  // 좌측 object, 우측 class 기입. object가 class의 자식이냐 혹은 전문용어로 instance냐를 확인
  제목2.innerHTML = "반갑소";
}

// 3. assertion (임시 땜빵 문법, as로 사기치기)
let 제목3 = document.querySelector("#title") as HTMLElement;
제목3.innerHTML = "반갑소";

// 4. optional chaining 연산자
let 제목4 = document.querySelector("#title");
if (제목4?.innerHTML != undefined) {
  // 왼쪽에 있는 object 자료안에 .innerHTML이 존재하면 사용하고, 없으면 undefined 남기기.
  제목4.innerHTML = "반갑소";
}

// 5. strict 설정 false로 해제...

// a 태그의 href 속성 바꾸기
let 링크 = document.querySelector("#link");
if (링크 instanceof HTMLElement) {
  링크.href = "https://kakao.com"; //Error
} // HTMLElement 타입은 href 속성이 없다

// html 태그 종류별로 정확한 타입명칭이 있다.
// a 태그는 HTMLAnchorElement
// img 태그는 HTMLImageElement
// h4 태그는 HTMLHeadingElement

let 링크2 = document.querySelector("#link");
if (링크2 instanceof HTMLAnchorElement) {
  링크2.href = "https://kakao.com";
}

// 타입 스크립트에서 eventlistener 붙이기

let 버튼 = document.getElementById("button");
버튼.addEventListener("click", function () {
  console.log("안녕"); // Error - 버튼이라는 변수가 null 일 수도 있어요~
});

let 버튼2 = document.getElementById("button");
버튼2?.addEventListener("click", function () {
  // object?.어쩌구 - 어쩌구라는 자료가 object에 있으면 출력, 없으면 undefined 남겨주세요~
  console.log("안녕");
});

let 이미지 = document.querySelector("#image");
if (이미지 instanceof HTMLImageElement) {
  이미지.src = "change.jpg";
} // html 요소를 찾고, 이를 HTMLImageElement 타입 맞냐고 확인한다.

let 링크3 = document.querySelectorAll(".naver");

링크3.forEach(a => {
  if (a instanceof HTMLAnchorElement) {
    a.href = "https://kakao.com";
  }
});

let 링크4 = document.querySelectorAll(".naver");

for (let i = 0; i < 3; i++) {
  let a = 링크4[i];
  if (a instanceof HTMLAnchorElement) {
    a.href = "https://kakao.com";
  }
}
