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
        <h1> Sign Up</h1>
        </div>
        <div id = 'title'>
        <h1> Title</h1>
        </div>
        <div id = 'signIn'>
        <h1> Sign In</h1>
        </div>
      </div>
    )
  }
};

export default TopBar;
