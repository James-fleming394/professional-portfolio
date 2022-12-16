import React from "react";

const Resume = () => {
    return (
        <div className="resume">
            <div className="title-area">
            <h1>James Fleming</h1>
            <h3>Full-Stack Developer</h3>
            <span className="number-email">
            <h6>(845) 826.1120</h6>
            <h6>James.Fleming394@gmail.com</h6>
            <h6>White Plains, New York</h6>
            <h6><a href="https://www.linkedin.com/in/james--fleming/">in/james--fleming</a></h6>
            <h6><a href="https://github.com/James-fleming394">github.com/James-fleming394</a></h6>
            </span>
            </div>
            <section className="tagline">
                <p className="tagline">
                I am a software developer with an interest in web and game design and a passion for education, gaming and sports.  
                Before transitioning to software engineering, I worked as an elementary school teacher and high school sports coach.  
                My experience as a teacher has taught me the importance of teamwork, collaboration, communication, and 
                problem-solving in the workplace.  I am looking forward to further developing my design and coding skills, 
                so I can bring my passions into the tech world. 
                </p>
            </section>
            <section className="skill-resume">
                <h3>Skills</h3>
                <p>Languages - JavaScript, HTML, CSS, Python, SQL, Mongo, JSON, Typescript, EJS, DTL | Database -  PostgreSQL,  MongoDB</p>
                <p>Libraries and Frameworks - React (class based and hooks),  Express.js, Django, Jquery, Bootstrap</p>
                <p>Other - RESTful Routing, JSON api</p>
            </section>
            <section className="resume-projects">
                <h3>Software Development Projects</h3>
                <h6><a href="https://marvel-engine-app.herokuapp.com/">Marvel Ecommerce App</a></h6>
                    <ul>
                        <li><p>Utilized React.js components for the front-end of the application creating an application that allows users to search for, view, create and update Marvel products.  Users can add items to their cart and checkout.</p></li>
                        <li><p>Made RESTful API fetch calls to an Express, MongoDB, Node.js backend handling all create, read, update, delete (CRUD) operations, and tested all backend routes during development using Insomnia.</p></li>
                        <li><p>Used Mongoose to define schemas for MongoDB collections.</p></li>
                    </ul>
                <h6>Brewski Brewery Reviews</h6>
                    <ul>
                        <li><p>Utilized React.js components for the front-end of a user-friendly, well designed application that allows clients to search for breweries in their area, view a list of beers on tap and leave reviews for other users to view.</p></li>
                        <li><p>Utilized HTML, CSS and Javascript to create, style and add functionality to an online application.</p></li>
                        <li><p>Made RESTful API fetch calls to an Express, PostgreSQL, Node.js backend handling all create, read, update, delete (CRUD) operations, and tested all backend routes during development using Insomnia.</p></li>
                    </ul>
            </section>
            <section className="experience">
                <h3>Professional Experience</h3>
                <h6>Elementary School Teacher | Charter School of Educational Excellence | Yonkers, New York</h6>
                    <ul>
                        <li><p>Instruct a diverse population of 26-28 elementary school students in all subject areas in fourth and first grade</p></li>
                        <li><p>Collaborated with grade team and administration on curriculum planning, target goals and anticipated blockers</p></li>
                        <li><p>Integrate exciting and immersive technologies into all learning experiences</p></li>
                        <li><p>Collect and analyze data to drive instructional decisions</p></li>
                    </ul>
                <h6>High School Athletics Coach | Charter School of Educational Excellence | Yonkers, New York</h6>
                    <ul>
                        <li><p>Head coach of High School Baseball, Football and Basketball teams</p></li>
                        <li><p>Helped student athletes develop skills related to the sports by planning and leading practices to support growth</p></li>
                        <li><p>Motivate athletes to build positive mindsets, leadership, character building and confidence both on and off the field</p></li>
                    </ul>
            </section>
            <section className="education">
                <h3>Education</h3>
                <h5>General Assembly | Remote</h5>
                <h6>Software Engineering Immersive | October 2022 - December 2022</h6>
                <p>Full-stack software engineering immersive student in an intensive, 24-week, 450+ hour program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies. Developed a portfolio of individual and group projects.</p>
                <br></br>
                <h5>Mercy College | Dobbs Ferry</h5>
                <h6>Bachelors of Science in Behavioral Sciences | Septermber 2016 - May 2018</h6>
            </section> 
        </div>
    )
}

export default Resume