import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import StudentInfo from "../../Assets/Projects/StudentInfoSystem.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Personal Portfolio"
              description="My personal portfolio which features some of my github projects as well as my resume and technical skills."
              ghLink="https://github.com/kamlesh-sharma-tech/"
              demoLink="https://github.com/kamlesh-sharma-tech/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StudentInfo}
              isBlog={false}
              title="Student Info System"
              description="This is php based Crud Operation project named Student Info System in which we perform crud operations on data like to add or register new student, update student information and delete student etc..."
              ghLink="https://github.com/kamlesh-sharma-tech/"
              demoLink="https://github.com/kamlesh-sharma-tech/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChatX}
              isBlog={false}
              title="ChatX"
              description="Real time Chat application where we can chat with all the registered user and can also see who is online."
              ghLink="https://github.com/kamlesh-sharma-tech/"
              demoLink="https://chatx412.herokuapp.com/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TourRajasthan}
              isBlog={false}
              title="Tour Rajasthan"
              description="Tour Rajasthan is a Travel Blogging Website for Rajasthan that aims to provide the Tourists to Explore Rajasthan's Beauty"
              ghLink="https://github.com/kamlesh-sharma-tech/"
              demoLink="https://tourrajasthan.000webhostapp.com/" 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
