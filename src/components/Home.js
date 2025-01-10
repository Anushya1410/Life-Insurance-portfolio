import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="home" className="home" style={{ backgroundImage: `url('/images/w.jpg')` }}>
      <div className="content">
        <h1>Welcome to Life Insurance</h1>
        <p>Your trusted LIC Insurance agent for all your financial needs.</p>
      </div>
    </section>
  );
}

export default Home;
