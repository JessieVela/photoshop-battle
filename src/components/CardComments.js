import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default class CardComments extends Component {
  render() {
    return (
      <>
        <Container>
          <Row className="card-detail-style">
            <Col sm={8}>
              <div className="image-div">
                <Image thumbnail src={this.props.url} />
              </div>
            </Col>
            <div class="grid">
              <div class="grid-item">...</div>
              <div class="grid-item grid-item--width2">...</div>
              <div class="grid-item">...</div>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}
