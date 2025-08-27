import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [requestForm, setRequestForm] = useState({
    service: '',
    name: '',
    email: '',
    details: ''
  });
  const [requestResult, setRequestResult] = useState('');

  const services = [
    {
      id: 1,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud',
      features: ['24/7 Support', 'Zero Downtime', 'Cost Optimization', 'Security Assessment'],
      price: 'Starting at $5,000'
    },
    {
      id: 2,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your needs',
      features: ['Full-Stack Development', 'Mobile Apps', 'API Integration', 'Maintenance'],
      price: 'Starting at $10,000'
    },
    {
      id: 3,
      title: 'Cybersecurity',
      description: 'Protect your business from digital threats',
      features: ['Threat Assessment', 'Security Audits', 'Training', '24/7 Monitoring'],
      price: 'Starting at $3,000'
    },
    {
      id: 4,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights',
      features: ['Data Visualization', 'Predictive Analytics', 'Real-time Dashboards', 'Reporting'],
      price: 'Starting at $7,500'
    }
  ];

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setRequestForm(prev => ({
      ...prev,
      service: service.title
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRequestForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    
    if (!requestForm.name || !requestForm.email || !requestForm.service) {
      setRequestResult('Error: Please fill in all required fields');
      return;
    }

    setTimeout(() => {
      setRequestResult(`Success! Thank you ${requestForm.name}. We'll contact you soon about ${requestForm.service} services.`);
      setRequestForm({
        service: '',
        name: '',
        email: '',
        details: ''
      });
      setSelectedService(null);
    }, 1000);
  };

  return (
    <div className="services-container">
      <section className="services-hero">
        <h1 className="services-title">Our Services</h1>
        <p className="services-description">
          Comprehensive technology solutions to drive your business forward
        </p>
      </section>

      <section className="services-grid-section">
        <div className="services-grid">
          {services.map(service => (
            <div 
              key={service.id} 
              className={`service-card ${selectedService?.id === service.id ? 'selected' : ''}`}
              onClick={() => handleServiceSelect(service)}
            >
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className="service-price">{service.price}</div>
              <button className="service-btn">
                Select Service
              </button>
            </div>
          ))}
        </div>
      </section>

      {selectedService && (
        <section className="service-request-section">
          <h2>Request Information for {selectedService.title}</h2>
          <form onSubmit={handleRequestSubmit} className="request-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="service">Selected Service</label>
                <input
                  type="text"
                  id="service"
                  name="service"
                  value={requestForm.service}
                  readOnly
                  className="readonly-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="req-name">Name *</label>
                <input
                  type="text"
                  id="req-name"
                  name="name"
                  value={requestForm.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your name"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="req-email">Email *</label>
              <input
                type="email"
                id="req-email"
                name="email"
                value={requestForm.email}
                onChange={handleInputChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="details">Additional Details</label>
              <textarea
                id="details"
                name="details"
                value={requestForm.details}
                onChange={handleInputChange}
                rows="4"
                placeholder="Tell us more about your requirements..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Request Information
            </button>
          </form>

          {requestResult && (
            <div className={`form-result ${requestResult.includes('Error') ? 'error' : 'success'}`}>
              {requestResult}
            </div>
          )}
        </section>
      )}

      <section className="why-choose-us">
        <h2>Why Choose Our Services?</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">🎯</div>
            <h3>Tailored Solutions</h3>
            <p>Every solution is customized to meet your specific business needs and goals.</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">⚡</div>
            <h3>Fast Implementation</h3>
            <p>Quick deployment with minimal disruption to your current operations.</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">🛡️</div>
            <h3>Enterprise Security</h3>
            <p>Bank-level security measures to protect your data and operations.</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">📈</div>
            <h3>Scalable Growth</h3>
            <p>Solutions that grow with your business and adapt to changing needs.</p>
          </div>
        </div>
      </section>

      <section className="process-section">
        <h2>Our Process</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Discovery</h3>
            <p>We analyze your current setup and understand your goals</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Planning</h3>
            <p>We create a detailed plan tailored to your requirements</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Implementation</h3>
            <p>We execute the plan with minimal disruption to your business</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Support</h3>
            <p>We provide ongoing support and optimization</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
