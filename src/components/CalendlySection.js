import React, { useState } from "react";
import { PopupModal } from "react-calendly";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const CALENDLY_URL = "https://calendly.com/aryavardhanshaktawat99/30min";

const contacts = [
  {
    icon: <AiOutlineMail size={22} />,
    label: "Email",
    value: "aryavardhanshaktawat99@gmail.com",
    href: "mailto:aryavardhanshaktawat99@gmail.com",
    sub: "Best for project inquiries",
  },
  {
    icon: <FaLinkedinIn size={20} />,
    label: "LinkedIn",
    value: "aryavardhan007",
    href: "https://www.linkedin.com/in/aryavardhan007/",
    sub: "Connect professionally",
  },
  {
    icon: <AiFillGithub size={22} />,
    label: "GitHub",
    value: "aryavardhan007",
    href: "https://github.com/aryavardhan007",
    sub: "See my open-source work",
  },
];

function CalendlySection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="calendly-section" id="contact">
      <div className="section-container">
        <div className="section-label">GET IN TOUCH</div>
        <h2 className="section-title">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="section-subtitle">
          Open to discussing new roles, technical collaborations, or just a good
          conversation about AI and backend engineering.
        </p>

        <div style={{ marginTop: "36px", marginBottom: "48px" }}>
          <button
            className="btn-primary-hero"
            onClick={() => setIsOpen(true)}
            style={{ fontSize: "1rem", padding: "14px 32px" }}
          >
            📅 &nbsp;Book a 30-min call
          </button>
        </div>

        {/* Calendly modal — mounts only when isOpen, so no glitch on page load */}
        {isOpen && (
          <PopupModal
            url={CALENDLY_URL}
            onModalClose={() => setIsOpen(false)}
            open={isOpen}
            rootElement={document.getElementById("root")}
          />
        )}

        <div className="contact-cards">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span className="contact-card-icon">{c.icon}</span>
              <div className="contact-card-body">
                <span className="contact-card-label">{c.label}</span>
                <span className="contact-card-value">{c.value}</span>
                <span className="contact-card-sub">{c.sub}</span>
              </div>
              <svg
                className="contact-card-arrow"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CalendlySection;
