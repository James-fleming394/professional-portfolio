import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import HTML from '../assets/img/html.png';
import CSS from '../assets/img/css.png';
import JS from '../assets/img/js.png';
import REACT from '../assets/img/react.png';
import DEBUG from '../assets/img/debug.png';
import VUE from '../assets/img/vue.png';
import MONGO from '../assets/img/database.png';
import SQL from '../assets/img/table.png';
import PYTHON from '../assets/img/python.png';

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
        },
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
        },
        tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
        },
        mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
        }
    };

    return (
        <><section className="about" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Skills</span>
                        <h1>{`James Fleming`} </h1>
                        <h5>Languages: JavaScript, HTML, CSS, Python, SQL, Mongo, JSON</h5>
                        <h5>Database:  PostgreSQL,  MongoDB</h5>
                        <h5>Libraries and Frameworks: React (class based and hooks), Express.js, Bootstrap</h5>
                    </Col>
                </Row>
            </Container>
        </section><section className="skill" id="skills">
                <Container>
                    <Row>
                        <Col>
                            <div className="skill-box">
                                <h2>Web Development Skills</h2>
                                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                    <div className="item">
                                        <img className="skills-icon" src={HTML} alt="html logo" />
                                        <h5>HTML</h5>
                                    </div>
                                    <div className="item">
                                        <img className="skills-icon" src={CSS} alt="css logo" />
                                        <h5>CSS</h5>
                                    </div>
                                    <div className="item">
                                        <img className="skills-icon" src={JS} alt="Javascript logo" />
                                        <h5>Javascript</h5>
                                    </div>
                                    <div className="item">
                                        <img className="skills-icon" src={REACT} alt="React logo" />
                                        <h5>React</h5>
                                    </div>
                                    <div className="item">
                                        <img className="skills-icon" src={DEBUG} alt="Debug logo" />
                                        <h5>Debugging</h5>
                                    </div>
                                    <div className="item">
                                        <img className="skills-icon" src={VUE} alt="Vue logo" />
                                        <h5>Vue</h5>
                                    </div>
                                    <div className="item">
                                        <img className="skills-icon" src={MONGO} alt="Mongo logo" />
                                        <h5>MongoDB</h5>
                                    </div>
                                    <div className="item">
                                        <img className="skills-icon" src={PYTHON} alt="Python logo" />
                                        <h5>Python</h5>
                                    </div>
                                    <div className="item">
                                        <img className="skills-icon" src={SQL} alt="PostreSQL logo" />
                                        <h5>PostgreSQL</h5>
                                    </div>
                                </Carousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section></>
    )
}


export default Skills