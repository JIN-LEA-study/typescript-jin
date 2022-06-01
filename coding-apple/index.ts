// 1반과 2반의 달리기 순서이다. 각 반의 1등은 누구인가

let firstClass = { student: ["Rogan", "Michael", "Jacob", "Daniel"] };
let secondClass = { student: ["Emma", "Hannah", "Ashley", "Taylor"] };

function 누가1등일까(x: { student: string | string[] }) {
  if (typeof x.student === "string") {
    return x.student;
  } else if (Array.isArray(x.student)) {
    return x.student[0];
  } else {
    return "ERROR";
  }
}

console.log(누가1등일까(firstClass)); // Rogan
console.log(누가1등일까(secondClass)); // Emma
