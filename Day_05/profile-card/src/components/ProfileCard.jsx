import React from 'react';
import './ProfileCard.css';

function ProfileCard({ name, role, bio, image, socialLinks }) {
  const avatarUrl = image || 'https://via.placeholder.com/150';

  return (
    <div className="profile-card">
      <div className="profile-card-header">
        <img 
          src={avatarUrl} 
          alt={`${name}'s avatar`} 
          className="profile-avatar" 
        />
      </div>
      
      <div className="profile-card-body">
        <h3 className="profile-name">{name}</h3>
        <p className="profile-role">{role}</p>
        <p className="profile-bio">{bio}</p>
      </div>

      <div className="profile-card-footer">
        {socialLinks.github && (
          <a 
            href={socialLinks.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link github"
            title="GitHub Profile"
          >
            GitHub
          </a>
        )}
        {socialLinks.linkedin && (
          <a 
            href={socialLinks.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link linkedin"
            title="LinkedIn Profile"
          >
            LinkedIn
          </a>
        )}
        {socialLinks.twitter && (
          <a 
            href={socialLinks.twitter} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link twitter"
            title="Twitter Profile"
          >
            Twitter
          </a>
        )}
      </div>
    </div>
  );
}

export default ProfileCard;
