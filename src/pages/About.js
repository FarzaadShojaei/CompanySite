import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [message, setMessage] = useState('');
  const [counter, setCounter] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [teamMember, setTeamMember] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const teamMembers = [
    { name: 'John Smith', role: 'CEO', experience: '15 years' },
    { name: 'Sarah Johnson', role: 'CTO', experience: '12 years' },
    { name: 'Mike Chen', role: 'Lead Developer', experience: '8 years' },
    { name: 'Emily Davis', role: 'Product Manager', experience: '6 years' }
  ];

  const handleShowMessage = () => {
    setMessage('Welcome to our company! We are passionate about technology and innovation.');
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(0);
    setMessage('');
    setTeamMember(null);
  };

  const handleAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 2000);
  };

  const handleRandomTeamMember = () => {
    const randomIndex = Math.floor(Math.random() * teamMembers.length);
    setTeamMember(teamMembers[randomIndex]);
  };

  const handleColorChange = () => {
    const colors = ['#ffebcd', '#e6f3ff', '#f0fff0', '#fff0f5', '#f5f5dc'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
  };

  const handleAlert = () => {
    alert('This is a simple alert message!');
  };

  const handleConsoleLog = () => {
    console.log('Button clicked! Check the browser console.');
    setMessage('Check the browser console for a logged message!');
  };

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [backgroundColor]);

  return (
    <div className="about-container">
      <section className="about-hero">
        <h1 className={`about-title ${isAnimating ? 'animate' : ''}`}>
          About TechCorp
        </h1>
        <p className="about-description">
          Founded in 2015, TechCorp has been at the forefront of technological innovation, 
          providing cutting-edge solutions to businesses worldwide.
        </p>
      </section>

      <section className="interactive-section">
        <h2>Interactive Buttons Demo</h2>
        <div className="button-grid">
          <button className="btn btn-primary" onClick={handleShowMessage}>
            Show Welcome Message
          </button>
          
          <button className="btn btn-success" onClick={handleIncrement}>
            Increment Counter
          </button>
          
          <button className="btn btn-warning" onClick={handleDecrement}>
            Decrement Counter
          </button>
          
          <button className="btn btn-info" onClick={handleAnimation}>
            Trigger Animation
          </button>
          
          <button className="btn btn-secondary" onClick={handleRandomTeamMember}>
            Random Team Member
          </button>
          
          <button className="btn btn-purple" onClick={handleColorChange}>
            Change Background
          </button>
          
          <button className="btn btn-orange" onClick={handleAlert}>
            Show Alert
          </button>
          
          <button className="btn btn-teal" onClick={handleConsoleLog}>
            Log to Console
          </button>
          
          <button className="btn btn-danger" onClick={handleReset}>
            Reset All
          </button>
        </div>
      </section>

      <section className="display-section">
        <div className="counter-display">
          <h3>Counter: <span className="counter-value">{counter}</span></h3>
        </div>
        
        {message && (
          <div className="message-display">
            <p>{message}</p>
          </div>
        )}
        
        {teamMember && (
          <div className="team-member-display">
            <h3>Featured Team Member</h3>
            <p><strong>Name:</strong> {teamMember.name}</p>
            <p><strong>Role:</strong> {teamMember.role}</p>
            <p><strong>Experience:</strong> {teamMember.experience}</p>
          </div>
        )}
      </section>

      <section className="company-info">
        <h2>Our Story</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3>Mission</h3>
            <p>
              To empower businesses with innovative technology solutions that drive 
              growth and success in the digital age.
            </p>
          </div>
          <div className="info-card">
            <h3>Vision</h3>
            <p>
              To be the leading technology partner for businesses seeking 
              transformation and competitive advantage.
            </p>
          </div>
          <div className="info-card">
            <h3>Values</h3>
            <ul>
              <li>Innovation</li>
              <li>Integrity</li>
              <li>Excellence</li>
              <li>Collaboration</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
