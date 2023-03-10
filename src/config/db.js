const mysql = require('mysql');
const connection = mysql.createConnection({
  database: 'test_db',
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: '',
  multipleStatements: true
});

connection.connect((err) => {
  if (err) {
    console.log('db.js error: ', err);
  } else {
    console.log('connected');
  }
});

module.exports = connection;