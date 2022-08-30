
/**
 * <Undefiend 타입>
 * 값은 undefiend뿐임
 * 변수를 선언만 하고 값을 할당하지 않았으면 변수 안에는 undefined 값이 들어있게 됨
 * 즉 변수의 디폴트값이며, 변수에 값을 할당하지 않았음을 나타내는 시맨틱 
 */
var point;
console.log(point);

var point2 = undefined; // 직접 변수에 undefiend를 할당할 수도 있음
console.log(point2);
// 그러나 초기의 디폴트값인지 직접 값을 할당한 것인지 구분이 되지 않으므로 권장하지 않고 대신 Null을 사용함

/**
 * <Null 타입>
 * 값은 null뿐
 * 만약 어떤 변수 안에 null값이 들어있다면, undefined와는 달리 코드를 수행했음을 알 수 있음
 */
