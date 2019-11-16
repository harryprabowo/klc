import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { Row, Col, Form, Button, Image } from "react-bootstrap";

import "./style.scss";

import Logo from "../../assets/img/logo.png";
import Banner from "../../assets/img/symbol.png";

class Login extends Component {
  render() {
    return (
      <div id="Login">
        <Row>
          <Col className="left">
            <Image src={Banner} fluid style={{width: '60%'}} />
          </Col>
          <Col className="right">
            <div className="login-form">
              <header>
                <Row>
                  <Col className="login-form-title">
                    <h1>Halo, pelajar!</h1>
                    <h3 style={{ fontWeight: 300 }}>Masuk ke portal</h3>
                  </Col>
                  <Col sm={4} className="login-form-logo">
                    <Image src={Logo} fluid />
                  </Col>
                </Row>
              </header>

              <br />

              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Alamat email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Kata sandi" />
                  <Form.Text
                    className="text-muted"
                    style={{ textAlign: "right" }}
                  >
                    <NavLink to="/forgot-password">Lupa sandi?</NavLink>
                  </Form.Text>
                </Form.Group>

                <br />

                <Button variant="primary" type="submit" block>
                  Masuk
                </Button>

                <br />

                <Form.Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "11pt"
                  }}
                >
                  <span>
                    Daftar bimbingan akademis & agama <NavLink to="/register">di sini</NavLink>.
                  </span>
                </Form.Text>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Login;
