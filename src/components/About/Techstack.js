import React from "react";
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiCplusplus,
  SiRedis,
  SiFirebase,
  SiPostgresql,
  SiTypescript,
  SiJavascript,
  SiFlutter,
  SiSpringboot,
  SiGooglecloud,
  SiPython,
  SiFastapi,
  SiKubernetes,
  SiAmazonaws,
  SiDocker,
  SiElasticsearch,
} from "react-icons/si";

const categories = [
  {
    label: "Languages",
    skills: [
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiPython />, name: "Python" },
      { icon: <SiFlutter />, name: "Dart/Flutter" },
      { icon: <SiCplusplus />, name: "C++" },
    ],
  },
  {
    label: "Backend & Frameworks",
    skills: [
      { icon: <DiNodejs />, name: "Node.js" },
      { icon: <SiFastapi />, name: "FastAPI" },
      { icon: <DiReact />, name: "React" },
    ],
  },
  {
    label: "Data & Infrastructure",
    skills: [
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <DiMongodb />, name: "MongoDB" },
      { icon: <SiRedis />, name: "Redis" },
      { icon: <SiElasticsearch />, name: "Elasticsearch" },
      { icon: <SiFirebase />, name: "Firebase" },
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      { icon: <SiAmazonaws />, name: "AWS" },
      { icon: <SiGooglecloud />, name: "GCP" },
      { icon: <SiKubernetes />, name: "Kubernetes" },
      { icon: <SiDocker />, name: "Docker" },
      { icon: <DiGit />, name: "Git" },
    ],
  },
];

function Techstack() {
  return (
    <div className="skills-section">
      {categories.map((cat) => (
        <div key={cat.label} style={{ marginBottom: "40px" }}>
          <div className="section-label" style={{ marginBottom: "16px" }}>
            {cat.label}
          </div>
          <div className="skills-grid">
            {cat.skills.map((s) => (
              <div className="skill-item" key={s.name}>
                <span className="skill-icon">{s.icon}</span>
                <span className="skill-name">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Techstack;
