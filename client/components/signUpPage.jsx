import React, {Component} from 'react';

class SignUpPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <div class="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr/>

          <label for='first-name'><b>First Name</b></label>
          <input type='text' placeholder="Enter First Name" name="first-name" required/>

          <label for='last-name'><b>Last Name</b></label>
          <input type='text' placeholder="Enter Last Name" name="last-name" required/>

          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required/>

          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required/>

          <label for="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>

          <label for="phone"><b>Enter Phone Number</b></label>
          <input type="tel" id="phone" name="phone" placeholder="xxx-xxx-xxxx" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>

          <hr/>
          <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

          <button type="submit" class="registerbtn">Register</button>
        </div>

        <div class="container signin">
          <p>Already have an account? <a href="#">Sign in</a>.</p>
        </div>
      </form>
          );
  }
}

export default SignUpPage;
