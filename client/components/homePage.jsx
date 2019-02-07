import React, { Component } from "react";
import SignUpPage from './signUpPage.jsx';
import SignInPage from './SignInPage.jsx';
import TopBar from './topbar.jsx';
import AboutUs from './aboutUs.jsx'
import {
Route,
NavLink,
BrowserRouter
} from "react-router-dom";


class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return(
      <BrowserRouter>
        <div>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink> </li>
            <li><NavLink exact to="/aboutus">About Us</NavLink></li>
            <li><button class = "signUpButton "><NavLink to="/signUpPage">Sign Up</NavLink></button></li>
            <li><button class = "signInButton "><NavLink to="/signInPage">Sign In</NavLink></button></li>
          </ul>
          <div className="content">
              <Route exact path="/" component={TopBar} />
              <Route path="/aboutUs" component={AboutUs} />
              <Route path="/signUpPage" component={SignUpPage} />
              <Route path="/signInPage" component={SignInPage} />
          </div>
        </div>
        </BrowserRouter>
    );
  };
}


export default HomePage;
