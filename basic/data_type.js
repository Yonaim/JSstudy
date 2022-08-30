var point = 123; // number
var book1 = "책"; // string
var book2 = '책'; // string

console.log(typeof point);
console.log(typeof book1);
console.log(typeof book2);

/**
 * 데이터 타입에는 
 * 1. 숫자 (number) 
 * 2. 문자 (string)
 * 가 있음
 * 문자를 표현할때는 큰 따옴표와 작은 따옴표 무엇이든 가능
 * typeof 연산자는 키워드임
 */

 var point = "이게 들어가지네";
 console.log(typeof point);
 
/**
 * 자바스크립트의 변수는 데이터형이 고정되어있지 않음.
 * 바로 직전에 숫자를 보관하고 있던 변수도 문자를 보관하게 될 수 있음...
 */

// 즉 js는 데이터의 값에 따라 변수의 데이터 타입이 결정됨.