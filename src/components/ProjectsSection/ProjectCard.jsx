import React from "react";
import { Card, Button } from "react-bootstrap";

const ProjectCard = ({
  imageSrc,
  projectTitle,
  projectDesc,
  projectLink,
  githubLink,
}) => {
  return (
    <Card>
      <Card.Img variant="top" src={imageSrc} className="img-fluid" />
      <Card.Body>
        <Card.Title>{projectTitle}</Card.Title>
        <Card.Text>{projectDesc}</Card.Text>
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <Button variant="primary" size="sm">
            Visit Project
          </Button>
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2"
        >
          <Button variant="secondary" size="sm">
            View on Github
          </Button>
        </a>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
