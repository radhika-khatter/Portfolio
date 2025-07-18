import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import "./home.css";
function Home() {
  return (
    <div className="home-container">
      <p>Hello I'm</p>
      <p>Radhika Khatter</p>
      <p>Computer Science Engineering Student</p>
      <p>
        Passionate about leveraging technology to solve real-world problems,
        with experience in full-stack development and assistive technologies.
      </p>
      <div>
        <button>
          View my work <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <a href="./resume.pdf" target="_blank">
        <button>
          <FontAwesomeIcon icon={faArrowDown} /> Download my resume
        </button>
        </a>
      </div>
      <div className="social-icons">
        <a href="https://github.com/radhika-khatter" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/radhika-khatter-94a60b28a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://x.com/Radhika_Khatter" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faXTwitter} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default Home;