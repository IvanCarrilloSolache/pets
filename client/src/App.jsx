import React, { Component } from 'react';
import NavBar from "./components/NavBar.jsx"
import LogIn from "./components/LogIn.jsx"
import Profile from "./components/Profile.jsx"
import Matches from "./components/MainCard.jsx"
// RHL only for front end development
//import { hot } from 'react-hot-loader';


class App extends Component {
  render() {
    return (
        <div>
          <NavBar />
          <LogIn />
          <Profile />
          <Matches />
        </div>
    );
  }
}

export default App;
