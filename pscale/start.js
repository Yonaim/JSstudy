require('dotenv').config()
const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL)
console.log('Connected to PlanetScale!')

let str='show tables';
let res;

function getTableList() {
	return (connection.query(str, function(err, result){})
	);
}

async function logTableList() {
	let res = await getTableList();
	console.log(res);
}

logTableList();

connection.end()