import React from "react";
import { Container, Row, Col } from "react-bootstrap"
const EMAIL = '/img/at.png'

const Contact = () => {

    return (
        <section className="contact" id="connect">
            <Container className="email-link">
                <Row>
                <Col md={6}>
                    <img className="email-symbol" src={EMAIL} alt="contact-image" />
                </Col>
                <Col className="personal-links">
                <h3>Email: James.Fleming394@gmail.com</h3>
                <h3>LinkedIn: <a href="https://www.linkedin.com/in/james--fleming/">in/james--fleming</a> </h3>
                <h3>GitHub: <a href="https://github.com/James-fleming394">github.com/James-fleming394</a> </h3>
                </Col>
                </Row>
            </Container>
            <Container>
            <Col>
            <br></br>
                <h1>I look forward to hearing from you!  Thank you for taking the time to view my portfolio!</h1>
            </Col>
            </Container>
        </section>
    )
}

export default Contact