import React from "react";
import Skills from "../components/Skills";
import { Container, Row, Col } from "react-bootstrap"
import 'animate.css';
import HEADSHOT from '../assets/img/headshot.png'

const About = () => {
    return (
        <>
        <section className="banner" id="home">
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
                        <h5>I look forward to speaking with you!</h5> 
                        </p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={HEADSHOT} alt="Headshot" /> 
                    </Col>
                </Row>
            </Container>
        </section>
        <div>
                <Skills />
            </div>
            </>
    )
}

export default About