import React, { Component } from 'react';
// RHL only for front end development
//import { hot } from 'react-hot-loader';

class App extends Component {
  render() {
    return (
        <div>
         <form>
         <label>
         Name:
         <input type="text" name="name" />
         </label>
         <input type="submit" value="Submit" />
         </form></div>
    );
  }
}

export default App;
