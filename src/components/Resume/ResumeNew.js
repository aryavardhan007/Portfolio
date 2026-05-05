import React, { useState, useEffect, useRef } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../Assets/../Assets/Aryavardhan_singh_resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const containerRef = useRef(null);
  const [pageWidth, setPageWidth] = useState(800);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setPageWidth(containerRef.current.offsetWidth);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="resume-page">
      <div className="resume-header">
        <div className="section-label">RESUME</div>
        <h1 className="section-title">
          My <span className="gradient-text">Experience</span>
        </h1>
        <p className="section-subtitle">
          SDE-2 at Avataar.ai · {new Date().getFullYear() - 2022}+ years building
          scalable systems across AI, mobile, and backend.
        </p>

        <div className="resume-actions">
          <a
            href={pdf}
            download="Aryavardhan_Singh_Resume.pdf"
            className="btn-primary-hero"
          >
            <AiOutlineDownload />
            Download PDF
          </a>
          <a
            href={pdf}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost-hero"
          >
            Open in new tab
          </a>
        </div>
      </div>

      <div className="resume-viewer" ref={containerRef}>
        <Document
          file={pdf}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          className="d-flex flex-column align-items-center"
        >
          {Array.from({ length: numPages || 0 }, (_, i) => (
            <Page
              key={`page_${i + 1}`}
              pageNumber={i + 1}
              width={pageWidth}
              style={{ display: "block" }}
            />
          ))}
        </Document>
      </div>
    </div>
  );
}

export default ResumeNew;
