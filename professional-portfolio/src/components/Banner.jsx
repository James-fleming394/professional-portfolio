import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import headerImg from '../assets/img/header.png'
import 'animate.css';

const Banner = () => {

    return (
        <section className="homepage" id="home">
            <Container>
                <Row className="align-items-center">
                <Col xs={12} md={6} xl ={7}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hello!  I'm James! `}<span className="text-rotate"
                    data-rotate='["Full-Stack Developer", "Web Developer", "Software Engineer"]'></span></h1>
                    <p>I am a Full-Stack Developer</p>
                    <button className="resume-button" onClick={() => console.log('button working')}>Download my Resume</button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Banner Img" /> 
                </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner