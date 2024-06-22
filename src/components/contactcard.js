import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactCard = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      info: 'pareekrishabh0@gmail.com',
      link: 'mailto:pareekrishabh0@gmail.com',
    },
    {
      icon: <FaPhoneAlt />,
      info: '+91-8233172503',
    },
    {
      icon: <FaLinkedin />,
      info: 'linkedin.com/in/rishabhpareek',
      link: "https://in.linkedin.com/in/rishabh-pareek-46b5181a9",
    },
    {
      icon: <FaGithub />,
      info: 'github.com/rishabhpareek',
      link: 'https://github.com/rishabhpareek2503',
    },
  ];

  return (
    <div className="contact-card">
      <h2>Contact Me</h2>
      <div className="contact-list">
        {contactInfo.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span className="contact-icon">{item.icon}</span>
            {item.link ? (
              <span>{item.info}</span>
            ) : (
              <span>{item.info}</span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;