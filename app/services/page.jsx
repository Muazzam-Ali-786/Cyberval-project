"use client";

import { useRef, useState } from 'react';
import './services.css';

export default function ServicesPage() {
  const scrollRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  const serviceCards = [
    {
      id: 1,
      title: "CyberShield Solutions",
      desc: "Building Secure & Resilient IT Infrastructures",
      image: "image-1.svg"
    },
    {
      id: 2,
      title: "Governance, Risk & Compliance (GRC)",
      desc: "Aligning Cybersecurity with Business Risk and Regulatory Assurance",
      image: "image-2.svg"
    },
    {
      id: 3,
      title: "Offensive Security",
      desc: "Proactive Threat Simulation & Risk Mitigation",
      image: "image-3.svg"
    },
    {
      id: 4,
      title: "Awareness & Training",
      desc: "Empower Your People, Strengthen Your First Defense",
      image: "image-4.svg"
    },
    {
      id: 5,
      title: "Training & Certifications",
      desc: "Cybersecurity, Ai & Digital Transformation, Resilience, GRC, and Privacy",
      image: "image-5.svg"
    },
    {
      id: 6,
      title: "Managed Cybersecurity as a Service (MCaaS)",
      desc: "Your Unyielding Cybersecurity Ally in the Digital Realm",
      image: "image-6.svg"
    }
  ];

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    
    if (scrollWidth <= clientWidth) return;
    
    const maxScroll = scrollWidth - clientWidth;
    const progress = scrollLeft / maxScroll;
    
    const currentDot = Math.round(progress * 2);
    setActiveDot(currentDot);
  };

  const scrollToDot = (index) => {
    if (!scrollRef.current) return;
    const { scrollWidth, clientWidth } = scrollRef.current;
    
    const maxScroll = scrollWidth - clientWidth;
    const scrollTarget = (maxScroll / 2) * index;
    
    scrollRef.current.scrollTo({
      left: scrollTarget,
      behavior: 'smooth'
    });
    setActiveDot(index);
  };

  return (
    <div className="services-page-wrapper">
      <section className="services-section">
        <div className="services-container">
          <div className="services-header">
            <div className="services-header-left">
              <span className="services-badge">OUR SERVICES</span>
              <h2 className="services-title">
                Our Commitment to<br/>
                <span className="blue-text">Security and Trust</span>
              </h2>
            </div>
            
            <div className="services-header-right">
              <p className="services-description">
                Comprehensive digital solutions designed to transform your business and accelerate growth through innovative technology.
              </p>
            </div>
          </div>

          <div className="services-cards-wrapper">
            <div 
              className="services-cards" 
              ref={scrollRef}
              onScroll={handleScroll}
            >
              
              {serviceCards.map((card) => (
                <div className="service-card" key={card.id}>
                  <div 
                    className="card-hover-bg" 
                    style={{ backgroundImage: `url('/images/pages/${card.image}')` }}
                  ></div>
                  
                  <a href="#" className="svg-btn-click-area" aria-label={`Read more about ${card.title}`}></a>
                  
                  <div className="card-content">
                    <h3 className="card-title">{card.title}</h3>
                    <div className="card-line"></div>
                    <p className="card-text">{card.desc}</p>
                    
                    <button className="card-btn" aria-label={`Learn more about ${card.title}`}>
                      <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}

            </div>
            
            <div className="slider-dots">
              {[0, 1, 2].map((index) => (
                <span 
                  key={index} 
                  className={`dot ${activeDot === index ? 'active' : ''}`}
                  onClick={() => scrollToDot(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
