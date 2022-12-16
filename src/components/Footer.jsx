import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const laptop = '/img/laptop-code.png';
const icon = '/img/github-logo-icon.png'
const icon1 = '/img/linkedin-logo-icon.png'

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
                        <p>Copyright, © James Fleming, Full-Stack Developer</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}


export default Footer