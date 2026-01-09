import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { PROJECTS } from "../../Constants";

import streamlet from "../../Assets/Streamlet.png";
import urlShortenerImage from "../../Assets/UrlShortener.png";
import forsysImage from "../../Assets/Forsys.png";

import "./Projects.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>

        {/* ================= Work Experience ================= */}
        <h1
          className="work-heading"
          style={{ textAlign: "left", fontWeight: "bold", fontSize: "40px" }}
        >
          Work Experience
        </h1>
        <br />

        <h1 style={{ textAlign: "left" }}>
          <span style={{ fontWeight: "bold" }}>
            Forsys Software India Pvt Ltd
          </span>
        </h1>
        <p style={{ textAlign: "left", fontStyle: "italic" }}>
          Associate Software Engineer | Nov 2024 – Present
        </p>
        <br />

        <Row
          className="internship-box"
          style={{ justifyContent: "left", paddingBottom: "20px" }}
        >
          <Col md={4}>
            <img
              src={forsysImage}
              alt="Forsys Software"
              className="internship-image"
            />
          </Col>
          <Col md={8}>
            <div className="internship-description" style={{ textAlign: "left" }}>
              <ul>
                <li>
                  Built an <strong>AI-powered NLP chatbot</strong> to automate leave
                  management and employee data retrieval.
                </li>
                <li>
                  Developed and optimized <strong>backend APIs and data pipelines</strong>,
                  improving performance by 20–30%.
                </li>
                <li>
                  Collaborated with <strong>functional and business teams</strong> to
                  gather requirements and deliver client-aligned solutions.
                </li>
                <li>
                  Integrated <strong>Zoho CRM</strong> with internal systems to automate
                  workflows and reduce operational overhead.
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <br />

        {/* ================= Research & Internships ================= */}
        <h1
          className="internships-heading"
          style={{ textAlign: "left", fontWeight: "bold", fontSize: "40px" }}
        >
          Research & Internships
        </h1>
        <br />

        {/* TCS Internship */}
        <h1 style={{ textAlign: "left" }}>
          <span style={{ fontWeight: "bold" }}>
            Tata Consultancy Services
          </span>
        </h1>
        <br />

        <Row
          className="internship-box"
          style={{ justifyContent: "left", paddingBottom: "20px" }}
        >
          <Col md={4}>
            <img
              src={streamlet}
              alt="Streamlet Protocol"
              className="internship-image"
            />
          </Col>
          <Col md={8}>
            <div className="internship-description" style={{ textAlign: "left" }}>
              <ul>
                <li>
                  Developed the <strong>Streamlet Protocol</strong> for faster and
                  reliable distributed communication.
                </li>
                <li>
                  Modeled and optimized systems using <strong>Python (SimPy)</strong>
                  to improve scalability and efficiency.
                </li>
                <li>
                  Worked on <strong>client-server and peer-to-peer architectures</strong>.
                </li>
                <li>
                  Conducted research on <strong>blockchain-based security solutions</strong>.
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <br />

        {/* O(1) Coding Club */}
        <h2 style={{ textAlign: "left" }}>
          <span style={{ fontWeight: "bold" }}>O(1) Coding Club</span>
        </h2>
        <br />

        <Row
          className="internship-box"
          style={{ justifyContent: "left", paddingBottom: "20px" }}
        >
          <Col md={4}>
            <img
              src={urlShortenerImage}
              alt="URL Shortener"
              className="internship-image"
            />
          </Col>
          <Col md={8}>
            <div className="internship-description" style={{ textAlign: "left" }}>
              <ul>
                <h3 style={{ textAlign: "center" }}>
                  <a
                    href="https://github.com/20goutham/URL-Shortner"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontWeight: "lighter",
                      textDecoration: "underline",
                      color: "inherit",
                    }}
                  >
                    URL Shortener
                  </a>
                  <span
                    style={{
                      marginLeft: "8px",
                      fontSize: "20px",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      window.open(
                        "https://github.com/20goutham/URL-Shortner",
                        "_blank"
                      )
                    }
                  >
                    ⬈
                  </span>
                </h3>
                <li>
                  Designed and developed a <strong>Django-based URL shortening service</strong>.
                </li>
                <li>
                  Implemented <strong>analytics</strong> to track usage and engagement.
                </li>
                <li>
                  Built a <strong>responsive UI</strong> optimized for mobile and desktop.
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <br />

        {/* ================= Selected Projects ================= */}
        <h1 style={{ textAlign: "left" }}>Selected Projects</h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {PROJECTS.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.image}
                technologyUsed={project.technologyUsed}
                isBlog={false}
                title={project.name}
                description={project.description}
                link={project.url}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
