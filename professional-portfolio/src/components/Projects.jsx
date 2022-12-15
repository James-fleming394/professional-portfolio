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
import prjImg7 from '../assets/img/Marvel-Engine-Home.png';
import prjImg8 from '../assets/img/Marvel-Engine-Cat.png';
import prjImg9 from '../assets/img/Marvel-Engine-Comics.png';
import prjImg10 from '../assets/img/Marvel-Engine-Toys.png';
import prjImg11 from '../assets/img/Marvel-Engine-Apparel.png';
import prjImg12 from '../assets/img/Marvel-Engine-Add.png';

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