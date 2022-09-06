// Promise is a JS object for asynchronous operation.
// State: Pending -> fulfiled or rejected
// Producer vs. Consumer

// --------- 1. Producer ----------
// Caution!!! when new Promise is created, the executor function runs automatically.
const prom1 = new Promise((resolve, reject) => {
	// doing some heavy work (network, read files...)
	console.log('doing something...');
	setTimeout(() => {
		resolve('Success');
		// reject('Don't throw none Error object like this');
		// reject(new Error('This is correct Error handling'));
	}, 1000);
})
// Promise 객체는 콜백 함수 'executor(resolve, reject)'를 인자로 받음
	// executor는 Promise 객체가 생성되는 즉시 무조건 실행됨 (말 그대로 실행시킬 부분)
	// 두 매개변수 resolve, reject 또한 함수임.
	// executor가 정상 실행된 경우에는 resolve를 호출하고 그렇지 않은 경우에는 reject를 호출하도록 코드를 작성

// ---------- 2. Consumers : then, catch, finally ----------
// 프로미스 객체 prom1에 .then 혹은 .catch 혹은 .finally 메서드를 사용해 각 상황에 실행할 함수를 전달
prom1
	.then(function wow(value) {
		console.log(value);
		console.log("then");
	})
	.catch(error => {
	console.log(error);
	})
	.finally(() => {
		console.log('whatever happend before, This is End');
	})
// .then 메서드가 반환하는 것도 프로미스 객체이기 때문에 위처럼 작성하는 것이 가능함!
// finally는 성공했든 실패했든 마지막에 무조건 실행됨
// catch로 error를 잡지 않으면 Uncaught Error로 console에 출력됨. (error handling을 하지 않았으니...)


// ---------- 3. Promise chaining ----------
// then 메서드를 연결해서 사용
const fetchNumber = new Promise(function exe(resolve, reject){
	setTimeout(() => resolve(5), 1000);
});

fetchNumber.then(result => result * 2)
.then(result => result * 3)
.then(num => {
	return new Promise((resolve, reject) => {
		resolve(num - 9);
	}) // 이렇게 then에 넘겨주는 함수가 새로운 Promise 객체를 반환해도 OK!!!
})
.then((value) => {
	console.log(value);
})
// .then 메서드에 넘겨주는 함수가 새로운 Promise 객체를 반환하면 해당 Promise 객체가 .then 메서드의 결과로 반환된다!
// 즉 위의 예시에서 최종적으로 출력되는 값은 (5 * 2 * 3) - 9 = 21이다.

// 4. Error Handling
const getHen = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => resolve('get Hen!'), 1000);
	});
const getEgg = (Hen) =>
	new Promise((resolve, reject) => {
		setTimeout(() => resolve(`Using ${Hen}, We get Egg!`), 1000);
	});
const cook = (egg) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`Wow ${egg} is now delicious Meal!`);
		}, 1000);
	});