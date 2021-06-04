import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import { projectData } from "./projectData";

const ProjectsSection = () => {
  const renderProjects = (data) => {
    if (data) {
      return data.map((obj, idx) => {
        return (
          <Col key={idx} lg={4} md={6} sm={12} className="mb-3">
            <ProjectCard
              imageSrc={obj.projectImg.default}
              projectTitle={obj.projectTitle}
              projectDesc={obj.projectDesc}
              projectLink={obj.projectURL}
              githubLink={obj.githubURL}
            />
          </Col>
        );
      });
    } else {
      return (
        <Col className="text-center">
          <Spinner animation="border">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Col>
      );
    }
  };

  return (
    <Container fluid="lg" className="p-2" id='projects'>
      <Row>
        <Col className="text-center mb-4">
          <h2 style={{ fontSize: "clamp(2.5rem, 10vw, 4rem)" }}>My Projects</h2>
        </Col>
      </Row>
      <Row>{renderProjects(projectData)}</Row>
    </Container>
  );
};

export default ProjectsSection;
