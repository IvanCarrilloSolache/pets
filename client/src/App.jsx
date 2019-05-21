import React, { Component } from 'react';
import NavBar from "./components/NavBar.js"
// RHL only for front end development
//import { hot } from 'react-hot-loader';


class App extends Component {
  render() {
    return (
        <div>
          <NavBar />
        </div>
    );
  }
}

export default App;
