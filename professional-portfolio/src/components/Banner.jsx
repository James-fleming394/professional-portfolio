import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from '../assets/img/header.png'

const Banner = () => {
    return (
        <section className="homepage" id="home">
            <Container>
                <Row className="align-items-center">
                <Col xs={12} md={6} xl ={7}>
                    <span className="tagline">Welcome</span>
                    <h1>{`Hello!  I'm James!`}<span className="wrapper"></span></h1>
                    <p>Insert text about being a Software Engineer...</p>
                    <button onClick={() => console.log('button working')}>Let's Connect <ArrowRightCircle size={25} /></button>
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