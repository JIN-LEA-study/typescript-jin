// overloading은 여러 call signatures가 있는 함수
type Add = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const add: Add = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};

// cf. next.js의 라우터로 오버로딩 예제
// 1. string으로 보낼 수 있고
Router.push("/home");

// 2. 객체 형식, object로도 보낼 수 있다.
Router.push({
  path: "/home",
  state: 1, // extra things 추가할 수 있다.
});

// 자주 쓰이는 형태
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = config => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path);
  }
};

// 하나의 call signature에 두개의 파라미터를 가지고
// 다른 하나는 6개의 파라미터를 가지는 경우
// 파라미터의 개수가 다를 때
type Add2 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number; //c는 기본적으로 옵션
};

const add2: Add2 = (a, b, c?: number) => {
  return a + b;
};
