import React from "react";
import Nav from 'react-bootstrap/Nav'
import { Container, Row, Col, Tab } from "react-bootstrap"
import ProjectCard from "./ProjectCard";

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
                <Tab.Container id="project-tabs" defaultActiveKey="first">
                    <Nav variant="pills" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Project 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Project 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">Project 3</Nav.Link>
                    </Nav.Item>
                    </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <ProjectCard
                                        key={index}
                                        {...project}
                                        />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <Row>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <h6>{project.title}</h6>
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <Row>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <h6>{project.title}</h6>
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                </Tab.Content>
                </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects