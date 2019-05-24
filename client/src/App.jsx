import React, { Component } from 'react';
import NavBar from "./components/NavBar.jsx"
import LogIn from "./components/LogIn.jsx"
// RHL only for front end development
//import { hot } from 'react-hot-loader';


class App extends Component {
  render() {
    return (
        <div>
          <NavBar />
          <LogIn />
        </div>
    );
  }
}

export default App;
