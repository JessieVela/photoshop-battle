import React, { Component, Fragment } from "react";
import {
  Container,
  Jumbotron,
  Accordion,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import "../styles/FAQ.css";

export default class FAQ extends Component {
  render() {
    return (
      <Fragment>
        <Jumbotron className="mt-3">
          <Container>
            <h1>Frequently Asked Questions</h1>
          </Container>
        </Jumbotron>
        <Container>
          <Row>
            <Col>
              <Accordion>
                <Card id="link1">
                  <Card.Header>
                    <Accordion.Toggle
                      as={Card.Header}
                      variant="Link"
                      eventKey="#link1"
                    >
                      1. What is this site?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="#link1">
                      <Card.Body>
                        This site was made to show case the awesome photos from
                        the subreddit r/photoshopbattles. The site displays user
                        submitted images for easy viewing.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card.Header>
                </Card>

                <Card id="link2">
                  <Card.Header>
                    <Accordion.Toggle
                      as={Card.Header}
                      variant="Link"
                      eventKey="2"
                    >
                      2. How do I enter a contest?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        Head over to{" "}
                        <a
                          href="https://www.reddit.com/r/photoshopbattles"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          reddit
                        </a>{" "}
                        to see available contest and make sure to read the
                        rules.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card.Header>
                </Card>

                <Card id="link3">
                  <Card.Header>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                      3. Where are these images coming from?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>
                        This site was made to show case the awesome photos from
                        the subreddit r/photoshopbattles. The site simply
                        displays the images instead of the comments.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card.Header>
                </Card>

                <Card id="link4">
                  <Card.Header>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                      4. Can I save these images?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                      <Card.Body>
                        We dont own the images and suggest you contact the
                        original owner of the image.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card.Header>
                </Card>

                <Card id="link5">
                  <Card.Header>
                    <Accordion.Toggle as={Card.Header} eventKey="5">
                      5. Where can I see the original images?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                      <Card.Body>
                        All the images are direct links from the competion, but
                        if you want to see them on the original site then head
                        over to{" "}
                        <a
                          href="https://www.reddit.com/r/photoshopbattles"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          reddit
                        </a>{" "}
                        phostoshop battle to see the original images
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card.Header>
                </Card>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
