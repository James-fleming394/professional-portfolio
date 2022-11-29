import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from 'react';


const NavBar = () => {

    const [activeUser, setActiveUser] = useState('home');
    const [userScroll, setUserScroll] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setUserScroll(true)
            } else {
                setUserScroll(false)
            }
        }

        window.addEventListener("scroll", onScroll);

        return() => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveUser = (value) => {
        setActiveUser(value);
    }

    return (
    <Navbar bg="light" expand="lg" className={userScroll ? "scroll" : ""}>
    <Container>
        <Navbar.Brand href="/">
            <img src="https://i.imgur.com/PbKVQzs.jpg" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <span className="navbar-toggler-icon"></span>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="/" className={activeUser === '/' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveUser('/')}>Home</Nav.Link>
            <Nav.Link href="/about" className={activeUser === '/' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveUser('/about')}>About</Nav.Link>
            <NavDropdown title="Projects ▼" id="basic-nav-dropdown" className={activeUser === '/' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveUser('/projects')}>
            <NavDropdown.Item href="/project1">Project 1 Title</NavDropdown.Item>
            <NavDropdown.Item href="/project2">Project 2 Title</NavDropdown.Item>
            <NavDropdown.Item href="/project3">Project 3 Title</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/futureprojects">Future Projects</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    )
}

export default NavBar;

