import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const NavBar = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <div>
            <Link className='link-pic' to='/home'>
                <img id="link-picture"
                    src="https://i.imgur.com/PbKVQzs.jpg"
                    alt="JF"
                /> </Link>
            </div>
        <Container>
        <Navbar.Brand href="home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="about">About</Nav.Link>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
            <NavDropdown.Item href="project1">Project1</NavDropdown.Item>
            <NavDropdown.Item href="project2">
                Project2
            </NavDropdown.Item>
            <NavDropdown.Item href="project3">Project3</NavDropdown.Item>
            <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="contact">Contact</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
);
}

export default NavBar;