require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection(process.env.DATABASE_URL);

connection.connect();
 
console.log('Connected to PlanetScale!');

connection.query('show tables', function(err, result) {
	console.log(result);
	}
);

connection.query('select * from user_location', function(err, result) {
	console.log(result);
})

connection.end();