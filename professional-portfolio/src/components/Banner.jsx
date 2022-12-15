import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import headerImg from '../assets/img/header.png'
import 'animate.css';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Full Stack Developer", "Web Developer", "Software Engineer" ];
    const period = 2000;

    let navigate = useNavigate();

    useEffect(() => {
    let ticker = setInterval(() => {
        tick();
    }, delta);

    return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
    } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
    } else {
        setIndex(prevIndex => prevIndex + 1);
    }
}

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                <Col xs={12} md={6} xl ={7}>
                    <span className="tagline">Welcome to my Portfolio!</span>
                    <h1>{`Hello!  I'm James! `} </h1>
                    <h2><span className="txt-rotate"
                    data-rotate='["Full-Stack Developer", "Web Developer", "Software Engineer"]'><span className="wrap">{text}</span>
                    </span>
                    </h2>
                    <p>I am a software developer with an interest in web and game design and a passion for education, 
                    gaming and sports.
                    I am looking forward to further developing my design and coding skills, so I can bring my passions into the 
                    tech world. 
                    </p> 
                    <h4>Check out my projects, skills and resume!</h4>
                    <button onClick={() => navigate('/resume')} >View My Resume <ArrowRightCircle size={25} /></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <TrackVisibility>
                    {({ isVisible }) => 
                        <div className={isVisible ? "animate_animated animate_zoomIn" : ""}>
                        <img src={headerImg} alt="Banner Img" /> 
                        </div>}
                        </TrackVisibility>
                </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner