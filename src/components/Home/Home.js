import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Goutham.JPG";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h6 className="heading-name">
                Meet 
                <strong className="main-name"> Goutham Rathod</strong>
              </h6>

              <p className="heading-description blockquote">
              Hi, I’m Khatravat Goutham Rathod — an Associate Software Engineer passionate about building scalable, user-focused products using full-stack development and AI/ML. I enjoy owning features end-to-end, turning ideas into production-ready solutions, and improving system performance through clean design and data-driven engineering. A Computer Science graduate from IIEST Shibpur with industry experience in backend and AI-powered systems,I’m looking for full-time opportunities where I can apply my skills, learn continuously, and deliver meaningful technical impact.
              </p>

              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>

            <Col md={6}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Get in Touch</h1>
              <p>
                <strong>Let’s connect and explore how we can innovate together!</strong>
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
