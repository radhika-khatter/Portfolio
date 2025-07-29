import React from "react";
import "./projects.css";
import { Github, ExternalLink, Code, Database, Globe, GamepadIcon, MessageSquare, BarChart3 } from "lucide-react";

const Projects = () => {
  const projects = {
    major: [
      {
        title: "MorphoMinds",
        description: "An assistive learning web app for dyslexic users and early learners focused on improving reading and writing skills with real-time feedback.",
        features: [
          "Real-time handwriting feedback",
          "Speech-to-text reading support",
          "Dark mode & OpenDyslexic font",
          "Progress tracking by subject"
        ],
        tech: ["React", "Node.js", "Express", "MongoDB", "Python"],
        icon: MessageSquare,
        achievement: "1st Runner Up - DevOlympus Hackathon",
        github: "https://github.com/radhika-khatter/morphominds"
      },
      {
        title: "BookEase",
        description: "A secure ticket booking system with JWT authentication.",
        features: [
          "JWT-secured authentication",
          "Smooth booking experience",
          "MongoDB for storage"
        ],
        tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
        icon: Database,
        github: "https://github.com/radhika-khatter/bookease"
      },
      {
        title: "YouTube Video Analysis",
        description: "Extract insights from YouTube data including views, sentiment, and trends.",
        features: [
          "Sentiment analysis via TextBlob",
          "Word cloud generation",
          "View pattern analysis"
        ],
        tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "TextBlob"],
        icon: BarChart3,
        github: "https://github.com/radhika-khatter/youtube-video-analysis"
      }
    ],
    minor: [
      {
        title: "NewsApp",
        description: "A React news aggregator that fetches and displays the latest articles.",
        features: ["API integration", "Responsive layout", "Category-based news"],
        tech: ["React", "API", "CSS"],
        icon: Globe,
        github: "https://github.com/radhika-khatter/newsapp"
      },
      {
        title: "QuickSign",
        description: "Draw, preview, and download digital signatures using HTML5 Canvas.",
        features: ["Canvas drawing", "Save & preview", "Smooth UX"],
        tech: ["HTML", "CSS", "JavaScript", "Canvas API"],
        icon: Code,
        github: "https://github.com/radhika-khatter/quicksign"
      },
      {
        title: "Typing Speed Game",
        description: "A Python game using Tkinter to improve typing speed and accuracy.",
        features: ["Speed/accuracy tracking", "Difficulty levels", "Simple UI"],
        tech: ["Python", "Tkinter"],
        icon: GamepadIcon,
        github: "https://github.com/radhika-khatter/typing-speed-game"
      },
      {
  title: "Mesh Maker Addon",
  description: "A Blender add-on to create and manage cubes directly from the 3D Viewport sidebar.",
  features: [
    "Custom panel in Sidebar",
    "Add/delete cubes with ease",
    "Organized into collections"
  ],
  tech: ["Python", "Blender API"],
  icon: Code,
  github: "https://github.com/radhika-khatter/mesh_maker_addon"
},
 {
    title: "PDFfixer Utility",
    description: "A PDF tool that allows users to merge multiple PDF files through a user-friendly interface with backend processing.",
    features: [
      "Select multiple PDFs and merge into one",
      "Clean UI with file preview option",
      "Fast and accurate merging process"
    ],
    tech: ["React", "Node.js", "PDF-lib"],
    icon: Code,
    github: "https://github.com/radhika-khatter/PDFixer"
  },
  {
    title: "Login & Registration System",
    description: "A basic authentication system allowing users to register and securely login to a web app.",
    features: [
      "User sign-up and login functionality",
      "Password validation and form checks",
      "Responsive design for all screens"
    ],
    tech: ["React", "Node.js", "MongoDB", "Express"],
    icon: Code,
    github: "https://github.com/radhika-khatter/loginregistration"
  },
  {
    title: "TextUtils Web App",
    description: "A simple web application for analyzing and modifying text, such as converting case, removing spaces, and word counting.",
    features: [
      "Convert text to uppercase/lowercase",
      "Remove extra spaces",
      "Count words and characters"
    ],
    tech: ["React", "Bootstrap", "JavaScript"],
    icon: Code,
    github: "https://github.com/radhika-khatter/TextUtils"
  }

    ]
  };

  const ProjectCard = ({ project }) => {
    const Icon = project.icon;
    return (
      <>
       <section id="projects" className="projects-section">
      <div className="project-card">
        <div className="project-icon">
          <Icon size={20} />
        </div>
        <h3 className="project-title">{project.title}</h3>
        {project.achievement && <p className="badge">🏆 {project.achievement}</p>}
        <p className="project-description">{project.description}</p>
        <ul className="project-features">
          {project.features.map((f, i) => (
            <li key={i}>• {f}</li>
          ))}
        </ul>
        <div className="project-tech">
          {project.tech.map((tech, i) => (
            <span key={i} className="tech-badge">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github size={16} /> Code
          </a>
        </div>
      </div>
      </section>
      </>
    );
  };

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Major Projects</h2>
        <div className="projects-grid">
          {projects.major.map((proj, idx) => <ProjectCard key={idx} project={proj} />)}
        </div>

        <h2 className="section-title">Minor Projects</h2>
        <div className="projects-grid">
          {projects.minor.map((proj, idx) => <ProjectCard key={idx} project={proj} />)}
        </div>
      </div>
    </section>
   
  );
};

export default Projects;
