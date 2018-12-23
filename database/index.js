const mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'apartmentApp',
});

// connect here once so you dont have to connect each time you have a get request or other type of request
connection.connect(function (err) {
  if (err) {
    throw err;
  }
  console.log('connected');
});
//


exports.connection = connection;
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "apartmentApp".
