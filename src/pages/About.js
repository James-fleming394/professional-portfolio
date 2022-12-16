import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import 'animate.css';
const HEADSHOT = '/img/headshot.png'

const About = () => {
    return (
        <>
        <section className="about" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">About Me</span>
                        <h1>{`James Fleming`} </h1>
                        <p>
                        My name is James Fleming.  I am a Full-Stack Developer who recently graduated from a Fully Immersive 
                        Bootcamp at General Assembly for Software Engineering.  Before transitioning into the tech industry, 
                        I was an Elementary School Teacher and Sports Coach at a K-12 Charter School in Yonkers, NY.  My experience as a teacher
                        and coach have taught me the value of collaboaration, teamwork, communication and problem-solving in
                        the workplace.  I am looking forward to further developing my design and coding skills, so I can continue
                        to bring my passions into the tech world. 
                        <br></br>
                        Feel free to reach out to me with an inquiries or questions!
                        </p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={HEADSHOT} alt="Headshot" /> 
                    </Col>
                </Row>
            </Container>
        </section>
            </>
    )
}

export default About