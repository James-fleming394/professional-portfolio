import React from "react";
import { Col } from "react-bootstrap"

const ProjectCard = ({title, description, img}) => {
    return (
        <Col sm={6} md={4}>
            <div className="project-image-box">
                <img src={img} alt="p1-img" />
                <div className="proj-title">
                    <h4>{title}</h4>
                    <span>{description}</span>

                </div>
            </div>
        </Col>
    )
}

export default ProjectCard