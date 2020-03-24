import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import "../styles/navigation.css"

export default class navigation extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Beyond The Scene</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className="text-white" href="#features">Home</Nav.Link>
                            <Nav.Link className="text-white" href="#pricing">FAQ</Nav.Link>
                            <Nav.Link className="text-white" href="#pricing">Contact Us</Nav.Link>
                        </Nav>
                        <Nav className="border-left">
                            <Nav.Link className="text-white" href="#features">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}
