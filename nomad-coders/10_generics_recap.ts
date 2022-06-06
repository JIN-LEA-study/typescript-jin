// Generic Recap
type SuperPrintGeneric = {
  <T, M>(a: T[], b: M): T; // T는 함수의 첫번째 파라미터, M은 두번째 파라미터
};

const superPrintGeneric: SuperPrintGeneric = a => a[0];

const a = superPrintGeneric([1, 2, 3, 4], "x");
const b = superPrintGeneric([true, false, true], 1);
const c = superPrintGeneric(["a", "b", "c"], false);
const d = superPrintGeneric([1, 2, true, false, "hello"], []);
