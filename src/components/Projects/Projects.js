import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import enrich_logo from "../../Assets/Projects/enrich_logo.png";
import jio_logo from "../../Assets/Projects/jio_logo.png";
import personal_logo from "../../Assets/Projects/personal_logo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some key projects and systems I've developed at Enrich Beauty, Reliance Jio and Some Personal Projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={enrich_logo}
              title="Revenue Management System"
              description="Architected comprehensive revenue synchronization system using Firebase Functions, processing invoices, credit notes, and orders across multiple business systems with real-time data consistency. Implemented multi-system data integration pipeline synchronizing revenue data to BigQuery with automated failure handling achieving 99%+ synchronization accuracy."
              ghLink="https://github.com/aryavardhan007"
              demoLink=""
              showGithub={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={enrich_logo}
              title="Vendor & Warehouse Management"
              description="Designed and implemented vendor management system with vendor creation, product mapping, and trade terms management, integrating with BigQuery for real-time data synchronization. Architected end-to-end e-invoice/e-way bill solution including Webtel integration and Flutter dashboard UI for generating compliant Excel files with 150+ validation fields."
              ghLink="https://github.com/aryavardhan007"
              demoLink=""
              showGithub={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={enrich_logo}
              title="Fortune Wheel Rewards System"
              description="Developed dynamic fortune wheel system using Flutter and Firebase Functions backend, implementing dual-wheel configuration with location-based wheel and reward configuration. Built custom reward distribution algorithm with weighted probability calculations and robust concurrent request handling system using Firestore transactions."
              ghLink="https://github.com/aryavardhan007"
              demoLink=""              
              showGithub={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={enrich_logo}
              title="Dynamic Retail App Homepage"
              description="Led development of dynamic Slot system using Flutter with 5+ widget types (carousel, horizontal list, vertical list, grid, column) and Firebase Remote Config integration, enabling real-time content updates and seamless backend synchronization supporting dynamic content management."
              ghLink="https://github.com/aryavardhan007"
              demoLink=""
              showGithub={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jio_logo}
              title="Jio Health WhatsApp Integration"
              description="Added complete caching layer in WhatsApp-integration microservice using Redis Sentinels, improving performance for JioHealth WhatsApp-bot users. Introduced Pub/Sub (Azure ServiceBus) mechanism for multiple microservices to communicate with the PME."
              ghLink="https://github.com/aryavardhan007"
              demoLink=""
              showGithub={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={enrich_logo}
              title="Shipment Tracking System"
              description="Implemented shipment tracking system with 5-stage workflow, including picker assignment APIs and developed complete Flutter UI for warehouse staff to pick and scan shipments. Enhanced system reliability by integrating Microsoft Teams webhook for failed operations."
              ghLink="https://github.com/aryavardhan007"
              demoLink=""
              showGithub={false}
            />
          </Col>

          {/* Personal project with GitHub link */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={personal_logo}
              title="Movie Mate"
              description="A Flutter mobile application designed to showcase trending movies. Cross-platform app built with Flutter that displays latest and trending movies with a clean, user-friendly interface. Features include movie discovery, trending content display, and seamless navigation across Android and iOS platforms."
              ghLink="https://github.com/aryavardhan007/movie_mate"
              demoLink=""
              showGithub={true}
            />
          </Col>

          {/* Personal project with GitHub link */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={personal_logo}
              title="Asteroids Game"
              description="A modern recreation of the classic Asteroids arcade game. Built with modern web technologies, featuring smooth gameplay mechanics, particle effects, and responsive controls. The game includes collision detection, score tracking, and progressive difficulty levels, showcasing game development skills and interactive web application expertise."
              ghLink="https://github.com/aryavardhan007/asteroids"
              demoLink=""
              showGithub={true}
            />
          </Col>

          {/* Personal project with GitHub link */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={personal_logo}
              title="Expense Tracker Backend"
              description="A robust backend API for expense tracking application built with Node.js and TypeScript. Features include RESTful API endpoints, organized controller structure, modular routing system, and comprehensive expense management functionality. Demonstrates backend development skills, API design principles, and TypeScript expertise for scalable server-side applications."
              ghLink="https://github.com/aryavardhan007/expense-tacker-backend"
              demoLink=""
              showGithub={true}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
