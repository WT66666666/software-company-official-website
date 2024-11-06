import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import './Products.css';
// Import images
import cloudImage from '../../assets/images/Cloud.png';
import securityImage from '../../assets/images/CyberSecurity.png';
import mobileImage from '../../assets/images/MobileDeveloping.png';

const Products = () => {
  const carouselSlides = [
    {
      image: cloudImage,
      title: 'Cloud Computing Solutions',
      description: 'Scalable and secure cloud infrastructure for modern businesses.'
    },
    {
      image: securityImage,
      title: 'Cybersecurity Platform',
      description: 'Advanced security measures to protect your digital assets.'
    },
    {
      image: mobileImage,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications for your business needs.'
    }
  ];

  const products = [
    {
      title: 'Cloud Solutions',
      description: 'Enterprise-grade cloud computing solutions with maximum scalability and security.',
      features: ['Scalable Infrastructure', '24/7 Support', 'Data Backup', 'Global CDN'],
      category: 'Enterprise'
    },
    {
      title: 'Cybersecurity Suite',
      description: 'Complete security solution for protecting your business from cyber threats.',
      features: ['Threat Detection', 'Real-time Monitoring', 'Incident Response', 'Security Audits'],
      category: 'Security'
    },
    {
      title: 'Mobile Development',
      description: 'Custom mobile applications for iOS and Android platforms.',
      features: ['Cross-platform Development', 'UI/UX Design', 'API Integration', 'Analytics'],
      category: 'Development'
    }
  ];

  return (
    <div className="products-page">
      <section className="products-hero">
        <h1>Our Products</h1>
        <p>Innovative solutions for modern businesses</p>
      </section>

      <Carousel slides={carouselSlides} />

      <section className="products-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="product-category">{product.category}</div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <div className="product-features">
              <h3>Key Features</h3>
              <ul>
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
            <button className="product-cta">Learn More</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Products;