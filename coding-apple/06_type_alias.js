var 동물;
var 인간 = { name: "kim", age: 20 };
// type 키워드 안쓰면 이렇게 만들어야 한다. 지저분.
var 인간2 = { name: "john", age: 20 };
// const 변수는 등호로 재할당만 막는 역할
// const로 담은 object 수정은 자유롭게 가능하다.
var 출생지역 = { region: "seoul" };
출생지역.region = "busan";
// typescript 쓰면 object 자료 수정도 막을 수 있다.
var 바꾸는친구 = {
    name: "엠버",
};
바꾸는친구.name = "유라"; // 바뀜
var 못바꾸는친구 = {
    name: "엠버",
};
못바꾸는친구.name = "유라"; // Error
var 걍친구 = {
    name: "엠버",
};
var position = { x: 10, y: 20 };
// (참고) 같은 이름의 type 변수 재정의 불가능
