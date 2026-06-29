import React from 'react'
import ProfileCard from './components/ProfileCard'

import sarahAvatar from './assets/avatar_sarah.png'
import alexAvatar from './assets/avatar_alex.png'

import './App.css'

function App() {
  const profiles = [
    {
      name: "Sarah Jenkins",
      role: "Frontend Developer",
      bio: "Passionate React developer who loves crafting accessible, interactive, and beautiful user interfaces.",
      image: sarahAvatar,
      socialLinks: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      }
    },
    {
      name: "Alex Chen",
      role: "Full Stack Engineer",
      bio: "Problem solver specializing in React, Node.js, and SQL database design. Loves open source projects.",
      image: alexAvatar,
      socialLinks: {
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Maya Rodriguez",
      role: "UI/UX Developer",
      bio: "Bridging the gap between creative design and code. Enjoys typography, animations, and photography.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
      socialLinks: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      }
    }
  ];

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Team Profile Gallery</h1>
        <p className="app-subtitle">
          Built with React components and dynamic props. Hover over cards for details!
        </p>
      </header>

      <main className="profiles-grid">
        {profiles.map((profile, index) => {
          return (
            <ProfileCard
              key={index}
              name={profile.name}
              role={profile.role}
              bio={profile.bio}
              image={profile.image}
              socialLinks={profile.socialLinks}
            />
          );
        })}
      </main>
    </div>
  )
}

export default App
