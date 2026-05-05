import React from "react";
import Home2 from "./Home2";
import CalendlySection from "../CalendlySection";
import AvatarFace from "../AvatarFace";
import { Link } from "react-router-dom";

const yearsExp = new Date().getFullYear() - 2022;

function Home() {
  return (
    <section>
      {/* Hero */}
      <div className="hero-section">
        <div className="hero-inner">

          <h1 className="hero-title">
            Hi, I'm{" "}
            <span className="gradient-text">Aryavardhan</span>
          </h1>

          <AvatarFace />

          <div className="hero-typewriter">
            <span className="gradient-text" style={{ fontWeight: 500 }}>
              Backend Engineer &nbsp;·&nbsp; Distributed Infra &nbsp;·&nbsp; AI Systems &nbsp;·&nbsp; Mobile &amp; Full‑Stack
            </span>
          </div>

          <p className="hero-subtitle">
            Building AI‑powered platforms, distributed backends, and
            spatial commerce experiences. Currently engineering at{" "}
            <strong>Avataar.ai</strong> — helping build India's AI public infrastructure.
          </p>

          <div className="hero-actions">
            <Link to="/project" className="btn-primary-hero">
              View Projects
            </Link>
            <a
              href="#contact"
              className="btn-ghost-hero"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book a Call
            </a>
          </div>

          <div className="hero-divider" />

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">{yearsExp}+</div>
              <div className="hero-stat-label">Years Experience</div>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <div className="hero-stat-value">12+</div>
              <div className="hero-stat-label">Projects Shipped</div>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <div className="hero-stat-value">IIT</div>
              <div className="hero-stat-label">Jodhpur Graduate</div>
            </div>
          </div>
        </div>
      </div>

      {/* About intro */}
      <Home2 />

      {/* Calendly booking */}
      <CalendlySection />
    </section>
  );
}

export default Home;
