const mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'apartmentApp',
});

// connect here once so you dont have to connect each time you have a get request or other type of request
connection.connect();
//

connection.query(`INSERT into users VALUES (1, 'isai', 'lopez', 'user@example.com', 'password', '4157863592', null ,null, null, 'c');`, function (error, results, fields) {
  if (error) throw error;
  console.log('user 1 created');
});




exports.connection = connection;
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "apartmentApp".
