// Services.js
import React from 'react';
import './Services.css';

function Services() {
  const services = [
    { title: "Life Insurance Policies", description: "Secure your family’s future with our tailored life insurance plans." },
    { title: "Health Insurance", description: "Comprehensive health insurance to cover medical expenses and emergencies." },
    { title: "Retirement Plans", description: "Plan for a financially secure retirement with our expert guidance." },
    { title: "Child Education Plans", description: "Ensure your child’s education is never compromised with our special plans." },
  ];

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;