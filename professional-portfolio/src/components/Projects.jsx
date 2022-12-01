import React from "react";
import Nav from 'react-bootstrap/Nav'
import { Container, Row, Col } from "react-bootstrap"

const Projects = () => {
    const projects = [
        {
            title: "Project 1",
            description: "Project description goes here",
            img: ''
        },
        {
            title: "Project 1",
            description: "Project description goes here",
            img: ''
        },
        {
            title: "Project 1",
            description: "Project description goes here",
            img: ''
        }
    ]

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Exmaple projects here</p>
                    <Nav variant="pills" defaultActiveKey="/home">
                    <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                    Disabled
                    </Nav.Link>
                    </Nav.Item>
                    </Nav>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects