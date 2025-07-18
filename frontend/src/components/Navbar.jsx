import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // close mobile menu if open
    }
  };

  return (
    <div className="nav-container">
      <div className="name-logo">Radhika Khatter</div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <div className="nav-link" onClick={() => scrollToSection("about")}>About</div>
        <div className="nav-link" onClick={() => scrollToSection("education")}>Education</div>
        <div className="nav-link" onClick={() => scrollToSection("experience")}>Experience</div>
        <div className="nav-link" onClick={() => scrollToSection("projects")}>Projects</div>
        <div className="nav-link" onClick={() => scrollToSection("skills")}>Skills</div>
        <div className="nav-link" onClick={() => scrollToSection("awards")}>Awards</div>
        <div className="nav-link" onClick={() => scrollToSection("contact")}>Contact</div>

        <div className="resume">
          <a href="./resume.pdf" target="_blank" rel="noopener noreferrer">
            <button>
              <FontAwesomeIcon icon={faArrowDown} />
              Resume
            </button>
          </a>
        </div>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
