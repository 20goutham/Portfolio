import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "../components/SocialMedia";
import '../App.css'  ;

function Footer() {
 
  return (
    <Container fluid className="footer">
      <Row className="justify-content-center">
        <Col md="auto" className="footer-body text-center">
          <SocialMedia />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
