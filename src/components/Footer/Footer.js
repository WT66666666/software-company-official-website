import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>TechSoft</h3>
          <p>Innovative Solutions for Tomorrow's Challenges</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: contact@techsoft.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
        <div className="footer-section">
          <h4>Address</h4>
          <p>123 Tech Street</p>
          <p>Silicon Valley, CA 94025</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 TechSoft. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
