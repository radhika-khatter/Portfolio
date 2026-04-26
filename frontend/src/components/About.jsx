import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faBookOpen } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div className="about-container">
      <h1>About me</h1>
      <p>
        A dedicated computer science student with a passion for research and innovation
        in artificial intelligence and web technologies.
      </p>

      <div className="about-main">
        <div>
          I'm currently pursuing my BTech in Computer Science and Engineering, with an
          expected graduation in 2027. My academic journey has been marked by exceptional
          performance, achieving 96% in 12th grade and 91% in 10th grade.
          <br></br> I've published my
          work in international journals and presented at conferences in Bali, Indonesia.
          Beyond research, I'm passionate about creating accessible technology solutions
          and have developed several impactful projects.
        </div>

        <div>
          <div className="about-highlight">
            <icon><FontAwesomeIcon icon={faGraduationCap} /></icon>
            <div>
              <p>Academic Excellence</p>
              <p>96% in 12th • BTech CSE 2027</p>
            </div>
          </div>
          <div className="about-highlight">
            <icon><FontAwesomeIcon icon={faBookOpen} /></icon>
            <div>
              <p>Published Researcher</p>
              <p>AI in 6G Networks • International Conference</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
