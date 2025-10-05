import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      image: "https://via.placeholder.com/400x300/667eea/ffffff?text=E-Commerce",
      description: "A modern e-commerce platform built with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "mobile",
      image: "https://via.placeholder.com/400x300/764ba2/ffffff?text=Banking+App",
      description: "Secure mobile banking application with biometric authentication",
      technologies: ["React Native", "Firebase", "Biometric Auth"],
      link: "#"
    },
    {
      id: 3,
      title: "Data Analytics Dashboard",
      category: "web",
      image: "https://via.placeholder.com/400x300/f093fb/ffffff?text=Analytics",
      description: "Real-time data visualization dashboard for business intelligence",
      technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
      link: "#"
    },
    {
      id: 4,
      title: "IoT Smart Home System",
      category: "iot",
      image: "https://via.placeholder.com/400x300/4facfe/ffffff?text=Smart+Home",
      description: "Complete IoT solution for smart home automation",
      technologies: ["Arduino", "Raspberry Pi", "MQTT", "React"],
      link: "#"
    },
    {
      id: 5,
      title: "AI Chatbot Platform",
      category: "ai",
      image: "https://via.placeholder.com/400x300/00f2fe/ffffff?text=AI+Chatbot",
      description: "Intelligent chatbot platform with natural language processing",
      technologies: ["Python", "TensorFlow", "OpenAI API", "FastAPI"],
      link: "#"
    },
    {
      id: 6,
      title: "Blockchain Voting System",
      category: "blockchain",
      image: "https://via.placeholder.com/400x300/ff6b6b/ffffff?text=Blockchain",
      description: "Secure and transparent voting system using blockchain technology",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
      link: "#"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'iot', name: 'IoT Solutions' },
    { id: 'blockchain', name: 'Blockchain' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="portfolio-container">
      <div className="portfolio-hero">
        <h1 className="portfolio-title">Our Portfolio</h1>
        <p className="portfolio-description">
          Explore our diverse range of projects and see how we bring innovative ideas to life.
        </p>
      </div>

      <div className="portfolio-content">
        <div className="filter-section">
          <h2>Filter by Category</h2>
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button className="view-project-btn">View Project</button>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
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
          <a href="/blog" className="nav-btn">📝 Blog</a>
          <a href="/team" className="nav-btn">👨‍💼 Team</a>
          <a href="/contact" className="nav-btn">📞 Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
