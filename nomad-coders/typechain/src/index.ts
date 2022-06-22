// myPackage가 node_module인 것처럼 생각

import { init, exit } from "myPackage";

init({ url: "true" });

exit(1);

localStorage; // lib.dom.d.ts - 타입 스크립트가 localStorage가 뭔지 아는 방법, 위 코드는 그에 대한 예시이다.
