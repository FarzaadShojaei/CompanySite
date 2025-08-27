import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [clickCount, setClickCount] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState('default');

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };

  const changeTheme = (theme) => {
    setSelectedTheme(theme);
    document.body.className = `theme-${theme}`;
  };

  return (
    <div className={`home-container theme-${selectedTheme}`}>
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title gradient-text">
            Welcome to TechCorp
          </h1>
          <p className="hero-subtitle fancy-text">
            Innovative Solutions for Modern Businesses
          </p>
          <p className="hero-description styled-paragraph">
            We provide cutting-edge technology solutions that drive growth, 
            enhance efficiency, and transform your business operations.
          </p>
          
          <div className="button-group">
            <button 
              className="primary-btn interactive-button"
              onClick={handleButtonClick}
            >
              Click Me! ({clickCount})
            </button>
            <button className="secondary-btn hover-effect">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title underlined-text">Our Key Features</h2>
        <div className="features-grid">
          <div className="feature-card card-hover">
            <h3 className="feature-title highlighted-text">Innovation</h3>
            <p className="feature-description">
              Cutting-edge solutions that push the boundaries of technology
            </p>
          </div>
          <div className="feature-card card-hover">
            <h3 className="feature-title highlighted-text">Reliability</h3>
            <p className="feature-description">
              Dependable systems you can trust for your critical operations
            </p>
          </div>
          <div className="feature-card card-hover">
            <h3 className="feature-title highlighted-text">Support</h3>
            <p className="feature-description">
              24/7 expert support to keep your business running smoothly
            </p>
          </div>
        </div>
      </section>

      <section className="theme-section">
        <h2 className="section-title">Choose Your Theme</h2>
        <div className="theme-buttons">
          <button 
            className={`theme-btn ${selectedTheme === 'default' ? 'active' : ''}`}
            onClick={() => changeTheme('default')}
          >
            Default
          </button>
          <button 
            className={`theme-btn ${selectedTheme === 'dark' ? 'active' : ''}`}
            onClick={() => changeTheme('dark')}
          >
            Dark
          </button>
          <button 
            className={`theme-btn ${selectedTheme === 'blue' ? 'active' : ''}`}
            onClick={() => changeTheme('blue')}
          >
            Blue
          </button>
        </div>
      </section>

      <section className="text-showcase">
        <h2 className="showcase-title animated-text">CSS Text Styling Showcase</h2>
        <div className="text-examples">
          <p className="shadow-text">Text with Shadow Effect</p>
          <p className="outline-text">Outlined Text Style</p>
          <p className="neon-text">Neon Glow Effect</p>
          <p className="typewriter-text">Typewriter Animation</p>
          <div className="rotating-text">
            <span>Rotating</span>
            <span>Text</span>
            <span>Effect</span>
          </div>
        </div>
      </section>

      <section className="css-selectors-showcase">
        <h2 className="section-title">CSS Selectors Demonstration</h2>
        
        <div className="selectors-container">
          {/* Class Selectors */}
          <div className="selector-group">
            <h3>Class Selectors</h3>
            <button className="btn-class-demo">Class Selector (.btn-class-demo)</button>
            <p className="text-class-demo">Text with class selector</p>
            <div className="multiple-classes highlight important">Multiple classes</div>
          </div>

          {/* ID Selectors */}
          <div className="selector-group">
            <h3>ID Selectors</h3>
            <button id="unique-button">ID Selector (#unique-button)</button>
            <p id="unique-text">Text with ID selector</p>
          </div>

          {/* Attribute Selectors */}
          <div className="selector-group">
            <h3>Attribute Selectors</h3>
            <button data-role="primary" data-size="large">Data Attribute Button</button>
            <input type="text" placeholder="Input[type='text']" />
            <input type="email" placeholder="Input[type='email']" />
            <button disabled>Disabled Button</button>
          </div>

          {/* Pseudo Classes */}
          <div className="selector-group">
            <h3>Pseudo Classes</h3>
            <button className="hover-demo">Hover Effect</button>
            <button className="active-demo">Active Effect (click)</button>
            <div className="pseudo-child-demo">
              <p>First Child</p>
              <p>Second Child</p>
              <p>Third Child</p>
              <p>Last Child</p>
            </div>
          </div>

          {/* Pseudo Elements */}
          <div className="selector-group">
            <h3>Pseudo Elements</h3>
            <p className="before-after-demo">Text with ::before and ::after</p>
            <p className="first-letter-demo">First letter styled differently</p>
            <p className="first-line-demo">First line of this paragraph is styled differently from the rest of the content that follows.</p>
          </div>

          {/* Descendant and Child Selectors */}
          <div className="selector-group">
            <h3>Descendant & Child Selectors</h3>
            <div className="parent-container">
              <p>Direct child paragraph</p>
              <div>
                <p>Nested descendant paragraph</p>
                <span>Nested span element</span>
              </div>
              <button className="child-button">Child button</button>
            </div>
          </div>

          {/* Adjacent and General Sibling Selectors */}
          <div className="selector-group">
            <h3>Sibling Selectors</h3>
            <div className="sibling-demo">
              <h4>Header</h4>
              <p>Adjacent sibling paragraph</p>
              <p>General sibling paragraph</p>
              <span>Sibling span element</span>
              <p>Another general sibling</p>
            </div>
          </div>

          {/* Combinators */}
          <div className="selector-group">
            <h3>Complex Selectors</h3>
            <div className="combinator-demo">
              <article className="post featured">
                <h4>Featured Post Title</h4>
                <p className="meta">Posted on <time>2024-01-15</time></p>
                <p>This is a featured post with special styling.</p>
              </article>
              <article className="post">
                <h4>Regular Post Title</h4>
                <p className="meta">Posted on <time>2024-01-10</time></p>
                <p>This is a regular post.</p>
              </article>
            </div>
          </div>

          {/* Universal and Group Selectors */}
          <div className="selector-group">
            <h3>Universal & Group Selectors</h3>
            <div className="universal-demo">
              <h5>Universal selector affects all elements</h5>
              <p>Group selectors apply same styles</p>
              <span>to multiple element types</span>
              <div>like this div element</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
