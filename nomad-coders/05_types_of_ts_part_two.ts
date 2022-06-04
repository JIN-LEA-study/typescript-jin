type Age = number;
type Name = string;
type Player = {
  readonly name: Name;
  age?: Age;
};

const playerMaker = (name: string): Player => ({ name });
const nico = playerMaker("nico");
nico.age = 12;

const numbers: readonly number[] = [1, 2, 3, 4];
numbers.push(1); //'readonly number[]' 형식에 'push' 속성이 없습니다.

const names: readonly string[] = ["1", "2"]; //readonly로 불변성(immutability)을 갖는다.
names.map; // (O)
names.filter; // (O) - array를 바꾸지 않는 것은 가능하다.

const player: readonly [string, number, boolean] = ["nico", 1, true]; // 대상에 3개가 필요합니다.
player[0] = "hi"; // 읽기 전용 속성이므로 '0'에 할당할 수 없습니다.

// any
// let a = [];
// let a: any[] : any는 typescript의 보호장치로 빠져나오고 싶을 때 쓰는 타입

const a: any[] = [1, 2, 3, 4];
const b: any = true;
a + b; // any는 모든 것을 비활성화하기 때문에 javascript가 되어버린다.
