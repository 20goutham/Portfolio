import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { PROJECTS } from "../../Constants";
import streamlet from "../../Assets/Streamlet.png";
import urlShortenerImage from "../../Assets/UrlShortener.png"; // Add your URL shortener image path
import './Projects.css'; // Ensure you have a CSS file for custom styles

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        
        {/* Internships Heading */}
        <h1 className="internships-heading" style={{ textAlign: "left", fontWeight: "bold", fontSize: "40px" }}>
          Internships
        </h1>
        <br />
        
        {/* First Internship */}
        <h1 style={{ textAlign: "left" }}>
          <span style={{ fontWeight: "bold" }}>Tata Consultancy Services</span>
        </h1>
        <br />
        <Row className="internship-box" style={{ justifyContent: "left", paddingBottom: "20px" }}>
          <Col md={4}>
            <img src={streamlet} alt="Streamlet Protocol" className="internship-image" />
          </Col>
          <Col md={8}>
            <div className="internship-description" style={{ textAlign: "left" }}>
              <ul>
                <li>Developed and implemented Streamlet Protocol for efficient communication and reduced latency.</li>
                <li>Explored and utilized SimPy Library in Python for modeling complex systems and optimizing processes.</li>
                <li>Demonstrated expertise in Networking with Client-Server and Peer-to-Peer architectures.</li>
                <li>Conducted in-depth research on Blockchain for enhancing security and transparency.</li>
              </ul>
            </div>
          </Col>
        </Row>
        
        <br />
        
        {/* Second Internship: O(1) Coding Club */}
        <h2 style={{ textAlign: "left" }}>
          <span style={{ fontWeight: "bold" }}>O(1) Coding Club</span>
        </h2>
        <br />
        <Row className="internship-box" style={{ justifyContent: "left", paddingBottom: "20px" }}>
          <Col md={4}>
            <img src={urlShortenerImage} alt="URL Shortener" className="internship-image" />
          </Col>
          <Col md={8}>
            <div className="internship-description" style={{ textAlign: "left" }}>
              <ul>
                <h3 style={{ textAlign: "center" }}>
                  <a 
                    href="https://github.com/20goutham/URL-Shortner" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ fontWeight: "lighter", textDecoration: "underline", color: "inherit" }}
                  >
                    URL Shortener 
                  </a>
                  <span style={{ marginLeft: "8px", fontSize: "20px", color: "black", cursor: "pointer", textDecoration: "none" }} onClick={() => window.open("https://github.com/20goutham/URL-Shortner", "_blank")}>
                    ⬈
                  </span>
                  
                </h3>
                <li>Designed and developed a URL shortening service using Django, focusing on a clean and user-friendly interface.</li>
                <li>Implemented analytics features to track URL usage and engagement metrics across multiple devices.</li>
                <li>Ensured responsive design for optimal performance on both mobile and desktop platforms.</li>
              </ul>
            </div>
          </Col>
        </Row>
        
        <br />
        
        <h1 style={{ textAlign: "left" }}>Projects</h1>
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
