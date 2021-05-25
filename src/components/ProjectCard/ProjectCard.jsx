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
      <Card.Img
        variant="top"
        src={imageSrc}
        // style={{ maxWidth: "100%" }}
        className="img-fluid"
      />
      <Card.Title>{projectTitle}</Card.Title>
      <Card.Text>{projectDesc}</Card.Text>
      <a href={projectLink} target="_blank" rel="noopener noreferrer">
        <Button variant="primary">Visit Project</Button>
      </a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <Button variant="secondary">View on Github</Button>
      </a>
    </Card>
  );
};

export default ProjectCard;
