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
                Welcome! I’m Khatravat Goutham Rathod, an Associate Software Engineer with a strong focus on AI-driven applications, data engineering, and backend development. I specialize in building scalable APIs, data pipelines, and AI-powered solutions that transform complex requirements into efficient, real-world systems. With hands-on experience across full-stack and data-centric technologies, I am passionate about leveraging AI, automation, and data to drive innovation and business impact.
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
