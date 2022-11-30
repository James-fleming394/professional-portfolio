import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
    <Navbar expand="lg">
        <Container>
        <Navbar.Brand href="/">Logo goes here</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggle-icon">Icon goes here</span>
            </Navbar.Toggle> 
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            </Nav>
        <span className="navbar-text">
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/james--fleming/">LinkedIn Icon Here</a>
                <a href="https://github.com/James-fleming394">Github Icon Here</a>
            </div>
        </span>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default NavBar

