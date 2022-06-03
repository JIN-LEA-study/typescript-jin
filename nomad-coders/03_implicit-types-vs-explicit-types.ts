let a = "hello";
let b: boolean = "x"; // 'string' 형식은 'boolean' 형식에 할당할 수 없습니다.
let bb: boolean = false;
let c = [1, 2, 3];
c.push("1"); // 'string' 형식의 인수는 'number' 형식의 매개 변수에 할당될 수 없습니다.
let cc: number[] = [];
cc.push(1);

const player = {
  name: "nico",
};
player.hello(); // '{ name: string; }' 형식에 'hello' 속성이 없습니다.
