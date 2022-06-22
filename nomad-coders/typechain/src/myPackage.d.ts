// d.ts는 타입스크립트에게 타입에 대해 설명한다.
// myPackage 선언
// d.ts의 정의 파일에서 호출 시그니처, 즉 타입만 써주면 된다.

interface Config {
  url: string;
} // 인터페이스에 url을 보낼 거라 알려준다.

declare module "myPackage" {
  function init(config: Config): boolean;
  function exit(config: number): number;
} // init이 boolean을 반환한다는 것을 알려준다.
