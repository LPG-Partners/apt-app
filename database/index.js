const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'apartmentApp',
});

// connect here once so you dont have to connect each time you have a get request or other type of request
connection.connect();
//

// connection.query(`Select * from users u where u.user_phone_number = 20`, function (error, results, fields) {
//   if (error) throw error;
//   // console.log(results, fields);
// });




exports.connection = connection;
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "apartmentApp".
