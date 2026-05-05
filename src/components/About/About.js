import React from "react";
import Techstack from "./Techstack";

const yearsExp = new Date().getFullYear() - 2022;

function About() {
  return (
    <div className="about-page">
      {/* Header */}
      <div className="about-hero">
        <div className="section-label">ABOUT ME</div>
        <h1 className="section-title">
          The person behind the{" "}
          <span className="gradient-text">code</span>
        </h1>
        <p className="section-subtitle">
          {yearsExp}+ years building systems across AI, mobile, and backend.
          IIT Jodhpur grad, currently at Avataar.ai.
        </p>
      </div>

      {/* Bio grid */}
      <div className="about-bio-grid">
        <div className="about-bio-card">
          <h3>Background</h3>
          <div className="about-bio-text">
            <p>
              Hi, I'm <strong>Aryavardhan Singh</strong> from Bhilwara, India.
              I completed my B.Tech in Electrical Engineering at{" "}
              <strong>IIT Jodhpur</strong>.
            </p>
            <p>
              I started my career at <strong>Reliance Jio</strong>, building
              caching and messaging infrastructure for JioHealth. I then moved
              to <strong>Enrich Beauty</strong> where I architected core
              revenue, vendor, and operations systems. I'm now an{" "}
              <strong>SDE-2 at Avataar.ai</strong>, helping build India's AI public infrastructure and spatial commerce experiences that push what's possible at the intersection of AI and the real world.
            </p>
          </div>
        </div>

        <div className="about-bio-card">
          <h3>Quick Info</h3>
          <ul className="about-info-list">
            <li className="about-info-item">
              <span className="about-info-icon">🎓</span>
              <span>
                <strong style={{ display: "block", color: "var(--text)", fontWeight: 500 }}>
                  IIT Jodhpur
                </strong>
                B.Tech — Electrical Engineering
              </span>
            </li>
            <li className="about-info-item">
              <span className="about-info-icon">🏢</span>
              <span>
                <strong style={{ display: "block", color: "var(--text)", fontWeight: 500 }}>
                  Avataar.ai — SDE-2
                </strong>
                AI infrastructure, distributed systems, and spatial commerce
              </span>
            </li>
            <li className="about-info-item">
              <span className="about-info-icon">📍</span>
              <span>Bangalore, India</span>
            </li>
            <li className="about-info-item">
              <span className="about-info-icon">📴</span>
              <div>
                <span style={{ display: "block", marginBottom: "8px" }}>
                  Outside of work:
                </span>
                <div className="about-hobbies">
                  {["Football", "Cricket", "Photography", "Travelling"].map(
                    (h) => (
                      <span key={h} className="about-hobby-tag">
                        {h}
                      </span>
                    )
                  )}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Skills */}
      <Techstack />
    </div>
  );
}

export default About;
