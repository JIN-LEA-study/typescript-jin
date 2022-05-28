// Type이 아직 하나로 확정되지 않았을 경우 Type Narrowing을 써야 한다.
// 어떤 변수가 타입이 아직 불확실하면 if문 등으로 Narrowing 해줘야 조작 가능
function 내함수(x) {
    if (typeof x === "string") {
        return x + "1";
    }
    else {
        // if문을 썼으면 끝까지 써야 안전하다. else, else if 안쓰면 에러로 잡아 줄 수도
        return x + 1;
    }
}
// Type Narrowing
// if문 등으로 타입을 하나로 정해주는 것을 뜻한다.
// Narrowing으로 판정해주는 문법들
// typeof 변수 속성명 in 오브젝트 자료
// 인스턴스 instanceof 부모
// Narrowing으로 판정해주는 문법들
// 그냥 현재 변수의 타입이 뭔지 특정지을 수 있기만 하면 다 인정해준다.
function 니함수(x) {
    var array = [];
    if (typeof x === "number") {
        array[0] = x;
    }
    else {
        // instanceof
    }
}
// Type Assertion
// "이 변수의 타입을 number로 생각해주세요" - 타입 덮어쓰기 if문이 필요없다.
// Assertion문법의 용도
// 1. 왜 타입에러가 나는지 정말 모르겠는 상황에 임시로 에러해결용으로 사용하거나 (Narrowing할 때)
// 2. 내가 어떤 타입이 들어올지 정말 확실하게 알고 있는데 컴파일러 에러가 방해할 때 (무슨 타입이 들어올 지 100% 확실할 때)
// as 쓰면 간편하지만 정확히 코드짜려면 narrowing을 써야한다.
// as 키워드는 타입을 개발자 맘대로 주장하는 역할이다. 이는 엄격한 타입체크기능을 잠깐 안쓰겠다는 뜻과 동일하다.
// 대부분의 상황에선 as 보다 훨씬 엄격하고 좋은 type narrowing으로 해결할 수 있다.
function 저함수(x) {
    // 여러개의 union타입을 확정짓고 싶을때 쓰는 문법이지, type을 a에서 b로 변경하는 문법이 아니다.
    var array = [];
    array[0] = x;
    return x + 1;
}
console.log(저함수(123));
