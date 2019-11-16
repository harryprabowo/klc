import React, { Component } from "react";

import './App.scss'

import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Switch,
} from "react-router-dom";

import {
  Login,
  Dashboard,
  Test,
  NotFound,
  Register
} from "./containers";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/login" component={withRouter(Login)} />
            <Route path="/register" component={withRouter(Register)} />
            <Route path="/test" component={withRouter(Test)} />
            <Route exact path="/" component={withRouter(Dashboard)} />
            <Route exact path="*" component={withRouter(NotFound)} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
