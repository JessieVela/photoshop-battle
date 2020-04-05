import React, { Component } from "react";
import { Jumbotron, Button, Nav, Container } from "react-bootstrap";
import CardDetails from "./CardDetails";
import axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      responses: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:9000/posts").then((res) => {
      const responses = res.data.slice(2, res.data.length - 1);
      this.setState({ responses });
    });
  }

  render() {
    return (
      <>
        <Jumbotron className="mt-3">
          <Container>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Container>
        </Jumbotron>
        <Container>
          {/* Possible future updates will include from these other subreddits */}
          <Nav className="mt-2" justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link eventKey="/home">Photoshop</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/Photography">Photography</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/Drawings">Drawings</Nav.Link>
            </Nav.Item>
          </Nav>

          {this.state.responses.map((data) => {
            return (
              <CardDetails
                key={data.id}
                title={data.title}
                url={data.url}
                // The first comment is the auto moderator posting the rules on commenting, so we count one less
                commentTotal={data.comments.length - 1}
              />
            );
          })}
        </Container>
      </>
    );
  }
}
