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
            <Col sm={4}>
              <h2>Redditor: photoshopKing211</h2>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
