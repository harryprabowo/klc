import React, { Component } from "react";

import { Row, Col, Image, Button, Badge, Table } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import Banner from '../../assets/img/symbol.png'

import "./style.scss";

class Dashboard extends Component {
  state = {
    classes: []
  };

  componentDidMount() {
    this.setState({
      classes: this.fetchClasses()
    });
  }

  fetchClasses = () => {
    // TODO: Implement fetch classes from backend
    const classes = [
      {
        nama: "KungFu",
        jam: "08:00 - 09:00", // TODO: Convert from Google API event timestamp
        pembina: "Akhmal",
        isi: "15/20"
      }
    ];

    return classes;
  };

  render() {
    return (
      <div id="Dashboard">
        <Image src={Banner} className="splash-bg"/>
        <Row>
          <Col xs={1} md={2} xl={3} />
          <Col>
            <br />
            <br />
            <Row>
              <Col md={7} className="left">
                <Row>
                  <Col xs={4}>
                    <Image
                      src="https://66.media.tumblr.com/12f150e072f7214adcfd3fbe4749ddc1/tumblr_pgwsygbQZ81w3oxej_1280.png"
                      roundedCircle
                      fluid
                    />
                  </Col>
                  <Col>
                    <h2>Song Yuqi</h2>
                    <span>songyuqi@gmail.com</span>
                    <br />
                    <span>123456789</span>
                  </Col>
                </Row>

                <br />

                <Button variant="primary" style={{ marginRight: "1rem" }}>
                  Inbox <Badge variant="light">9</Badge>
                  <span className="sr-only">unread messages</span>
                </Button>
                <Button variant="primary">
                  Notifications <Badge variant="light">9</Badge>
                  <span className="sr-only">unread messages</span>
                </Button>

                <br />
                <br />

                <Table
                  bordered
                  hover
                  responsive
                  style={{ backgroundColor: "white" }}
                >
                  <thead>
                    <tr>
                      <th>Kelas</th>
                      <th>Jam</th>
                      <th>Pembina</th>
                      <th>Opsi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.classes === undefined ||
                    this.state.classes.length === 0 ? (
                      <tr>
                        <td
                          colSpan="5"
                          style={{
                            fontWeight: "initial",
                            textAlign: "center",
                            color: "grey"
                          }}
                        >
                          <i>Pilih kelas.</i>
                        </td>
                      </tr>
                    ) : (
                      this.state.classes.map((classe, key) => (
                        <tr key={key}>
                          <td>{classe.nama}</td>
                          <td>{classe.jam}</td>
                          <td>{classe.pembina}</td>
                          <td>
                            <Button
                              variant="link"
                              style={{ padding: 0, border: 'none', marginTop: '-.5em' }}
                            >
                              <FontAwesomeIcon icon={faEdit} />
                            </Button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </Table>
              </Col>
              <Col className="right">
                <div className="berita">
                  <span>Belum ada berita.</span>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={1} md={2} xl={3} />
        </Row>
      </div>
    );
  }
}

export default Dashboard;
