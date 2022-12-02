import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap"
import AT from '../assets/img/envelope.png'

const Contact = () => {
    const formInitialDetails = {
        name: '',
        email: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtontext] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setButtontext('Sending...')
    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={AT} alt="contact-image" />
                    </Col>
                    <Col md={6}>
                        <h2>Contact Me Here:</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input 
                                    type="text" 
                                    value={formDetails.name} 
                                    placeholder="Name" 
                                    onChange={(e) => onFormUpdate('name', e.target.value)}>
                                    </input>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input 
                                    type="text" 
                                    value={formDetails.email} 
                                    placeholder="Email" 
                                    onChange={(e) => onFormUpdate('email', e.target.value)}>
                                    </input>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input 
                                    textarea="text" row="6"
                                    value={formDetails.message} 
                                    placeholder="Message" 
                                    onChange={(e) => onFormUpdate('message', e.target.value)}>
                                    </input>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact