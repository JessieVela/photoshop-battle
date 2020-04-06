import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../styles/CardComments.css";
import axios from "axios";

export default class CardComments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      responses: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:9000/posts").then((res) => {
      const responses = res.data.slice(2, res.data.length - 1);
      this.setState({ ...responses });
    });
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <h1>{}</h1>
          </Row>
          <hr />
          <Row>
            <Col>
              <div className="card-image">
                <Image src="https://i.redd.it/b4l69pxzkwq41.jpg" />
              </div>
            </Col>
          </Row>
          <Row>
            <h2>Submissions: </h2>
          </Row>
          <hr />
          <Row md={2}>
            <Col>
              <div className="card-image">
                <Image src="https://i.imgur.com/cvHKsG6.jpg" />
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
