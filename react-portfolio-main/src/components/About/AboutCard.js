import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify",paddingLeft:"20px"}}>
            Hello!,I'm<span className="black">Khatravat Goutham Rathod </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            <p style={{  textIndent: "2em"}}>
            &nbsp;     My journey in technology is fueled by a passion for web development, and AI/ML. During my tenure as a research intern at Tata Consultancy Services, I honed my skills in Python, C/C++, MySQL, React JS, and Node JS by tackling complex projects like developing an efficient Streamlet Protocol and AI-driven games.
            </p> 
           <p style={{  textIndent: "2em"}}>
            &nbsp; Beyond coding, I thrive in collaborative environments, having led teams on significant projects like a comprehensive Leave Management System. My leadership roles as Year Representative and Swimming Pool Captain reflect my dedication and ability to inspire peers.
            </p>
            
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
