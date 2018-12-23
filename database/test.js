var db = require ('./index.js');

let queryString = `INSERT into users VALUES (1, 'user@example.com', 'password', null, null, 'c');`;

db.query(queryString, (err, results) => {
  if (err) throw err;
  console.log('success');
});
