import './about.css'

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-container">
          <div className="about-hero-left">
            <span className="about-badge">ABOUT US</span>
            
            {/* Using exact SVG from Figma */}
            <div className="radar-wrapper">
              <img 
                src="/images/radar-graphic.svg" 
                alt="Security Radar" 
                className="radar-image"
              />
            </div>
          </div>
          
          <div className="about-hero-right">
            <h1 className="hero-title">
              Protecting What Matters,
              <br />
              <span className="hero-title-italic">Advancing What&apos;s Next.</span>
            </h1>
            
            <p className="hero-description">
              At CyberVeil, we don&apos;t just secure, we innovate. Our unique approach blends 
              cutting-edge cybersecurity solutions with a forward-thinking mindset. Trust us 
              to safeguard your digital assets while propelling your technological resilience.
            </p>
            
            <div className="mission-block">
              <h2 className="mission-heading">Our Mission</h2>
              <h3 className="mission-subheading">Fortifying Excellence through Advanced Cybersecurity Solutions</h3>
              <p className="mission-description">
                At the core of our mission is a dedication to empowering organizations with 
                transformative solutions, enhancing performance, optimizing operations, and 
                fortifying the security of their digital assets.
              </p>
            </div>
            
            <button className="btn-read-more">Read More</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Commitment Section */}
      <section className="commitment-section">
        <span className="commitment-label">OUR COMMITMENT</span>
        <h2 className="commitment-heading">
          Built on Trust. Driven by <span className="underline-text">Security.</span>
        </h2>
        <p className="commitment-subtext">
          Delivering secure, innovative, and trusted cybersecurity solutions you can rely on.
        </p>
        
        {/* Using exact SVG from Figma for commitment cards */}
        <div className="cards-svg-wrapper">
          <img 
            src="/images/commitment-cards.svg" 
            alt="Our Commitment Features" 
            className="cards-image"
          />
        </div>
      </section>
    </div>
  )
}
