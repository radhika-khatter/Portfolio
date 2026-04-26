import React from "react";
import "./skills.css";
import {
  Code,
  Database,
  Globe,
  Wrench,
  BookOpen,
  BarChart3,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C", "Python", "C++", "R", "JavaScript"],
      description:
        "Core programming languages for system development, data analysis, and web applications.",
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express"],
      description:
        "Modern web development stack for building responsive and dynamic applications.",
    },
    {
      title: "Data Management",
      icon: Database,
      skills: ["SQL", "MongoDB", "Firestore"],
      description:
        "Database design and management for scalable data storage solutions.",
    },
    {
      title: "Frameworks & Libraries",
      icon: BookOpen,
      skills: ["JWT", "bcrypt", "Tkinter", "Pandas", "Numpy", "Canvas API"],
      description:
        "Libraries and frameworks for authentication, GUI development, and data processing.",
    },
    {
      title: "Developer Tools",
      icon: Wrench,
      skills: ["Git", "Thunder Client", "VS Code"],
      description:
        "Tools for version control, API testing, and efficient coding workflows.",
    },
    {
      title: "Data Analysis",
      icon: BarChart3,
      skills: ["Matplotlib", "Seaborn", "TextBlob", "Data Visualization"],
      description:
        "Tools for data analysis, visualization, and natural language processing.",
    },
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Technical Skills</h2>
        <p className="skills-subtitle">
          A comprehensive toolkit spanning programming languages, web
          technologies, and data analysis tools.
        </p>
        <div className="skills-grid">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div className="skill-card" key={index}>
                <div className="skill-header">
                  <div className="icon-box">
                    <Icon size={20} />
                  </div>
                  <h3>{category.title}</h3>
                </div>
                <p className="skill-description">{category.description}</p>
                <div className="skill-badges">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
