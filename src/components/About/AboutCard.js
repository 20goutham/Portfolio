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
            &nbsp;     Associate Software Engineer with experience in AI-powered application development, backend engineering, and data engineering. Currently working at Forsys Software, where I build NLP-based AI solutions, scalable backend APIs, and optimized data pipelines, and integrate enterprise platforms to improve system efficiency. Skilled in Python, Java (Spring Boot), Django, React JS, Node JS, and RESTful APIs, with hands-on experience in performance optimization and data workflows. Strong background in distributed systems through research work at Tata Consultancy Services.
            </p> 
           <p style={{  textIndent: "2em"}}>
            &nbsp; Beyond coding, I bring strong client-facing and stakeholder management skills, gained through close collaboration with functional teams at Forsys Software while delivering Zoho CRM integrations aligned with business requirements.
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
