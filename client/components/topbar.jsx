alert("this is working");

import React from 'react';

class TopBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id = 'topBar'>
        <h1> this is a test only thing dude </h1>
      </div>
    )
  }
};

export default TopBar;
