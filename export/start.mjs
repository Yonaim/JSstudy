import newname from "./testfile.mjs"
import {A, B as newB, C} from "./testfile.mjs"
import {months, day, num} from "./testfile.mjs"

newname();
A();
newB();
C();
console.log(months);
console.log(day);
console.log(num);

// package.json에 module 타입임을 명시하지 않고 module 타입으로 실행하려면 파일 확장자명을 mjs라고 변경해야 함
	// 그렇지 않으면 그냥 CommonJS타입으로 간주됨
// default가 아닌 export 대상에 대해 다른 이름으로 import하려면 as 키워드를 사용해야 함
	// 예시의 경우 B를 newB라는 기존과 다른 이름으로 import함
