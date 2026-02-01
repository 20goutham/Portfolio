import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">Work Experience</h2>

      <div className="experience-card">
        <div className="experience-header">
          <h3>Associate Software Engineer</h3>
          <span className="experience-duration">Nov 2024 – Present</span>
        </div>

        <h4 className="experience-company">
          Forsys Software India Pvt Ltd · Hyderabad, India
        </h4>

        <ul className="experience-points">
          <li>
            Built an AI-powered NLP chatbot integrated with MWA to automate leave
            management and retrieve employee data.
          </li>
          <li>
            Developed and optimized data pipelines and backend APIs, improving
            performance by 20–30%.
          </li>
          <li>
            Integrated Zoho CRM with internal systems to enable automated data
            workflows and reduce operational overhead by 30%.
          </li>
          <li>
            Working on a Data Engineering project for client DigiCert, focused on
            data ingestion, processing, and analytics.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
