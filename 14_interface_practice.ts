// HW1
// interface 이용해서 타입 지정하기
// let 상품 = { brand: "Samsung", serialNumber: 1360, model: ["TV", "phone"] };

interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}

let 상품: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

// HW2
// object 여러개인 array 타입 지정하기
// let 장바구니 = [{ product: "청소기", price: 7000 }, { product: "삼다수", price: 800 }];

interface Cart {
  product: string;
  price: number;
}

let 장바구니: Cart[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

// HW3
// 위에서 만든 interface를 extends해서 아래 object의 타입 지정하기
// { product: "청소기", price: 7000, card: false };
interface Cart {
  product: string;
  price: number;
}

interface NewCart extends Cart {
  card: boolean;
}

// HW4
// object 안에 함수를 2개 넣기
// 1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며, plus 함수는 파라미터 2개를 입력하면 더해서 return 해준다.
// 2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며, minus 함수는 파라미터 2개를 입력하면 빼서 return 해준다.

interface MathObj {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let Objects: MathObj = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};
