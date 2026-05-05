import React, { useState } from "react";
import ProjectCard from "./ProjectCards";
import avataar_logo from "../../Assets/Projects/avataar__logo.jpeg";
import enrich_logo from "../../Assets/Projects/enrich_logo.png";
import jio_logo from "../../Assets/Projects/jio_logo.png";
import personal_logo from "../../Assets/Projects/personal_logo.png";

const projects = [
  {
    company: "Avataar",
    imgPath: avataar_logo,
    companyTag: "Avataar.ai",
    title: "Kisan-Vegh & UAI Dashboard",
    description:
      "Architected a production-grade voice-first AI farming assistant with end-to-end flow across real-time audio transcription, multimodal image analysis, and multilingual LLM responses. Built a multi-model orchestration pipeline (Sarvam ASR → Dhenu VLM → LLM) with centralized error handling, per-model fallbacks, and graceful degradation. Delivered a real-time multi-agent observability dashboard (Socket.io + custom React hooks) with event-driven state transitions and sub-second UI updates.",
    tags: ["Sarvam ASR", "VLM", "LLM", "Socket.io", "React", "Python"],
    ghLink: "https://github.com/aryavardhan007",
    demoLink: "",
    showGithub: false,
  },
  {
    company: "Avataar",
    imgPath: avataar_logo,
    companyTag: "Avataar.ai",
    title: "Avataar Flows — AI Workflow Automation",
    description:
      "Engineered a visual workflow automation platform (React 18 + TypeScript) with a drag-and-drop canvas editor (React Flow + Dagre) and step-by-step HITL approvals across 5 action types. Built a multi-tenant AI execution engine (FastAPI + PostgreSQL + asyncio) with DAG-based parallel execution and a thread-pool executor (16 workers, queue of 300). Implemented Tattva — a semantic entity layer with pgvector embeddings (Voyage AI, 1024-dim) — achieving 89% accuracy at 33% of GPT-4o inference cost. Deployed on AWS EKS via Jenkins → ECR → rolling deploy.",
    tags: ["React 18", "TypeScript", "FastAPI", "PostgreSQL", "AWS EKS", "pgvector"],
    ghLink: "https://github.com/aryavardhan007",
    demoLink: "",
    showGithub: false,
  },
  {
    company: "Avataar",
    imgPath: avataar_logo,
    companyTag: "Avataar.ai",
    title: "UAI — Unified AI Interface",
    description:
      "Built three microservices (Registry, Trust Server, Audit Ledger) using FastAPI + PostgreSQL + Elasticsearch + Redis, forming the control plane for a national-scale AI protocol with append-only audit storage and SHA-256 receipt hashing. Implemented W3C DID v1.0 resolution, Ed25519/P-256 signature verification, W3C Verifiable Credential validation, and JWT delegation tokens — fully DPDP Act 2023 and CERT-In compliant. Co-designed a 5-layer protocol architecture with bridge adapters for MCP, Beckn, and A2A interoperability.",
    tags: ["FastAPI", "PostgreSQL", "Elasticsearch", "Redis", "W3C DID", "Docker", "Prometheus"],
    ghLink: "https://github.com/aryavardhan007",
    demoLink: "",
    showGithub: false,
  },
  {
    company: "Enrich Beauty",
    imgPath: enrich_logo,
    companyTag: "Enrich Beauty",
    title: "Revenue Management System",
    description:
      "Architected comprehensive revenue synchronization system using Firebase Functions, processing invoices, credit notes, and orders across multiple business systems with real-time data consistency. Implemented multi-system data integration pipeline synchronizing revenue data to BigQuery with automated failure handling achieving 99%+ synchronization accuracy.",
    tags: ["Firebase", "BigQuery", "TypeScript", "Cloud Functions"],
    ghLink: "https://github.com/aryavardhan007",
    demoLink: "",
    showGithub: false,
  },
  {
    company: "Enrich Beauty",
    imgPath: enrich_logo,
    companyTag: "Enrich Beauty",
    title: "Vendor & Warehouse Management",
    description:
      "Designed and implemented vendor management system with vendor creation, product mapping, and trade terms management, integrating with BigQuery for real-time data synchronization. Architected end-to-end e-invoice/e-way bill solution including Webtel integration and Flutter dashboard UI for generating compliant Excel files with 150+ validation fields.",
    tags: ["Flutter", "Firebase", "BigQuery", "Webtel API"],
    ghLink: "https://github.com/aryavardhan007",
    demoLink: "",
    showGithub: false,
  },
  {
    company: "Enrich Beauty",
    imgPath: enrich_logo,
    companyTag: "Enrich Beauty",
    title: "Fortune Wheel Rewards System",
    description:
      "Developed dynamic fortune wheel system using Flutter and Firebase Functions backend, implementing dual-wheel configuration with location-based wheel and reward configuration. Built custom reward distribution algorithm with weighted probability calculations and robust concurrent request handling using Firestore transactions.",
    tags: ["Flutter", "Firebase", "Firestore", "Algorithms"],
    ghLink: "https://github.com/aryavardhan007",
    demoLink: "",
    showGithub: false,
  },
  {
    company: "Enrich Beauty",
    imgPath: enrich_logo,
    companyTag: "Enrich Beauty",
    title: "Dynamic Retail App Homepage",
    description:
      "Led development of dynamic Slot system using Flutter with 5+ widget types (carousel, horizontal list, vertical list, grid, column) and Firebase Remote Config integration, enabling real-time content updates and seamless backend synchronization supporting dynamic content management.",
    tags: ["Flutter", "Firebase Remote Config", "Dart"],
    ghLink: "https://github.com/aryavardhan007",
    demoLink: "",
    showGithub: false,
  },
  {
    company: "Enrich Beauty",
    imgPath: enrich_logo,
    companyTag: "Enrich Beauty",
    title: "Shipment Tracking System",
    description:
      "Implemented shipment tracking system with 5-stage workflow, including picker assignment APIs and developed complete Flutter UI for warehouse staff to pick and scan shipments. Enhanced system reliability by integrating Microsoft Teams webhook for failed operations.",
    tags: ["Flutter", "Node.js", "MS Teams", "Firebase"],
    ghLink: "https://github.com/aryavardhan007",
    demoLink: "",
    showGithub: false,
  },
  {
    company: "Jio",
    imgPath: jio_logo,
    companyTag: "Reliance Jio",
    title: "Jio Health WhatsApp Integration",
    description:
      "Added complete caching layer in WhatsApp-integration microservice using Redis Sentinels, improving performance for JioHealth WhatsApp-bot users. Introduced Pub/Sub (Azure ServiceBus) mechanism for multiple microservices to communicate with the PME.",
    tags: ["Redis", "Azure ServiceBus", "Microservices", "Node.js"],
    ghLink: "https://github.com/aryavardhan007",
    demoLink: "",
    showGithub: false,
  },
  {
    company: "Personal",
    imgPath: personal_logo,
    companyTag: "Personal",
    title: "Movie Mate",
    description:
      "A Flutter mobile application designed to showcase trending movies. Cross-platform app built with Flutter that displays latest and trending movies with a clean, user-friendly interface. Features include movie discovery, trending content display, and seamless navigation across Android and iOS.",
    tags: ["Flutter", "Dart", "REST API", "Cross-Platform"],
    ghLink: "https://github.com/aryavardhan007/movie_mate",
    demoLink: "",
    showGithub: true,
  },
  {
    company: "Personal",
    imgPath: personal_logo,
    companyTag: "Personal",
    title: "Asteroids Game",
    description:
      "A modern recreation of the classic Asteroids arcade game built with modern web technologies, featuring smooth gameplay mechanics, particle effects, collision detection, score tracking, and progressive difficulty levels.",
    tags: ["JavaScript", "Canvas API", "Game Dev"],
    ghLink: "https://github.com/aryavardhan007/asteroids",
    demoLink: "",
    showGithub: true,
  },
  {
    company: "Personal",
    imgPath: personal_logo,
    companyTag: "Personal",
    title: "Expense Tracker Backend",
    description:
      "A robust backend API for expense tracking application built with Node.js and TypeScript. Features include RESTful API endpoints, organized controller structure, modular routing system, and comprehensive expense management functionality.",
    tags: ["Node.js", "TypeScript", "REST API", "Express.js"],
    ghLink: "https://github.com/aryavardhan007/expense-tacker-backend",
    demoLink: "",
    showGithub: true,
  },
];

const filters = ["All", "Avataar", "Enrich Beauty", "Jio", "Personal"];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.company === activeFilter);

  return (
    <div className="projects-page">
      <div className="projects-header">
        <div className="section-label">PORTFOLIO</div>
        <h1 className="section-title">
          Things I've <span className="gradient-text">built</span>
        </h1>
        <p className="section-subtitle">
          Production systems and projects across{" "}
          <strong>Avataar.ai</strong>, <strong>Enrich Beauty</strong>,{" "}
          <strong>Reliance Jio</strong> and personal ventures.
        </p>

        <div className="project-filters">
          {filters.map((f) => (
            <button
              key={f}
              className={`project-filter-btn${activeFilter === f ? " active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filtered.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
