import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";

export default class Navigation extends Component {
  render() {
    return (
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          className="navigation-edge"
        >
          <Navbar.Brand>
            <Link className="text-white" to="/">
              Photoshop Battle
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="">
              <Nav.Link>
                <Link className="text-white" to="/Home">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="text-white" to="/FAQ">
                  FAQ
                </Link>
              </Nav.Link>
              <Nav.Link href="#pricing">
                <Link className="text-white" to="/Contact">
                  Contact Us
                </Link>
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto border-left">
              <Nav.Link className="text-white" href="#features">
                Login
              </Nav.Link>
            </Nav>
            <Nav className="border-left">
              <Nav.Link className="text-white" href="#features">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
