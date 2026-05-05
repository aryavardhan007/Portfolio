import React from "react";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-main">
      <div className="footer-inner">
        <p className="footer-copy">
          © {year} <span>Aryavardhan Singh Shaktawat</span>. Built with React.
        </p>

        <div className="footer-social">
          <a
            href="https://github.com/aryavardhan007"
            target="_blank"
            rel="noreferrer"
            className="footer-social-link"
            title="GitHub"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aryavardhan007/"
            target="_blank"
            rel="noreferrer"
            className="footer-social-link"
            title="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="mailto:aryavardhanshaktawat99@gmail.com"
            className="footer-social-link"
            title="Email"
          >
            <AiOutlineMail />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
