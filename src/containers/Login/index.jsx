import React, { useState } from "react";

import { NavLink, Redirect } from "react-router-dom";

import { Row, Col, Image, Form, Button } from "react-bootstrap";

import Banner from "../../assets/img/symbol.png";
import Logo from "../../assets/img/logo.png";
import "./style.scss";

const Login = props => {
  const { auth } = props;
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const login = e => {
    e.preventDefault();
    const data = new FormData(e.target);

    auth.authenticate(() => {
      setRedirectToReferrer(true);
    }, {
      email: data.get('email'),
      password: data.get('password')
    });
  };

  if (redirectToReferrer === true) {
    return <Redirect exact to="/" />;
  }

  return (
    <div id="Login">
      <Row>
        <Col className="banner" xs={0} md={6}>
          <Image src={Banner} fluid />
        </Col>
        <Col className="login-form">
          <Form onSubmit={login}>
            <header>
              <Row>
                <Col>
                  <h1>Halo!</h1>
                  <label>
                    <span style={{ fontFamily: 'Segoe UI Light', fontSize: '18pt' }}>Masuk ke portal</span>
                  </label>
                </Col>
                <Col xs={4}>
                  <Image src={Logo} fluid />
                </Col>
              </Row>
            </header>

            <Form.Group controlId="formEmail.ControlInput1">
              <Form.Control type="email" placeholder="Alamat email" autoComplete="on" name="email"  />
            </Form.Group>

            <Form.Group controlId="formPassword.ControlInput2">
              <Form.Control type="password" placeholder="Kata sandi" autoComplete="on" name="password" />
              <Form.Text variant="info" className="text-right" style={{ fontSize: "10pt" }}>
                <NavLink to="/lupa-sandi"><strong>Lupa sandi?</strong></NavLink>
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formSubmit.ControlInput3">
              <Button
                size="lg"
                type="submit"
                block
              >
                <strong>MASUK</strong>
              </Button>

              <br />

              <Form.Text className="text-center" style={{ fontSize: "12pt" }}>
                <strong>
                  Daftar bimbingan akademis & agama <NavLink to="/register">di sini</NavLink>.
                </strong>
              </Form.Text>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
