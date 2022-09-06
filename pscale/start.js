require('dotenv').config();
const mysql = require('mysql2');
const connection = mysql.createConnection(process.env.DATABASE_URL);
console.log('Connected to PlanetScale!');

let str='show tables';

function getTableList() {
	return (new Promise((resolve, reject) => {
		const res = connection.query(str, (err, result) => {});
		resolve(res);
	}
	));
}

async function logTableList() {
	let res = await getTableList();
	console.log(res);
}

// logTableList();

connection.end()