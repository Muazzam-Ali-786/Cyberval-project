"use client";

import './industries.css';

export default function Industries() {
  const industryCards = [
    {
      id: 1,
      title: "Financial Services & FinTech",
      desc: "Risk-led security, fraud resilience, and compliance support for banks, insurers, asset managers, and payment innovators.",
      image: "/images/pages/industry/card-image-1.svg",
      icon: "/images/pages/industry/card-icon-1.svg"
    },
    {
      id: 2,
      title: "Healthcare, Pharma & Life Sciences",
      desc: "Protecting patient data, clinical systems, and R&D pipelines while meeting HIPAA, privacy, and sector-specific expectations.",
      image: "/images/pages/industry/card-image-2.svg",
      icon: "/images/pages/industry/card-icon-2.svg"
    },
    {
      id: 3,
      title: "Technology, Media & Telecom",
      desc: "Securing product stacks, cloud estates, and customer platforms for fast-moving digital and SaaS organizations.",
      image: "/images/pages/industry/card-image-3.svg",
      icon: "/images/pages/industry/card-icon-3.svg"
    },
    {
      id: 4,
      title: "Energy, Utilities & Critical Infrastructure",
      desc: "Operational technology awareness and controls ensuring reliability in regulated environments.",
      image: "/images/pages/industry/card-image-1.svg", // Placeholder
      icon: "/images/pages/industry/card-icon-1.svg" // Placeholder
    },
    {
      id: 5,
      title: "Retail, Logistics & E-commerce",
      desc: "Safeguarding transactions, supply chains, and customer trust across stores, warehouses, and digital storefronts.",
      image: "/images/pages/industry/card-image-2.svg", // Placeholder
      icon: "/images/pages/industry/card-icon-2.svg" // Placeholder
    },
    {
      id: 6,
      title: "Professional & Enterprise Services",
      desc: "Governance, identity, and data protection for legal, consulting, and multi-site enterprises with distributed workforces.",
      image: "/images/pages/industry/card-image-3.svg", // Placeholder
      icon: "/images/pages/industry/card-icon-3.svg" // Placeholder
    }
  ];

  return (
    <section className="industries-section">
      <div className="industries-container">
        <div className="industries-header">
          <div className="industries-header-left">
            <span className="industries-badge">INDUSTRIES</span>
            <h2 className="industries-title">Industries we serve</h2>
          </div>
          <div className="industries-header-right">
            <p className="industries-description">
              From regulated sectors to high-growth digital businesses, we tailor cybersecurity and GRC programs to how your industry operates, competes, and earns trust.
            </p>
          </div>
        </div>

        <div className="industries-cards-row">
          {industryCards.map((card) => (
            <div key={card.id} className="industry-card">
              <div className="industry-card-image-area">
                <div className="industry-image-wrapper">
                  <img src={card.image} alt={card.title} className="industry-main-image" />
                </div>
                
                {card.icon && (
                  <div className="industry-icon-box">
                    <img src={card.icon} alt="Icon" className="industry-card-icon" />
                  </div>
                )}
              </div>
              <div className="industry-card-content">
                <h3 className="industry-card-title">{card.title}</h3>
                <p className="industry-card-desc">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="industries-dots">
          <div className="slider-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
