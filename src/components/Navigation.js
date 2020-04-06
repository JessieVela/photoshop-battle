import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";
import { LinkContainer } from "react-router-bootstrap";

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
              <Link className="text-white nav-spacing" to="/">
                Home
              </Link>
              <Link className="text-white nav-spacing" to="/FAQ">
                FAQ
              </Link>
              <Link className="text-white nav-spacing" to="/contact">
                Contact Us
              </Link>
            </Nav>
            <Nav className="ml-auto border-left">
              <Link
                className="text-white nav-spacing"
                href="#features"
                to="/login"
              >
                Login
              </Link>
            </Nav>
            <Nav className="border-left">
              <Link
                className="text-white nav-spacing"
                href="#features"
                to="/register"
              >
                Register
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
