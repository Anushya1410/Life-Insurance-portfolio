// Testimonials.js
import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    { name: "Maria", feedback: "Sendurpandi helped me choose the perfect policy for my family. Highly recommend!" },
    { name: "Arun", feedback: "Reliable and trustworthy agent. Excellent service!" },
    { name: "Vijaya", feedback: "Superb guidance and friendly support throughout the process." },
  ];

  return (
    <section id="testimonials" className="testimonials" style={{ backgroundImage: `url('/images/q.jpg')` }}>
      <h2>Testimonials</h2>
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p>"{testimonial.feedback}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;