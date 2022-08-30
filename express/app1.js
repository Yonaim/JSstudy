import express from "express"

const app = express();
const __dirname = "/Users/yona/Documents/study/JSstudy/express";

app.set('MyPort', process.env.PORT || 3000) // app.set(키, 값) : 데이터 저장. app.get(키)로 가져올 수 있다.
// 환경변수값이 없으므로 Myport키 값의 값은 3000이 된다

app.get("/", (req, res) => {
	res.send("Hello World");
	res.sendFile(__dirname + "/index.html");
})

app.listen(app.set('MyPort'), () => {
	console.log("Now Listening...");
	console.log("현재 대기중인 포트는", app.set('MyPort'),"번 입니다");
})
// app.listen : http 웹 서버와 동일. 포트를 연결하고 서버 실행. 
	// 여기서는 3000번(=app.set('MyPort'))포트에서 실행