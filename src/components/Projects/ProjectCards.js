import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div className="project-card-img-wrapper">
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          className="project-card-logo"
        />
      </div>
      {props.companyTag && (
        <div className="project-company-badge-wrapper">
          <span className="project-company-badge">{props.companyTag}</span>
        </div>
      )}
      <Card.Body className="project-card-body">
        <Card.Title className="project-card-title">{props.title}</Card.Title>
        {props.tags && props.tags.length > 0 && (
          <div className="project-tags-container">
            {props.tags.map((tag, idx) => (
              <span key={idx} className="project-tag-pill">
                {tag}
              </span>
            ))}
          </div>
        )}
        <Card.Text className="project-card-description">
          {props.description}
        </Card.Text>
        <div className="project-card-footer">
          {props.showGithub && (
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              className="project-btn"
            >
              <BsGithub /> &nbsp; GitHub
            </Button>
          )}
          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="project-btn"
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
