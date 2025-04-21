const mysql = require('mysql2');
const conn = mysql.createConnection({
  host: 'localhost', user: 'root', password: '', database: 'testdb'
});
conn.query('SELECT * FROM users', (err, results) => {
  if (err) throw err;
  console.log(results);
});