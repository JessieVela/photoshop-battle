import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import "../styles/CardDetails.css";
import { Link } from "react-router-dom";

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
          <h2>Title of Photoshop Battle</h2>
          <hr />
          <p>Submissions: 6</p>
          <p>Date: 25 Mar 2020</p>
          <hr />
          <span className="submission-link">
            <a href="#1">
              <Link to="Home/comments">See Submissions -></Link>
            </a>
          </span>
        </Col>
      </Row>
    );
  }
}
