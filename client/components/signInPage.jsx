import React, {Component} from 'react';

class SignInPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
      <div className="container">
        <h1>Log In</h1>
        <hr/>

        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required/>
        <hr/>
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required/>
        <hr/>
        <button type="submit">Login</button>

      </div>

        <div className="container">
          <button type="button" className="cancelbtn">Cancel</button>
          <span className="psw">Forgot <a href="#">password?</a></span>
        </div>
        </form>
    );
  }
}

export default SignInPage;
