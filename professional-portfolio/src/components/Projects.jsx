import React from "react";
import Nav from 'react-bootstrap/Nav'
import { Container, Row, Col, Tab } from "react-bootstrap"
import ProjectCard from "./ProjectCard";
import prjImg1 from '../assets/img/Brewski-homepage.png';
import prjImg2 from '../assets/img/Brewski-register.png';
import prjImg3 from '../assets/img/Brewski-signin.png';
import prjImg4 from '../assets/img/Brewski-breweries.png';
import prjImg5 from '../assets/img/Brewski-brewery.png';
import prjImg6 from '../assets/img/Brewski-profile.png';
import prjImg7 from '../assets/img/home-pageschool.png';
import prjImg8 from '../assets/img/course-page.png';
import prjImg9 from '../assets/img/student-page.png';
import prjImg10 from '../assets/img/Menu.png';
import prjImg11 from '../assets/img/plate.png';

const Projects = () => {
    const project1 = [
        {
            title: "Brewski",
            description: "Brewksi is an online Brewery Review platform",
            img: prjImg1
        },
        {
            title: "Brewski",
            description: "Using Auth, users will need to register in order to access the review's sections of the site",
            img: prjImg2
        },
        {
            title: "Brewski",
            description: "Once registered, users can sign in here",
            img: prjImg3
        },
        {
            title: "Brewski",
            description: "Here's a look at the Breweries listed",
            img: prjImg4
        },
        {
            title: "Brewski",
            description: "When accessing one brewery, users can see a beer menu and leave reviews",
            img: prjImg5
        },
        {
            title: "Brewski",
            description: "A user's profile will keep track of their favorite breweries and reviews they've written",
            img: prjImg6
        }
    ]
    const project2 = [
        {
            title: "Green Tree School",
            description: "Green Tree School is a grading and GPA calculator web application",
            img: prjImg7
        },
        {
            title: "Green Tree School",
            description: "Using Auth, users will need to register in order to access the review's sections of the site",
            img: prjImg8
        },
        {
            title: "Green Tree School",
            description: "Once registered, users can sign in here",
            img: prjImg9
        }
    ]
    const project3 = [
        {
            title: "Explorify Park Menu",
            description: "Green Tree School is a grading and GPA calculator web application",
            img: prjImg10
        },
        {
            title: "Explorify Park Menu",
            description: "Using Auth, users will need to register in order to access the review's sections of the site",
            img: prjImg11
        },
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
                                project1.map((project, index) => {
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
                                project2.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                        <Row>
                            {
                                project3.map((project, index) => {
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
                </Tab.Content>
                </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects