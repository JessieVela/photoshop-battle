import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import "../styles/CardDetails.css";

export default class CardDetails extends Component {
  render() {
    return (
      <Row className="card-detail-style">
        <Col sm={4}>
          <div className="image-div">
            <Image thumbnail src={this.props.url} />
          </div>
        </Col>
        <Col sm={8}>
          <h2>{this.props.title}</h2>
          <hr />
          <p>Submissions: {this.props.commentTotal}</p>
          <p>Date: 25 Mar 2020</p>
          <hr />
          <span className="submission-link">
            <a href="#1">See Submissions -></a>
          </span>
        </Col>
      </Row>
    );
  }
}
