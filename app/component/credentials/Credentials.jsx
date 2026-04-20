"use client";

import './Credentials.css';

export default function Credentials() {
  return (
    <section className="credentials-section">
      <div className="credentials-container">
        <div className="credentials-content-grid">
          <div className="credentials-left-column">
            <div className="credentials-badge-wrapper">
              <span className="credentials-badge">CERTIFIED EXCELLENCE</span>
            </div>
            
            <h2 className="credentials-title">
              Trusted Credentials That <br className="desktop-br" />
              <span className="highlight">Validate Our Expertise</span>
            </h2>
            
            <p className="credentials-subtitle">
              Our team has global certifications, guaranteeing top cybersecurity standards and excellent data protection.
            </p>

            <div className="company-cert-wrapper">
              <span className="company-cert-label">COMPANY CERTIFICATION</span>
              <div className="credentials-left-visual">
                <img src="/images/pages/left-colun.svg" alt="Company Certifications" className="credentials-svg" />
              </div>
            </div>
          </div>

          <div className="credentials-right-column">
            <div className="credentials-right-visual">
              <img src="/images/pages/right-colun.svg" alt="Global Certification Badges" className="credentials-svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
