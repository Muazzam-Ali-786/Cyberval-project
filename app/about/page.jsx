"use client";
import './about-page.css';
import '../component/about/about.css'; // Original styles for stats/commitment
import Link from 'next/link';

export default function About() {
  return (
    <div className="about-page-container">
      {/* Hero Section of About Page (Custom Dark Style from Screenshot) */}
      <section className="about-hero-section">
        <div className="hero-background-effects">
          <div className="light-beam lb-1"></div>
          <div className="light-beam lb-2"></div>
          <div className="light-beam lb-3"></div>
          <div className="spotlight"></div>
        </div>
        
        <div className="about-hero-content">
          <div className="about-badge-wrapper">
             <span className="about-badge-pill">ABOUT US</span>
          </div>
          
          <h1 className="about-hero-title">
            Reliable Cybersecurity, Exceptional Service
          </h1>
          
          <p className="about-hero-desc">
            We partner with organizations to design, implement, and sustain 
            security programs that are practical, measurable, and resilient.
          </p>
        </div>
      </section>

      {/* Stats Section (Restored from original component) */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-box">
            <div className="stat-value">10<span className="stat-plus">+</span> <span className="stat-unit">Years</span></div>
            <div className="stat-label">Professional Experience</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <div className="stat-value">25<span className="stat-plus">+</span></div>
            <div className="stat-label">Enterprise Clients</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <div className="stat-value">99.9<span className="stat-plus">%</span></div>
            <div className="stat-label">Threat Detection Accuracy</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <div className="stat-value">24/7</div>
            <div className="stat-label">Security Monitoring</div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="journey-section">
        <div className="journey-container">
          <h2 className="journey-title">
            Our <span className="blue-text-journey">Journey</span>
          </h2>
          
          <div className="journey-content">
            <p>
              Cybervol was founded on a simple idea: modern businesses need security partners 
              who understand both technology and strategy. We bridge that gap—helping teams 
              protect what matters without slowing innovation.
            </p>
            <p>
              From advisory to implementation, we focus on clarity, speed, and measurable impact—
              so boards, executives, and technical teams can move forward with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="mission-section">
        <div className="mission-container">
          <div className="mission-left">
            <div className="radar-graphic-wrapper">
              <img 
                src="/images/radar-graphic.svg" 
                alt="Security Radar" 
                className="radar-graphic"
              />
            </div>
          </div>
          
          <div className="mission-right">
            <div className="mission-badge-wrapper">
              <span className="mission-badge">OUR MISSION</span>
            </div>
            
            <h2 className="mission-heading">
              Safeguarding Your Business with Advanced <span className="blue-text-mission">Cyber Solutions</span>
            </h2>
            
            <h3 className="mission-subheading">
              Fortifying Excellence through Advanced Cybersecurity Solutions
            </h3>
            
            <p className="mission-description">
              At the crux of our mission is a dedication to empowering organizations with 
              transformative solutions, enhancing performance, optimizing operations, and 
              fortifying the security of their digital assets.
            </p>
          </div>
        </div>
      </section>

    
    </div>
  );
}