import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";

import {
  Row,
  Col,
  Button,
  Image,
  Tabs,
  Tab,
  Form,
  Table
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { Calendar } from "../../components";

import Logo from "../../assets/img/logo.png";

import "./style.scss";

class Register extends Component {
  state = {
    key: 1,

    // TODO: Select from Calendar event modal, get class ID from event, add to table
    selectedClassesId: [1],
    selectedClasses: [],
    redirectToReferrer: false
  };

  componentDidMount() {
    this.setState({
      selectedClasses: this.fetchSelectedClass(this.state.selectedClassesId)
    });
  }

  setKey = key => this.setState({ key: key });

  submitData = () => {
    // TODO: Implement data submit
    console.log("Data submit not implemented yet");
    let submitSuccess = true

    if (submitSuccess) {
      this.setState({
        redirectToReferrer: true
      })
    }
  };

  handleSubmit = event => {
    event.preventDefault();

    const data = new FormData(event.target);

    const formData = {
      nama: data.get("nama"),
      birthday: data.get("birthday"),
      alamat: data.get("alamat"),
      gender: data.get("gender"),
      telepon: data.get("telepon"),
      pendidikan: data.get("pendidikan"),
      fotoProfil: data.get("dp-pic"),
      kartuId: data.get("kartu-pic"),
      selectedClassId: this.state.selectedClassesId
    };

    this.setState(
      {
        formData: formData
      },
      () => console.log(this.state.formData)
    );
  };

  fetchSelectedClass = idArray => {
    // TODO: Implement fetch selected class detail from backend
    const selectedClasses = [
      {
        id: 1,
        nama: "KungFu",
        jam: "08:00 - 09:00", // TODO: Convert from Google API event timestamp
        pembina: "Akhmal",
        isi: "15/20"
      }
    ];

    return selectedClasses;
  };

  selectClass = id => {
    this.setState({
      selectedClassesId: this.state.selectedClassesId.push(id),
      selectedClasses: this.fetchSelectedClass(this.state.selectedClassesId)
    });
  };

  removeSelectedClassHandler = id => {
    this.setState({
      selectedClassesId: this.state.selectedClassesId.filter(
        selectedClassId => selectedClassId !== id
      ),
      selectedClasses: this.fetchSelectedClass(this.state.selectedClassesId)
    });
  };

  render() {
    const { key } = this.state;

    if (this.state.redirectToReferrer === true) {
      return (
        <Redirect exact to="/login">
          {alert('Anda telah terdaftar bersama KLC. Silahkan masuk ke portal.')}
        </Redirect>
      )
    }

    return (
      <div id="Register">
        <Row>
          <Col
            xs={{ offset: 1, span: 10 }}
            md={{ offset: 2, span: 8 }}
            style={{ margin: "3em auto" }}
          >
            <section>
              <Form onSubmit={e => this.handleSubmit(e)}>
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
                        <Col xs={4} md={3} lg={2} className="logo">
                          <Image src={Logo} fluid />
                        </Col>
                      </Row>
                    </header>

                    <br />

                    <Row>
                      <Col>
                        <Row>
                          <Form.Group as={Col} controlId="nama">
                            <Form.Label className="text-muted">
                              Nama lengkap
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="nama"
                              placeholder="John Doe"
                              required
                            />
                          </Form.Group>

                          <Form.Group
                            as={Col}
                            sm={6}
                            md={5}
                            controlId="birthday"
                          >
                            <Form.Label className="text-muted">
                              Tanggal lahir
                            </Form.Label>
                            <Form.Control
                              type="date"
                              name="birthday"
                              required
                            />
                          </Form.Group>
                        </Row>

                        <Row>
                          <Form.Group as={Col} controlId="alamat">
                            <Form.Label className="text-muted">
                              Alamat domisili
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="alamat"
                              placeholder="123 Street Ave, SF"
                              required
                            />
                          </Form.Group>

                          <Form.Group as={Col} sm={6} md={3} controlId="gender">
                            <Form.Label className="text-muted">
                              Gender
                            </Form.Label>
                            <Form.Control
                              as="select"
                              name="gender"
                              defaultValue=""
                              required
                            >
                              <option hidden disabled value="">
                                {" "}
                                --{" "}
                              </option>
                              <option value="L">L</option>
                              <option value="P">P</option>
                            </Form.Control>
                          </Form.Group>
                        </Row>

                        <Row>
                          <Form.Group as={Col} controlId="telepon">
                            <Form.Label className="text-muted">
                              Nomor telepon
                            </Form.Label>
                            <Form.Control
                              type="tel"
                              name="telepon"
                              placeholder="123 456 789"
                              required
                            />
                          </Form.Group>

                          <Form.Group
                            as={Col}
                            sm={6}
                            md={4}
                            controlId="pendidikan"
                          >
                            <Form.Label className="text-muted">
                              Pendidikan
                            </Form.Label>
                            <Form.Control
                              as="select"
                              name="pendidikan"
                              defaultValue=""
                            >
                              <option hidden disabled value="">
                                {" "}
                                --{" "}
                              </option>
                              <option value="SD">SD</option>
                              <option value="SMP">SMP</option>
                              <option value="SMA">SMA</option>
                              <option value="Alumni">Alumni</option>
                            </Form.Control>
                          </Form.Group>
                        </Row>
                      </Col>

                      <Col xs={12} lg={5}>
                        <Row>
                          <Form.Group as={Col} controlId="dp">
                            <Form.Label className="text-muted">
                              Foto Profil
                            </Form.Label>
                            <Form.Control
                              type="file"
                              name="dp-pic"
                              accept="image/*"
                            />
                          </Form.Group>
                        </Row>

                        <Row>
                          <Form.Group as={Col} controlId="kartu">
                            <Form.Label className="text-muted">
                              Kartu Pelajar/KTP
                            </Form.Label>
                            <Form.Control
                              type="file"
                              name="kartu-pic"
                              accept="image/*"
                              required
                            />
                          </Form.Group>
                        </Row>
                      </Col>
                    </Row>

                    <br />
                    <br />

                    <Row>
                      <Col xs={6} md={4} lg={2}>
                        <Button
                          variant="outline-primary"
                          onClick={this.props.history.goBack}
                          block
                        >
                          Kembali
                        </Button>
                      </Col>
                      <Col
                        xs={6}
                        md={{ span: 4, offset: 4 }}
                        lg={{ span: 2, offset: 8 }}
                      >
                        <Button
                          variant="primary"
                          onClick={() => this.setState({ key: 2 })}
                          block
                        >
                          Lanjut
                        </Button>
                      </Col>
                    </Row>
                  </Tab>

                  <Tab eventKey="2" title="Pilih kelas">
                    <header style={{ textAlign: "center" }}>
                      <h2>Rencanakan belajarmu.</h2>
                    </header>

                    <br />

                    <Calendar
                      style={{ height: "50rem" }}
                      selectClass={this.selectClass}
                    />

                    <br />
                    <hr />
                    <br />

                    <h4>Jadwal yang dipilih</h4>
                    <br />

                    <Table hover responsive>
                      <thead>
                        <tr>
                          <th>Kelas</th>
                          <th>Jam</th>
                          <th>Pembimbing/Pembina</th>
                          <th>Isi</th>
                          <th>Opsi</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.selectedClasses === undefined ||
                        this.state.selectedClasses.length === 0 ? null : this
                            .state.selectedClassesId === undefined ||
                          this.state.selectedClassesId.length === 0 ? (
                          <tr>
                            <td
                              colspan="5"
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
                          this.state.selectedClasses.map(
                            (selectedClass, key) => (
                              <tr key={key}>
                                <td>{selectedClass.nama}</td>
                                <td>{selectedClass.jam}</td>
                                <td>{selectedClass.pembina}</td>
                                <td>{selectedClass.isi}</td>
                                <td>
                                  <Button
                                    variant="link"
                                    className="text-danger"
                                    style={{ padding: 0 }}
                                  >
                                    <FontAwesomeIcon icon={faTrash} />
                                  </Button>
                                </td>
                              </tr>
                            )
                          )
                        )}
                      </tbody>
                    </Table>

                    <br />
                    <br />

                    <Row>
                      <Col xs={6} md={4} lg={2}>
                        <Button
                          variant="outline-primary"
                          onClick={() => this.setState({ key: 1 })}
                          block
                        >
                          Kembali
                        </Button>
                      </Col>
                      <Col
                        xs={6}
                        md={{ span: 4, offset: 4 }}
                        lg={{ span: 2, offset: 8 }}
                      >
                        <Button
                          variant="primary"
                          type="submit"
                          onClick={() => this.setState({ key: 3 })}
                          block
                        >
                          Lanjut
                        </Button>
                      </Col>
                    </Row>

                    <br />
                  </Tab>

                  <Tab eventKey="3" title="Verifikasi">
                    <header style={{ textAlign: "center" }}>
                      <h2>Sudahkah data Anda benar?</h2>
                    </header>

                    <br />

                    {/* TODO: Review data detail here */}

                    <br />
                    <hr />
                    <br />

                    <Row>
                      <Col xs={6} md={4} lg={2}>
                        <Button
                          variant="outline-primary"
                          onClick={() => this.setState({ key: 2 })}
                          block
                        >
                          Kembali
                        </Button>
                      </Col>
                      <Col
                        xs={6}
                        md={{ span: 4, offset: 4 }}
                        lg={{ span: 4, offset: 2 }}
                      >
                        <Button
                          variant="primary"
                          type="submit"
                          onClick={this.submitData}
                          block
                        >
                          Selesai
                        </Button>
                      </Col>
                    </Row>

                    <br />
                  </Tab>
                </Tabs>
              </Form>
            </section>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(Register);
