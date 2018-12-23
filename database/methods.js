const { connection } = require('./index.js');

// const signUpUser = (firstName, lastName, email, password, phoneNumber, recoveryEmail) => {
//   let queryString = `INSERT INTO users VALUES (null, '${firstName}', '${lastName}', '${password}', '${phoneNumber}', '${recoveryEmail}');`;
//   connection.query(queryString, (error, results, fields) => {
//     if (error) throw error;
//     console.log('user has successfuly been added to the database')
//   });
// }

const signUpUser = (firstName, lastName, email, password, phoneNumber, recoveryEmail) => {
  let queryString = `Select * from users u where u.user_phone_number = '${phoneNumber}';`;
  connection.query(queryString, (error, results, fields) => {
    if (error) throw error;
    else if (results.length === 0) {
      queryString = `INSERT INTO users VALUES (null, '${firstName}', '${lastName}', '${email}', '${password}', '${phoneNumber}', '${recoveryEmail}');`;
      console.log(queryString);
      connection.query(queryString, (error, results, fields) => {
        if (error) throw error;
        console.log('user has successfuly been added to the database');
      });
    } else {
      console.log(results[0]);
      console.log('error, this phone number is already registered to a valid user.');
    }
  });
};

//this will allow for user to log in
const logUserIn = (email, password) => {
  let queryString = `Select * from users u where u.user_email = '${email}' AND u.user_password = '${password}';`;
  console.log(queryString);
  connection.query(queryString, (error, results, fields) => {
    if (error) throw error;
    else if(results.length === 0){
      console.log("unsuccesful log in");
    }else{
      console.log("succesful log in");
    }
  })
};

// signUpUser('greg', 'pereira', 'fakemail1@gmail.com', 'p4ssw0rd', '4152502472', 'fakeemail2@gmail.com');

logUserIn('user@example.com', 'password');



const updateUserPass = (email, oldPassword, newPassword) => {
  queryString = `UPDATE users u SET u.user_password = '${newPassword}' WHERE u.user_email = '${email}' AND u.user_password = '${oldPassword}';`;
  console.log(queryString);
  connection.query(queryString, (error, results, fields) => {
    if (error) throw error;
    console.log('success, system updated');
  })
};

// updateUserPass('fakemail1@gmail.com', 'p4ssw0rd', 'NeWp4sSw0rD');
// posts
  // add user


// reads

// deletes
  // delete a user

// updates
  // update email with verification
  // update a phone number

  //update password by username and password
