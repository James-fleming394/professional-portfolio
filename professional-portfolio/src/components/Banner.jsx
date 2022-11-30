import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import headerImg from '../assets/img/header.png'

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDelete, setIsDelete] = useState(false);
    const toRotate = ["Full-Stack Developer", "Web Developer", "Software Engineer"];
    const [text, setText] = useState('');
    const [index, setIndex] = useState(1);
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    useEffect(() => {
        let timer = setInterval(() => {
            time();
        }, delta)
        return () => {clearInterval(timer)};
    }, [text])

    const time = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDelete ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDelete) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDelete ?? updatedText === fullText) {
            setIsDelete(true);
            setIndex(prevIndex => prevIndex -1)
            setDelta(period);
        } else if (isDelete ?? updatedText === '') {
            setIsDelete(false);
            setLoopNum(loopNum + 1);
            setIndex(1)
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1)
        }
    }

    return (
        <section className="homepage" id="home">
            <Container>
                <Row className="align-items-center">
                <Col xs={12} md={6} xl ={7}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hello!  I'm James! `}<span className="text-rotate"
                    data-rotate='["Full-Stack Developer", "Web Developer", "Software Engineer"]'></span></h1>
                    <p>{text}</p>
                    <button onClick={() => console.log('button working')}>Connect Here</button>
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