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
              Welcome! I’m Khatravat Goutham Rathod, a tech enthusiast and recent graduate with a B.Tech in Computer Science from IIEST
               Shibpur. My journey is rooted in a passion for full stack development, and AI/ML, where I thrive on transforming ideas into practical solutions. 
              Currently on the lookout for exciting full-time opportunities to leverage my skills and drive innovation in technology.
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
