import React from "react";
import "./experience.css";
import { Calendar, MapPin, Trophy, BookOpen, Code, Users } from "lucide-react";

const experiences = [
  {
    title: "Research Paper Publication",
    subtitle: "AI-Based Smart Handover Techniques in 6G Networks",
    type: "Research",
    date: "July 2024",
    location: "International Journal (IJACEN)",
    description: "Published research on leveraging AI to optimize handover processes in 6G networks, improving Quality of Service (QoS).",
    highlights: [
      "International Conference presentation in Bali, Indonesia",
      "Focus on AI optimization in telecommunications",
      "Published in peer-reviewed journal"
    ],
    icon: BookOpen,
  },
  {
    title: "Summer School Student",
    subtitle: "International Centre for Theoretical Science",
    type: "Academic Program",
    date: "June 2024",
    location: "ICTS, Bangalore",
    description: "Strengthened skills in R programming and applied mathematical concepts to real-world data analysis problems.",
    highlights: [
      "Advanced R programming techniques",
      "Linear algebra, calculus, probability, and statistics",
      "Collaborative workshops and critical thinking"
    ],
    icon: Code,
  },
  {
    title: "DevOlympus Hackathon - 1st Runner Up",
    subtitle: "MorphoMinds: Assistive EdTech Platform",
    type: "Competition",
    date: "March 2025",
    location: "Dronacharya College of Engineering",
    description: "Built MorphoMinds, a web app to support dyslexic users and early learners with real-time feedback and personalized learning.",
    highlights: [
      "Led frontend-backend integration",
      "React, Node.js, Express, MongoDB stack",
      "1st Runner Up position"
    ],
    icon: Trophy,
  }
];

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="experience-header">
        <h2>Experience & Research</h2>
        <p>My journey in research, academic programs, and programming that shaped my expertise.</p>
      </div>

      <div className="experience-grid">
        {experiences.map((exp, index) => {
          const Icon = exp.icon;
          return (
            <div className="experience-card" key={index}>
              <div className="card-header">
                <div className="icon-wrapper"><Icon size={24} /></div>
                <div>
                  <span className="badge">{exp.type}</span>
                  <h3>{exp.title}</h3>
                  <p className="subtitle">{exp.subtitle}</p>
                </div>
              </div>

              <div className="card-details">
                <div className="meta">
                  <Calendar size={16} />
                  <span>{exp.date}</span>
                </div>
                <div className="meta">
                  <MapPin size={16} />
                  <span>{exp.location}</span>
                </div>
              </div>

              <p className="description">{exp.description}</p>

              <ul className="highlights">
                {exp.highlights.map((point, idx) => (
                  <li key={idx}>
                    <span className="dot" /> {point}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
