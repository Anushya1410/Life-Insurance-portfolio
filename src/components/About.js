import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Life Insurance is a dedicated LIC agency with over 10 years of experience in helping individuals and families secure their financial future. We specialize in providing customized insurance plans tailored to diverse needs, including life insurance, retirement solutions, and child education plans.
        </p>
        <p>
          Our mission is to ensure every client achieves financial security by selecting the right plan at the right time. With a customer-first approach, we prioritize trust, transparency, and commitment in every policy we deliver.
        </p>
      </div>
      <div className="about-image-container">
        <img src="/images/appa.png" alt="Sendurpandi" className="about-image" />
        <p className="agent-name">Sendurpandi - Insurance Agent</p>
      </div>
    </section>
  );
}

export default About;
