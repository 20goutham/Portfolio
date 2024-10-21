import React from "react";
import { Card } from "react-bootstrap";

function InternshipCard({ description, imgPath }) {
  return (
    <Card className="project-card-view" style={{ maxWidth: "1000px", margin: "20px auto" }}>
      <Card.Body className="d-flex" style={{ padding: "20px" }}>
        <div style={{ flex: 1, textAlign: "left", paddingRight: "200px" }}>
          <p>{description}</p>
        </div>
        <div style={{ flex: 1 }}>
          <img
            src={imgPath}
            alt="Internship"
            style={{ width: "800%", height: "auto" }}
          />
        </div>
      </Card.Body>
    </Card>
  );
}

export default InternshipCard;
