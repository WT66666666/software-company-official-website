import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to TechSoft</h1>
        <p>Innovative Solutions for Tomorrow's Challenges</p>
        <button className="cta-button">Learn More</button>
      </section>

      <section className="features">
        <h2>Our Solutions</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Cloud Solutions</h3>
            <p>
              Scalable and secure cloud infrastructure for your business needs.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Cybersecurity</h3>
            <p>Advanced security solutions to protect your valuable data.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Mobile Development</h3>
            <p>Custom mobile applications for iOS and Android platforms.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>
              "TechSoft transformed our business with their innovative
              solutions."
            </p>
            <div className="testimonial-author">
              - John Smith, CEO of Tech Corp
            </div>
          </div>
          <div className="testimonial-card">
            <p>"Outstanding service and exceptional technical expertise."</p>
            <div className="testimonial-author">
              - Sarah Johnson, CTO of Innovation Inc
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-grid">
          <div className="stat-item">
            <h3>500+</h3>
            <p>Clients Worldwide</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Countries Served</p>
          </div>
          <div className="stat-item">
            <h3>98%</h3>
            <p>Customer Satisfaction</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
