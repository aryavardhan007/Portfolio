import React, { useState } from "react";

const yearsExp = new Date().getFullYear() - 2022;

const experiences = [
  {
    company: "Avataar.ai",
    role: "Software Development Engineer II",
    period: "Jan 2026 — Present",
    type: "current",
    color: "#8b5cf6",
    points: [
      "Engineered Avataar Flows — a visual AI workflow automation platform (React 18 + FastAPI) with DAG-based parallel execution, achieving 89% accuracy at 33% of GPT-4o cost via pgvector semantic embeddings.",
      "Built UAI — national-scale AI protocol control plane with 3 microservices (FastAPI + PostgreSQL + Elasticsearch + Redis), W3C DID v1.0, Ed25519 signature verification, and full DPDP Act 2023 compliance.",
      "Developed Kisan-Vegh — a voice-first AI farming assistant with end-to-end Sarvam ASR → Dhenu VLM → LLM orchestration pipeline and real-time multi-agent observability dashboard.",
    ],
  },
  {
    company: "Enrich Beauty",
    role: "Senior Software Engineer",
    period: "Nov 2022 — Jan 2026",
    type: "past",
    color: "#ec4899",
    points: [
      "Architected Revenue Management System using Firebase Functions with multi-system BigQuery integration achieving 99%+ synchronization accuracy across invoices, credit notes, and orders.",
      "Built end-to-end e-invoice/e-way bill solution (Webtel integration + Flutter dashboard) with 150+ validation fields, and a vendor management system with real-time BigQuery sync.",
      "Developed Fortune Wheel Rewards System using weighted probability algorithms + Firestore transactions for concurrent request handling, and a Dynamic Retail App with 5+ Firebase Remote Config widget types.",
    ],
  },
  {
    company: "Reliance Jio",
    role: "Software Development Engineer I",
    period: "Jun 2022 — Nov 2022",
    type: "past",
    color: "#06b6d4",
    points: [
      "Added Redis Sentinels caching layer to the JioHealth WhatsApp-integration microservice, significantly improving response latency for bot users.",
      "Introduced Azure ServiceBus Pub/Sub mechanism enabling multiple microservices to communicate asynchronously with the PME (Platform Message Engine).",
    ],
  },
];

function Home2() {
  const [open, setOpen] = useState(0);

  return (
    <section className="home-about-section">
      <div className="section-container">
        <div className="section-label">EXPERIENCE</div>
        <h2 className="section-title">
          Where I've <span className="gradient-text">worked</span>
        </h2>
        <p className="section-subtitle">
          {yearsExp}+ years building production systems across AI, mobile, and backend engineering.
        </p>

        <div className="exp-list">
          {experiences.map((exp, idx) => (
            <div
              key={exp.company}
              className={`exp-item${open === idx ? " exp-item--open" : ""}`}
            >
              {/* Header row */}
              <button
                className="exp-header"
                onClick={() => setOpen(open === idx ? -1 : idx)}
                aria-expanded={open === idx}
              >
                <div className="exp-header-left">
                  <span
                    className="exp-dot"
                    style={{ background: exp.color }}
                  />
                  <div>
                    <span className="exp-company">{exp.company}</span>
                    {exp.type === "current" && (
                      <span className="exp-current-badge">Current</span>
                    )}
                    <span className="exp-role">{exp.role}</span>
                  </div>
                </div>
                <div className="exp-header-right">
                  <span className="exp-period">{exp.period}</span>
                  <svg
                    className={`exp-chevron${open === idx ? " exp-chevron--up" : ""}`}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </button>

              {/* Expandable points */}
              {open === idx && (
                <ul className="exp-points">
                  {exp.points.map((pt, i) => (
                    <li key={i} className="exp-point">
                      <span className="exp-point-dot" />
                      {pt}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home2;
