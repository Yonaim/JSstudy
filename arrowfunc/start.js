// router.get("/", (req, res, next) => {
// 	console.log("here home");
// 	res.sendStatus(200);
// });
	// 위 코드의 의미를 이해하는게 목표....

import router from "../../glance42/Routers/home";

 /*
 router.get
 ("/", (req, res, next) => 
	{
		console.log("here home");
		res.sendStatus(200);
	}
);

router.get이라는 함수의 인자로
1. "/"
2. 함수 (req, res, next)
를 넘김
*/

var func1 = function(x, y) {
	return (x + y);
}

var func2 = (x, y) =>
{
	return (x + y);
}

var func3 = (x, y) => (x + y);


var func4 = (x, y) =>
{
	console.log(x + y);
}

console.log(func1(1,3));
console.log(func2(1,3));
console.log(func3(1,3));
console.log(func4(1,3));