import React from "react";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
  withRouter,
  Switch
} from "react-router-dom";

import {
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Image
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

import { Dashboard, Login, Register, NotFound } from "./containers";

import Logo from './assets/img/logo.png'

import "./App.scss";

class pagePrototype {
  constructor(path, name, icon, component, isPrivate = false) {
    this.path = path;
    this.name = name;
    this.icon = icon;
    this.component = component;
    this.isPrivate = isPrivate;
  }
}

const fakeAuth = {
  // TODO: Implement actual auth
  isAuthenticated: true,

  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },

  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const Public = () => <NavLink to="/login">Login</NavLink>;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
          <Redirect to="/login" />
        )
    }
  />
);

const MyNav = withRouter(({ history, pages }) => {
  return fakeAuth.isAuthenticated ? (
    <Navbar sticky="top" expand="lg" style={{ backgroundColor: "white" }}>
      <Navbar.Brand href="/">
        <Image src={Logo} style={{ height: "3rem", marginLeft: "5rem" }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" />
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="search-bar"
          />
          <Button
            variant="outline-primary"
            className="logout-btn"
            onClick={() => {
              fakeAuth.signout(() => history.push("/"));
            }}
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  ) : null;
});

const App = () => {
  const pages = [
    new pagePrototype("/", "Dashboard", faHome, Dashboard, true),
    new pagePrototype("/register", "Register", null, Register, false),
    new pagePrototype("/public", "Public", null, Public, false),
  ]

  return (
    <div id="App">
      <Router>
        <MyNav pages={pages} />
        <Row>
          <Col>
            <Switch>
              <Route
                path="/login"
                render={props => <Login {...props} auth={fakeAuth} />}
              />
              {pages.map((page, key) =>
                page.isPrivate ? (
                  <PrivateRoute
                    key={key}
                    exact
                    path={page.path}
                    component={page.component}
                  />
                ) : (
                  <Route
                    key={key}
                    exact
                    path={page.path}
                    component={page.component}
                  />
                )
              )}
              <Route path="*" component={NotFound} />
            </Switch>
          </Col>
        </Row>
      </Router>
    </div>
  );
};

export default App;
