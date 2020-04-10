import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../styles/CardComments.css";
import axios from "axios";

export default class CardComments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postData: [],
    };
  }

  async componentDidMount() {
    this.setState({ postData: await this.getPosts() });
  }

  getPosts = async () => {
    return (await axios.get("http://localhost:9000/posts")).data.filter(
      (post) => !post.stickied
    );
  };

  render() {
    console.log(this.state.postData[0]);
    const { title, url, author } = this.state.postData.length
      ? this.state.postData[0]
      : "";
    return (
      <>
        <Container>
          <Row>
            <h1>{title}</h1>
          </Row>
          <hr />
          <Row>
            <h3>By: {author}</h3>
          </Row>
          <Row md={2}>
            <Col>
              <div className="card-image">
                <Image src={url} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Submissions:</h3>
            </Col>
          </Row>
          <hr />
          <Row md={2}>
            {this.state.postData.length
              ? this.state.postData[0].comments.map((comment) => {
                  return (
                    <Col>
                      <Image thumbnail src={comment.url} key={comment.id} />
                    </Col>
                  );
                })
              : ""}
          </Row>
        </Container>
      </>
    );
  }
}
