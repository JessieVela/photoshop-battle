import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";

export default class Navigation extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>
            <Link to="/">Beyond The Scene</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="text-white">
                <Link to="/Home">Home</Link>
              </Nav.Link>
              <Nav.Link className="text-white">
                <Link to="/FAQ">FAQ</Link>
              </Nav.Link>
              <Nav.Link className="text-white" href="#pricing">
                <Link to="/Contact">Contact Us</Link>
              </Nav.Link>
            </Nav>
            <Nav className="border-left">
              <Nav.Link className="text-white" href="#features">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
