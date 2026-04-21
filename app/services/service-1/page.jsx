"use client";
import './service-1.css';

export default function ServiceOnePage() {
  const capabilityCards = [
    {
      id: "network",
      title: "Network Security",
      desc: "Deploy industry-leading firewalls, segmentation, and intrusion prevention solutions to secure your infrastructure from unauthorized access and advanced threats.",
      icon: "/images/pages/services/service-1/shield-icon.svg",
      large: true
    },
    {
      id: "email",
      title: "Email Security",
      desc: "Protect your communication using AI-powered tools. Tearing apart threat vectors such as spam, phishing, spoofing, and DDoS attacks.",
      icon: "/images/pages/services/service-1/icon-1.svg"
    },
    {
      id: "endpoint",
      title: "Endpoint Security",
      desc: "Leverage next-gen protection and EDR tools from top vendors to defend endpoints against malware, ransomware, and exploits in real-time.",
      icon: "/images/pages/services/service-1/icon-2.svg"
    },
    {
      id: "cloud",
      title: "Cloud Security",
      desc: "Integrate best-in-class CASB and CSPM tools to continuously monitor cloud environments, enforce policies, and eliminate misconfigurations.",
      icon: "/images/pages/services/service-1/icon-3.svg"
    },
    {
      id: "application",
      title: "Application Security",
      desc: "Implement trusted solutions for code analysis, runtime protection, and DevSecOps integration to secure applications from development to deployment.",
      icon: "/images/pages/services/service-1/icon-4.svg"
    },
    {
      id: "data",
      title: "Data Security",
      desc: "Apply enterprise-grade encryption, DLP, and access control solutions to prevent data leakage and ensure compliance with regulatory requirements.",
      icon: "/images/pages/services/service-1/icon-5.svg"
    },
    {
      id: "iam",
      title: "Identity & Access Management (IAM)",
      desc: "Strengthen security by utilizing vendor-validated MFA, SSO, and identity governance solutions based on Zero Trust.",
      icon: "/images/pages/services/service-1/icon-6.svg"
    },
    {
      id: "siem",
      title: "SIEM Solutions",
      desc: "Establish real-time visibility and accelerated incident response through top-tier SIEM platforms that centralize logs and security insights.",
      icon: "/images/pages/services/service-1/icon-7.svg"
    }
  ];

  return (
    <div className="service-page-container">
      {/* Hero Section */}
      <section className="service-hero-section">
        <div className="service-hero-background-effects">
          <div className="service-light-beam service-lb-1"></div>
          <div className="service-light-beam service-lb-2"></div>
          <div className="service-light-beam service-lb-3"></div>
          <div className="service-spotlight"></div>
        </div>

        <div className="service-hero-content">
          <div className="service-badge-wrapper">
            <span className="service-badge-pill">SERVICES</span>
          </div>

          <h1 className="service-hero-title">
            CyberShield Solutions
          </h1>

          <p className="service-hero-desc">
            At Cybervol, we partner with leading cybersecurity vendors to deliver robust, integrated solutions that protect your digital assets, ensure compliance, and build digital trust — all while adapting to an ever-evolving threat landscape.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="capabilities-section">
        <div className="capabilities-container">
          <div className="capabilities-header">
            <h2 className="capabilities-title">
              Our <span className="blue-text-capabilities">Capabilities</span>
            </h2>
            <p className="capabilities-header-desc">
              At Cybervol, our goal is simple: to fortify your business with elite security. We help plan asset protection, proactive protection, and ensure leaders navigate the digital landscape with confidence.
            </p>
          </div>

          <div className="capabilities-grid">
            {capabilityCards.map((card) => (
              <article
                key={card.id}
                className={`capability-card ${card.large ? "capability-card-large" : ""}`}
              >
                <div className="capability-content">
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>

                <div className={`capability-icon-wrapper ${card.large ? "large-icon-wrapper" : ""}`}>
                  <img
                    src={card.icon}
                    alt={card.title}
                    className={card.large ? "capability-shield-icon" : "capability-corner-icon"}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
