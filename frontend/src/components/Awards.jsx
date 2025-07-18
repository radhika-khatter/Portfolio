import React from "react";
import "./awards.css";
import { Medal, Award, Star, Users } from "lucide-react";

const Awards = () => {
  const achievements = [
    {
      title: "DevOlympus Hackathon - 1st Runner Up",
      description: "Achieved 1st Runner Up position for MorphoMinds project at Dronacharya College of Engineering.",
      details: "Built an innovative assistive EdTech platform for dyslexic learners with real-time feedback systems.",
      icon: Medal,
      type: "Competition",
      year: "2025",
    },
    {
      title: "International Conference Presentation",
      description: "Presented research at International Conference on Science, Engineering and Technology in Bali, Indonesia.",
      details: "Presented findings to international audience on AI optimization in 6G networks.",
      icon: Award,
      type: "Presentation",
      year: "2024",
    },
    {
      title: "Academic Excellence - 96%",
      description: "Achieved 96% in 12th Grade (CBSE).",
      details: "Demonstrated consistent excellence in studies with distinction-level performance.",
      icon: Star,
      type: "Academic",
      year: "2023",
    },
    {
      title: "School Prime Minister",
      description: "Elected as School Prime Minister, leading student council and organizing events.",
      details: "Demonstrated leadership and organizational skills representing student interests.",
      icon: Users,
      type: "Leadership",
      year: "2022-2023",
    },
  ];

  const getTypeStyle = (type) => {
    switch (type) {
      case "Competition": return "badge green";
      case "Presentation": return "badge purple";
      case "Academic": return "badge orange";
      case "Leadership": return "badge cyan";
      default: return "badge default";
    }
  };

  return (
    <section className="awards-section">
      <div className="awards-container">
        <h2 className="awards-title">Honors & Awards</h2>
        <p className="awards-subtitle">
          Recognition for academic excellence, leadership, and innovation.
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
                      <span className={getTypeStyle(item.type)}>{item.type}</span>
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
