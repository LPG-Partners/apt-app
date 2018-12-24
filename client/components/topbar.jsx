import React from 'react';

class TopBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id = 'topBar'>
        <div id = 'signUp'>
          <button class = "signUpButton "> Sign Up</button>
        </div>
        <div id = 'title'>
          <h1> Title</h1>
        </div>
        <div id = 'signIn'>
          <button class = "signInButton"> Sign In</button>
        </div>
      </div>
    )
  }
};

export default TopBar;
