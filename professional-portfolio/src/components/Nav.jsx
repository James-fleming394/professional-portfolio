import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
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
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className={userScroll ? "scroll" : ""}>
            <div>
            <Link className='link-pic' to='/home'>
                <img id="link-picture"
                    src="https://i.imgur.com/PbKVQzs.jpg"
                    alt="JF"
                /> </Link>
            </div>
        <Container>
        <Navbar.Brand href="home" className={activeUser === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveUser('home')}>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="topbar">
            <Nav.Link href="about" className={activeUser === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveUser('about')}>About</Nav.Link>
                <NavDropdown title="Projects" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="project1" className={activeUser === 'project1' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveUser('project1')}>Project1</NavDropdown.Item>
                    <NavDropdown.Item href="project2" className={activeUser === 'project2' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveUser('project2')}>Project2</NavDropdown.Item>
                    <NavDropdown.Item href="project3" className={activeUser === 'project3' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveUser('project3')}>Project3</NavDropdown.Item>
                    <NavDropdown.Divider />
                </NavDropdown>
            <span className="icons">
                <div className="socials">
                    <a href="https://www.linkedin.com/in/james--fleming/"><img src="https://png.pngitem.com/pimgs/s/32-326086_linkedin-black-icon-png-image-free-download-searchpng.png" alt="LinkedIn"/></a>
                    <a href="https://github.com/James-fleming394"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt="GitHub"/></a>
                    <button className="button-contact" onClick={() => console.log('working')}>Contact Me!</button>
                </div>
            </span>
        </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
);
}

export default NavBar;