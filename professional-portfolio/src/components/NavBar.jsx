import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from "react";
import icon from '../assets//img/github-logo-icon.png'
import icon1 from '../assets/img/linkedin-logo-icon.png'
import laptop from '../assets/img/laptop-code.png'
// import logo from '../assets/img/JF-logo.png'

const NavBar = () => {
    const [activeUser, setActiveUser] = useState('/');
    const [userScroll, setUserScroll] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setUserScroll(true);
            } else {
                setUserScroll(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveUser = (value) => {
        setActiveUser(value);
    }


    return (
    <Navbar expand="lg" className={userScroll ? "userScroll": ""}>
        <Container>
        <Navbar.Brand href="/home" className="logo">
            <img className="logo" src={laptop} alt="laptop" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggle-icon">Icon goes here</span>
            </Navbar.Toggle> 
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/home" className={activeUser === 'home' ? 'active-navbar-link': 'navbar-link'} onClick={() => onUpdateActiveUser('home')}>Home</Nav.Link>
            <Nav.Link href="/about" className={activeUser === 'about' ? 'active-navbar-link': 'navbar-link'} onClick={() => onUpdateActiveUser('about')}>About</Nav.Link>
            <Nav.Link href="/projects" className={activeUser === 'projects' ? 'active-navbar-link': 'navbar-link'} onClick={() => onUpdateActiveUser('projects')}>Projects</Nav.Link>
            </Nav>
        <span className="navbar-text">
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/james--fleming/"><img src={icon1} alt="LinkedIn"></img></a>
                <a href="https://github.com/James-fleming394"><img src={icon} alt="Github"></img></a>
            </div>
            <button className="connect-button" onClick={() => console.log('working')}><span>Connect</span></button>
        </span>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default NavBar

