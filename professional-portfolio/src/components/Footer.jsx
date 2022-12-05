import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import laptop from '../assets/img/laptop-code.png';
import icon from '../assets//img/github-logo-icon.png'
import icon1 from '../assets/img/linkedin-logo-icon.png'

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={laptop} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center-sm-end">
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/james--fleming/"><img src={icon1} alt="LinkedIn"></img></a>
                            <a href="https://github.com/James-fleming394"><img src={icon} alt="Github"></img></a>
                        </div>
                        <p>A Website by James Fleming, Full-Stack Developer</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}


export default Footer