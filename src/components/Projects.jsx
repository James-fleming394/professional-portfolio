import React from "react";
import Nav from 'react-bootstrap/Nav'
import { Container, Row, Col, Tab } from "react-bootstrap"
import ProjectCard from "./ProjectCard";
const prjImg1 = '/img/Brewski-homepage.png';
const prjImg2 = '/img/Brewski-register.png';
const prjImg3 = '/img/Brewski-signin.png';
const prjImg4 = '/img/Brewski-breweries.png';
const prjImg5 = '/img/Brewski-brewery.png';
const prjImg6 = '/img/Brewski-profile.png';
const prjImg7 = '/img/Marvel-Engine-Home.png';
const prjImg8 = '/img/Marvel-Engine-Cat.png';
const prjImg9 = '/img/Marvel-Engine-Comics.png';
const prjImg10 = '/img/Marvel-Engine-Toys.png';
const prjImg11 = '/img/Marvel-Engine-Apparel.png';
const prjImg12 = '/img/Marvel-Engine-Add.png';

const Projects = () => {
    const project1 = [
        {
            title: "Marvel Engine",
            description: "Marvel Engine is an online store for Marvel Products",
            img: prjImg7
        },
        {
            title: "Marvel Engine",
            description: "Use the category selection page to choose which items you'd like to shop",
            img: prjImg8
        },
        {
            title: "Marvel Engine",
            description: "The Comics page has sales on all Marvel Comics.  Users can add, update and delete comics using CRUD functions",
            img: prjImg9
        },
        {
            title: "Marvel Engine",
            description: "The Toys page has sales on all Marvel Toys.  Users can add, update and delete toys using CRUD functions",
            img: prjImg10
        },
        {
            title: "Marvel Engine",
            description: "The Apparel page has sales on all Marvel apparel pieces.  Users can add, update and delete apparel using CRUD functions",
            img: prjImg11
        },
        {
            title: "Marvel Engine",
            description: "The Cart on Marvel Engine allows users to add, delete and increase the quantity of the items they want to purchase",
            img: prjImg12
        },
    ]
    const project2 = [
        {
            title: "",
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
    const project3 = [
        
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
                        <div className="project-links">
                        <a href="https://marvel-engine-app.herokuapp.com/">Deployed Website</a>
                        <a href="https://github.com/James-fleming394/marvel-ecommerce-backend">Backend GitHub</a>
                        <a href="https://github.com/James-fleming394/marvel-ecommerce-app-frontend">Frontend GitHub</a>
                        </div>
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
                        <div className="project-links">
                        <a href="https://marvel-engine-app.herokuapp.com/">Deployed Website</a>
                        <a href="https://github.com/James-fleming394/marvel-ecommerce-backend">Backend GitHub</a>
                        <a href="https://github.com/James-fleming394/marvel-ecommerce-app-frontend">Frontend GitHub</a>
                        </div>
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
                        <div className="project-links">
                        <a className="link" href="https://marvel-engine-app.herokuapp.com/">Deployed Website</a>
                        <a href="https://github.com/James-fleming394/marvel-ecommerce-backend">Backend GitHub</a>
                        <a href="https://github.com/James-fleming394/marvel-ecommerce-app-frontend">Frontend GitHub</a>
                        </div>
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