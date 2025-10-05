import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Smith",
      position: "CEO & Founder",
      image: "https://via.placeholder.com/200x200/667eea/ffffff?text=JS",
      bio: "Visionary leader with 15+ years in tech industry",
      skills: ["Leadership", "Strategy", "Innovation"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "john@techcorp.com"
      }
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "CTO",
      image: "https://via.placeholder.com/200x200/764ba2/ffffff?text=SJ",
      bio: "Technical architect passionate about scalable solutions",
      skills: ["Architecture", "Cloud", "DevOps"],
      social: {
        linkedin: "#",
        github: "#",
        email: "sarah@techcorp.com"
      }
    },
    {
      id: 3,
      name: "Mike Chen",
      position: "Lead Developer",
      image: "https://via.placeholder.com/200x200/f093fb/ffffff?text=MC",
      bio: "Full-stack developer specializing in modern web technologies",
      skills: ["React", "Node.js", "Python"],
      social: {
        linkedin: "#",
        github: "#",
        email: "mike@techcorp.com"
      }
    },
    {
      id: 4,
      name: "Emily Davis",
      position: "UI/UX Designer",
      image: "https://via.placeholder.com/200x200/4facfe/ffffff?text=ED",
      bio: "Creative designer focused on user-centered design",
      skills: ["UI Design", "UX Research", "Prototyping"],
      social: {
        linkedin: "#",
        dribbble: "#",
        email: "emily@techcorp.com"
      }
    },
    {
      id: 5,
      name: "David Wilson",
      position: "DevOps Engineer",
      image: "https://via.placeholder.com/200x200/00f2fe/ffffff?text=DW",
      bio: "Infrastructure specialist ensuring reliable deployments",
      skills: ["AWS", "Docker", "Kubernetes"],
      social: {
        linkedin: "#",
        github: "#",
        email: "david@techcorp.com"
      }
    },
    {
      id: 6,
      name: "Lisa Rodriguez",
      position: "Project Manager",
      image: "https://via.placeholder.com/200x200/ff6b6b/ffffff?text=LR",
      bio: "Agile project manager ensuring timely delivery",
      skills: ["Agile", "Scrum", "Communication"],
      social: {
        linkedin: "#",
        email: "lisa@techcorp.com"
      }
    }
  ];

  return (
    <div className="team-container">
      <div className="team-hero">
        <h1 className="team-title">Meet Our Team</h1>
        <p className="team-description">
          Our diverse team of experts is passionate about delivering innovative solutions and exceptional results.
        </p>
      </div>

      <div className="team-content">
        <div className="team-grid">
          {teamMembers.map(member => (
            <div key={member.id} className="team-member">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
                <div className="member-overlay">
                  <div className="social-links">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="social-link">LinkedIn</a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="social-link">GitHub</a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="social-link">Twitter</a>
                    )}
                    {member.social.dribbble && (
                      <a href={member.social.dribbble} className="social-link">Dribbble</a>
                    )}
                  </div>
                </div>
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-position">{member.position}</p>
                <p className="member-bio">{member.bio}</p>
                <div className="member-skills">
                  {member.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
                <a href={`mailto:${member.social.email}`} className="contact-btn">
                  Contact
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="quick-navigation">
        <h2>Quick Navigation</h2>
        <div className="nav-buttons">
          <a href="/" className="nav-btn">🏠 Home</a>
          <a href="/about" className="nav-btn">👥 About</a>
          <a href="/services" className="nav-btn">🛠️ Services</a>
          <a href="/portfolio" className="nav-btn">💼 Portfolio</a>
          <a href="/blog" className="nav-btn">📝 Blog</a>
          <a href="/contact" className="nav-btn">📞 Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Team;
