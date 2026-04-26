import React from "react";
import "./awards.css";
import { Medal, Award, Star, Trophy } from "lucide-react";

const Awards = () => {
  const achievements = [
    {
      title: "GATE (CS) 2026 - Qualified",
      description:
        "Qualified GATE 2026 in Computer Science, demonstrating strong problem-solving and core CS fundamentals.",
      details:
        "Focused on algorithms, OS, DBMS, and computer networks with competitive exam-level preparation.",
      icon: Star,
      type: "Academic",
      year: "2026",
    },
    {
      title: "Reliance Undergraduate Scholarship",
      description:
        "Selected among top 5,000 scholars nationwide for exceptional academic performance and potential.",
      details:
        "Recognized for academic excellence, consistency, and leadership potential.",
      icon: Award,
      type: "Academic",
      year: "2025",
    },
    {
      title: "NEF Innovation Awards - Finalist (Top 50)",
      description:
        "Recognized among Top 50 teams nationwide for an innovative technology solution.",
      details:
        "Shortlisted for impactful problem-solving and real-world application of technology.",
      icon: Trophy,
      type: "Competition",
      year: "2026",
    },
    {
      title: "DevOlympus Hackathon - 1st Runner-Up",
      description:
        "Secured 2nd position for building MorphoMinds, an assistive EdTech platform.",
      details:
        "Developed using React, Node.js, Express, and MongoDB with focus on dyslexic learners.",
      icon: Medal,
      type: "Competition",
      year: "2025",
    },
    {
      title: "Research Paper Publication & Presentation",
      description:
        "Published and presented 'AI-Based Smart Handover Techniques to Provide QoS in 6G Networks'.",
      details:
        "Presented at IJACEN and ICSET 2024, Bali, Indonesia.",
      icon: Award,
      type: "Research",
      year: "2024",
    },
    {
      title: "Taekwondo Achievements",
      description:
        "National Bronze Medalist and multiple state-level medals in Taekwondo.",
      details:
        "National Bronze (2025), Khelo India State Silver (2025), Haryana State Bronze (2025).",
      icon: Medal,
      type: "Sports",
      year: "2025",
    },
  ];

  const getTypeStyle = (type) => {
    switch (type) {
      case "Competition":
        return "badge green";
      case "Academic":
        return "badge orange";
      case "Research":
        return "badge blue";
      case "Sports":
        return "badge red";
      default:
        return "badge default";
    }
  };

  return (
    <section className="awards-section">
      <div className="awards-container">
        <h2 className="awards-title">Honors & Achievements</h2>
        <p className="awards-subtitle">
          Recognition for academic excellence, innovation, research, and sports.
        </p>

        <div className="awards-grid">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="award-card">
                <div className="award-content">
                  <div className="icon-box">
                    <Icon size={22} />
                  </div>

                  <div className="award-info">
                    <div className="award-header">
                      <span className={getTypeStyle(item.type)}>
                        {item.type}
                      </span>
                      <span className="award-year">{item.year}</span>
                    </div>

                    <h3 className="award-title">{item.title}</h3>
                    <p className="award-description">{item.description}</p>
                    <p className="award-details">{item.details}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Awards;