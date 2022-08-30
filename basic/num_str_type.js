// Number 타입

var point = 1 * "A"; // Number와 string의 곱셈. 이게 가능한가???
console.log(point); // 프로그램이 죽지 않고 NaN가 출력됨!
// 이는 일부가 잘못되어도 나머지 콘텐츠는 표시할 수 있도록하는 자바스크립트의 방향성 때문임

/**
 * JS는 숫자를 처리할때 정수와 실수를 구분하지 않으며, 무조건 전부 64비트 부동소수점 표기를 사용
 */

/**
 * Number 타입의 특수한 값 3개
 * 		NaN : Not-a-Number (일반적으로 오류 상황)
 * 		Infinity : 양수 무한대
 * 		-Infinity : 음수 무한대
 * 			(무한대는 Num의 범위와 무관함)
 */
