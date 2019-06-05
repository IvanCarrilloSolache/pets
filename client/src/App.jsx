import React, { Component, Fragment } from 'react';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import LogIn from "./components/LogIn.jsx"
import CardGrid from "./components/CardGrid.jsx"
import Profile from "./components/Profile.jsx"
// RHL only for front end development
//import { hot } from 'react-hot-loader';


class App extends Component {
  render() {
    return (
      <div>
        <LogIn />
      
      <BrowserRouter>
      <div className="App">
        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <Tabs value={location.pathname}>
                <Tab label="Profile" component={Link} to="/components/Profile.jsx" />
                <Tab label="CardGrid" component={Link} to="/components/CardGrid.jsx" />
                />
              </Tabs>
              <Switch>
                <Route path="/components/CardGrid.jsx" render={() => <div><CardGrid /></div>} />
                <Route path="/components/Profile.jsx" render={() => <div><Profile /></div>} />
              </Switch>
            </Fragment>
          )}
        />
      </div>
    </BrowserRouter>
    </div>
    );
  }
}

export default App;
