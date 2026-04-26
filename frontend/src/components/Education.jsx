import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaAward } from "react-icons/fa";
import "./education.css"; // Create this file for styles

const Education = () => {
  const educationData = [
    {
      institution: "Dronacharya College of Engineering",
      degree: "BTech in Computer Science and Engineering",
      duration: "2023 - 2027",
      location: "Gurugram, Haryana",
      status: "Expected Graduation: 2027",
      highlight: "Current",
    },
    {
      institution: "St. Michael's Sr. Sec. School",
      degree: "12th Grade (CBSE)",
      duration: "2023",
      location: "Gurugram, Haryana",
      status: "96% - Distinction",
      highlight: "96%",
    },
    {
      institution: "St. Michael's Sr. Sec. School",
      degree: "10th Grade (CBSE)",
      duration: "2021",
      location: "Gurugram, Haryana",
      status: "91% - First Division",
      highlight: "91%",
    },
  ];

  return (
    <section className="education-section">
      <div className="header">
        <h2>Education</h2>
        <p>
          My academic journey marked by consistent excellence and a passion for learning.
        </p>
      </div>

      <div className="timeline">
        {educationData.map((edu, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot" />
            <div className="container">
            <div className="card">
              <div className="card-header">
                <div>
                  <h3>{edu.institution}</h3>
                  <p>{edu.degree}</p>
                </div>
                <span className="badge">{edu.highlight}</span>
              </div>
              <div className="card-body">
                <p><FaCalendarAlt /> {edu.duration}</p>
                <p><FaMapMarkerAlt /> {edu.location}</p>
                <p><FaAward /> {edu.status}</p>
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
