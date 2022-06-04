let a: number[] = [1, 2];
let b: string[] = ["i1", "1"];
let c: boolean[] = [true];

const player: {
  name: string;
  age?: number; // (property) age?: number  // optional parameter(선택적 변수) 지정하기
} = {
  name: "nico",
};

if (player.age && player.age < 10) {
}

// 1. 매번 이렇게 반복해서 쓸 순 없다.
const playerNico: {
  name: string;
  age?: number;
} = {
  name: "nico",
};

const playerLynn: {
  name: string;
  age?: number;
} = {
  name: "lynn",
};

// 2. 새 타입을 만든다. Alias 타입
// 2-1.
// type Player = { name: string; age?: number };
// 2-2.
type Name = string;
type Age = number;
type Player = { name: Name; age?: Age }; // <-이 방식도 가능하다. 여기선 조금 과하다.

const Nico: Player = {
  name: "nico",
};

const Lynn: Player = {
  name: "lynn",
};

// 3. 함수 return값의 타입 지정하기
function playerMaker(name: string): Player {
  // 1) : Player를 써주면
  // string 타입으로 name을 받고 Player 타입을 return하는 함수
  return {
    name, // name: string;
  };
}

const nico = playerMaker("nico");
nico.age = 12; // 2) nico가 Player 타입이 되기 때문에 에러가 풀린다.

// 4. 화살표 함수를 썼을 때 playerMaker의 타입 지정하기
const playerMaker2 = (name: string): Player => ({ name });
