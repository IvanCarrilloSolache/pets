import React, { Component } from 'react';
// RHL only for front end development
import { hot } from 'react-hot-loader';

class App extends Component {
  render() {
    return <div>
            <input type="text" name="name" />
           </div>;
  }
}
// hot export works with RHL. Remove line 11 when starting fullstack integration
export default hot(module)(App);
// Uncomment line 13 & delete line 11 when starting fullstack integration
// export default App;