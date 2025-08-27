import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          TechCorp
        </Link>
        <div className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
          <Link to="/" className="nav-link" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" className="nav-link" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/products" className="nav-link" onClick={toggleMenu}>
            Products
          </Link>
          <Link to="/services" className="nav-link" onClick={toggleMenu}>
            Services
          </Link>
          <Link to="/contact" className="nav-link" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
