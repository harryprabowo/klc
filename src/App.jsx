import React, { useEffect } from "react";

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
import { faHome, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import { Dashboard, Login, Register, NotFound } from "./containers";

import Logo from "./assets/img/logo.png";

import "./App.scss";

require("dotenv").config();

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
  authenticate(cb, data) {   
    var formBody = [];
    for (var property in data) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    
    fetch(`${process.env.REACT_APP_API_URL}/siswa/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody
    })
      .then(res => res.json())
      .then(
        res => {
          console.log(res, res.length)
          if (res.length !== 0 && res[0].status === 'active') {
            localStorage.setItem("active", true)
            cb();
          } else {
            alert ("Email atau password salah.")
          }
        },
        (err) => {
          console.error(err)
        }
      )
  },

  signout(cb) {
    localStorage.setItem("active", false)

    setTimeout(cb, 100);
  }
};

const Public = () => <NavLink to="/login">Login</NavLink>;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("active") === "true" ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

const MyNav = withRouter(({ history, pages }) => {
  return localStorage.getItem("active") === "true" ? (
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
    new pagePrototype("/public", "Public", null, Public, false)
  ];

  useEffect(() => {
    localStorage.setItem("active", false)
  }, []);

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
