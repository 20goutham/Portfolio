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
              Welcome! I’m Khatravat Goutham Rathod, a passionate tech enthusiast and Associate Software Engineer at Forsys Software India Pvt Ltd.
              With a B.Tech in Computer Science from IIEST Shibpur, I specialize in Full Stack Development and AI/ML, turning innovative ideas into impactful solutions.
              I thrive on solving real-world challenges through technology, constantly learning, and building applications that make a difference. 
              My journey is fueled by curiosity, creativity, and a drive to grow in the ever-evolving tech landscape.
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
