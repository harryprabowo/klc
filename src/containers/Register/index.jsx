import React, { Component } from "react";

import {
  Row,
  Col,
  Button,
  Image,
  Tabs,
  Tab,
  Form
} from 'react-bootstrap'

import Logo from '../../assets/img/logo.png'

import './style.scss'

class Register extends Component {
  state = {
    key: 1
  };

  setKey = key => this.setState({key: key})

  render() {
    const {key} = this.state;

    return (
      <div id="Register">
        <Row>
          <Col sm={{ offset: 2, span: 8 }} style={{ margin: "3em auto" }}>
            <section>
              <Tabs
                id="registration"
                activeKey={key}
                onSelect={k => this.setKey(k)}
              >
                <Tab eventKey="1" title="Lengkapi biodata">
                  <header>
                    <Row>
                      <Col className="login-form-title">
                        <h2>Mari kembangkan diri,</h2>
                        <h2 style={{ fontWeight: "bold" }}>
                          dimulai dari sini.
                        </h2>
                      </Col>
                      <Col sm={2} className="logo">
                        <Image src={Logo} fluid />
                      </Col>
                    </Row>
                  </header>

                  <br />

                  <Form>
                    <Row>
                      <Col>
                        <Form.Group controlId="formGroupEmail">
                          <Form.Label className="text-muted">
                            Email address
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                          />
                        </Form.Group>
                      </Col>

                      <Col>
                        <Form.Group controlId="formGroupEmail">
                          <Form.Label className="text-muted">
                            Email address
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Group controlId="formGroupEmail">
                          <Form.Label className="text-muted">
                            Email address
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                          />
                        </Form.Group>
                      </Col>

                      <Col>
                        <Form.Group controlId="formGroupEmail">
                          <Form.Label className="text-muted">
                            Email address
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Group controlId="formGroupEmail">
                          <Form.Label className="text-muted">
                            Email address
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                          />
                        </Form.Group>
                      </Col>

                      <Col>
                        <Form.Group controlId="formGroupEmail">
                          <Form.Label className="text-muted">
                            Email address
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <br />
                    <br />

                    <Row>
                      <Col sm={2}>
                        <Button variant="outline-primary" type="submit" block>
                          Kembali
                        </Button>
                      </Col>
                      <Col sm={{ span: 2, offset: 8 }}>
                        <Button variant="primary" type="submit" block>
                          Lanjut
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Tab>
                <Tab eventKey="2" title="Pilih kelas">
                  <header style={{ textAlign: "center" }}>
                    <h2>Rencanakan belajarmu.</h2>
                  </header>

                  <br />
                </Tab>
                <Tab eventKey="3" title="Verifikasi">
                  <header style={{ textAlign: "center" }}>
                    <h2>Verifikasi</h2>
                  </header>

                  <br />
                </Tab>
              </Tabs>
            </section>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Register;