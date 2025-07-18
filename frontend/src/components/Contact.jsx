import React from "react";
import "./contact.css";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "radhikakhatter21@gmail.com",
      href: "mailto:radhikakhatter21@gmail.com",
      color: "primary"
    },
    
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/radhika-khatter",
      color: "github"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/radhika-khatter-94a60b28a/",
      color: "linkedin"
    }
  ];

  const getIconColor = (color) => {
    return `icon-${color}`;
  };

  const getBgColor = (color) => {
    return `bg-${color}`;
  };

  return (
    <section className="contact-section">
      <div className="blur-circle primary-blur" />
      <div className="blur-circle cyan-blur" />

      <div className="container">
        <div className="contact-header">
          <h2 className="title">Get In Touch</h2>
          <p className="subtitle">
            I'm always interested in discussing new opportunities, collaborations, and research projects.
          </p>
        </div>

        <div className="contact-grid">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <div key={index} className="contact-card">
                <div className={`contact-icon ${getBgColor(contact.color)}`}>
                  <Icon className={`icon ${getIconColor(contact.color)}`} />
                </div>
                <h3>{contact.label}</h3>
                <p>{contact.value}</p>
              </div>
            );
          })}
        </div>

        <div className="cta-card">
          <h3>Let's Work Together</h3>
          <p>
            Whether you're interested in collaborating on research, discussing job opportunities,
            or just want to connect, I'd love to hear from you.
          </p>
          

          <div className="social-links">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className={`social-btn ${social.color}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        <div className="extra-info">
          <p>Currently pursuing BTech in Computer Science Engineering • Expected Graduation: 2027</p>
          <p>Open to internships, research collaborations, and freelance projects</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
