import express from "express";

const myapp = express();

myapp.use("/", (req, res) => {
	console.log("here is home");
	res.sendStatus(200);
})

myapp.use("1", (req, res) => {
	console.log("this is 1");
})
myapp.use("2", (req, res) => {
	console.log("this is 2");
})
// app.use("3", router3);

// app.use('/', (req, res) => {
// 	console.log('모든 http 요청에 대해 응답')
//   res.end()
// })

// app.get('/', (req, res) => {
//  res.status(200).send('success!!')
// })

// app.post('/message', (req, res) => {
// const {email} = req.body;

// if(!email) {
//   res.status(404).send('failed')
// } else {
//   res.status(200).send(`your email is ${email}`)
// })

// app.get('/message', (req, res) => {
// res.status(200).send('connect!!')
// })