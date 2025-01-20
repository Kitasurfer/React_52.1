import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const ProfileCard = ({ profile }) => {
  const { name, profession, avatar, description, skills, email, social } = profile;

  const getSocialIcon = (platform) => {
    const icons = {
      github: '👨‍💻',
      linkedin: '💼',
      twitter: '🐦',
      dribbble: '🎨',
      behance: '🎯',
      instagram: '📸',
      stackoverflow: '💡',
      medium: '✍️'
    };
    return icons[platform] || '🌐';
  };

  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="avatar-container">
          <img src={avatar} alt={name} className="profile-avatar" />
          <div className="avatar-overlay">
            <span className="status-dot"></span>
          </div>
        </div>
        <div className="profile-info">
          <h2 className="profile-name">{name}</h2>
          <p className="profile-profession">{profession}</p>
        </div>
      </div>
      
      <div className="profile-description">
        <p>{description}</p>
      </div>

      <div className="profile-skills">
        <h3>Expertise</h3>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {social && (
        <div className="social-links">
          {Object.entries(social).map(([platform, link]) => (
            <a
              key={platform}
              href={`https://${link}`}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="social-icon">{getSocialIcon(platform)}</span>
              <span className="social-platform">{platform}</span>
            </a>
          ))}
        </div>
      )}

      <div className="profile-contact">
        <a href={`mailto:${email}`} className="contact-button">
          Contact Me
        </a>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  profile: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    email: PropTypes.string.isRequired,
    social: PropTypes.object
  }).isRequired,
};

export default ProfileCard;
