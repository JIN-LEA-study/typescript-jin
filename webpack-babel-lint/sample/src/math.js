// 전역 공간에 sum이 노출
export function sum(a,b){
    return a + b;
}

// IIFE 방식으로
// 함수 스코프를 만들어 외부에서 안으로 접근하지 못하도록 공간을 격리
// var math = math || {}; // math 네임스페이스
//
// (function(){
//     function sum(a,b){
//         return a + b;
//     }
//
//     math.sum = sum; // 네임스페이스에 추가
//
// }())
